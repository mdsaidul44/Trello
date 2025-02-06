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
            <div className='text-center my-16 '>
                <h1 className='text-5xl  font-bold text-cyan-700'>Trello Short</h1>
                <p className='mt-2 font-serif'>Trello is a visual project management tool that helps teams organize tasks, collaborate,<br /> and track progress using boards, lists, and cards.</p>
            </div>
            <div className='grid  grid-cols-3 gap-10 lg:ml-20'>
            {
                item.map(data=>  <div className="card font-serif bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={data.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.name} 
                        </h2>
                        <p>{data.short_description}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Details</div>
                            <div className="badge badge-outline">Delate</div>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Card;