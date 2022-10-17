import axiosInstance from '../axios/HTTPServiceBase';

export const login = async (payload: any) => {
  try {
    const response = await axiosInstance.post('/individual/login', payload);
    return [response, null];
  } catch (error) {
    return [null, error];
  }
};
