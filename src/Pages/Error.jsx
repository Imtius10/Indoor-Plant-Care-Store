import React from "react";
import { Link } from "react-router";
import dyingPlant from "../assets/pageNotFound.png"; 
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Error = () => {
  return (
    <div>
        <Navbar></Navbar>
 <div className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-b from-orange-400 via-red-500 to-green-200 px-5 text-center">

      
      <div className="mb-8">
        <img
          src={dyingPlant}
          alt="Dying Plant"
          className="w-96 h-96 md:w-[500px] md:h-[500px] object-contain"
        />
      </div>

  
      <h1 className="text-6xl font-bold text-green-900 mb-4">404</h1>
      <p className="text-2xl text-green-800 mb-6">
        Oops! The plant has withered… Page not found.
      </p>

      
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        Back to Home
      </Link>
    </div>
    <Footer></Footer>
    </div>
   
  );
};

export default Error;
