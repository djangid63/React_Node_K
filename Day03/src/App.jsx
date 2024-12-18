import React from 'react'
import categories from './utility/data'
import CardComponents from './components/CardComponents'

function App() {
  return (
    <div>

      <CardComponents categories={categories} />

    </div>
  )
}

export default App