import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// auth
import { GuestGuard } from 'src/auth/guard';
// layouts
import CompactLayout from 'src/layouts/compact';
import AuthClassicLayout from 'src/layouts/auth/classic';
// components
import { SplashScreen } from 'src/components/loading-screen';

// FIREBASE
const FirebaseLoginPage = lazy(() => import('src/pages/auth/firebase/login'));
const FirebaseRegisterPage = lazy(() => import('src/pages/auth/firebase/register'));
const FirebaseVerifyPage = lazy(() => import('src/pages/auth/firebase/verify'));
const FirebaseForgotPasswordPage = lazy(() => import('src/pages/auth/firebase/forgot-password'));

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
    // {
    //   element: (
    //     <CompactLayout>
    //       <Outlet />
    //     </CompactLayout>
    //   ),
    //   children: [
    //     { path: 'verify', element: <FirebaseVerifyPage /> },
    //     { path: 'forgot-password', element: <FirebaseForgotPasswordPage /> },
    //   ],
    // },
  ],
};

export const authRoutes = [
  {
    path: 'auth',
    children: [authFirebase],
  },
];
