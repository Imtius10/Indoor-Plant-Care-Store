import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa"
const Register = () => {
  const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // toggle state

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo_url = form.photo_url.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Registered successfully!");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success("Signed in with Google!");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-50 to-green-200 px-5">
      <Toaster position="top-right" />
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-green-200">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          Create an Account
        </h1>

        {error && <p className="mb-4 text-red-500 text-center text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="photo_url"
            placeholder="Photo URL"
            required
            className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-green-600 font-semibold"
            >
             {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>

        <div className="flex items-center justify-center mt-4 gap-2">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-2 border border-gray-300 p-2 rounded-lg hover:bg-gray-100 w-full justify-center text-black"
          >
            <FcGoogle size={24} /> 
          </button>
        </div>

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
