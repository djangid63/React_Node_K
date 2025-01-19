import React from 'react'
import ProductCard from './Components/ProductCard';
import Btn from './Components/Btn';

const App = () => {
  const handleClick = () => { }
  return (
    <div className='bg-gray-800 h-screen flex flex-col justify-center items-center'>
      <ProductCard />
      <div>
        <button onClick={handleClick} className='text-2xl p-4 text-white border-yellow-500 border rounded-full m-8 bg-pink-500 text-center'>Click Me</button>
      </div>
    </div>
  )
}

export default App
