import React from 'react'
import categories from './utility/data'
import CardComponents from './components/CardComponents'

function App() {
  return (
    <div
      className='w-[100vw] h-[100vh] flex flex-wrap justify-center items-center gap-5 p-5 bg-slate-900'
    >
      <CardComponents categories={categories} />
    </div>
  )
}

export default App