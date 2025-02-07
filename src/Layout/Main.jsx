import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import Card from '../component/Card'

const Main = () => {
    return (
        <div>
            <div className=''><Navbar/></div>
            <div><Outlet></Outlet></div>
            <div><Footer/></div>
        </div>
    );
};

export default Main;