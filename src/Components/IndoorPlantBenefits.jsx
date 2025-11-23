import React, { useEffect, useState } from "react";
import plantsData from "../../public/indoorPlants.json";

const IndoorPlantBenefits = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    setPlants(plantsData);
  }, []);

  return (
    <div className="overflow-hidden bg-green-50 py-8">
      <div className="flex animate-marquee">
       
        {[...plants, ...plants].map((plant, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-white p-6 rounded-2xl shadow-md flex-shrink-0 mr-6"
          >
            <h2 className="text-xl font-bold mb-2 text-green-800">{plant.title}</h2>
            <p className="text-gray-700">{plant.description}</p>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default IndoorPlantBenefits;
