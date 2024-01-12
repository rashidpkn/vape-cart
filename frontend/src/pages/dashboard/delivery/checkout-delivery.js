// @mui
import { Box, Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
// components
import Iconify from 'src/components/iconify';
import { useState } from 'react';
import Type from './type';

// ----------------------------------------------------------------------



export default function CheckoutDelivery() {

  const [delivery, setDelivery] = useState([
    {
      value: 20,
      label: '1-2 Hour Delivery',

    },
    {
      value: 10,
      label: 'Same Day Delivery',

    },
    {
      value: 0,
      label: 'Next Day delivery',
    },
  ])


  return (
    <Card   >
      <CardHeader title="Delivery" />

      <Box
        columnGap={2}
        rowGap={2.5}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
        sx={{ p: 3 }}
      >
        {delivery.map((option) => (
          <Type {...option} setDelivery={setDelivery} />
        ))}
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button variant='contained' color='success' >Save</Button>
        </Box>
      </Box>

    </Card>
  );
}

