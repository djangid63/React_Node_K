import React from 'react'
import categories from './utility/data'
import CardComponents from './components/CardComponents'

function App() {
  return (
    <div className='h-screen w-full grid grid-rows-2 grid-cols-[25%,0%] p-10  bg-slate-900 container mx-auto' >

      <CardComponents categories={categories} />

    </div>
  )
}

export default App