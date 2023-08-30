import { AxiosRequestConfig } from 'axios';
import { Service } from 'models/configs';
import ApiService from 'services/apiService';

const useService = <T, W>(serviceConfig: Service) => {
  const apiGet = async ({ url, ...other }: AxiosRequestConfig<W>) => {
    return ApiService.fetchData<T[]>({
      url: url || serviceConfig?.url,
      method: 'get',
      ...other,
    });
  };

  const apiShow = async ({ url, id, ...other }: AxiosRequestConfig<W> & { id: string }) => {
    return ApiService.fetchData<T>({
      url: `${url || serviceConfig?.url}/${id}`,
      method: 'get',
      ...other,
    });
  };

  const apiStore = async ({ url, ...other }: AxiosRequestConfig<W> & { data: W }) => {
    return ApiService.fetchData<T>({
      url: url || serviceConfig?.url,
      method: 'post',
      ...other,
    });
  };

  const apiUpdate = async ({ url, data, id, ...other }: AxiosRequestConfig<W> & { data: W; id: string }) => {
    return ApiService.fetchData<T>({
      url: `${url || serviceConfig?.url}/${id}`,
      method: 'put',
      data,
      ...other,
    });
  };

  const apiDestroy = async ({ url, id, ...other }: AxiosRequestConfig<W> & { id: string }) => {
    return ApiService.fetchData<T>({
      url: `${url || serviceConfig?.url}/${id}`,
      method: 'delete',
      ...other,
    });
  };

  const apiCustom = async (axiosRequestConfig: AxiosRequestConfig) => {
    return ApiService.fetchData(axiosRequestConfig);
  };

  return {
    apiGet,
    apiShow,
    apiStore,
    apiUpdate,
    apiDestroy,
    apiCustom,
  };
};

export default useService;
