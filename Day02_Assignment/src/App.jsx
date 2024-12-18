import React from 'react'
import contacts from './utility/data'
import CardComponents from './components/CardComponents'

function App() {
  return (
    <div className='flex flex-wrap text-center m-4'>
      <CardComponents items={contacts} />
    </div>
  )
}

export default App
