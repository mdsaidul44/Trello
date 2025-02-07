import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const cardDetails = useLoaderData()
    const { id } = useParams()
    const cards = cardDetails.find(card => card.id == id)
    console.log('Data is here', cards)
    return (
        <div className='h-screen p-32'>
            <div class="card  lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='h-72'
                        src={cards.image }
                        alt="Album" />
                </figure>
                <div class="card-body font-serif">
                    <h2 class="card-title">Title: {cards.title}</h2>
                    <h2 class="card-title">{cards.name}</h2>
                    <p>{cards.short_description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;