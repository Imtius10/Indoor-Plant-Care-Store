import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams, useLoaderData } from "react-router";
import slide4 from "../assets/Slider_plants4.jpg";

const PlantDetails = () => {
    const { id } = useParams();
    const plants = useLoaderData();

    const plant = plants.find((p) => p.plantId === parseInt(id));

    const [formData, setFormData] = useState({ name: "", email: "" });

    if (!plant)
        return (
            <p className="text-center mt-8 text-red-500 font-semibold">
                Plant not found
            </p>
        );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Consultation booked successfully!");
        setFormData({ name: "", email: "" });
    };

    return (
        <div className="container mx-auto py-12">
            <Toaster position="top-right" />

            <div className="grid grid-cols-1 md:grid-cols-1 gap-10">

                {/* Plant Image - Centered */}
                <div className="w-full h-[70vh]">
                    <img
                        src={slide4}
                        alt={plant.plantName}
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                </div>

                {/* Plant Info */}
                <div className="flex flex-col justify-start">
                    <h1 className="text-3xl font-bold text-green-900 mb-4">
                        {plant.plantName}
                    </h1>

                    <p className="text-gray-700 mb-4">{plant.description}</p>

                    <p className="text-green-600 font-semibold text-lg mb-2">
                        Price: ${plant.price}
                    </p>

                    <p className="text-yellow-500 font-semibold mb-2 flex items-center justify-center">
                        Rating:&nbsp;
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>{i < Math.floor(plant.rating) ? "★" : "☆"}</span>
                        ))}
                        &nbsp;({plant.rating})
                    </p>

                    <p className="text-gray-500 mb-6">
                        Stock Available: {plant.availableStock}
                    </p>

                    {/* Booking Form */}
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-4 text-green-800">
                            Book Consultation
                        </h2>

                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />

                            <button
                                type="submit"
                                className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
                            >
                                Book Now
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
