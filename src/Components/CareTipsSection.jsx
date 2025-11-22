import React from "react";
import { motion } from "framer-motion";
import careTips from "../../public/caretios.json";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 60 },
  }),
};

const CareTipsSection = () => {
  return (
    <div className="bg-green-50 py-12">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
        🌱 Plant Care Tips
      </h2>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {careTips.map((tip, index) => (
          <motion.div
            key={tip.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-green-800 mb-3">
              {tip.plantName}
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>
                <strong>💧 Watering:</strong> {tip.watering}
              </li>
              <li>
                <strong>☀ Sunlight:</strong> {tip.sunlight}
              </li>
              <li>
                <strong>🌿 Fertilizing:</strong> {tip.fertilizing}
              </li>
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareTipsSection;
