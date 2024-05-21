import PropTypes from 'prop-types';
// @mui
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Card, TextField } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import { useAuthContext } from 'src/auth/hooks';


export default function AccountBilling() {

  const { user } = useAuthContext();

  const [billing, setBilling] = useState(user.billing)

  useEffect(() => {
    setBilling(user.billing)
  }, [user])

  console.log(user);

  const onSubmit = async () => {
    const userRef = doc(DB, 'users', user.uid);
    await updateDoc(userRef, { billing });
    alert('Updated')
  }


  return (
    <Grid container spacing={5} disableEqualOverflow>
      <Grid xs={12} md={8} spacing={2}>
        <Card sx={{ p: 1 }}>
          <TextField value={billing?.managementName} onChange={e => setBilling(prev => ({ ...prev, managementName: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Management Name' />
          <TextField value={billing?.managementContact} onChange={e => setBilling(prev => ({ ...prev, managementContact: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Management Contact' />
          <TextField value={billing?.managementEmail} onChange={e => setBilling(prev => ({ ...prev, managementEmail: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Management Email' />

          <TextField value={billing?.financeName} onChange={e => setBilling(prev => ({ ...prev, financeName: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Finance Name' />
          <TextField value={billing?.financeContact} onChange={e => setBilling(prev => ({ ...prev, financeContact: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Finance Contact' />
          <TextField value={billing?.financeEmail} onChange={e => setBilling(prev => ({ ...prev, financeEmail: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Finance Email' />

          <TextField value={billing?.orderName} onChange={e => setBilling(prev => ({ ...prev, orderName: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Order Name' />
          <TextField value={billing?.orderContact} onChange={e => setBilling(prev => ({ ...prev, orderContact: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Order Contact' />
          <TextField value={billing?.orderEmail} onChange={e => setBilling(prev => ({ ...prev, orderEmail: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Order Email' />


          <TextField value={billing?.pickupName} onChange={e => setBilling(prev => ({ ...prev, pickupName: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Pickup Name' />
          <TextField value={billing?.pickupContact} onChange={e => setBilling(prev => ({ ...prev, pickupContact: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Pickup Contact' />
          <TextField value={billing?.pickupEmail} onChange={e => setBilling(prev => ({ ...prev, pickupEmail: e.target.value }))} sx={{ m: 1, width: '30%' }} label='Pickup Email' />

          <div style={{ gridColumn: "1 / -1", display: 'flex', justifyContent: 'flex-end' }} >
            <Button variant='contained' color='success' onClick={() => onSubmit()}>Submit</Button>
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
