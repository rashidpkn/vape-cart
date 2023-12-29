import { Helmet } from 'react-helmet-async';
// sections
import Container from '@mui/material/Container';
import { useSettingsContext } from 'src/components/settings';
import CheckoutDelivery from './checkout-delivery';

// ----------------------------------------------------------------------




export default function Delivery() {
    const settings = useSettingsContext();
  return (
    <>
      <Helmet>
        <title> Dashboard: Delivery</title>
      </Helmet>

      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CheckoutDelivery  />


      </Container>
    </>
  );
}
