import React from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa6";
import hero from '../assets/hero.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <section>
            <div>
                <h1 className='text-7xl font-bold text-center'>We Build <br/> <span className='text-[#632ee3] '>Productive</span> Apps</h1>
                <p className='text-base mt-4 text-center text-gray-500 font-normal'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='text-center space-x-4 mt-6'>
                    <Link to='https://play.google.com/store/apps?hl=en' target='_blank' className='btn font-bold'><FaGooglePlay></FaGooglePlay> Google Play</Link>
                    <Link to='https://www.apple.com/app-store' target='_blank' className='btn font-bold'><FaAppStoreIos></FaAppStoreIos> App Store</Link>
                </div >
                <div>
                    <img className='mx-auto mt-4' src={hero} alt="" />
                </div>
            </div>
            <div className='bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold text-center'>
                <h1 className='text-4xl pt-12 font-semibold'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row  md:justify-evenly md:items-center mt-7 pb-12'>
                    <div className='mt-2 md:mt-0 lg:mt-0'>
                        <p className='text-sm text-gray-300'>Total Downloads</p>
                        <h1 className='text-6xl font-extrabold'>26.9M</h1>
                        <p className='text-sm text-gray-300'>21% more than last month</p>
                    </div>
                    <div className='mt-4 md:mt-0 lg:mt-0'>
                        <p className='text-sm text-gray-300'>Total Reviews</p>
                        <h1 className='text-6xl font-extrabold'>906K</h1>
                        <p className='text-sm text-gray-300'>46% more than last month</p>
                    </div>
                    <div className='mt-4 md:mt-0 lg:mt-0'>
                        <p className='text-sm text-gray-300'>Active Apps</p>
                        <h1 className='text-6xl font-extrabold'>132+</h1>
                        <p className='text-sm text-gray-300'>231 more will Launch</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;