import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// auth
import { GuestGuard } from 'src/auth/guard';
// layouts

import AuthClassicLayout from 'src/layouts/auth/classic';
// components
import { SplashScreen } from 'src/components/loading-screen';

// FIREBASE
const FirebaseLoginPage = lazy(() => import('src/pages/auth/firebase/login'));
const FirebaseRegisterPage = lazy(() => import('src/pages/auth/firebase/register'));

const authFirebase = {
  path: 'firebase',
  element: (
    <GuestGuard>
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    </GuestGuard>
  ),
  children: [
    {
      path: 'login',
      element: (
        <AuthClassicLayout>
          <FirebaseLoginPage />
        </AuthClassicLayout>
      ),
    },
    {
      path: 'register',
      element: (
        <AuthClassicLayout title="Unleash your vape line on Vape Amazon – Expand, Excel, Earn!">
          <FirebaseRegisterPage />
        </AuthClassicLayout>
      ),
    },

  ],
};

export const authRoutes = [
  {
    path: 'auth',
    children: [authFirebase],
  },
];
