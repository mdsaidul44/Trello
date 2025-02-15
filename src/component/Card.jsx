import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
   const [item, setItem] = useState([]);

   useEffect(() => {
    fetch('Taskapi.json')
    .then(res => res.json())
    .then(data => setItem(data));
   }, []);

   const handleDelete = (id) => {
       const updatedItems = item.filter(data => data.id !== id);
       setItem(updatedItems);
       console.log('Deleted:', id);
       alert('Card deleted successfully');
   };

    return (
        <div>
            <div className='text-center lg:my-16 '>
                <h1 className='text-5xl font-bold font-serif text-cyan-700'>Trello Short</h1>
                <p className='mt-2 font-serif'>Trello is a visual project management tool that helps teams organize tasks, collaborate,<br /> and track progress using boards, lists, and cards.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 lg:gap-10  lg:mb-20 lg:ml-20'>
            {
                item.map(data => (
                    <div key={data.id} className="card hover:shadow-teal-900 font-serif bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img src={data.image} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {data.name} 
                            </h2>
                            <p>{data.short_description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/details/${data.id}`} className="badge badge-outline">Details</Link>
                                <div className="badge badge-outline cursor-pointer" onClick={() => handleDelete(data.id)}>Delete</div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Card;
