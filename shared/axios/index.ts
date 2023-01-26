import { config } from '@shared/config';
import axios from 'axios';
const baseURL = config.gateway.baseURL;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
