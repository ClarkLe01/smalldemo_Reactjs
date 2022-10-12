import React from "react";
import {Link} from 'react-router-dom';
const About = () => {
  return (
    <div className='section'>
      <h2>About</h2>
      <Link to='/' className="btn">Back Home</Link>
    </div>
  );
};
export default About;
