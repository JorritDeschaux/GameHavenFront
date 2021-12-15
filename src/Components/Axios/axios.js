import axios from 'axios'

const instance = axios.create({
    baseURL: "http://host.docker.internal:5000/api",
});

export default instance;