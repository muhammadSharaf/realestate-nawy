import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://0.0.0.0:3000',
});

export default ax;
