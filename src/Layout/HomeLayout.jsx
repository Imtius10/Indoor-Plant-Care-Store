import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

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

                </section>

            </main>
        </div>
    );
};

export default HomeLayout;