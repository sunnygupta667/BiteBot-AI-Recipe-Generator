const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import mongoose for MongoDB connection
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
const connectDb = require('./utils/db'); 
const recipeRoutes = require('./routes/recipe'); // Importing recipe routes
const Contact =require('./models/Contact');

connectDb();

// Use cors and bodyParser middleware
app.use(cors());
app.use(bodyParser.json());



// Recipe CRUD routes
app.use('/recipes', recipeRoutes);  // Adding recipe routes to the app

// Google Generative AI Route
app.post('/getRecipe', async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Extract information from the request body
    const { dishType, ingredients, cuisine, flavors, dietaryRestrictions } = req.body;

    // Create a structured prompt to guide Gemini for recipe generation
    const prompt = `
      **Recipe Generation Request:**

      We are looking for a recipe that meets the following criteria:

      1. **Dish Type**: ${dishType ? dishType : 'General'}
      2. **Ingredients**: ${ingredients ? ingredients : 'Any ingredients available.'}
      3. **Cuisine Preference**: ${cuisine ? cuisine : 'No specific preference.'}
      4. **Flavor Profile**: ${flavors ? flavors : 'Balanced flavors.'}
      5. **Dietary Restrictions**: ${dietaryRestrictions ? dietaryRestrictions : 'No restrictions'}

      Please provide a recipe that includes:
      - Step-by-step instructions 
      - Suggested preparation and cooking times
      - Any additional tips or variations to suit the criteria provided.

      Ensure the recipe is user-friendly and includes measurements for all ingredients.
      Give me Benefits of that recipe also in points.
      Note: Give me response in easy language explanation.    `;

    // Send the structured prompt to Gemini for recipe generation
    const result = await model.generateContent(prompt);
    const recipe = result.response.text();
    res.status(200).json({
      response: recipe,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server error' });
  }
});



// Contact Form Route
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact document
    const contact = new Contact({
      name,
      email,
      message,
    });

    
    // Save the contact document to MongoDB
    await contact.save();
    res.status(201).json({ message: 'Message received successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// 404 Handler for all other routes
app.get('*', (req, res) => {
  res.status(404).json({ msg: 'Bad Request' });
});

module.exports = app;
