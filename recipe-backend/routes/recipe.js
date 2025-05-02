const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Create a new recipe
router.post('/', async (req, res) => {
    const { name, ingredients, description, instructions, imageUrl, cookingTime } = req.body;
    if (!name || !ingredients || !description || !instructions || !imageUrl || !cookingTime) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ error: "Failed to create recipe" });
    }
});

// Get all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        if (!recipes.length) {
            return res.status(404).json({ error: "No recipes found" });
        }
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve recipes" });
    }
});

// Get a recipe by ID
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ error: "Invalid recipe ID or recipe not found" });
    }
});

// Update a recipe
router.put('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recipe) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ error: "Failed to update recipe" });
    }
});

// Delete a recipe
router.delete('/:id', async (req, res) => {
    try {
        const recipeId = req.params.id;
        const recipe = await Recipe.findByIdAndDelete(recipeId);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).send('Recipe deleted successfully');
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).send('Server error');
    }
});


module.exports = router;
