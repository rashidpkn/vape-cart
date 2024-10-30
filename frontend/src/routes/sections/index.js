import { Navigate, useRoutes, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// Layouts
import CompactLayout from 'src/layouts/compact/layout';
import AuthClassicLayout from 'src/layouts/auth/classic';
import DashboardLayout from 'src/layouts/dashboard';
import MainLayout from 'src/layouts/main';
// Components
import { SplashScreen, LoadingScreen } from 'src/components/loading-screen';
import { GuestGuard, AuthGuard } from 'src/auth/guard';
import ProductShopDetailsView from 'src/sections/product/view/product-details-view';
import BlogsPage from 'src/pages/blog';
import SignleBlogs from 'src/pages/blog/SinglePAge';

// import HomePage from 'src/pages/product/list';

// Lazy loaded pages
const Verified = lazy(() => import('src/pages/verified'));
const Delivery = lazy(() => import('src/pages/dashboard/delivery'));
const Payout = lazy(() => import('src/pages/dashboard/payout'));
const Boost = lazy(() => import('src/pages/dashboard/boost'));
const CustomerDash = lazy(() => import('src/pages/CustomerDash'));
const ShopPage = lazy(() => import('src/pages/shop'));
const PaymentView = lazy(() => import('src/pages/payment/view/payment-view'));
const HomePage = lazy(() => import('src/pages/product/list'));

// Lazy loaded pages
const FirebaseVerifyPage = lazy(() => import('src/pages/auth/firebase/verify'));
const FirebaseLoginPage = lazy(() => import('src/pages/auth/firebase/login'));
const FirebaseRegisterPage = lazy(() => import('src/pages/auth/firebase/register'));
const IndexPage = lazy(() => import('src/pages/dashboard/app'));
const OverviewEcommercePage = lazy(() => import('src/pages/dashboard/ecommerce'));
const ProductListPage = lazy(() => import('src/pages/dashboard/product/list'));
const ProductCreatePage = lazy(() => import('src/pages/dashboard/product/new'));
const ProductEditPage = lazy(() => import('src/pages/dashboard/product/edit'));
const OrderListPage = lazy(() => import('src/pages/dashboard/order/list'));
const OrderDetailsPage = lazy(() => import('src/pages/dashboard/order/details'));
const InvoiceListPage = lazy(() => import('src/pages/dashboard/invoice/list'));
const InvoiceDetailsPage = lazy(() => import('src/pages/dashboard/invoice/details'));
const UserAccountPage = lazy(() => import('src/pages/dashboard/user/account'));
const ChatPage = lazy(() => import('src/pages/dashboard/chat'));
const BlankPage = lazy(() => import('src/pages/dashboard/blank'));
const Page404 = lazy(() => import('src/pages/404'));
const FaqsPage = lazy(() => import('src/pages/faqs'));
const AboutPage = lazy(() => import('src/pages/about-us'));
const ContactPage = lazy(() => import('src/pages/contact-us'));
const ProductCheckoutPage = lazy(() => import('src/pages/product/checkout'));

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
    {
      path: 'verified',
      element: <Verified />,
    },
    {
      path: '/customer-dashboard',
      element: <CustomerDash />,
    },
    {
      element: (
        <MainLayout>
          <Suspense fallback={<SplashScreen />}>
            <Outlet />
          </Suspense>
        </MainLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: '/shop', element: <ShopPage /> },
        { path: 'about-us', element: <AboutPage /> },
        { path: 'contact-us', element: <ContactPage /> },
        { path: 'blogs', element: <BlogsPage /> },
        { path: 'blogs/1', element: <SignleBlogs /> },
        { path: 'faqs', element: <FaqsPage /> },
        {
          path: 'product',
          children: [
            { path: ':id', element: <ProductShopDetailsView /> },
            { path: 'checkout-2', element: <ProductCheckoutPage /> },
          ],
        },
      ],
    },
    {
      element: (
        <CompactLayout>
          <Suspense fallback={<SplashScreen />}>
            <Outlet />
          </Suspense>
        </CompactLayout>
      ),
      children: [{ path: '404', element: <Page404 /> }],
    },
    {
      path: '/auth',
      children: [
        {
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
        },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout>
            <Suspense fallback={<LoadingScreen />}>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </AuthGuard>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'analytics', element: <OverviewEcommercePage /> },
        {
          path: 'user',
          children: [{ path: 'account', element: <UserAccountPage /> }],
        },
        {
          path: 'product',
          children: [
            { element: <ProductListPage />, index: true },
            { path: 'list', element: <ProductListPage /> },
            { path: 'new', element: <ProductCreatePage /> },
            { path: ':id/edit', element: <ProductEditPage /> },
          ],
        },
        {
          path: 'order',
          children: [
            { element: <OrderListPage />, index: true },
            { path: 'list', element: <OrderListPage /> },
            { path: ':id', element: <OrderDetailsPage /> },
          ],
        },
        {
          path: 'invoice',
          children: [
            { element: <InvoiceListPage />, index: true },
            { path: 'list', element: <InvoiceListPage /> },
            { path: ':id', element: <InvoiceDetailsPage /> },
          ],
        },
        { path: 'delivery', element: <Delivery /> },
        { path: 'support', element: <ChatPage /> },
        { path: 'payout', element: <Payout /> },
        { path: 'boost', element: <Boost /> },
        { path: 'blank', element: <BlankPage /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
