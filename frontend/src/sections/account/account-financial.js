import PropTypes from 'prop-types';
// @mui
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Card, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import { useAuthContext } from 'src/auth/hooks';

export default function AccountFinancials() {
  const { user, initialize } = useAuthContext();

  const [finance, setFinance] = useState(user.finance);

  useEffect(() => {
    setFinance(user.finance);
  }, [user]);

  const onSubmit = async () => {
    const userRef = doc(DB, 'users', user.uid);
    await updateDoc(userRef, { finance });
    alert('Updated');
    initialize()
  };

  return (
    <Grid container spacing={5} disableEqualOverflow>
      <Grid xs={12} md={12} spacing={2}>
        <Card sx={{ p: 1 }}>
          <TextField
            value={finance?.managementName}
            onChange={(e) => setFinance((prev) => ({ ...prev, managementName: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Account Name"
          />
          <TextField
            value={finance?.managementContact}
            onChange={(e) => setFinance((prev) => ({ ...prev, managementContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Account Number"
          />
          <TextField
            value={finance?.managementEmail}
            onChange={(e) => setFinance((prev) => ({ ...prev, managementEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Account Currency"
          />

          <TextField
            value={finance?.financeName}
            onChange={(e) => setFinance((prev) => ({ ...prev, financeName: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="IBAN"
          />
          <TextField
            value={finance?.financeContact}
            onChange={(e) => setFinance((prev) => ({ ...prev, financeContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Bank Name"
          />
          <TextField
            value={finance?.financeEmail}
            onChange={(e) => setFinance((prev) => ({ ...prev, financeEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Bank Branch"
          />

          <TextField
            value={finance?.customerService}
            onChange={(e) => setFinance((prev) => ({ ...prev, customerService: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Swift Code"
          />
          <TextField
            value={finance?.customerServiceContact}
            onChange={(e) => setFinance((prev) => ({ ...prev, customerServiceContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Tax Registration Number"
          />


          <Box sx={{ width: '100%', height: '250px', border: '1px solid rgba(145, 158, 171, 0.2)', borderRadius: '8px', m: 1, position: 'relative' }}>

            <Box
              component={'input'}
              // value={finance?.customerServiceEmail}
              onChange={(e) => setFinance((prev) => ({ ...prev, customerServiceEmail: e.target.value }))}
              sx={{ width: '100%', opacity: 0, height: '100%', position: 'absolute', zIndex: 1 }}
              label="TRN Certificate Upload"
              type='file'
            />

            <p style={{ position: 'absolute', margin: 'auto', inset: 0, textAlign: 'center', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Upload TRN Certificate</p>



          </Box>



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

