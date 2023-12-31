import React, { useState } from 'react'
import { data} from '../data/data.js'

const Food = () => {
    // console.log(data)
    const [foods,setFoods] = useState(data)

    // filter type burger/pizza/etc.

    const filterType = (Category) =>{
        setFoods(
            data.filter((item)=>{
                return item.category === Category;
            })
        )
    }

    // filter by price

    const filterPrice = (Price) =>{
        setFoods(
            data.filter((item)=>{
                return item.price === Price;
            })
        )
    }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>
            Top Rated Menu Items
        </h1>

        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* filter type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-[#fff]'>All</button>
                    <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={()=>filterType('Pizza')} className='m-1 border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=>filterType('salad')} className='m-1 border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={()=>filterType('chicken')} className='m-1 border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>

                {/* filter price */}
                <div>
                    <p className='font-bold text-gray-700'>Price</p>
                    <div className='flex justify-between flex-wrap '>
                        <button onClick={()=>filterPrice('Rs:500')} className='m-1 border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>RS 500</button>
                        <button onClick={()=>filterPrice('Rs:1000')} className='m-1 border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>RS 1000</button>
                        <button onClick={()=>filterPrice('Rs:1500')} className='m-1 border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>RS 1500</button>
                        <button onClick={()=>filterPrice('Rs:2000')} className='m-1 border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>RS 2000</button>
                        <button onClick={()=>filterPrice('Rs:2500')} className='m-1 border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white'>RS 2500</button>
                    </div>
                </div>
            </div>
        </div>

        {/* display food */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-4'>
            {foods.map((item,index)=>(
                <div key={index} className='border rounded-lg shadow-2xl hover:scale-105 duration-300'>
                    <img  src={item.image} alt={item.name}
                    className='w-full h-[220px] object-cover rounded-t-lg '
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Food