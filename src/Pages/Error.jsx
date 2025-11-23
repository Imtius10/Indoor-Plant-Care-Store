// Error.jsx
import React from "react";
import { Link } from "react-router";
import dyingPlant from "../assets/404.jpg"; 

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 via-green-50 to-green-200 px-5 text-center">
      
      
      <div className="mb-6">
        <img
          src={dyingPlant}
          alt="Dying Plant"
          className="w-64 h-64 object-contain animate-pulse"
        />
      </div>

      <h1 className="text-5xl font-bold text-green-900 mb-4">404</h1>
      <p className="text-xl text-green-800 mb-6">
        Oops! The plant has withered… Page not found.
      </p>

      
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
