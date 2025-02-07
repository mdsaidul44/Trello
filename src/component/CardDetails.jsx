import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const cardDetails = useLoaderData() 
    const {id} = useParams()
    const cards = cardDetails.find(card=>card.id == id)
    console.log('Data is here',cards)
    return (
        <div className='h-screen '>
            This is card details {cards.id}
        </div>
    );
};

export default CardDetails;