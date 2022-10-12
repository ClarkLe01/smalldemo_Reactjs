import axios from 'axios';

const authFetch = axios.create({
    baseURL:'https://course-api.com',
});

authFetch.interceptors.request.use(()=>{},()=>{})
authFetch.interceptors.response.use(()=>{},()=>{})
export default authFetch;