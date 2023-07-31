import axios from 'axios';
import { REACT_APP_API_URI } from '../env.config';

export const axiosJsonInstance = axios.create({
  baseURL: REACT_APP_API_URI,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  timeout: 12000,
});
