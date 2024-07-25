import { useState, useCallback, useEffect } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
// routes
import { paths } from 'src/routes/paths';
// _mock
// hooks
// components
import Label from 'src/components/label';
import Scrollbar from 'src/components/scrollbar';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useTable, TableNoData, TableHeadCustom, TableSelectedAction } from 'src/components/table';
//
import api from 'src/utils/api';
import UserTableRow from './user-table-row';
import { Helmet } from 'react-helmet-async';

const TABLE_HEAD = [
  { id: 'name', label: 'Name' },
  { id: 'phoneNumber', label: 'Phone Number' },
  { id: 'Address', label: 'Address' },
  { id: 'Lifetime Purchase Time', label: 'Lifetime Purchase Time' },
  { id: 'Lifetime Purchase Amount', label: 'Lifetime Purchase Amount' },
  { id: 'Avarage order value', label: 'Avarage Order Value' },
  { id: 'Last Date Of Order', label: 'Last Date Of Order', width: 200 },
];

const defaultFilters = {
  name: '',
  role: [],
  status: 'All',
};

// ----------------------------------------------------------------------

export default function Customers() {
  const table = useTable();
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  const fetchOrders = useCallback(async () => {
    const { data } = await api.get('/orders');
    setOrders(data);
    setCustomers([...new Set(data.map((e) => e.customer.name))]);
  }, []);

  useEffect(() => {
    fetchOrders();
  }, []);

  const [filters, setFilters] = useState(defaultFilters);

  const handleFilters = useCallback(
    (name, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleFilterStatus = useCallback(
    (event, newValue) => {
      handleFilters('status', newValue);
    },
    [handleFilters]
  );

  return (
    <Box px={5}>
      <Helmet>
        <title>Dashboard: Customer</title>
      </Helmet>
      <CustomBreadcrumbs
        heading="Customer"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Customer', href: '/dashboard/customer' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Card>
        <Tabs
          value={filters.status}
          onChange={handleFilterStatus}
          sx={{
            px: 2.5,
            boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {['All', 'VIP', 'Recurring Customer', 'Blacklisted'].map((tab) => (
            <Tab
              style={{ color: `${tab === 'Blacklisted' && '#f00'}` }}
              key={tab}
              iconPosition="end"
              value={tab}
              label={tab}
              icon={
                <Label variant={((tab === 'all' || tab === filters.status) && 'filled') || 'soft'}>
                  {tab === 'All' && customers.length}
                  {tab !== 'All' && 0}
                </Label>
              }
            />
          ))}
        </Tabs>

        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <TableSelectedAction />

          <Scrollbar>
            <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
              <TableHeadCustom headLabel={TABLE_HEAD} />

              <TableBody>
                {customers.map((row) => (
                  <UserTableRow key={row.id} row={row} orders={orders} />
                ))}

                <TableNoData notFound={!customers} />
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>
      </Card>
    </Box>
  );
}
