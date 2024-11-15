import PropTypes from 'prop-types';
// @mui
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Card, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import { useAuthContext } from 'src/auth/hooks';

export default function AccountBilling() {
  const { user, initialize } = useAuthContext();

  const [contact, setContact] = useState(user.contact);

  useEffect(() => {
    setContact(user.contact);
  }, [user]);

  const onSubmit = async () => {
    const userRef = doc(DB, 'users', user.uid);
    await updateDoc(userRef, { contact });
    alert('Updated');
    initialize();
  };

  return (
    <Grid container spacing={5} disableEqualOverflow>
      <Grid xs={12} md={12} spacing={2}>
        <Card sx={{ p: 1 }}>
          <TextField
            value={contact?.managementName}
            onChange={(e) => setContact((prev) => ({ ...prev, managementName: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Management Name"
          />
          <TextField
            value={contact?.managementContact}
            onChange={(e) => setContact((prev) => ({ ...prev, managementContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Management Contact"
          />
          <TextField
            value={contact?.managementEmail}
            onChange={(e) => setContact((prev) => ({ ...prev, managementEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Management Email"
          />

          <TextField
            value={contact?.financeName}
            onChange={(e) => setContact((prev) => ({ ...prev, financeName: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Finance Name"
          />
          <TextField
            value={contact?.financeContact}
            onChange={(e) => setContact((prev) => ({ ...prev, financeContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Finance Contact"
          />
          <TextField
            value={contact?.financeEmail}
            onChange={(e) => setContact((prev) => ({ ...prev, financeEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Finance Email"
          />

          <TextField
            value={contact?.customerService}
            onChange={(e) => setContact((prev) => ({ ...prev, customerService: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Customer Service"
          />
          <TextField
            value={contact?.customerServiceContact}
            onChange={(e) => setContact((prev) => ({ ...prev, customerServiceContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Customer Service Contact"
          />
          <TextField
            value={contact?.customerServiceEmail}
            onChange={(e) => setContact((prev) => ({ ...prev, customerServiceEmail: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Customer Service Email"
          />

          <TextField
            value={contact?.orderProcessing}
            onChange={(e) => setContact((prev) => ({ ...prev, orderProcessing: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Order Processing"
          />
          <TextField
            value={contact?.orderProcessingContact}
            onChange={(e) => setContact((prev) => ({ ...prev, orderProcessingContact: e.target.value }))}
            sx={{ m: 1, width: '30%' }}
            label="Order Processing Contact"
          />
          <TextField
            value={contact?.orderProcessingEmail}
            onChange={(e) => setContact((prev) => ({ ...prev, orderProcessingEmail: e.target.value }))}
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
