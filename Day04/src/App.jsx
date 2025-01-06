import React from 'react'
import Navbar from './components/Navbar'
import CardComponents from './components/CardComponents'
import products from './utility/data'


function App() {
  return (
    <div className=' flex flex-col w-screen h-screen justify-center items-center bg-gray-500 '>
      <Navbar></Navbar>
      <CardComponents product={products} ></CardComponents>
    </div>
  )
}

export default App