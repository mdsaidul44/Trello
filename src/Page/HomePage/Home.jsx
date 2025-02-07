import React from 'react';
import Banner from '../../component/Banner';
import Card from '../../component/Card';

const Home = () => {
    return (
        <div>
            <div><Banner/></div>
            <div><Card></Card></div>
            <div className='lg:m-20'>
            <h1 className='text-7xl mb-4 underline text-teal-600'>Trello</h1>
            <p className='lg:w-[700px] text-lg'>Trello is a visual project management tool that uses a Kanban-style board system to help individuals and teams organize tasks, collaborate, and track progress efficiently. It allows users to create boards, lists, and cards to represent projects, workflow stages, and individual tasks. With features like task assignments, due dates, labels, attachments, and integrations with other productivity tools, Trello simplifies project planning and enhances team collaboration.</p>
        </div>
        </div>
    );
};

export default Home;