import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto gap-8 p-4 py-12 grid md:grid-cols-3 gap-6x'>
        {/* card */}
        <div className='rounded-xl relative '>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white px-4'>
                <p className='font-bold text-2xl px-2 pt-[50px]'>Sun's Out, BOGO's Out</p>
                <p className='px-2 pb-4'>Through 8/26</p>
                <button className='border-black bg-white text-black mx-2 absolute button-4 '>Order Now</button>
            </div>
            <img className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white px-4'>
                <p className='font-bold text-2xl px-2 pt-[50px]'>New Restaurents</p>
                <p className='px-2 pb-4'>Added Dialy</p>
                <button className='border-black bg-white text-black mx-2 absolute button-4 '>Order Now</button>
            </div>
            <img className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2199&q=80" alt="" />
        </div>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white px-4'>
                <p className='font-bold text-2xl px-2 pt-[50px]'>We deliver Deserts</p>
                <p className='px-2 pb-4'>Tasty Treats</p>
                <button className='border-black bg-white text-black mx-2 absolute button-4 '>Order Now</button>
            </div>
            <img className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl hover:scale-105 duration-300' src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards;