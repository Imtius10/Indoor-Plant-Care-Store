import React, { Suspense } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const HomeLayout = () => {
  const navigation = useNavigation(); 
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen max-w-8xl mx-auto">
      <header>
        <Navbar />
      </header>

      <main className="flex-1 flex flex-col relative">
       
        {isLoading && (
          <div className="absolute inset-0 z-50">
            <Loader />
          </div>
        )}

       
        <Suspense fallback={<Loader />}>
          <div className={isLoading ? "opacity-50 pointer-events-none flex-1" : "flex-1"}>
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
