import React from 'react'
import { useState, useEffect } from 'react'

const CardComponents = ({ items }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {

    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  },
    []);
  return (
    <>
      {isLoaded ? (
        items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col cursor-pointer hover:shadow-red-800 shadow-2xl font-sans-serif items-center justify-center w-[100vw] h-auto m-2 p-6  bg-slate-700 rounded-2xl text-white overflow-x-hidden animate' >
            <img
              className='w-32 h-32 object-cover rounded-full border-4 border-white'
              src={item.pic}
              alt='Img'
            />
            <h1 className='text-3xl font-bold m-5 text-left'>{item.name}</h1>
            <ul className='text-left space-y-2'>
              <div className="  flex flex-row gap-2 items-center justify-start">
                <img
                  className='w-8 h-8 object-cover rounded-full border-white'
                  src={item.pic}
                  alt='Img'
                />
                <li className='w-[100%] bg-slate-400 font-roboto rounded-xl p-2'>Employee ID : {item.employee_id}</li>
              </div>
              <div className=' flex flex-row items-center gap-2 justify-start'>
                <img
                  className='w-8 h-8 object-cover rounded-full border-white'
                  src={item.pic}
                  alt='Img'
                />
                <li className='w-[100%] bg-slate-400 font-roboto rounded-xl p-2'>Email : {item.email}</li>
              </div>
              <div className=' flex flex-row items-center gap-2 justify-start'>
                <img
                  className='w-8 h-8 object-cover rounded-full'
                  src={item.pic}
                  alt='Img'
                />
                <li className='w-[100%] bg-slate-400 rounded-xl p-2'>contact : {item.phone}</li>
              </div>
            </ul>
          </div>
        ))
      ) : items.map(() => (
        <div
          className='flex flex-col cursor-pointer hover:shadow-red-800 shadow-2xl font-sans-serif items-center justify-center w-[100vw] h-auto m-2 p-6  bg-slate-700 rounded-2xl text-white overflow-x-hidden animate-pulse' >
          <img
            className='w-32 h-32 object-cover rounded-full border-4 border-white bg-gray-400'
          />
          <h1 className='text-3xl font-bold m-5 text-left'></h1>
          <ul className='text-left space-y-2'>
            <div className="  flex flex-row gap-2 items-center justify-start ">
              <div className='w-8 h-8 rounded-full bg-gray-400'></div>
              <li className='w-60 bg-slate-400 font-roboto rounded-xl p-4'></li>
            </div>
            <div className=' flex flex-row items-center gap-2 justify-start'>
              <div className='w-8 h-8 rounded-full bg-gray-400'></div>
              <li className='w-60 bg-slate-400 font-roboto rounded-xl p-4'> </li>
            </div>
            <div className=' flex flex-row items-center gap-2 justify-start'>
              <div className='w-8 h-8 rounded-full bg-gray-400'></div>
              <li className='w-60 bg-slate-400 rounded-xl p-4'> </li>
            </div>
          </ul>
        </div>
      ))}
    </>
  )
}

export default CardComponents
