import axiosInstance from '../axios/HTTPServiceBase';
import { IHttp } from '../interfaces/http.interface';
import { ILoginRequest, ILoginResponse } from './../interfaces/auth.interface';

export const login = async (
  payload: ILoginRequest
): Promise<[IHttp<ILoginResponse>, any]> => {
  try {
    const response = await axiosInstance.post('/individual/login', payload);
    return [response, null];
  } catch (error) {
    return [null, error];
  }
};
