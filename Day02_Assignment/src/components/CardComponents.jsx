import React from 'react'
import contacts from './../utility/data';

const CardComponents = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className='flex flex-col font-sans-serif items-center justify-center w-auto h-[480px] m-1 p-4 bg-slate-700 rounded-xl text-white'
        >
          <img
            className='w-32 h-32 object-cover rounded-full border-4 border-white'
            src={item.pic}
            alt='Img'
          />
          <h1 className='text-3xl font-bold m-5 text-left'>{item.name}</h1>
          <ul className='text-left space-y-2'>
            <li className='bg-slate-400 font-roboto rounded-xl p-2'>Employee ID : {item.employee_id}</li>
            <li className='bg-slate-400 font-roboto rounded-xl p-2'>Email : {item.email}</li>
            <li className='bg-slate-400 rounded-xl p-2'>contact : {item.phone}</li>
          </ul>
        </div>
      ))}
    </>
  )
}

export default CardComponents
