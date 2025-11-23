import React from "react";
import { Link } from "react-router";
import { FaTree } from "react-icons/fa"; 
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-green-100 via-green-200 to-green-50 px-5">
        <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center max-w-lg text-center">
          {/* Tree Icon */}
          <div className="text-green-600 mb-6">
            <FaTree size={120} className="animate-bounce" />
          </div>

          <h1 className="text-6xl font-bold text-green-900 mb-4">404</h1>
          <p className="text-xl md:text-2xl text-green-800 mb-6">
            Oops! The plant has withered… Page not found.
          </p>

          <Link
            to="/"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Error;
