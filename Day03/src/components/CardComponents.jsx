import React from 'react'
import categories from './../utility/data';

const CardComponents = ({ categories }) => {
  return (
    <>
      {categories.map((val) => (
        <div className='w-80 h-52 flex  mb-3 hover:shadow-red-300 hover:shadow-2xl rounded-2xl text-slate-200'>
          <div className=' w-48 h-50'>
            <img className='w-full h-full rounded-l-2xl' src='https://i.pinimg.com/originals/a1/f8/87/a1f88733921c820db477d054fe96afbb.jpg' alt='Book'></img>
          </div>
          <div className='bg-gray-600 rounded-r-2xl p-5 flex flex-col justify-between'>
            <div>
              <h1 className='text-2xl font-bold my-2'>{val.name}</h1>
              <p>{val.description}</p>
            </div>
            <button className='w-full h-10 bg-slate-400 rounded-xl hover:bg-slate-200 hover:text-black'>Buy</button>
          </div>
        </div>
      ))}
    </ >
  )
}

export default CardComponents