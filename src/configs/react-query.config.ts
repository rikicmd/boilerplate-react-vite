import { QueryClientConfig } from "react-query";

export const reactQueryConfig: QueryClientConfig | undefined = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 0,
    },
  },
};
