// src/components/RecipeDetails.jsx
import React from 'react';

const RecipeDetails = ({ recipe, onBack }) => {
    if (!recipe) {
        return (
            <div className="text-center text-gray-500 py-10">
                Select a recipe to view details.
            </div>
        );
    }

    return (
        <div className="p-10 bg-gradient-to-r from-purple-200 to-indigo-300 rounded-xl shadow-xl max-w-4xl mx-auto">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-2 px-6 rounded-lg mb-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            >
                Back to Recipes
            </button>

            {/* Recipe Title */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 tracking-widest">
                {recipe.name}
            </h1>

            {/* Recipe Image */}
            <div className="flex justify-center mb-6">
                <img
                    src={recipe.imageUrl}
                    alt={recipe.name}
                    className="w-full max-w-[95%] h-[450px] object-cover rounded-xl shadow-lg"
                />
            </div>

            {/* Recipe Details */}
            <div className="space-y-6">
                {/* Description */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Description:</h2>
                    <p className="text-gray-700 text-lg">{recipe.description}</p>
                </div>

                {/* Cooking Time */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Cooking Time:</h2>
                    <p className="text-gray-700 text-lg">{recipe.cookingTime} minutes</p>
                </div>

                {/* Ingredients */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Ingredients:</h2>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                {/* Instructions */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Instructions:</h2>
                    <p className="text-gray-700 text-lg">{recipe.instructions}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
