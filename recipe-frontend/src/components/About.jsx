import React from "react";
import { FaUtensils, FaBook, FaEdit, FaTrashAlt, FaBullhorn } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";

function BiteBot() {
  return (
    <div
      name="BiteBot" id="About Us"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-gradient-to-r from-[#1a1a3d] to-[#0b0b21] py-20"
    >
      <div className="bg-[#16162d] shadow-xl rounded-xl p-10 transition-transform duration-500 transform hover:scale-[1.04] text-white">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-[#FF7F50]">BiteBot</h1>
        <p className="text-gray-300 mb-10 text-lg leading-relaxed text-center">
          Welcome to BiteBot, your personal AI recipe generator that helps you create, customize, and share delicious recipes. With a focus on user preferences and dietary needs, BiteBot empowers you to make dishes effortlessly and even share your own culinary creations with others.
        </p>

        {/* Template Structure Section */}
        <div className="mb-10">
          <h2 className="text-[#FF7F50] font-semibold text-3xl flex items-center gap-3 mb-5">
            <FaUtensils /> Template Structure
          </h2>
          <div className="text-gray-300 text-lg leading-relaxed">
            <ul className="space-y-3 pl-5 list-disc list-inside">
              <li><span className="font-bold">Dish Type:</span> Specify the type of dish, such as main course, dessert, or appetizer.</li>
              <li><span className="font-bold">Ingredients:</span> Add available ingredients or use the "Any ingredients available" option for flexibility.</li>
              <li><span className="font-bold">Cuisine Preference:</span> Choose from a variety of cuisines, including Italian, Mexican, Indian, and more.</li>
              <li><span className="font-bold">Flavor Profile:</span> Set your flavor preference to sweet, spicy, savory, or mild.</li>
              <li><span className="font-bold">Dietary Restrictions:</span> Account for allergies or dietary needs, such as gluten-free, vegan, or nut-free.</li>
            </ul>
          </div>
        </div>

        {/* Recipe Details Section */}
        <div className="mb-10">
          <h2 className="text-[#FF7F50] font-semibold text-3xl flex items-center gap-3 mb-5">
            <FaBook /> Recipe Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#242448] p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <h3 className="font-semibold text-[#FF7F50]">Step-by-Step Instructions</h3>
              <p className="text-gray-400">Clear guidance to help you prepare each dish with ease.</p>
            </div>
            <div className="bg-[#242448] p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <h3 className="font-semibold text-[#FF7F50]">Preparation and Cooking Times</h3>
              <p className="text-gray-400">Convenient times to keep you on track in the kitchen.</p>
            </div>
            <div className="bg-[#242448] p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <h3 className="font-semibold text-[#FF7F50]">Tips and Variations</h3>
              <p className="text-gray-400">Suggestions to customize recipes to suit your taste and dietary needs.</p>
            </div>
            <div className="bg-[#242448] p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <h3 className="font-semibold text-[#FF7F50]">Listen Feature</h3>
              <p className="text-gray-400 flex items-center gap-2"><GiSpeaker /> Listen to each step, hands-free, while you cook.</p>
            </div>
          </div>
        </div>

        {/* Upload and Manage Recipes Section */}
        <div className="mb-10">
          <h2 className="text-[#FF7F50] font-semibold text-3xl flex items-center gap-3 mb-5">
            <FaEdit /> Upload & Manage Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#242448] p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <h3 className="font-semibold text-[#FF7F50]">Create & Share</h3>
              <p className="text-gray-400">Add your own recipes, share them, and inspire others.</p>
            </div>
            <div className="bg-[#242448] p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
              <h3 className="font-semibold text-[#FF7F50]">Edit & Delete</h3>
              <p className="text-gray-400 flex items-center gap-2"><FaTrashAlt /> Modify or remove recipes in your collection at any time.</p>
            </div>
          </div>
        </div>

        {/* Purpose and Mission Statement */}
        <div>
          <h2 className="text-[#FF7F50] font-semibold text-3xl flex items-center gap-3 mb-5">
            <FaBullhorn /> Our Purpose
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            BiteBot was created to make cooking enjoyable and accessible for everyone. Whether you’re a beginner or an experienced cook, BiteBot helps you discover, create, and share recipes that cater to all tastes and dietary needs. With features designed for convenience and customization, BiteBot brings people together through the joy of cooking and sharing their favorite dishes.
          </p>
        </div>

        {/* Example Recipe Images */}
        <div className="mt-10">
          <h2 className="text-[#FF7F50] font-semibold text-3xl mb-5 text-center">Popular Indian Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="https://images.pexels.com/photos/28674705/pexels-photo-28674705/free-photo-of-indian-dal-and-rice-in-traditional-utensils.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Recipe 1" className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105" />
            <img src="https://images.pexels.com/photos/7986618/pexels-photo-7986618.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Recipe 2" className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105" />
            <img src="https://images.pexels.com/photos/8625953/pexels-photo-8625953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Recipe 3" className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiteBot;
