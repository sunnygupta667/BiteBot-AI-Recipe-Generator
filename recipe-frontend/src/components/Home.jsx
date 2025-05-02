// Home.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../temp.css';

const Home = () => {
  const [dishType, setDishType] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [flavors, setFlavors] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [response, setResponse] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/getRecipe', {
        dishType,
        ingredients,
        cuisine,
        flavors,
        dietaryRestrictions,
      })
      .then((res) => {
        setResponse(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let isSpeaking = false;

  const speakHandler = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
    } else {
      const sound = new SpeechSynthesisUtterance(response);
      window.speechSynthesis.speak(sound);
      isSpeaking = true;

      sound.onend = () => {
        isSpeaking = false;
      };
    }
  };

  return (
    <div id='Home' className='md:mb-[0px] mb-[255px] my-[20px]'>
      <br />
      <div className="w-full h-20 my-10 mb-[70px] md:mb-[0px] mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-400 text-center font-montserrat">
          Generate Your <span className="text-orange-700">Recipe</span>
        </h1>
      </div>

      <div className="w-full h-screen flex flex-col mt-[-5px] md:mt-[-90px] md:flex-row text-center gap-2 items-center">
        <div className="w-full md:w-1/2 mx-6 flex flex-col gap-7 justify-center md:ml-[6px] items-center">
          <h1 className="text-2xl md:text-3xl text-blue-400 font-semibold animate-pulse">
            Enter Recipe Details
          </h1>
          <textarea
            onChange={(e) => setDishType(e.target.value)}
            className="w-4/5 md:w-3/4 text-white scroll-smooth p-[4.4px] md:p-[7px] text-[13px] md:text-[17px] resize-none font-mono h-8 md:h-10 rounded-md bg-transparent outline-none border-[2px] placeholder:text-[13px] md:placeholder:text-[17px] placeholder:text-gray-600 border-gray-700"
            placeholder="Dish Type: Appetizer, Main Course, Dessert..."
          />
          <textarea
            onChange={(e) => setIngredients(e.target.value)}
            className="w-4/5 md:w-3/4 text-white scroll-smooth p-[4.4px] md:p-[7px] text-[13px] md:text-[17px] resize-none font-mono h-8 md:h-10 rounded-sm bg-transparent outline-none border-[2px] placeholder:text-[13px] md:placeholder:text-[17px] placeholder:text-gray-600 border-gray-700"
            placeholder="Ingredients: Chicken, Potatoes, Spices..."
          />
          <textarea
            onChange={(e) => setCuisine(e.target.value)}
            className="w-4/5 md:w-3/4 text-white scroll-smooth p-[4.4px] md:p-[7px] text-[13px] md:text-[17px] resize-none font-mono h-8 md:h-10 rounded-sm bg-transparent outline-none border-[2px] placeholder:text-[13px] md:placeholder:text-[17px] placeholder:text-gray-600 border-gray-700"
            placeholder="Cuisine: Italian, Indian, Chinese..."
          />
          <textarea
            onChange={(e) => setFlavors(e.target.value)}
            className="w-4/5 md:w-3/4 text-white scroll-smooth p-[4.4px] md:p-[7px] text-[13px] md:text-[17px] resize-none font-mono h-8 md:h-10 rounded-sm bg-transparent outline-none border-[2px] placeholder:text-[13px] md:placeholder:text-[17px] placeholder:text-gray-600 border-gray-700"
            placeholder="Flavors: Sweet, Spicy, Sour..."
          />
          <textarea
            onChange={(e) => setDietaryRestrictions(e.target.value)}
            className="w-4/5 md:w-3/4 text-white scroll-smooth p-[4.4px] md:p-[7px] text-[13px] md:text-[17px] resize-none font-mono h-8 md:h-10 rounded-sm bg-transparent outline-none border-[2px] placeholder:text-[13px] md:placeholder:text-[17px] placeholder:text-gray-600 border-gray-700"
            placeholder="Diet-Restrictions: Vegan, Gluten-Free..."
          />
          <button
            onClick={submitHandler}
            className="w-4/5 md:w-3/4 p-2 mb-[20px] mt-[2px] text-lg md:text-xl font-bold font-mono text-white rounded-[4px] bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950 shadow-lg shadow-purple-500/50 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:shadow-sky-500/50 hover:from-gray-950 hover:via-sky-950 hover:to-gray-950"
          >
            Generate Recipe
          </button>
        </div>

        <div className="w-full md:w-1/2 mx-6 flex flex-col gap-8 justify-center items-center">
          <h1 className="text-2xl md:text-3xl mb-[2px] text-blue-400 font-semibold animate-pulse">
            Your Recipe
          </h1>
          <textarea
            value={response}
            className="w-4/5 resize-none caret-transparent md:w-full animate-glow2 text-white scroll-smooth p-3 text-[16px] font-mono h-60 md:h-[316px] rounded-lg bg-transparent outline-none border-none"
            readOnly
          />
          <button
            onClick={speakHandler}
            className="w-4/5 md:w-full mb-[20px] p-2 text-lg md:text-xl font-bold font-mono text-white rounded-[4px] bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950 shadow-lg shadow-purple-500/50 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:shadow-sky-500/50 hover:from-gray-950 hover:via-sky-950 hover:to-gray-950"
          >
            Speak
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
