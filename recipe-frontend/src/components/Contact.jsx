import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3000/contact', data); // Adjust API URL if necessary

      // Display a stylish success message with a checkmark
      toast.success(
        <>
          Message sent successfully!
        </>,
        {
          style: {
            border: '2px solid #38A169', // Green border
            padding: '9px',
            backgroundColor: 'transparent', // Green background
            color: 'white',
            fontSize: '15px',
            borderRadius: '8px',
          },
          iconTheme: {
            primary: '#38A169',
            secondary: '#fff',
          },
          duration: 3000,
        }
      );

      reset();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      name="Contact" id='Contact Us'
      className="max-w-screen-2xl container bg-#050412 mx-auto px-4 md:px-20 py-10"
    >
      <Toaster position="top-center" reverseOrder={false} /> {/* Toast container */}

      <h1 className="text-4xl font-bold mb-4 text-white text-center font-montserrat tracking-widest">
        Contact Bite<span className="text-yellow-400 ml-[-4px]">Bot</span>
      </h1>
      <p className="text-white mb-10 text-center text-lg">
        I'd love to hear from you! Fill out the form below and let's get in touch.
      </p>

      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100 w-full max-w-lg p-8 rounded-xl shadow-xl transition-transform duration-300 transform hover:scale-105"
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">Send Your Message</h2>

          {/* Full Name Field */}
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              {...register("name", { required: "This field is required" })}
              className={`shadow-md rounded-xl border py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="bg-red-100 text-red-500 text-sm mt-1 px-2 py-1 rounded-lg border border-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Address Field */}
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              {...register("email", { 
                required: "This field is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email is not valid"
                }
              })}
              className={`shadow-md rounded-xl border py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="bg-red-100 text-red-500 text-sm mt-1 px-2 py-1 rounded-lg border border-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message", { required: "This field is required" })}
              className={`shadow-md rounded-xl border py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none duration-300 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              id="message"
              placeholder="Enter your message"
              rows="4"
            />
            {errors.message && (
              <span className="bg-red-100 text-red-500 text-sm mt-1 px-2 py-1 rounded-lg border border-red-500">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl py-3 transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
