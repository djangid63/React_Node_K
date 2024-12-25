import React from 'react'
import products from './utility/data'
import CardComponents from './components/CardComponents'

const App = () => {
  return (
    <>
      <div className=" w-screen h-screen flex justify-center items-center flex-wrap bg-slate-950 ">
        <CardComponents items={products} />
      </div>
    </>
  )
}

export default App
