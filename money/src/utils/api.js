import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vape-amazon.com/',
  // baseURL:'/'
  // baseURL:'http://localhost:3000/'
});

export default api;
