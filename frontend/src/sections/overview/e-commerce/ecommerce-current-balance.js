import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// utils
import { fCurrency } from 'src/utils/format-number';
import { useNavigate } from 'react-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
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
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [payout, setPayout] = useState([]);

  const fetchPayout = useCallback(async () => {
    const { data } = await api.get('/payout', {
      params: {
        fName: user.displayName,
      },
    });

    setPayout(data);
  }, []);

  useEffect(() => {
    fetchPayout();
  }, []);




  const total_sales = useMemo(() => orders.reduce((a, b) => { const item = b.items.find((it) => it.userId === user.id); return a + (item?.price || 0) * (item?.quantity || 0); }, 0), [orders, user.id]);
  const commission = useMemo(() => total_sales * 0.3, [total_sales]);
  const profit = useMemo(() => total_sales * 0.7, [total_sales]);
  const total_requests = useMemo(() => payout.reduce((a, b) => a + b.amount, 0), [payout])
  const completed_request = useMemo(() => payout.reduce((a, b) => (b.status === 'completed' ? a + b.amount : a), 0), [payout]);
  const pending_request = useMemo(() => total_requests - completed_request, [total_requests, completed_request]);
  const available_request = useMemo(() => profit - total_requests, [profit, total_requests]);


  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Typography variant="subtitle2" gutterBottom>
        Avalable Balance for requesting
      </Typography>

      {!!error && <Alert severity="error">{error}</Alert>}

      <Stack spacing={2}>
        <Typography variant="h3">
          {fCurrency(available_request)}
        </Typography>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Total Sales
          </Typography>
          <Typography variant="body2">
            {' '}
            {fCurrency(total_sales)}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Commission
          </Typography>
          <Typography variant="body2">
            {fCurrency(commission)}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Net Profit
          </Typography>
          <Typography variant="body2">
            {fCurrency(profit)}
          </Typography>
        </Stack>

        {/* <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Avalable Balance for requesting
          </Typography>
          <Typography variant="body2">
            {' '}
            {fCurrency(available_request)}
          </Typography>
        </Stack> */}

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Pending Request
          </Typography>
          <Typography variant="body2">
            {' '}
            {fCurrency(pending_request)}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Completed Request (Earned)
          </Typography>
          <Typography variant="body2">
            {' '}
            {fCurrency(completed_request)}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1.5}>
          <Button
            fullWidth
            variant="contained"
            color="warning"
            onClick={() => {
              if (available_request >= 10) {
                sessionStorage.setItem('amount', available_request);
                navigate('/payment');
              } else {
                setError('You must have a minimum balance of AED 10 to request a payout.');
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
