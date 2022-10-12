import axios from 'axios';

const authFetch = axios.create({
    baseURL: 'https://course-api.com',
});

authFetch.interceptors.request.use(
    (request) => {
        request.headers.common['Accept'] = 'application/json'
        return request
    },
    () => {

    }
);
authFetch.interceptors.response.use(() => { }, () => { });
export default authFetch;