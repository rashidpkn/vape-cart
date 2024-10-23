import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { fDateTime } from 'src/utils/format-time';

export default function UserTableRow({ row, orders }) {
  const customers = orders.filter((e) => e.customer.name === row);

  return (
    <TableRow hover>
      <TableCell>{customers[0].customer.first_name} {customers[0].customer.last_name}</TableCell>

      <TableCell>{customers[0].customer.phone_number}</TableCell>

      <TableCell>{customers[0].customer.address_line_1} <br /> {customers[0].customer.address_line_2} <br /> {customers[0].customer.city} <br /> {customers[0].customer.country}</TableCell>

      <TableCell>{customers.length}</TableCell>
      <TableCell>{customers.reduce((a, b) => a + b.totalAmount, 0)}</TableCell>

      <TableCell>
        {(customers.reduce((a, b) => a + b.totalAmount, 0) / customers.length).toFixed(2)}
      </TableCell>

      <TableCell>{fDateTime(customers.reverse()[0].createdAt)}</TableCell>
    </TableRow>
  );
}
