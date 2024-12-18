import React from 'react'
import contacts from './utility/data'
import CardComponents from './components/CardComponents'

function App() {
  return (
    <div className='flex flex-wrap h-screen w-full text-center gap-3 bg-gradient-to-t from-slate-900 to-slate-800'>
      <CardComponents items={contacts} />
    </div>
  )
}

export default App
