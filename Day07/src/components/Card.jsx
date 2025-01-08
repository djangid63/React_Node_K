import React, { useState } from 'react';

const data = [
  { id: 0, name: 'Product 1', price: 10 },
  { id: 1, name: 'Product 2', price: 20 },
  { id: 2, name: 'Product 3', price: 30 }
];

const Card = () => {
  const [count, setCount] = useState(Array(data.length).fill(0));

  const increment = (index) => {
    setCount((prevCount) => prevCount.map((item, i) => i === index ? (item < 5 ? item + 1 : 5) : item));
  };

  const decrement = (index) => {
    setCount((prevCount) => prevCount.map((item, i) => i === index ? (item > 0 ? item - 1 : 0) : item));
  };

  let totalPrice = 0;
  for (let i = 0; i < count.length; i++) {
    totalPrice += count[i] * data[i].price;
  }

  return (
    <div className='p-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {data.map((item, index) => (
          <div key={item.id} className='border p-5 rounded-lg shadow-lg bg-white'>
            <h2 className='text-2xl font-bold mb-4'>{item.name}</h2>
            <div className='flex justify-between items-center mb-4'>
              <button className='bg-red-500 text-white px-3 py-1 rounded-full' onClick={() => decrement(index)}>-</button>
              <div className='text-lg'>Cart: {count[index]}</div>
              <button className='bg-green-500 text-white px-3 py-1 rounded-full' onClick={() => increment(index)}>+</button>
            </div>
            <div className='text-lg mb-2'>
              Price: ${item.price}
            </div>
            <div className='text-lg font-bold'>
              Total Price: ${item.price * count[index]}
            </div>
          </div>
        ))}
      </div>
      <div className='text-2xl font-bold mt-10'>
        Total Price of All Items: ${totalPrice}
      </div>
    </div>
  );
};

export default Card;
