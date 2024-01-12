// @mui
import {Box,Button,TextField} from '@mui/material';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
// components
import Iconify from 'src/components/iconify';
import { useState } from 'react';

// ----------------------------------------------------------------------



export default function CheckoutDelivery( ) {

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
              <Paper
      variant="outlined"
      key={option.label}
      sx={{
        p: 2.5,
        cursor: 'pointer',
        display: 'flex',
      }}
    >
      {option.label === 'Next Day delivery' && <Iconify icon="carbon:bicycle" width={32} />}
      {option.label === 'Same Day Delivery' && <Iconify icon="carbon:delivery" width={32} />}
      {option.label === '1-2 Hour Delivery' && <Iconify icon="carbon:rocket" width={32} />}

      <ListItemText
        sx={{ ml: 2 }}
        primary={
          <Stack direction="row" alignItems="center">
            <Box component="span" sx={{ flexGrow: 1 }}>
              {option.label}
            </Box>
              {option.label !== 'Free' &&<TextField size='small' sx={{width:'50px',margin:0,padding:0,textAlign:'center'}} type='number' value={option.value} 
              onChange={(ev) =>
                setDelivery((prevDelivery) =>
                  prevDelivery.map((e) =>
                    e.label === option.label ? { ...e, value: Number(ev.target.value) } : e
                  )
                )
              }
               />}
            <Box component="span" sx={{ typography: 'h6',ml:1 }}>{`AED ${option.value}`}</Box>
          </Stack>
        }
        secondary={option.description}
        primaryTypographyProps={{ typography: 'subtitle1', mb: 0.5 }}
        secondaryTypographyProps={{ typography: 'body2' }}
      />
    </Paper>
            ))}
          <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
            <Button variant='contained' color='success' >Save</Button>
          </Box>
          </Box>

    </Card>
  );
}

