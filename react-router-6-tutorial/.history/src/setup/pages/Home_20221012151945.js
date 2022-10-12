import {Link,Outlet} from 'react-router-dom';
import React from 'react';
const Home = () => {
  return (
    <div className='section'>
      <h2>Home Page</h2>
      <Outlet/>
    </div>
  );
};
export default Home;
