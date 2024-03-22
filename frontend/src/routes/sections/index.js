import { Navigate, useRoutes } from 'react-router-dom';
// layouts
// import MainLayout from 'src/layouts/main';
// config
// import { PATH_AFTER_LOGIN } from 'src/config-global';
//
// import { mainRoutes, HomePage } from './main';
import { mainRoutes} from './main';
import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import Verified from 'src/pages/verified';
import { lazy } from 'react';
import CompactLayout from 'src/layouts/compact/layout';
const FirebaseVerifyPage = lazy(() => import('src/pages/auth/firebase/verify'));

// import { componentsRoutes } from './components';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {path:'/auth/firebase/verify',element:
    <CompactLayout>
      <FirebaseVerifyPage/>
    </CompactLayout>
      },
    {path:'verified',element:<Verified/>},
    ...authRoutes,

    ...dashboardRoutes,


    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
