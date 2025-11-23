import React from "react";

import { NavLink } from "react-router";
const Card = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 w-full">
      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.plantName}
          className="w-full h-full object-cover"
        />
      </figure>


      <div className="card-body text-center p-4">

        <h2 className="text-2xl font-bold text-gray-800 mb-1">{product.plantName}</h2>


        <p className="text-xl text-gray-700 italic mb-2">{product.category}</p>


        <p className="text-green-600 font-semibold text-lg mb-2">${product.price}</p>


        <div className="flex justify-center items-center space-x-1 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="text-yellow-400 text-lg">
              {i < Math.floor(product.rating) ? "★" : "☆"}
            </span>
          ))}
          <span className="ml-2 text-gray-500 text-xl">{product.rating}</span>
        </div>


        <div className="card-actions justify-center">
          <NavLink to={`/plantDetails/${product.plantId}`}>
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition">View Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
