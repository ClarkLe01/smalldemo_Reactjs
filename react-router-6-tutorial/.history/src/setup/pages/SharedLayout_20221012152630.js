import { Link, Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import React from 'react';

const SharedLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default SharedLayout