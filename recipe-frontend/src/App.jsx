import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './temp.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import ViewRecipe from './components/ViewRecipe';
import RecipeDetails from './components/RecipeDetails';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* Offset for fixed Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/view-recipe" element={<ViewRecipe />} />
          <Route path="/recipe-details" element={<RecipeDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
