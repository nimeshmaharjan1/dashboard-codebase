import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://dev.publicapi-hgie2e.ekbana.net';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
  },
});
const getLocalAccessToken = () => {
  const accessToken = window.localStorage.getItem('accessToken');
  return accessToken;
};
const setLocalAccessToken = (token: string) => {
  const accessToken = window.localStorage.setItem('accessToken', token);
  return accessToken;
};
const clearLocalStorage = () => {
  localStorage.removeItem('accessToken');
  return;
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers!.Authorization = token;
    }
    return config;
  },
  (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401) {
      clearLocalStorage();
      window.location.href = '/login';
      return Promise.reject(error);
    }
    if (error.response.status === 306 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('this is where refresh end-point goes');
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
