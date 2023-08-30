import { App } from 'models/configs';

export const AppConfig: App = {
  apiPrefix: import.meta.env.VITE_API_URL,
  authPrefix: 'token',
};
