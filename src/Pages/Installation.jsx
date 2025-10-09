import React, { useEffect, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';

const Installation = () => {
    const [installation, setInstallation] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(()=>{
        const savedList = JSON.parse(localStorage.getItem('installation'))
        if(savedList) setInstallation(savedList)
    }, [])

    const sortedItem = (
        ()=>{
        if(sortOrder === 'download-asc'){
            return [...installation].sort((a,b)=>a.downloads - b.downloads)
        }else if(sortOrder === 'download-desc'){
             return [...installation].sort((a,b)=>b.downloads - a.downloads)
        }else{
           return installation
        }
    }) ()

     const handleUninstall = id =>{
       
        const existingList = JSON.parse(localStorage.getItem('installation'))
        let updatedList = existingList.filter(a=> a.id !== id)

        setInstallation(updatedList)
        // (prev=> prev.filter(a => a.id !== id))

        localStorage.setItem('installation', JSON.stringify(updatedList))
         toast.success('Uninstall Successfully')
    }


    return (
        <div className='space-y-6'>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>Your Installed Apps</h1>
                <p className='text-gray-500 text-sm mt-3'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex flex-col gap-3 md:flex-row justify-between items-center'>
                    <h1 className='text-lg font-semibold'>({installation.length}) Apps Found</h1>
                   <label className='form-control w-full max-w-xs'>
                     <select className='select select-bordered' value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
                        <option value="none">Sort By Size</option>
                        <option value="download-desc">High-&gt;Low</option>
                        <option value="download-asc">Low-&gt;High</option>
                    </select>
                   </label>
                </div>
                <div>
                     {
                    sortedItem.map(a =>(
                     <div key={a.id} className="card card-side bg-base-100 shadow mt-4 p-2 flex flex-col md:flex-row">
                      <figure className=' '>
                        <img className='w-40 h-28 object-cover'
                          src={a.image}
                          alt="Shoes" />
                      </figure>
                      <div className="card-body ">
                        <h2 className="card-title text-2xl flex justify-center md:justify-start">{a.title}</h2>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                           <div className='flex gap-8'>
                             <h3 className='flex items-center gap-2 text-xl text-[#00d390]'><Download /> <span>{a.downloads} M</span></h3>
                            <h3 className='flex gap-2 text-xl items-center text-[#ff8811]'><Star /><span>{a.ratingAvg}</span></h3>
                            <h3 className='flex items-center text-xl'><span>{a.size} MB</span></h3>
                           </div>
                            <div className="">
                          <button onClick={()=> handleUninstall(a.id)} className="btn bg-[#00d390] text-white">Uninstall</button>
                        </div>
                        </div>
                      </div>
                    </div>
                    ))
                }
                </div>
 
            </div>
    );
};

export default Installation;