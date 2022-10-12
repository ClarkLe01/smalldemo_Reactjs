import {Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import React from 'react';
const Home = () => {
  return (
    <>
    <NavBar/>
    <div className='section'>
      <h2>Home Page</h2>
      <Outlet/>
    </div>
    </>
  );
};
export default Home;
