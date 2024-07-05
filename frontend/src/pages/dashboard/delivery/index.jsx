import { Helmet } from 'react-helmet-async';
// sections
import Box from '@mui/material/Box';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import CheckoutDelivery from './checkout-delivery';

// ----------------------------------------------------------------------

export default function Delivery() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Delivery Settings</title>
      </Helmet>

      <Box px={5}>
        <CustomBreadcrumbs
          heading="Delivery Settings"
          links={[{}]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />
        <CheckoutDelivery />
      </Box>
    </>
  );
}
