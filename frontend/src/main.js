import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
//
import App from './App';
import ReduxProvider from './redux/redux-provider';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <ReduxProvider>

    <BrowserRouter>
      <Suspense>
        <App />
      </Suspense>
    </BrowserRouter>
    </ReduxProvider>
  </HelmetProvider>
);
