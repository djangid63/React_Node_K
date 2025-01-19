import React, { useState } from 'react'
import ProductCard from './Components/ProductCard';


const App = () => {
  const [name, setName] = useState('Devesh')

  const isToggle = () => {
    if (name === "Devesh") {
      setName('Ravi');
    } else {
      setName('Devesh');
    }
  }

  const updateName = () => {
    isToggle()
  }
  return (
    <div className='bg-gray-800 h-screen flex flex-col justify-center items-center'>
      <div>
        <h1 className='font-bold text-4xl text-center text-white'>{name}</h1>
      </div>
      <ProductCard onUpdateName={updateName}/>
    </div>
  )
}

export default App
