import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// utils
import { fCurrency } from 'src/utils/format-number';
import { useNavigate } from 'react-router';
import { useCallback, useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import api from 'src/utils/api';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function EcommerceCurrentBalance({
  title,
  sentAmount,
  currentBalance,
  orders = [],
  sx,
  ...other
}) {

  const { user } = useAuthContext()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [payout, setPayout] = useState([])

  const fetchPayout = useCallback(
    async () => {
      const { data } = await api.get('/payout', {
        params: {
          fName: user.displayName
        }
      })

      setPayout(data)
      console.log(data);
    },
    [],
  )

  useEffect(() => {

    fetchPayout()
  }, [])



  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Typography variant="subtitle2" gutterBottom>
        {title}
      </Typography>

      {!!error && <Alert severity='error'>
        {error}
      </Alert>}

      <Stack spacing={2}>
        <Typography variant="h3">AED {
           ((orders.reduce((a, b) => a + b.totalAmount, 0) * 0.2) - payout.reduce((a, b) => a + b.amount, 0) + payout.reduce((a, b) => b.status === 'pending' ? a + b.amount : a, 0)).toFixed(2)
        }  </Typography>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Total Sales
          </Typography>
          <Typography variant="body2"> {fCurrency(orders.reduce((a, b) => a + b.totalAmount, 0))}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Commission (20%)
          </Typography>
          <Typography variant="body2">{fCurrency(orders.reduce((a, b) => a + b.totalAmount, 0) * 0.2)}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Avalable Balance for requesting
          </Typography>
          <Typography variant="body2"> {fCurrency(
            (orders.reduce((a, b) => a + b.totalAmount, 0) * 0.2) - payout.reduce((a, b) => a + b.amount, 0)
          )}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Pending Request
          </Typography>
          <Typography variant="body2"> {fCurrency(payout.reduce((a, b) => b.status === 'pending' ? a + b.amount : a, 0))}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Total Earned
          </Typography>
          <Typography variant="body2"> {fCurrency(payout.reduce((a, b) => b.status === 'completed' ? a + b.amount : a, 0))}</Typography>
        </Stack>

        <Stack direction="row" spacing={1.5}>
          <Button fullWidth variant="contained" color="warning"
            onClick={() => {
              if ((orders.reduce((a, b) => a + b.totalAmount, 0) * 0.2) - payout.reduce((a, b) => a + b.amount, 0) > 10) {
                sessionStorage.setItem('amount', orders.reduce((a, b) => a + b.totalAmount, 0) * 0.2)
                navigate('/payment')
              } else {
                setError("You must have a minimum balance of AED 10 to request a payout.")
              }
            }}
          >
            Request For Payout
          </Button>



        </Stack>
      </Stack>
    </Card>
  );
}

EcommerceCurrentBalance.propTypes = {
  currentBalance: PropTypes.number,
  sentAmount: PropTypes.number,
  sx: PropTypes.object,
  title: PropTypes.string,
};
