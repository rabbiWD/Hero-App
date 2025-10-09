import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { ThumbsUp, Download, Star } from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find(a => String(a.id) === id);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem('installation')) || [];
    const alreadyInstalled = existingList.some(a => a.id === app?.id);
    setIsInstalled(alreadyInstalled);
  }, [app]);

  if (loading || !app) return <p>Loading.....</p>;

  const { image, title, downloads, ratingAvg, companyName, reviews, size, ratings, description } = app;

  const handleInstallList = () => {
    const existingList = JSON.parse(localStorage.getItem('installation')) || [];
    const isDuplicate = existingList.some(a => a.id === app.id);
    if (isDuplicate) {
      toast.success('Already Installed');
      return;
    }
    const updatedList = [...existingList, app];
    localStorage.setItem('installation', JSON.stringify(updatedList));
    setIsInstalled(true);
    toast.success('Install Done');
  };
  const ratingsData = [
    { name: "5 Star", value: ratings[4].count },
    { name: "4 Star", value: ratings[3].count },
    { name: "3 Star", value: ratings[2].count },
    { name: "2 Star", value: ratings[1].count },
    { name: "1 Star", value: ratings[0].count },
  ];
  //      const app = useLoaderData();
  // const [isInstalled, setIsInstalled] = useState(() => (
  //   const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
  //   return installedApps.includes(app.id);
  // ));
  return (
    <div className="card bg-base-100 p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className='md:flex gap-8'>
        <div className='border border-gray-500 rounded'>
          <figure className='h-48 overflow-hidden'>
            <img
              className='md:w-60 md:h-50 md:border-none w-full md:object-cover'
              src={image}
              alt="app"
            />
          </figure>
        </div>
        <div className="card-body">
          <div>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <h2>Developed by <span className='text-[#632ee3]'>{companyName}</span></h2>
          </div>
          <hr className='text-gray-300' />
          <div className='flex gap-12'>
            <h3 className='flex flex-col text-[#00d390]'>
              <Download /> <span>Downloads</span> <span className='text-2xl font-bold'>{downloads}M</span>
            </h3>
            <h3 className='flex flex-col text-[#ff8811]'>
              <Star /> <span>Average Rating</span> <span className='text-2xl font-bold'>{ratingAvg}</span>
            </h3>
            <h3 className='flex flex-col text-[#632ee3]'>
              <ThumbsUp /> <span>Total Reviews</span> <span className='text-2xl font-bold'>{reviews}K</span>
            </h3>
          </div>
          <div className="mt-5">
            <button
              onClick={handleInstallList}
              disabled={isInstalled}
              className={`btn text-white ${
                isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00d390] hover:bg-green-500"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <hr className='mt-5 text-gray-300' />
      <div className='space-y-3'>
        <h1 className='text-xl font-semibold'>Rating</h1>
        <div className='bg-base-100 border rounded-xl p-4 h-80'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratingsData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="value" fill="orange" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <hr className='mt-5 text-gray-300' />
      <div className='mt-5 pb-5'>
        <h1 className='text-xl font-semibold'>Description</h1>
        <div>
          <h1 className='mt-4 text-gray-400'>{description}</h1>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
