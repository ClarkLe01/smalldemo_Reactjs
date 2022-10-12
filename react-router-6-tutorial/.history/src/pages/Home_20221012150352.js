import {Link} from 'react-router-dom';
import React from 'react';
const Home = () => {
  return (
    <div className='section'>
      <h2>Home Page</h2>
      <Link to='/about' className='btn'>About</Link>
    </div>
  );
};
export default Home;
