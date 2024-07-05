// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

//
import { useEffect, useState } from 'react';
import { useAuthContext } from 'src/auth/hooks';
import PaymentSummary from '../payment-summary';
import PaymentMethods from '../payment-methods';

// ----------------------------------------------------------------------

export default function PaymentView() {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [currency, setCurrency] = useState('');
  const [network, setNetwork] = useState('');
  const [customer, setCustomer] = useState({ name: '', phone: '', email: '', address: '' });
  const { user } = useAuthContext();
  useEffect(() => {
    const { displayName, email, phoneNumber } = user;
    setCustomer((prev) => ({ ...prev, name: displayName, email, phone: phoneNumber }));
  }, [user]);

  useEffect(() => {
    if (sessionStorage.amount) {
      setAmount(parseInt(sessionStorage.amount));
    }
  }, []);

  return (
    <Container
      sx={{
        pt: 15,
        pb: 10,
        minHeight: 1,
      }}
    >
      <Grid
        container
        rowSpacing={{ xs: 5, md: 0 }}
        columnSpacing={{ xs: 0, md: 5 }}
        justifyContent="center"
      >
        <Grid xs={12} md={4}>
          <Box
            gap={5}
            sx={{
              p: { md: 5 },
              borderRadius: 2,
              border: (theme) => ({
                md: `dashed 1px ${theme.palette.divider}`,
              }),
            }}
          >
            {/* <PaymentBillingAddress customer={customer} setCustomer={setCustomer} /> */}

            <PaymentMethods setMethod={setMethod} method={method} setCurrency={setCurrency} />
          </Box>
        </Grid>

        {!!method && (
          <Grid xs={12} md={4}>
            <PaymentSummary
              setCurrency={setCurrency}
              currency={currency}
              method={method}
              amount={amount}
              setAmount={setAmount}
              customer={customer}
              setNetwork={setNetwork}
              network={network}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
