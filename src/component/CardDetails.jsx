import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const cardDetails = useLoaderData()
    const { id } = useParams()
    const cards = cardDetails.find(card => card.id == id)
    console.log('Data is here', cards)
    return (
        <div className='h-screen'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;