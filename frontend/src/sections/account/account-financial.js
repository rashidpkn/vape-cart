import PropTypes from 'prop-types';
// @mui
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Card, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import { useAuthContext } from 'src/auth/hooks';

export default function AccountFinancials() {
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
            label="Account Name"
          />
          <TextField
            value={billing?.managementContact}
            onChange={(e) => setBilling((prev) => ({ ...prev, managementContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Account Number"
          />
          <TextField
            value={billing?.managementEmail}
            onChange={(e) => setBilling((prev) => ({ ...prev, managementEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Account Currency"
          />

          <TextField
            value={billing?.financeName}
            onChange={(e) => setBilling((prev) => ({ ...prev, financeName: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="IBAN"
          />
          <TextField
            value={billing?.financeContact}
            onChange={(e) => setBilling((prev) => ({ ...prev, financeContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Bank Name"
          />
          <TextField
            value={billing?.financeEmail}
            onChange={(e) => setBilling((prev) => ({ ...prev, financeEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Bank Branch"
          />

          <TextField
            value={billing?.customerService}
            onChange={(e) => setBilling((prev) => ({ ...prev, customerService: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Swift Code"
          />
          <TextField
            value={billing?.customerServiceContact}
            onChange={(e) => setBilling((prev) => ({ ...prev, customerServiceContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Tax Registration Number"
          />
          <TextField
            value={billing?.customerServiceEmail}
            onChange={(e) => setBilling((prev) => ({ ...prev, customerServiceEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="TRN Certificate Upload"
            type='file'
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

