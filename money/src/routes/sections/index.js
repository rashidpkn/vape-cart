import { Navigate, useRoutes } from 'react-router-dom';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import { lazy } from 'react';
const Page404 = lazy(() => import('src/pages/404'));



export default function Router() {
  return useRoutes([

    ...authRoutes,


    ...dashboardRoutes,




    { path: '/404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
