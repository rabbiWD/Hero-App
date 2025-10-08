import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';

const Home = () => {
    const apps = useLoaderData()
    const featuredApps = apps.slice(0,8)
    console.log(apps);
    return (
        <div className='mt-6'>
            <Banner></Banner>
            <div className='mt-7 text-center pb-7'>
                <h1 className='text-4xl font-semibold'>Trending Apps</h1>
                <p className='text-sm mt-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>
                 <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                    featuredApps.map(app=>(
                        <AppCard key={app.id} app={app}></AppCard>
                    ))
                }
                 </div>
            </div>
            <div className='flex justify-center mt-6'>
                <Link to='/apps' className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold text-base">Show All</Link>
            </div>
        </div>
    );
};

export default Home;