// @mui
import { useTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
// hooks

// _mock
import { _appFeatured, _appInvoices } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
// assets
import { SeoIllustration } from 'src/assets/illustrations';
//
import { useAuthContext } from 'src/auth/hooks';
import { Link } from 'react-router-dom';

import BlurLayer from 'src/common/blurlayer';
import { useEffect, useState } from 'react';
import api from 'src/utils/api';
import AppWelcome from '../app-welcome';
import AppFeatured from '../app-featured';
import AppNewInvoice from '../app-new-invoice';

import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const theme = useTheme();

  const { user } = useAuthContext();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, ordersResponse, invoiceResponse] = await Promise.all([
          api.get('products', { params: { userId: user.id } }),
          api.get('/orders'),
          api.get('/invoice'),
        ]);

        const {products} = productsResponse.data;
        const orders = ordersResponse.data;
        const invoice = invoiceResponse.data;

        const filteredOrders = orders.filter((order) =>
          order.items.some((item) => products.some((product) => product.id === item.id))
        );

        const filteredInvoice = invoice.filter((inv) =>
          inv.items.some((item) => products.some((product) => product.id === item.id))
        );

        setOrders(filteredOrders);
        setProducts(products);
        setInvoice(filteredInvoice);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, [user.id]);

  return (
    <Box px={5}>
      <Grid container spacing={3} sx={{ position: 'relative' }}>
        <BlurLayer />
        <Grid xs={12} md={12}>
          <AppWelcome
            title={`Welcome back 👋 \n ${user?.displayName}`}
            description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            img={<SeoIllustration />}
            action={
              <Link to="/dashboard/product/new">
                <Button variant="contained" color="primary">
                  Add Product
                </Button>
              </Link>
            }
          />
        </Grid>

        {/* <Grid xs={12} md={4}>
          <AppFeatured list={_appFeatured} />
        </Grid> */}

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Product"
            percent={0}
            total={products.length}
            chart={{
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Sales"
            percent={0}
            total={orders.length}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Pending Orders"
            percent={0}
            total={
              orders.filter((e) => e.status === 'pending' || e.status === 'Order received').length
            }
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} lg={8}>
          <AppNewInvoice
            title="New Invoice"
            tableData={invoice}
            tableLabels={[
              { id: 'id', label: 'Invoice ID' },
              { id: 'Customers', label: 'Customers' },
              { id: 'Product', label: 'Product' },
              { id: 'Amount', label: 'Amount' },
              { id: 'status', label: 'Status' },
              // { id: '' },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
