import { useEffect } from 'react';
import authFetch from '../axios/custom';
import axios from 'axios';
const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    console.log('custom axios instance');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
