import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import Card from '@mui/material/Card';
import { doc, updateDoc } from 'firebase/firestore';

import { useEffect, useState } from 'react';
import { DB } from 'src/auth/context/firebase/auth-provider';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function CheckoutDelivery() {
  const [deliverySettings, setDeliverySettings] = useState([
    { enable: false, day: 'Sun', open: '', close: '', lastCall: '' },
    { enable: false, day: 'Mon', open: '', close: '', lastCall: '' },
    { enable: false, day: 'Thu', open: '', close: '', lastCall: '' },
    { enable: false, day: 'Wen', open: '', close: '', lastCall: '' },
    { enable: false, day: 'Tue', open: '', close: '', lastCall: '' },
    { enable: false, day: 'Fri', open: '', close: '', lastCall: '' },
    { enable: false, day: 'Sat', open: '', close: '', lastCall: '' },
  ]);

  const { user } = useAuthContext();

  useEffect(() => {
    console.log(user.deliverySettings);
    if (user.deliverySettings) {
      setDeliverySettings(user.deliverySettings);
    }
  }, [user]);

  const onSubmit = async () => {
    const userRef = doc(DB, 'users', user.uid);
    await updateDoc(userRef, { deliverySettings });
    alert('Updated');
  };

  return (
    <Card>
      <Table sx={{ overflow: 'scroll' }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Days</TableCell>
            <TableCell>Open Time</TableCell>
            <TableCell>Close Time</TableCell>
            <TableCell>Last Call</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliverySettings.map((e) => (
            <Row row={e} setDeliverySettings={setDeliverySettings} />
          ))}
          <TableRow>
            <TableCell colSpan={4} align="right" />
            <TableCell align="center">
              <Button variant="contained" color="success" onClick={() => onSubmit()}>
                Submit
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}

const Row = ({ row, setDeliverySettings }) => {
  const { day, open, close, lastCall, enable } = row;
  return (
    <TableRow key={day}>
      <TableCell>
        <Checkbox
          checked={enable}
          onChange={(e) =>
            setDeliverySettings((prev) => prev.map((item) => {
                if (item.day === day) {
                  return { ...item, enable: e.target.checked, open: '', close: '', lastCall: '' };
                }
                return item;
              }))
          }
        />
      </TableCell>
      <TableCell>{day}</TableCell>
      <TableCell>
        <TextField
          disabled={!enable}
          sx={{ width: '200px' }}
          type="time"
          size="small"
          label="Open Time"
          value={open}
          onChange={(e) =>
            setDeliverySettings((prev) => prev.map((item) => {
                if (item.day === day) {
                  return { ...item, open: e.target.value };
                }
                return item;
              }))
          }
        />
      </TableCell>
      <TableCell>
        <TextField
          disabled={!enable}
          sx={{ width: '200px' }}
          type="time"
          size="small"
          label="Close Time"
          value={close}
          onChange={(e) =>
            setDeliverySettings((prev) => prev.map((item) => {
                if (item.day === day) {
                  return { ...item, close: e.target.value };
                }
                return item;
              }))
          }
        />
      </TableCell>
      <TableCell>
        <TextField
          disabled={!enable}
          sx={{ width: '200px' }}
          type="time"
          size="small"
          label="Last Call"
          value={lastCall}
          onChange={(e) =>
            setDeliverySettings((prev) => prev.map((item) => {
                if (item.day === day) {
                  return { ...item, lastCall: e.target.value };
                }
                return item;
              }))
          }
        />
      </TableCell>
    </TableRow>
  );
};
