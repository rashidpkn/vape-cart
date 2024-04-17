import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { fDateTime } from 'src/utils/format-time';

export default function UserTableRow({ row, orders }) {
  const customers = orders.filter((e) => e.customer.name === row);

  return (
    <TableRow hover>
      <TableCell>{row}</TableCell>

      <TableCell>{customers[0].shippingAddress.phoneNumber}</TableCell>

      <TableCell>{customers[0].shippingAddress.fullAddress}</TableCell>

      <TableCell>{customers.length}</TableCell>
      <TableCell>{customers.reduce((a, b) => a + b.totalAmount, 0)}</TableCell>

      <TableCell>{customers.reduce((a, b) => a + b.totalAmount, 0) / customers.length}</TableCell>

      <TableCell>{fDateTime(customers.reverse()[0].createdAt)}</TableCell>
    </TableRow>
  );
}
