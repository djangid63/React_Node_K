import React from 'react'

const ProductCard = ({ onUpdateName }) => {
  return (
    <div>
      <button onClick={onUpdateName} className='text-2xl p-4 text-white border-yellow-500 border rounded-full m-8 bg-pink-500 text-center'>Click Me</button>
    </div>
  )
}

export default ProductCard
