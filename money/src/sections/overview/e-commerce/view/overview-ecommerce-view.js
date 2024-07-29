// @mui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';


import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import api from 'src/utils/api';

import { Box } from '@mui/material';
import EcommerceBestSalesman from '../ecommerce-best-salesman';

import EcommerceWidgetSummary from '../ecommerce-widget-summary';

// ----------------------------------------------------------------------

export default function OverviewEcommerceView() {
  const theme = useTheme();

  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(DB, 'users'));
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });

    setUsers(users.reverse());
  };

  useEffect(() => {
    getUsers();

    api.get('orders').then((res) => {
      setOrders(res.data);
    });

    api.get('products').then((res) => {
      setProducts(res.data);
    });
  }, []);



  return (
    <Box px={5}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Active Partners"
            percent={0}
            total={users.length}
            chart={{
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Total Order Completed"
            percent={0}
            total={orders.filter((e) => e.status === 'completed').length}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Customers"
            percent={0}
            total={0}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Daily Signup"
            percent={0}
            total={0}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Total Product"
            percent={0}
            total={products.count}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Order Cancelled"
            percent={0}
            total={orders.filter((e) => e.status === 'cancelled').length}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <EcommerceBestSalesman
            title="Top Selling Products"
            tableData={products.products?.sort((a, b) => -a.quantity + b.quantity)}
            tableLabels={[
              { id: 'Product', label: 'Product' },
              { id: 'price', label: 'Price' },
              { id: 'Store Name', label: 'Store Name' },
              { id: 'Count', label: 'Count' },
            ]}
          />
        </Grid>

        {/* <Grid xs={12} md={12} lg={12}>
          <EcommerceYearlySales
            title="Store Traffic"
            subheader=""
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
            }}
          />
        </Grid> */}
      </Grid>
    </Box>
  );
}
