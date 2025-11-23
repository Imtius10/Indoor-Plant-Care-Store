import React from "react";
import { motion } from "framer-motion";

const experts = [
  {
    id: 1,
    name: "Alice Green",
    specialization: "Snake Plant & Air Purifiers",
    image: "https://i.ibb.co.com/dsqYbzdq/p1.jpg"
  },
  {
    id: 2,
    name: "Bob Leaf",
    specialization: "Spider Plant & Easy Indoor Plants",
    image: "https://i.ibb.co.com/4RmPk0KB/p2.jpg"
  },
  {
    id: 3,
    name: "Catherine Bloom",
    specialization: "Peace Lily & Flowering Plants",
    image: "https://i.ibb.co.com/V0MLnnSP/p3.jpg"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 60 }
  })
};

const GreenExpertsSection = () => {
  return (
    <div className="bg-green-50 py-12">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
        🌿 Meet Our Green Experts
      </h2>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {experts.map((expert, index) => (
          <motion.div
            key={expert.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-400"
            />
            <h3 className="text-xl font-bold text-green-800 mb-2">{expert.name}</h3>
            <p className="text-gray-700 text-sm">{expert.specialization}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GreenExpertsSection;
