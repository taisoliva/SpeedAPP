import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
}

function getStudent(token) {
    const config = createConfig(token)
    const promise = axios.get(`${BASE_URL}/speed`, {}, config)
    return promise
}

const api = {
    login,
    getStudent
}

export default api;