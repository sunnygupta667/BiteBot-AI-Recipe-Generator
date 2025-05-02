import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("Name, email, and password are required");
    }
    try {
      const url = `http://localhost:3000/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className=" w-full fixed min-h-screen bg-#050412 flex items-center justify-center">
      <div className="bg-gray-900 mt-[-80px] md:mt-[-50px] p-8  rounded-lg shadow-lg w-full max-w-[350px] md:max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Signup
        </h1>
        <form onSubmit={handleSignup} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter your name..."
              value={signupInfo.name}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white bg-gray-800"
              autoFocus
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={signupInfo.email}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white bg-gray-800"
            />
          </div>
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={signupInfo.password}
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white bg-gray-800"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="text-lg w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg focus:outline-none focus:ring-2 border-none duration-200 hover:scale-95 "
          >
            Signup
          </button>
          {/* Login Link */}
          <div className="text-center mt-4 text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-500 font-medium hover:underline">
              Login
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
