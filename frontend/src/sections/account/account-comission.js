import PropTypes from 'prop-types';
// @mui
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Card, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import { useAuthContext } from 'src/auth/hooks';

export default function AccountComission() {
  const { user, initialize } = useAuthContext();


  const [commission, setCommission] = useState({
    tier1: 25,
    tier2: 23,
    tier3: 20,
    target1: 50000,
    target2: 100000,
    target3: 150000,
  });


  useEffect(() => {
    if (user.commission) {
      setCommission(_ => ({ ..._, ...user.commission }))
    }
  }, [user])


  return (
    <Grid container spacing={5} disableEqualOverflow sx={{ width: '100%', p: 5 }}>
      <Card sx={{ width: '100%' }}>
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Percentage %</TableCell>
              <TableCell>Target</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Base Commission</TableCell>
              <TableCell>30%</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Teir 1 Rebate</TableCell>
              <TableCell>{commission.tier1}%</TableCell>
              <TableCell>{commission.target1}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Teir 2 Rebate</TableCell>
              <TableCell>{commission.tier2}%</TableCell>
              <TableCell>{commission.target2}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Teir 3 Rebate</TableCell>
              <TableCell>{commission.tier3}%</TableCell>
              <TableCell>{commission.target3}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>Commission Agreemet</TableCell>
              <TableCell>
                <a href={commission.agreement} target="_blank" rel="noopener noreferrer">
                  <Button>View PDF</Button>
                </a>
              </TableCell>

            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Grid>
  );
}

