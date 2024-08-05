import { Navigate, useRoutes } from 'react-router-dom';
// layouts
// import MainLayout from 'src/layouts/main';
// config
// import { PATH_AFTER_LOGIN } from 'src/config-global';
//
// import { mainRoutes, HomePage } from './main';
import Verified from 'src/pages/verified';
import { lazy } from 'react';
import CompactLayout from 'src/layouts/compact/layout';
import { PaymentView } from 'src/pages/payment/view';
import { dashboardRoutes } from './dashboard';
import { authRoutes } from './auth';
import { mainRoutes } from './main';

const FirebaseVerifyPage = lazy(() => import('src/pages/auth/firebase/verify'));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/payment',
      element: <PaymentView />,
    },
    {
      path: '/auth/firebase/verify',
      element: (
        <CompactLayout>
          <FirebaseVerifyPage />
        </CompactLayout>
      ),
    },
    { path: 'verified', element: <Verified /> },
    ...authRoutes,

    ...dashboardRoutes,

    ...mainRoutes,

    // No match 404

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
