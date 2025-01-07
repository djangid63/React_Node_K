import React, { useState } from 'react'
import { preconnect } from 'react-dom'
const data = [
  { id: 0, name: 'Product 1', price: 10 },
  { id: 1, name: 'Product 2', price: 20 },
  { id: 2, name: 'Product 3', price: 30 }
]

const card = () => {

  const [count, setCount] = useState(Array(data.length).fill(0))

  const increment = (index) => {
    setCount((prevCount) => prevCount.map((item, i) => i === index ? (item < 5 ? item + 1 : 5) : item))
  }

  const decrement = (index) => {
    setCount((prevCout) => prevCout.map((item, i) => i === index ? (item > 0 ? item - 1 : 0) : item))
  }

  // const [count, setCount] = useState(Object.fromEntries(data.map((item) => [item.id, 0])))

  // const increment = (index) => {
  //   setCount((prevCount) => ({ ...prevCount, [index]: prevCount[index] + 1 }))
  // }

  // const decrement = (index) => {
  //   setCount((prevCount) => ({ ...prevCount, [index]: prevCount[index] - 1 }))
  // }

  return (
    <>
      <div className='grid grid-cols-3 text-2xl gap-10'>
        {data.map((item, index) => (
          <div key={item.id}>
            <div className='flex gap-5'>
              <button onClick={() => decrement(index)} >-</button>
              <div>Cart : {count[index]}</div>
              <button onClick={() => increment(index)}>+</button>
            </div>
            <div className='m-5'>
              Price : ${count[index] > 0 ? item.price * count[index] : item.price}
            </div>
            <div className='m-5'>
              Total Price : ${item.price}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default card