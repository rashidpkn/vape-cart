import { Helmet } from 'react-helmet-async';
// sections
import Box from '@mui/material/Box';
import { useSettingsContext } from 'src/components/settings';
import CheckoutDelivery from './checkout-delivery';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';

// ----------------------------------------------------------------------




export default function Delivery() {
    const settings = useSettingsContext();
  return (
    <>
      <Helmet>
        <title> Dashboard: Delivery</title>
      </Helmet>

      <Box px={5}>
      <CustomBreadcrumbs
          heading="Delivery"
          links={[
            {}
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />
      <CheckoutDelivery  />


      </Box>
    </>
  );
}
