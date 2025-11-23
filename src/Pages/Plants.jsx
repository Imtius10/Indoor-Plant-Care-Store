import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';

const Plants = () => {
    const products=useLoaderData();
    return (
        <div>
             <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Plants</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.plantId} product={product} />
          ))}
        </div>
        </div>
        </div>
    );
};

export default Plants;