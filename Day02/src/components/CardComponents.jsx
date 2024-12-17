import React from 'react'

const CardComponents = ({ items }) => {
  return (
    <>
      {items.map((items) => (
        <div className="  w-72 h-[100%] m-2 p-4 bg-slate-700 rounded-xl">
          <h1 className=" m-2 text-center  text-indigo-100">
            {items.name}
          </h1>
          <img className="h-72 mx-auto rounded-xl w-60 bg-contain" src={items.image} alt='Img' />
          <p className='m-2 text-indigo-100'>This is a DSLR camera, which comes with 999 pixcel lens can view the mars atmosphere from earth</p>
          <div className="flex justify-between m-1">
            <button className="bg-slate-400  p-2 w-[155px] rounded-xl">Add</button>
            <button className="bg-slate-500  p-2 rounded-xl" >Remove</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardComponents
