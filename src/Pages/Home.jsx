import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import LoadingSpinner from './../Components/LoadingSpinner';
import { Link } from 'react-router';

const Home = () => {
    const {apps} = useApps()
    const featuredApps = apps.slice(0,8)
    const [loading, setLoading] = useState(false)

      useEffect(()=>{
      setLoading(true);

      const timer = setTimeout(()=>{
        setLoading(false)
      }, 1000)
      return ()=> clearTimeout(timer)
    }, [])
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
      }

    return (
        <div className='mt-6'>
            <Banner></Banner>
            <div className='mt-7 text-center pb-7'>
                <h1 className='text-4xl font-semibold'>Trending Apps</h1>
                <p className='text-sm mt-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>

                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
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