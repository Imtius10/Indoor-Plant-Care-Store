import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa"
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    loginUser(formData.email, formData.password)
      .then(() => toast.success("Login successful!"))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-50 to-green-200 px-5">
      <Toaster position="top-right" />
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-green-200">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
          Login to GreenNest
        </h1>

        {error && <p className="text-center text-red-500 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
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
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-green-700 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-800 font-semibold hover:underline">
            Register
          </Link>
        </p>
        <p className="text-center mt-1 text-green-700 text-sm">
          <Link to="/forgot-password" className="hover:underline font-semibold">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
