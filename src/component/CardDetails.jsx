import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';

const CardDetails = () => {
    const cardDetails = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();

    const cards = cardDetails.find(card => card.id == id);

    const handleDelete = () => {
        const updatedCards = cardDetails.filter(card => card.id != id);
        // If using local state management, update state here
        // If using an API, call the DELETE endpoint here
        console.log('Deleted:', id);
        alert('Card deleted successfully');
        navigate('/'); // Redirect to home or another page after deletion
    };

    return (
        <div className='h-screen p-32'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='h-72' src={cards.image} alt="Album" />
                </figure>
                <div className="card-body font-serif">
                    <h2 className="card-title">Title: {cards.title}</h2>
                    <h2 className="card-title">{cards.name}</h2>
                    <p>{cards.short_description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;