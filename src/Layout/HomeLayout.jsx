import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header></header>
            <main>
                <section>
                    <Navbar></Navbar>
                </section>
                <section>
                    <Outlet></Outlet>
                </section>
                <section>
                 <Footer></Footer>
                </section>

            </main>
        </div>
    );
};

export default HomeLayout;