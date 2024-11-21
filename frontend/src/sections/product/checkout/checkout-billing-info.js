import PropTypes from 'prop-types';
// @mui
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
// components
import Iconify from 'src/components/iconify';
import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------

export default function CheckoutBillingInfo({ onBackStep }) {
  const billing = useSelector(state => state.checkout.billing)

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader
        title="Address"
        action={
          <Button size="small" startIcon={<Iconify icon="solar:pen-bold" />} onClick={onBackStep}>
            Edit
          </Button>
        }
      />
      <Stack spacing={1} sx={{ p: 3 }}>
        {billing.first_name} {billing.last_name} <br />
        {billing.phone_number} <br />
        {billing.email} <br />
        {billing.address_line_1} <br />
        {billing.address_line_2} <br />
        {billing.city} <br />
        {billing.country} <br />


      </Stack>
    </Card>
  );
}

CheckoutBillingInfo.propTypes = {
  billing: PropTypes.object,
  onBackStep: PropTypes.func,
};
