import PropTypes from 'prop-types';
// @mui
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import TableContainer from '@mui/material/TableContainer';
// utils

import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';

// ----------------------------------------------------------------------

export default function EcommerceBestSalesman({
  title,
  subheader,
  tableData,
  tableLabels,
  ...other
}) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: 'unset' }}>
        <Scrollbar>
          <Table sx={{ minWidth: 640 }}>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData?.map((row) => (
                <EcommerceBestSalesmanRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    </Card>
  );
}

EcommerceBestSalesman.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function EcommerceBestSalesmanRow({ row }) {
  return (
    <TableRow>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={row.name} src={row.images[0]} sx={{ mr: 2 }} />
        {row.name}
      </TableCell>
      <TableCell>{row.salePrice}</TableCell>
      <TableCell>{row.storeName}</TableCell>
      <TableCell>{row.quantity}</TableCell>
    </TableRow>
  );
}

EcommerceBestSalesmanRow.propTypes = {
  row: PropTypes.object,
};
