import { useState, useEffect, useCallback } from 'react';
// @mui
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hook';
import { RouterLink } from 'src/routes/components';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// _mock
import { PRODUCT_STOCK_OPTIONS } from 'src/_mock';

// components
import {
  useTable,
  getComparator,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import api from 'src/utils/api';
import { useAuthContext } from 'src/auth/hooks';
import ProductTableRow from '../product-table-row';
import ProductTableToolbar from '../product-table-toolbar';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Product' },
  { id: 'createdAt', label: 'Create at', width: 160 },
  { id: 'Product Type', label: 'Product Type', width: 160 },
  { id: 'inventoryType', label: 'Stock', width: 160 },
  { id: 'price', label: 'Price', width: 140 },
  { id: 'sales Price', label: 'Sales Price', width: 140 },
  { id: 'status', label: 'Status', width: 110 },
  { id: 'quickEdit', label: 'Quick Edit', width: 110 },
  { id: '', width: 88 },
];

const PUBLISH_OPTIONS = [
  { value: 'published', label: 'Published' },
  { value: 'draft', label: 'Draft' },
];

const defaultFilters = {
  name: '',
  stock: '',
};

// ----------------------------------------------------------------------

export default function ProductListView() {
  const router = useRouter();

  const table = useTable();

  const [tableData, setTableData] = useState([]);

  const [filters, setFilters] = useState(defaultFilters);

  const {
    user: { id },
  } = useAuthContext();

  const fetchProduct = async () => {
    try {
      const {
        data: { products: p },
      } = await api.get('products', { params: { userId: id, perPage: 5000 } });
      if (p?.length) {
        setTableData(p);
      }
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const confirm = useBoolean();

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );


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

  const handleDeleteRow = useCallback(
    async (id) => {
      try {
        await api.delete(`products/${id}`);

        const deleteRow = tableData.filter((row) => row.id !== id);
        setTableData(deleteRow);

        table.onUpdatePageDeleteRow(dataInPage.length);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(async () => {
    try {
      await api.delete('products', {
        data: {
          ids: table.selected,
        },
      });

      const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
      setTableData(deleteRows);
      table.onUpdatePageDeleteRows({
        totalRows: tableData.length,
        totalRowsInPage: dataInPage.length,
        totalRowsFiltered: dataFiltered.length,
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const handleEditRow = useCallback(
    (id) => {
      router.push(paths.dashboard.product.edit(id));
    },
    [router]
  );



  return (
    <>
      <Box px={5}>
        <CustomBreadcrumbs
          heading="Products"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            {
              name: 'Products',
              href: paths.dashboard.product.root,
            },
          ]}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.product.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              New Product
            </Button>
          }
          sx={{ mb: { xs: 3, md: 5 } }}
        />

        <Card>
          <ProductTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            stockOptions={PRODUCT_STOCK_OPTIONS}
            publishOptions={PUBLISH_OPTIONS}
          />

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
                  <>
                    {dataFiltered.map((row) => (
                      <ProductTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onEditRow={() => handleEditRow(row.id)}
                        fetchProduct={fetchProduct}
                      />
                    ))}
                  </>
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
            dense={table.dense}
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

function applyFilter({ inputData, comparator, filters }) {
  const { name, stock } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (product) => product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (stock.length) {
    // inputData = inputData.filter((product) => stock.includes(product.inventoryType));
    inputData = inputData.filter((product) =>
      stock[0] === 'in stock' ? !!product.quantity : !product.quantity
    );
  }

  return inputData;
}
