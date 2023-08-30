import axios, { AxiosInstance } from 'axios';
import { AppConfig } from './app.config';
import { API_CONSTANT, HTTP_STATUS } from 'constants';
import { useConfigStore } from 'store';

const BaseService: AxiosInstance = axios.create({
  timeout: 60000,
  baseURL: AppConfig.apiPrefix,
});

BaseService.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(AppConfig.authPrefix);

    if (accessToken) {
      config.headers[API_CONSTANT.REQUEST_HEADER_AUTH_KEY] = `${API_CONSTANT.TOKEN_TYPE} ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

BaseService.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      switch (error.response.status) {
        case HTTP_STATUS.UNAUTHORIZED:
          useConfigStore.getState().logout();
          break;
        case HTTP_STATUS.UNPROCESSABLE_CONTENT:
          useConfigStore
            .getState()
            .catchError?.({ code: HTTP_STATUS.UNPROCESSABLE_CONTENT, message: error.response.data });
          break;
      }
    }

    return Promise.reject(error);
  },
);

export default BaseService;
