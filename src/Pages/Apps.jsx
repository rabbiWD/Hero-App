import React, { useState, useEffect } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import ErrImg from '../assets/App-Error.png'
 

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const term = search.trim().toLowerCase();
  const [searchedApps, setSearchedApps] = useState(apps);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = term
        ? apps.filter(app => app.title.toLowerCase().includes(term))
        : apps;
      setSearchedApps(filtered);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [term, apps]);

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-5xl font-bold'>Our All Applications</h1>
        <p className='text-sm mt-3 text-gray-500 font-normal'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className='mt-7 pb-7 flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>({searchedApps.length}) App Found</h1>
        <label className='input'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder='search apps'
          />
        </label>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[30vh]">
          <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : searchedApps.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-8 py-20 px-4 text-center">
          <img
            src={ErrImg}
            alt=""
            className=""
          />
          <div>
            <h3 className="font-semibold text-[1.8rem] sm:text-[2.5rem]">
              OOPS!! APP NOT FOUND
            </h3>
            <p className="text-gray-600 mt-2">
              The app you are looking for is not available. Please try another.
            </p>
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {searchedApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
