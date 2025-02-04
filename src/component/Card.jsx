import React, { useEffect, useState } from 'react';

const Card = () => {
   const [item,setItem] = useState([])

   useEffect(()=>{
    fetch('/public/Taskapi.json')
    .then(res=> res.json())
    .then(data => setItem(data))
   },[])
//    console.log('this is data',item)
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='text-5xl  font-bold text-cyan-700'>Trello Short</h1>
                <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consequatur magni corrupti inventore, fugiat</p>
            </div>
            <div className='grid grid-cols-3 gap-10 ml-20'>
            {
                item.map(data=>  <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Card;