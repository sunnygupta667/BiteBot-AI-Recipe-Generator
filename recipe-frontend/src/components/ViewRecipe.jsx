// src/components/ViewRecipe.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeDetails from './RecipeDetails';

const ViewRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editRecipe, setEditRecipe] = useState(null);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get("http://localhost:3000/recipes");
            setRecipes(response.data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    const deleteRecipe = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/recipes/${id}`);
            fetchRecipes();
        } catch (error) {
            console.error("Error deleting recipe:", error);
        }
    };

    const startEditing = (recipe) => {
        setIsEditing(true);
        setEditRecipe({ ...recipe });
    };

    const handleEditChange = (event) => {
        const { name, value } = event.target;
        setEditRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    };

    const saveEdit = async () => {
        try {
            await axios.put(`http://localhost:3000/recipes/${editRecipe._id}`, editRecipe);
            fetchRecipes();
            setIsEditing(false);
            setEditRecipe(null);
        } catch (error) {
            console.error("Error saving recipe:", error);
        }
    };

    const viewRecipeDetails = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <div className="w-[90%] h-full p-8 bg-gradient-to-r from-teal-400 via-blue-600 to-indigo-700 rounded-lg shadow-2xl mx-auto mt-12 mb-12" id='View Recipe'>
            <h2 className="text-5xl font-bold text-center mb-10 text-white">Explore Recipes</h2>
        
            {isEditing ? (
                <div className="mb-8 p-6 border-2 border-gray-300 rounded-lg bg-white shadow-lg">
                    <h3 className="text-3xl font-semibold mb-6 text-indigo-700">Edit Recipe</h3>
                    
                    {/* Editing fields with styling */}
                    <div className="mb-5">
                        <label className="block text-gray-800 font-semibold mb-2">Recipe Name:</label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="text"
                            name="name"
                            value={editRecipe.name || ""}
                            onChange={handleEditChange}
                            placeholder="Recipe Name"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block text-gray-800 font-semibold mb-2">Description:</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            name="description"
                            value={editRecipe.description || ""}
                            onChange={handleEditChange}
                            placeholder="Description"
                        ></textarea>
                    </div>

                    <div className="mb-5">
                        <label className="block text-gray-800 font-semibold mb-2">Image URL:</label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="text"
                            name="imageUrl"
                            value={editRecipe.imageUrl || ""}
                            onChange={handleEditChange}
                            placeholder="Image URL"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block text-gray-800 font-semibold mb-2">Cooking Time (minutes):</label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="number"
                            name="cookingTime"
                            value={editRecipe.cookingTime || ""}
                            onChange={handleEditChange}
                            placeholder="Cooking Time"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block text-gray-800 font-semibold mb-2">Ingredients (comma-separated):</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            name="ingredients"
                            value={editRecipe.ingredients ? editRecipe.ingredients.join(', ') : ""}
                            onChange={(e) =>
                                setEditRecipe({
                                    ...editRecipe,
                                    ingredients: e.target.value.split(',').map((ingredient) => ingredient.trim()),
                                })
                            }
                            placeholder="Ingredients"
                        ></textarea>
                    </div>

                    <div className="mb-5">
                        <label className="block text-gray-800 font-semibold mb-2">Instructions:</label>
                        <textarea
                            className="w-full p-3 py-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            name="instructions"
                            value={editRecipe.instructions || ""}
                            onChange={handleEditChange}
                            placeholder="Instructions"
                        ></textarea>
                    </div>

                    <button onClick={saveEdit} className="bg-indigo-600 text-white py-3 px-6 rounded-lg mr-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700">Save</button>
                    <button onClick={() => setIsEditing(false)} className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700">Cancel</button>
                </div>
            ) : selectedRecipe ? (
                <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
            ) : recipes.length === 0 ? (
                <p className="text-center mt-[300px] text-white text-4xl">No recipes available</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                        <div key={recipe._id} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.name}</h3>
                            <p className="text-gray-700 mb-4 line-clamp-2">{recipe.description}</p>
                            <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                            <p className="text-sm text-gray-600 mb-4">Cooking Time: {recipe.cookingTime} minutes</p>
                            <div className="mt-4 flex  flex-col gap-2 ">
                              <div className='flex justify-between'>  <button onClick={() => startEditing(recipe)} className="bg-yellow-500 text-white py-2 px-4 rounded-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">Edit</button>
                                <button onClick={() => deleteRecipe(recipe._id)} className="bg-red-500 text-white py-2 px-4 rounded-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Delete</button>
                            </div>
                                <button onClick={() => viewRecipeDetails(recipe)} className="bg-teal-500 text-white py-2 px-4 rounded-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">View</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewRecipe;