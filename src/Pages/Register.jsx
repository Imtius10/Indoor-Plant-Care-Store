import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-50 to-green-200 px-5">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-green-200">

        {/* Title */}
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          Create an Account
        </h1>

       
        {error && (
          <p className="mb-4 text-red-500 text-center text-sm">{error}</p>
        )}

        
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="font-semibold text-green-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="font-semibold text-green-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="font-semibold text-green-700">Photo URL</label>
            <input
              type="text"
              name="photo_url"
              placeholder="Link to Profile Picture"
              className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="font-semibold text-green-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-green-700 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-800 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
