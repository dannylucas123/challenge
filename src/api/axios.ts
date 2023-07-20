import axios from 'axios';

const apikey = process.env.API_KEY;

const api = axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: {apikey},
});

export default api;
