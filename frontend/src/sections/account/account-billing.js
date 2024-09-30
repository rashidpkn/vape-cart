import PropTypes from 'prop-types';
// @mui
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Card, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import { useAuthContext } from 'src/auth/hooks';

export default function AccountBilling() {
  const { user } = useAuthContext();

  const [billing, setBilling] = useState(user.billing);

  useEffect(() => {
    setBilling(user.billing);
  }, [user]);

  const onSubmit = async () => {
    const userRef = doc(DB, 'users', user.uid);
    await updateDoc(userRef, { billing });
    alert('Updated');
  };

  return (
    <Grid container spacing={5} disableEqualOverflow>
      <Grid xs={12} md={12} spacing={2}>
        <Card sx={{ p: 1 }}>
          <TextField
            value={billing?.managementName}
            onChange={(e) => setBilling((prev) => ({ ...prev, managementName: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Management Name"
          />
          <TextField
            value={billing?.managementContact}
            onChange={(e) => setBilling((prev) => ({ ...prev, managementContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Management Contact"
          />
          <TextField
            value={billing?.managementEmail}
            onChange={(e) => setBilling((prev) => ({ ...prev, managementEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Management Email"
          />

          <TextField
            value={billing?.financeName}
            onChange={(e) => setBilling((prev) => ({ ...prev, financeName: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Finance Name"
          />
          <TextField
            value={billing?.financeContact}
            onChange={(e) => setBilling((prev) => ({ ...prev, financeContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Finance Contact"
          />
          <TextField
            value={billing?.financeEmail}
            onChange={(e) => setBilling((prev) => ({ ...prev, financeEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Finance Email"
          />

          <TextField
            value={billing?.customerService}
            onChange={(e) => setBilling((prev) => ({ ...prev, customerService: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Customer Service"
          />
          <TextField
            value={billing?.customerServiceContact}
            onChange={(e) => setBilling((prev) => ({ ...prev, customerServiceContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Customer Service Contact"
          />
          <TextField
            value={billing?.customerServiceEmail}
            onChange={(e) => setBilling((prev) => ({ ...prev, customerServiceEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Customer Service Email"
          />

          <TextField
            value={billing?.orderProcessing}
            onChange={(e) => setBilling((prev) => ({ ...prev, orderProcessing: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Order Processing"
          />
          <TextField
            value={billing?.orderProcessingContact}
            onChange={(e) => setBilling((prev) => ({ ...prev, orderProcessingContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Order Processing Contact"
          />
          <TextField
            value={billing?.orderProcessingEmail}
            onChange={(e) => setBilling((prev) => ({ ...prev, orderProcessingEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Order Processing Email"
          />

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="success" onClick={() => onSubmit()}>
              Submit
            </Button>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

AccountBilling.propTypes = {
  addressBook: PropTypes.array,
  cards: PropTypes.array,
  invoices: PropTypes.array,
  plans: PropTypes.array,
};
