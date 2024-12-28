import React from 'react'
import CardComponents from './components/CardComponents'
import productData from './utility/data'


function App() {
  return (
    <div className='grid grid-cols-3 m-10 gap-8'>
      <CardComponents products={productData}></CardComponents>
    </div>
  )
}


export default App
