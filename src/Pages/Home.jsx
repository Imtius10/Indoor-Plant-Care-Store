// Home.jsx
import React from 'react';
import Slider from '../Components/Slider';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';
import CareTipsSection from '../Components/CareTipsSection';
import GreenExpertsSection from '../Components/GreenExpertsSection';
import PlantDetails from './PlantDetails';

const Home = () => {
  const products = useLoaderData();


  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);

  return (
    <div>
      <Slider />

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Plants</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Card key={product.plantId} product={product} />
          ))}
        </div>
      </div>
      <CareTipsSection></CareTipsSection>
      <GreenExpertsSection></GreenExpertsSection>
     
    </div>
    
  );
};

export default Home;
