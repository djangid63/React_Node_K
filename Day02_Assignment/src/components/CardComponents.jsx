import React from 'react'

const CardComponents = ({ items }) => {
  return (
    <>
      {items.map((items) => (
        <div className='flex flex-col font-sans-serif items-center justify-center w-72 h-[480px] m-2 p-4 bg-slate-700 rounded-xl text-white'>
          <img className=' rounded-full border-8 border-white' src={items.pic} alt='Img' />
          <h1 className='text-3xl font-bold m-5 text-left'>{items.name}</h1>
          <ul className='text-left space-y-2'>
            <li className='bg-slate-400 font-roboto rounded-xl p-2'>{items.id}</li>
            <li className='bg-slate-400 font-roboto rounded-xl p-2'>{items.email}</li>
            <li className='bg-slate-400 rounded-xl p-2'>{items.phone}</li>
          </ul>
        </div>
      ))}
    </>
  )
}

export default CardComponents
