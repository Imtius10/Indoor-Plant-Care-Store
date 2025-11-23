import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-8xl mx-auto">
    
      <header>
        <Navbar />
      </header>

      
      <main className="flex-1 flex flex-col">
        <Suspense fallback={<Loader />}>
          <div className="flex-1">
            <Outlet />
          </div>
        </Suspense>
      </main>

      
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
