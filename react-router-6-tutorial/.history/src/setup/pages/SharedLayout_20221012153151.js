import {Outlet} from 'react-router-dom';
import React from 'react';
import StyledNavBar from '../components/StyledNavBar';
import NavBar from '../components/NavBar';
const SharedLayout = () => {
    return (
        <>
            <StyledNavBar />
            <Outlet />
        </>
    )
}

export default SharedLayout