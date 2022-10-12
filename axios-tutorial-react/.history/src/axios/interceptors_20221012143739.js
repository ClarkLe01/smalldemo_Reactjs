import axios from 'axios';

const authFetch = axios.create({
    baseURL: 'https://course-api.com',
});

authFetch.interceptors.request.use(
    (request) => {

    },
    () => {

    });
authFetch.interceptors.response.use(() => { }, () => { });
export default authFetch;