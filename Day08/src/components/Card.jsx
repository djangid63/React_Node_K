import React from "react";
import { useState, useEffect } from "react";


const MyPlugin = () => {

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);



  return (
    <div id="webcrumbs">
      <div className='w-[100%] h-screen bg-black shadow-lg rounded-lg p-8'>  <h1 className='font-title text-3xl text-neutral-50 mb-8'>Customer Reviews</h1>
        <div className='grid grid-cols-2 gap-8'>
          {data && data.slice(0, 8).map((review) => (
            <div className='bg-neutral-800 p-6 rounded-md'>
              <div className='flex items-center gap-4 mb-4'>
                <img
                  src='https://tools-api.webcrumbs.org/image-placeholder/50/50/avatars/1'
                  alt='Customer avatar'
                  className='w-[50px] h-[50px] rounded-full object-contain'
                />
                <div>
                  <h2 className='text-lg text-neutral-50 font-semibold'>Jane Doe</h2>
                  <p className='text-sm text-neutral-400'>Verified Buyer</p>
                </div>
              </div>
              <p className='text-neutral-50'>
                “Absolutely amazing product! The quality exceeded my expectations. I'll definitely be buying again.”
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyPlugin;
