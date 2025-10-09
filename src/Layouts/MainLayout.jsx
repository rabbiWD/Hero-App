import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
            <div className=' flex-1 bg-gray-100 max-w-screen mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;

