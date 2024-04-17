// External Libraries
import 'simplebar-react/dist/simplebar.min.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-quill/dist/quill.snow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Internal Components

// css
import './css/font.css';
import './css/index.css';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ReduxProvider from 'src/redux/redux-provider';
import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import ProgressBar from 'src/components/progress-bar';
import MotionLazy from 'src/components/animate/motion-lazy';
import SnackbarProvider from 'src/components/snackbar/snackbar-provider';
import { SettingsProvider, SettingsDrawer } from 'src/components/settings';
import { AuthProvider, AuthConsumer } from 'src/auth/context/firebase';
import { useCallback, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLocation } from './redux/slices/util';

// Main App Component
export default function App() {
  // Custom hook for scrolling to the top
  useScrollToTop();

  // Function to render the main content of the app

  const dispatch = useDispatch();

  const fetchLocation = useCallback(async () => {
    const {
      data: { city, region, country_name, postal },
    } = await axios.get('https://ipapi.co/json');
    dispatch(setLocation({ city, region, country_name, postal }));
  }, []);

  useEffect(() => {
    fetchLocation();
  }, []);

  const renderMainContent = () => (
    <>
      <SettingsDrawer />
      <ProgressBar />
      <AuthConsumer>
        <Router />
      </AuthConsumer>
    </>
  );

  // Main JSX structure of the App component
  return (
    <AuthProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider
          defaultSettings={{
            themeMode: 'light',
            themeDirection: 'ltr',
            themeContrast: 'default',
            themeLayout: 'vertical',
            themeColorPresets: 'default',
            themeStretch: false,
            // Add other default settings as needed
          }}
        >
          <ThemeProvider>
            <MotionLazy>
              <SnackbarProvider>{renderMainContent()}</SnackbarProvider>
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </AuthProvider>
  );
}
