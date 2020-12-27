import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_EMAIL,
});

export default api;
