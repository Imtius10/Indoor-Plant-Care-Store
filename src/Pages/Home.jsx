import React, { useState } from "react";
import Slider from "../Components/Slider";
import { NavLink, useLoaderData } from "react-router";
import Card from "../Components/Card";
import CareTipsSection from "../Components/CareTipsSection";
import GreenExpertsSection from "../Components/GreenExpertsSection";
import IndoorPlantBenefits from "../Components/IndoorPlantBenefits";

const Home = () => {
  const products = useLoaderData();
  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);

  const [showAll, setShowAll] = useState(false);

 
  const displayedProducts = showAll ? sortedProducts : sortedProducts.slice(0, 4);

  return (
    <div >
      <Slider />

      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 mt-10 text-green-600">Our Plants</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <Card key={product.plantId} product={product} />
          ))}
        </div>

      
        {!showAll && sortedProducts.length > 4 && (
          <div className="flex justify-center mt-6 m-10">
          <NavLink to={'/all-plants'}>  <button
              
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
            >
              View More
            </button></NavLink>
          </div>
        )}
      </div>

      <CareTipsSection />
      <GreenExpertsSection />
     <IndoorPlantBenefits></IndoorPlantBenefits> 
    </div>
  );
};

export default Home;
