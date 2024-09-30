import { Helmet } from 'react-helmet-async';
// sections
import Box from '@mui/material/Box';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import CheckoutDelivery from './checkout-delivery';
import { Button, Grid, TextField } from '@mui/material';
import PickUpDetails from './PickUpDetails';

// ----------------------------------------------------------------------

export default function Delivery() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Pick Up Details</title>
      </Helmet>

      <Box px={5}>
        <CustomBreadcrumbs
          heading="Pick Up Details"
          links={[{}]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

       <PickUpDetails/>

          <CustomBreadcrumbs
          heading="Pick Up Timing"
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
