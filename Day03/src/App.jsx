import React from 'react'
import categories from './utility/data'
import CardComponents from './components/CardComponents'

function App() {
  return (
    <div className='' >

      <CardComponents categories={categories} />

    </div>
  )
}

export default App