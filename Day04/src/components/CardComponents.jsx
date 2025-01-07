import React from 'react'
import products from './../utility/data';
const CardComponents = ({ product }) => {
  return (
    <div className='w-[70%] h-[70%] bg-slate-200 p-10 rounded-b-3xl grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='grid grid-cols-2 gap-5 justify-start'>
        {products.map((val) => (
          <>
            <img className='w-32 h-32  rounded-full object-cover' src='https://media.istockphoto.com/id/964111894/vector/poster-of-the-vinyl-record-vector-illustration-on-dark-background.jpg?s=2048x2048&w=is&k=20&c=D8Oi3fRPP0ieUqZgxrUgq2YMT38yt8nqohE2YzTjTzY=' ></img>
            <img className='w-32 h-32 rounded-full object-scale-down' src='https://media.istockphoto.com/id/845844762/vector/poster-of-the-vinyl-record-vector-illustration-on-dark-background.jpg?s=1024x1024&w=is&k=20&c=AOe_QTKGLSEytxl2oQA9qjSe1mvt9GvxHCZcgtTaQZ4=' ></img>
            <img className='w-32 h-32 rounded-full object-cover' src='https://media.istockphoto.com/id/1975058884/vector/modern-abstract-blue-pink-and-purple-gradient-circle-line-on-dark-black-background-design.jpg?s=2048x2048&w=is&k=20&c=aL4cf6InXpsZwm3-CNnS5JJE-QoIbXQvOyNTl-DMMT0=' ></img>
            <img className='w-32 h-32 rounded-full object-cover' src='https://media.istockphoto.com/id/1395795474/vector/retro-music-party-and-vintage-music-cassette-tape-poster-in-retro-desigh-style-disco-party.jpg?s=1024x1024&w=is&k=20&c=G9ARt2Pm5LjG1Oeg9QRBQ5dN80kEwsPQVy7dKD55Hqw=' ></img>
            <img className='w-32 h-32 rounded-full object-cover' src='https://media.istockphoto.com/id/1206894561/photo/headphones-with-vinyl-record-80s-synth-wave-and-retrowave-glowing-circle-futuristic.jpg?s=2048x2048&w=is&k=20&c=tPpBLC2fUFamF-Ubmr3xbJbFTUVAmiBxGYCxhqYQu4A=' ></img>
            <img className='w-32 h-32 rounded-full object-cover' src='https://media.istockphoto.com/id/183680582/vector/vinyl-record-vector.jpg?s=2048x2048&w=is&k=20&c=Eh39Nt2l-5ix1kAEGLoL0-qe6BQAUe-WuXqoooBRLQo='></img>
          </>
        ))}
      </div >
      <div className='grid grid-cols-3 grid-rows-3 gap-10 w-[100%] '>
        {products.flatMap((val) => val.productName.map((item) => (
          <div className='bg-slate-100  flex justify-center items-center text-center rounded-xl w-[100%] text-lg p-2'>
            <div key={item}>
              {item} ({val.category})
            </div>
          </div>
        )))}
      </div>
    </div >
  )
}

export default CardComponents