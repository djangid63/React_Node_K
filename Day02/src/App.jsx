import React from 'react'
import products from './utility/data'
import CardComponents from './components/CardComponents'

const App = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <CardComponents items={products} />
      </div>
    </>
  )
}

export default App
