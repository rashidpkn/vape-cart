import axios from 'axios';

let baseURL = 'https://vape-amazon.com/'

if(import.meta.env.MODE === 'development'){
  // baseURL = 'http://localhost:3000/'
}



const api = axios.create({
  baseURL
});

export default api;
