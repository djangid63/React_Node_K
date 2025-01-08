import React, { useState } from 'react';

const data = [
  { id: 0, name: 'MSI GeForce RTX 3050 Ventus 2X Graphics Card', price: 239, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYziUs38zMTh6u2kKptwRTLp4NDLVoJRzcrVGyXGYjO_2qvjN2fsG6E9rBqEN02XnODeZrq3aD67_HwS056DbcmC9e70PQcbGQtCQa6iaKK0iTY9pyoqJn' },
  { id: 1, name: 'Gigabyte GeForce RTX 4060 Graphics Card 8GB', price: 299, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQs3qBRyRo6l247qVjPg_cdbqcZK8iD-HgM_WiiPgm-isNUBURpXxdbGTkFtswccSWYLY20tPuXelGGnD-JrrbcPtQqURQlOHxVuNem6pKxoBZ-S1B-YaJ_3Q' },
  { id: 2, name: 'MSI Trio GeForce RTX 4090 24GB Graphics Card', price: 2755, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVbxQolLydqS0CHqbY0XQuuHEioPDDmIsGotcJwAkQBBmArlUMeY7nq4KIFBpgqO6x2zHqV2Wr_VHl4jD7ZRUQwgYVaXb39lgxo7Yq2KTRdIVc-NE_i5fYRA' },
  { id: 3, name: 'GIGABYTE GeForce GTX 1650 4G Graphics Card', price: 2755, image: 'https://m.media-amazon.com/images/I/71qxEY6PtiL._AC_UF1000,1000_QL80_.jpg' }
];

const Card = () => {
  const [count, setCount] = useState(Array(data.length).fill(0));

  const increment = (index) => {
    setCount((prevCount) => prevCount.map((item, i) => i === index ? (item < 5 ? item + 1 : 5) : item));
  };

  const decrement = (index) => {
    setCount((prevCount) => prevCount.map((item, i) => i === index ? (item > 0 ? item - 1 : 0) : item));
  };

  let totalPrice = count.reduce((acc, curr, index) => acc + curr * data[index].price, 0);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="w-full max-w-5xl">
        {data.map((item, index) => (
          <div key={item.id} className="bg-gray-800 shadow rounded-lg p-4 mb-6 flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
              <p className="text-xl text-gray-400">Price: ${item.price}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-full focus:outline-none hover:bg-red-600"
                onClick={() => decrement(index)}
              >
                -
              </button>
              <span className="text-lg font-semibold">{count[index]}</span>
              <button
                className="px-3 py-1 bg-green-500 text-white rounded-full focus:outline-none hover:bg-green-600"
                onClick={() => increment(index)}
              >
                +
              </button>
            </div>
            <p className="text-lg font-bold w-40 text-right">Total: ${item.price * count[index]}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 shadow rounded-lg p-6 mt-6 w-full max-w-4xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Grand Total</h2>
          <p className="text-2xl font-bold">${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
