import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';

const HomeLayout = () => {
    return (
        <div className='flex flex-col min-h-screen max-w-8xl mx-auto'>
            <header></header>
            <main>
                <section>
                    <Navbar></Navbar>
                </section>
                <Suspense fallback={<Loader />}>
                    <section className='flex-1'>
                        <Outlet></Outlet>
                    </section></Suspense>
                <section>
                    <Footer></Footer>
                </section>

            </main>
        </div>
    );
};

export default HomeLayout;