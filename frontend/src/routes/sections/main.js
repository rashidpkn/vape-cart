import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// layouts
import MainLayout from 'src/layouts/main';
// import SimpleLayout from 'src/layouts/simple';
import CompactLayout from 'src/layouts/compact';
// components
import { SplashScreen } from 'src/components/loading-screen';
import CustomerDash from 'src/pages/CustomerDash';
import SearchPage from 'src/pages/search';
import ShopPage from 'src/pages/shop';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
const Page404 = lazy(() => import('src/pages/404'));

const FaqsPage = lazy(() => import('src/pages/faqs'));
const AboutPage = lazy(() => import('src/pages/about-us'));
const ContactPage = lazy(() => import('src/pages/contact-us'));

// PRODUCT
const ProductListPage = lazy(() => import('src/pages/product/list'));
const ProductDetailsPage = lazy(() => import('src/pages/product/details'));
const ProductCheckoutPage = lazy(() => import('src/pages/product/checkout'));

export const mainRoutes = [
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
      { element: <ProductListPage />, index: true },
      { path: '/search/:name', element: <SearchPage /> },
      { path: '/shop', element: <ShopPage /> },

      { path: 'about-us', element: <AboutPage /> },
      { path: 'contact-us', element: <ContactPage /> },
      { path: 'faqs', element: <FaqsPage /> },
      {
        path: 'product',
        children: [
          { element: <ProductListPage />, index: true },
          { path: 'list', element: <ProductListPage /> },
          { path: ':id', element: <ProductDetailsPage /> },
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
    children: [

      { path: '404', element: <Page404 /> },
    ],
  },
];
