import axios from 'axios';

const authFetch = axios.create({
    baseURL:'https://course-api.com',
});
export default authFetch;