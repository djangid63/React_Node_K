import React from 'react'
import contacts from './utility/data'
import CardComponents from './components/CardComponents'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <CardComponents items={contacts} />
    </div>
  )
}

export default App
