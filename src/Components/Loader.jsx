import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"><span className="loading loading-ring loading-xl"></span></div>
    </div>
  );
};

export default Loader;
