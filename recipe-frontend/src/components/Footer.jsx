import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF, FaWhatsapp } from "react-icons/fa"; // Importing necessary icons

function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950 text-gray-200 py-8">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* BiteBot Section */}
          <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-2">
            Bite<span className="text-yellow-400">Bot</span>
      </h1>
      
             <p className="text-sm mb-4 text-gray-300">
              Your personal AI recipe generator. Create, customize, and share recipes based on your preferences.
            </p>
          </div>

          {/* Empty Section for Spacing */}
          <div className="hidden lg:block"></div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center md:items-end lg:items-end space-y-4 mt-6 lg:mt-0">
            <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/_sunny_480"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transform hover:scale-125 transition duration-300"
              >
                <FaInstagram size={35} className="text-pink-600 hover:text-pink-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/sunny-gupta-a436302b0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transform hover:scale-125 transition duration-300"
              >
                <FaLinkedinIn size={35} className="text-blue-600 hover:text-blue-700" />
              </a>
              <a
                href="https://github.com/sunnygupta667"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transform hover:scale-125 transition duration-300"
              >
                <FaGithub size={35} className="text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/sg747a5ll/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks"
                className="text-green-500 text-xl font-semibold transform hover:scale-125 transition duration-300"
              >
                GFG
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transform hover:scale-125 transition duration-300"
              >
                <FaFacebookF size={35} className="text-blue-600 hover:text-blue-700" />
              </a>
              <a
                href="https://api.whatsapp.com/send?text=Check%20out%20this%20recipe%20on%20BiteBot!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="transform hover:scale-125 transition duration-300"
              >
                <FaWhatsapp size={35} className="text-green-400 hover:text-green-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-xs text-gray-400">&copy; 2024 BiteBot. All rights reserved.</p>
          <div className="space-x-2 mt-2">
            <a
              href="/privacy-policy"
              className="text-sm text-blue-400 hover:underline hover:text-blue-500 transition duration-200"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/terms-of-service"
              className="text-sm text-blue-400 hover:underline hover:text-blue-500 transition duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
