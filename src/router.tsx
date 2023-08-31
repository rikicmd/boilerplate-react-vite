import { RouteObject } from 'react-router-dom';
import { AdminLayout, BlankLayout } from './layouts';
import { URL } from './constants';
import React from 'react';
import { protectedRouteConfig } from 'configs/route';

export const router: RouteObject[] = [
  {
    path: '',
    element: <BlankLayout />,
    children: [
      {
        path: '',
        Component: React.lazy(() => import('./pages/LoginPage')),
      },
    ],
  },
  {
    path: URL.ADMIN_URL,
    element: <AdminLayout />,
    children: protectedRouteConfig,
  },
  {
    path: '*',
    Component: React.lazy(() => import('./pages/NotFoundPage')),
  },
];
