import React from "react";
import slide1 from '../assets/Slider_plants3.jpg'
import { NavLink } from "react-router";
const Card = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 w-full">
      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={slide1}
          alt={product.plantName}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body text-center p-4">
        {/* Plant Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-1">{product.plantName}</h2>

        {/* Category */}
        <p className="text-sm text-gray-500 italic mb-2">{product.category}</p>

        {/* Price */}
        <p className="text-green-600 font-semibold text-lg mb-2">${product.price}</p>

        {/* Rating */}
        <div className="flex justify-center items-center space-x-1 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="text-yellow-400 text-lg">
              {i < Math.floor(product.rating) ? "★" : "☆"}
            </span>
          ))}
          <span className="ml-2 text-gray-500 text-sm">{product.rating}</span>
        </div>

        {/* View Details Button */}
        <div className="card-actions justify-center">
         <NavLink to={`/plantDetails/${product.plantId}`}>
            <button className="btn btn-primary btn-sm">View Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
