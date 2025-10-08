import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoStar } from "react-icons/io5";

const AppCard = ({app}) => {
  const {image, description, downloads, ratingAvg} = app
    return (
        <div className="card bg-base-100 p-4 shadow-xl hover:scale-105 transition ease-in-out">
        <div className=' border border-gray-500 rounded'>
           <figure className='h-48 overflow-hidden'>
           <img className='w-full object-cover'
             src={image}
             alt="Shoes" />
         </figure>
         <div className="card-body">
           <h2 className="card-title">{description}</h2>
           <div className="card-actions justify-between">
             <button className="btn bg-[#f1f5e8]"><MdOutlineFileDownload/>{downloads}</button>
             <button className="btn bg-[#fff0e1]"><IoStar/>{ratingAvg}</button>
           </div>
         </div>
        </div>
       </div>
    );
};

export default AppCard;