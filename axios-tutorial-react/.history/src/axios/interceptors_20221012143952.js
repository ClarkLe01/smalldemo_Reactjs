import axios from 'axios';

const authFetch = axios.create({
    baseURL: 'https://course-api.com',
});

authFetch.interceptors.request.use(
    (request) => {
        request.headers.common['Accept'] = 'application/json';
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);
authFetch.interceptors.response.use(
    (response) => { 
        console.log(response)
        return response

    }, 
    () => { 

    });
export default authFetch;
