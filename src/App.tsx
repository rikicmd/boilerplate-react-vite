import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { reactQueryConfig } from './configs/react-query.config';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { router as routes } from './router';

function App() {
  const queryClient = new QueryClient(reactQueryConfig);
  const router = createBrowserRouter(routes);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<>loading</>} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
