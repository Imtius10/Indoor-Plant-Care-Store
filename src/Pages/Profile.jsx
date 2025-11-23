import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      await updateProfile(user, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });

      // Update user state in context
      setUser({ ...user, displayName: formData.displayName, photoURL: formData.photoURL });

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p className="text-center mt-8 text-red-500">Please login to view your profile.</p>;

  return (
    <div className="container mx-auto py-12 px-4 max-w-lg">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold text-green-900 mb-6 text-center">My Profile</h1>

      {/* Display Current Photo */}
      {user.photoURL && (
        <div className="flex justify-center mb-6">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        </div>
      )}

      <form onSubmit={handleUpdate} className="flex flex-col space-y-4 bg-white p-6 rounded-2xl shadow-md">
        <label className="font-semibold text-gray-700">Name</label>
        <input
          type="text"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="font-semibold text-gray-700">Photo URL</label>
        <input
          type="text"
          name="photoURL"
          value={formData.photoURL}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="font-semibold text-gray-700">Email</label>
        <input
          type="email"
          value={user.email}
          disabled
          className="border border-gray-300 rounded-lg p-3 bg-gray-100 cursor-not-allowed"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
