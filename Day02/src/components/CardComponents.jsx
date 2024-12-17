import React from 'react'

const CardComponents = ({ product }) => {
  return (
    <>
      {product.map((product) => (
        <div className="w-72 h-[100%] m-2 p-4 bg-slate-500 rounded-xl">
          <h1 className="text-center">
            {product.name}
          </h1>
          <img className=" rounded-xl w-60 m-1 bg-contain" src={product.image} alt='Img' />
          <p className='m-1'>This is a DSLR camera, which comes with 999 pixcel lens can view the mars atmosphere from earth</p>
          <div className="flex justify-between">
            <button className="bg-slate-300">Add</button>
            <button>Remove</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardComponents
