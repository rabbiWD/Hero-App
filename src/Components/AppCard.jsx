import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router';

const AppCard = ({app}) => {
  const {image, title, downloads, ratingAvg, id} = app
    return (
        <Link to={`/app/${id}`} className="card bg-base-100 p-4 shadow-xl hover:scale-105 transition ease-in-out">
        <div className=' border border-gray-500 rounded'>
           <figure className='h-48 overflow-hidden'>
           <img className='w-full object-cover'
             src={image}
             alt="Shoes" />
         </figure>
         <div className="card-body">
           <h2 className="card-title">{title}</h2>
           <div className="card-actions justify-between">
             <button className="btn bg-[#f1f5e8] text-[#00d390] text-base font-semibold"><MdOutlineFileDownload/>{downloads}M</button>
             <button className="btn bg-[#fff0e1] text-[#ff8811] text-base font-semibold"><IoStar/>{ratingAvg}</button>
           </div>
         </div>
        </div>
       </Link>
    );
};

export default AppCard;