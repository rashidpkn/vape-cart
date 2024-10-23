import axios from 'axios';

let baseURL = 'https://vapes-uae.com/';

if (import.meta.env.MODE === 'development') {
  // baseURL = 'http://localhost:3000/';
}

const api = axios.create({
  baseURL,
});

export default api;
