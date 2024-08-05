import { TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

export default function TableHeading() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell width={150}>SKU</TableCell>
        <TableCell width={250}>Attributes</TableCell>
        <TableCell width={150}>Track Stock</TableCell>
        <TableCell>Stock</TableCell>
        <TableCell>Regular Price</TableCell>
        <TableCell>Sales Price</TableCell>
        <TableCell>Image</TableCell>
        <TableCell width={200}>Add Product</TableCell>
      </TableRow>
    </TableHead>
  );
}
