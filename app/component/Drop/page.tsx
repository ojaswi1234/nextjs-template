import { useState } from "react";

export default function Drop() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        className="text-gray-800 w-24 h-10 flex justify-center gap-1 items-center rounded-full hover:bg-indigo-500 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Pages
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 h-96 rounded-md shadow-lg shadow-indigo-400 bg-white ring-1 ring-black ring-opacity-5 z-20">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2  text-gray-800 text-base  hover:text-indigo-500"
            >
              Home Page
            </a>
            <a
              href="#"
              className="block px-4 py-2  text-gray-800 text-base hover:text-indigo-500"
            >
              Services Page
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 text-base hover:text-indigo-500"
            >
              Portfolio Page
            </a>
            <a
              href="#"
              className="block px-4 py-2  text-gray-800 text-base hover:text-indigo-500"
            >
              Blog Page
            </a>
            <a href="#"
              className="block px-4 py-2  text-gray-800 text-base hover:text-indigo-500 cursor-pointer">Sign In</a>
            <a href="#"
              className="block px-4 py-2  text-gray-800 text-base hover:text-indigo-500">Sign Up</a>
          </div>
        </div>
      )}
    </div>
  );
}
