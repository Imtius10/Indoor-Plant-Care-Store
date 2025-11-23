import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile, getAuth } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { PiUserCircleThin } from "react-icons/pi"; 

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const auth = getAuth();

  const getDefaultName = () => {
    if (user?.displayName) return user.displayName;
    if (user?.email) return user.email.split("@")[0]; 
    return "";
  };

  const [formData, setFormData] = useState({
    displayName: getDefaultName(),
    photoURL: user?.photoURL || "",
  });

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setFormData({
      displayName: getDefaultName(),
      photoURL: user?.photoURL || "",
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      await updateProfile(auth.currentUser, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });

     
      setUser({ ...auth.currentUser });

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!user)
    return (
      <p className="text-center mt-8 text-red-500">
        Please login to view your profile.
      </p>
    );

  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <Toaster position="top-right" />

      <h1 className="text-3xl font-bold text-[#75d705] mb-6 text-center">
        My Profile
      </h1>

    
      <div className="flex flex-col items-center bg-green-100 p-6 rounded-2xl shadow-md mb-8 text-black">
        {formData.photoURL ? (
          <img
            src={formData.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg mb-4"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <PiUserCircleThin size={80} className="text-gray-400" />
          </div>
        )}
        <h2 className="text-xl font-semibold">
          {formData.displayName || "No Name"}
        </h2>
        <p className="text-gray-600">{user.email}</p>
      </div>

   
      <form
        onSubmit={handleUpdate}
        className="flex flex-col space-y-4 bg-green-100 p-6 rounded-2xl shadow-md text-black"
      >
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
