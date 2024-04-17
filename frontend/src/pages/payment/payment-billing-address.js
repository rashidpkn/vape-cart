// @mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


export default function PaymentBillingAddress({ customer, setCustomer }) {


  return (
    <div>
      <Typography variant="h6">Contact Details</Typography>
      <Stack spacing={3} mt={5}>
        <TextField
          fullWidth
          label="First Name"
          onChange={(e) => setCustomer((prev) => ({ ...prev, name: e.target.value }))}
          value={customer.name.charAt(0).toUpperCase() + customer.name.slice(1)}
          inputProps={{ readOnly: true }}
        />
        <TextField
          fullWidth
          label="E-mail"
          onChange={(e) => setCustomer((prev) => ({ ...prev, email: e.target.value }))}
          value={customer.email}
          inputProps={{ readOnly: true }}
        />
        <TextField
          fullWidth
          label="Phone number"
          onChange={(e) => setCustomer((prev) => ({ ...prev, phone: e.target.value }))}
          value={customer.phone}
        />
      </Stack>
    </div>
  );
}
