import React, { useState } from 'react';
import axios from 'axios';

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    description: "",
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/recipes", recipe);
      alert("Recipe Created");
      setRecipe({
        name: "",
        ingredients: [],
        description: "",
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="Create Recipe" className="max-w-screen-xl mx-auto p-12 mb-12 mt-12 bg-gradient-to-r from-teal-400 via-blue-600 to-indigo-700 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
      <h2 className="text-5xl font-bold text-white text-center font-sans  mb-8 tracking-wide">
        Create Your Recipe
      </h2>
      <form onSubmit={onSubmit} className="space-y-8 bg-white p-10 rounded-xl shadow-lg max-w-3xl mx-auto">
        {/* Recipe Name */}
        <div className="flex flex-col mb-6">
          <label className="text-gray-800 font-semibold mb-2" htmlFor="name">
            Recipe Name
          </label>
          <input
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md transition duration-300"
            type="text"
            name="name"
            placeholder="Enter recipe name"
            value={recipe.name}
            onChange={handleChange}
          />
        </div>

        {/* Ingredients */}
        <div className="flex flex-col mb-6">
          <label className="text-gray-800 font-semibold mb-2">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <input
              key={index}
              className="w-full p-4 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md transition duration-300"
              type="text"
              value={ingredient}
              placeholder={`Ingredient ${index + 1}`}
              onChange={(event) => handleIngredientChange(event, index)}
            />
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="text-green-600 font-semibold hover:text-green-700 transition duration-300"
          >
            + Add Ingredient
          </button>
        </div>

        {/* Mini Description */}
        <div className="flex flex-col mb-6">
          <label className="text-gray-800 font-semibold mb-2" htmlFor="description">
            Mini Description
          </label>
          <input
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md transition duration-300"
            type="text"
            name="description"
            placeholder="Enter a short description"
            value={recipe.description}
            onChange={handleChange}
          />
        </div>

        {/* Instructions */}
        <div className="flex flex-col mb-6">
          <label className="text-gray-800 font-semibold mb-2" htmlFor="instructions">
            Instructions
          </label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md transition duration-300"
            name="instructions"
            rows="4"
            placeholder="Enter instructions for your recipe"
            value={recipe.instructions}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Image URL */}
        <div className="flex flex-col mb-6">
          <label className="text-gray-800 font-semibold mb-2" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md transition duration-300"
            type="text"
            name="imageUrl"
            placeholder="Enter image URL"
            value={recipe.imageUrl}
            onChange={handleChange}
          />
        </div>

        {/* Cooking Time */}
        <div className="flex flex-col mb-6">
          <label className="text-gray-800 font-semibold mb-2" htmlFor="cookingTime">
            Cooking Time (in minutes)
          </label>
          <input
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md transition duration-300"
            type="number"
            name="cookingTime"
            placeholder="Enter cooking time"
            value={recipe.cookingTime}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:bg-green-600 transition duration-300 transform hover:scale-105"
        >
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
