import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import BaseService from 'configs/service.config';

const ApiService = {
  fetchData<T>(param: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise<AxiosResponse<T>>((resolve, reject) => {
      BaseService(param)
        .then((response: AxiosResponse<T>) => {
          resolve(response);
        })
        .catch((errors: AxiosError) => {
          reject(errors);
        });
    });
  },
};

export default ApiService;
