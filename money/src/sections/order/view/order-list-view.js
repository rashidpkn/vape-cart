import { useState, useCallback, useEffect } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hook';
// _mock
import { ORDER_STATUS_OPTIONS } from 'src/_mock';
// utils
import { fTimestamp } from 'src/utils/format-time';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
//
import api from 'src/utils/api';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import OrderTableRow from '../order-table-row';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = [{ value: 'all', label: 'All' }, ...ORDER_STATUS_OPTIONS];

const TABLE_HEAD = [
  { id: 'id', label: 'Order', width: 116 },
  { id: 'name', label: 'Customer' },
  { id: 'partners', label: 'Partners' },
  { id: 'createdAt', label: 'Date', width: 140 },
  { id: 'totalQuantity', label: 'Items', width: 120, align: 'center' },
  { id: 'totalAmount', label: 'Price', width: 140 },
  { id: 'commission', label: 'Commission', width: 140 },
  { id: 'status', label: 'Status', width: 110 },
  { id: '', width: 88 },
];

const defaultFilters = {
  name: '',
  status: 'all',
  startDate: null,
  endDate: null,
};

// ----------------------------------------------------------------------

export default function OrderListView() {
  const [tableData, setTableData] = useState([]);
  const [store, setStore] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState('');

  const fetchOrders = async () => {
    try {
      const { data } = await api.get('/orders');
      setTableData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(DB, 'users'));
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });

    setStore(users);
  };

  useEffect(() => {
    fetchOrders();
    getUsers();
  }, []);

  const table = useTable({ defaultOrderBy: 'orderNumber' });



  const router = useRouter();

  const confirm = useBoolean();

  const filters = defaultFilters;

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const denseHeight = table.dense ? 52 : 72;

  const canReset =
    !!filters.name || filters.status !== 'all' || (!!filters.startDate && !!filters.endDate);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleDeleteRow = useCallback(
    (id) => {
      api.delete('orders', { data: { id } });
      const deleteRow = tableData.filter((row) => row.id !== id);
      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    api.delete('orders', { data: { id: table.selected } });
    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
    setTableData(deleteRows);

    table.onUpdatePageDeleteRows({
      totalRows: tableData.length,
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.dashboard.order.details(id));
    },
    [router]
  );

  const [tab, setTab] = useState('all');

  return (
    <>
      <Box px={5}>
        <CustomBreadcrumbs
          heading="Orders"
          links={[
            {
              name: 'Dashboard',
              href: paths.dashboard.root,
            },
            {
              name: 'Orders',
              href: paths.dashboard.order.root,
            },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card>
          <Tabs
            value={tab}
            onChange={(e, value) => setTab(value)}
            sx={{
              px: 2.5,
              boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
            }}
          >
            {STATUS_OPTIONS.map((tabs) => (
              <Tab
                key={tabs.value}
                iconPosition="end"
                value={tabs.value}
                label={tabs.label}
                icon={
                  <Label
                    variant={
                      ((tabs.value === 'all' || tabs.value === filters.status) && 'filled') ||
                      'soft'
                    }
                    color={
                      (tabs.value === 'processing' && 'info') ||
                      (tabs.value === 'completed' && 'success') ||
                      (tabs.value === 'pending' && 'warning') ||
                      (tabs.value === 'cancelled' && 'error') ||
                      'default'
                    }
                  >

                    {tabs.value === 'all' && tableData.length}
                    {tabs.value === 'processing' &&
                      tableData.filter((e) => e.status === 'processing').length}
                    {tabs.value === 'pending' &&
                      tableData.filter(
                        (e) => e.status === 'Order received' || e.status === 'pending'
                      ).length}

                    {tabs.value === 'In Transit' &&
                      tableData.filter(
                        (e) => e.status === 'In Transit'
                      ).length}
                    {tabs.value === 'completed' &&
                      tableData.filter((e) => e.status === 'completed').length}
                    {tabs.value === 'cancelled' &&
                      tableData.filter((e) => e.status === 'cancelled').length}
                    {tabs.value === 'refunded' &&
                      tableData.filter((e) => e.status === 'refunded').length}
                  </Label>
                }
              />
            ))}
          </Tabs>

          <Box p={1}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Partners</InputLabel>
              <Select
                label="Partners"
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                placeholder="Partners"
                sx={{ minWidth: '200px' }}
                size="small"
              >
                <MenuItem value="">Select a partner</MenuItem>
                {store.map((e) => (
                  <MenuItem value={e.uid} key={e.uid}>{e.displayName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={table.dense}
              numSelected={table.selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
              action={
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={confirm.onTrue}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered
                    .filter(
                      (e) =>
                        (tab === 'all' ||
                          (tab === 'processing' && e.status === 'processing') ||
                          (tab === 'pending' &&
                            (e.status === 'pending' || e.status === 'Order received')) ||
                          (tab === 'completed' && e.status === 'completed') ||
                          (tab === 'cancelled' && e.status === 'cancelled') ||
                          (tab === 'In Transit' && e.status === 'In Transit') ||
                          (tab === 'refunded' && e.status === 'refunded'))
                        &&
                        (selectedPartner ? e.items.find((e) => e.userId === selectedPartner) : true)
                    )
                    .map((row) => (
                      <OrderTableRow
                        store={store}
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onViewRow={() => handleViewRow(row.id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            //
            onChangeDense={table.onChangeDense}
          />
        </Card>
      </Box>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {table.selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filters, dateError }) {
  const { status, name, startDate, endDate } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (order) =>
        order.orderNumber.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        order.customer.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        order.customer.email.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (status !== 'all') {
    inputData = inputData.filter((order) => order.status === status);
  }

  if (!dateError) {
    if (startDate && endDate) {
      inputData = inputData.filter(
        (order) =>
          fTimestamp(order.createdAt) >= fTimestamp(startDate) &&
          fTimestamp(order.createdAt) <= fTimestamp(endDate)
      );
    }
  }

  return inputData;
}
