// @mui
import { useTheme } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// hooks

// _mock

// components
import { useSettingsContext } from 'src/components/settings';
// assets

import { collection, getDocs } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import { useEffect, useState } from 'react';
import api from 'src/utils/api';

import AppWidgetSummary from '../app-widget-summary';
import AppAreaInstalled from '../app-area-installed';
import AppTopInstalledCountries from '../app-top-installed-countries';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

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

    api.get('/orders').then((res) => {
      setOrders(res.data);
    });
  }, []);

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Box px={5}>
      <Grid container spacing={3}>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Active Partners"
            percent={0}
            total={users.length}
            chart={{
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Revenue"
            percent={0}
            total={orders.reduce((a, b) => a + b.totalAmount, 0)}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Completed Orders"
            percent={0}
            total={orders.filter((e) => e.status === 'completed').length}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppCurrentDownload
            title="Current Download"
            chart={{
              series: [
                { label: 'Mac', value: 0 },
                { label: 'Window', value: 0 },
                { label: 'iOS', value: 0 },
                { label: 'Android', value: 0 },
              ],
            }}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={8}>
          <AppAreaInstalled
            title="Sales and Revenue"
            // subheader={`
            // ${((orders.reduce((a,b)=> new Date(b.createdAt).getFullYear() === 2024  ? a+b.totalAmount :a ,0)/orders.reduce((a,b)=> new Date(b.createdAt).getFullYear() === 2023  ? a+b.totalAmount :a ,0))*100).toString().substring(0,5)}
            // % than last year`}
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
              series: [
                {
                  year: '2023',
                  data: [
                    {
                      name: 'Revenue',
                      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                        (e) =>
                          (orders.reduce(
                            (a, b) =>
                              new Date(b.createdAt).getFullYear() === 2023 &&
                                new Date(b.createdAt).getMonth() === e
                                ? a + b.totalAmount
                                : a,
                            0
                          ) *
                            5) /
                          100
                      ),
                    },
                    {
                      name: 'Sales',
                      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((e) =>
                        orders.reduce(
                          (a, b) =>
                            new Date(b.createdAt).getFullYear() === 2023 &&
                              new Date(b.createdAt).getMonth() === e
                              ? a + b.totalAmount
                              : a,
                          0
                        )
                      ),
                    },
                  ],
                },
                {
                  year: '2024',
                  data: [
                    {
                      name: 'Revenue',
                      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                        (e) =>
                          (orders.reduce(
                            (a, b) =>
                              new Date(b.createdAt).getFullYear() === 2024 &&
                                new Date(b.createdAt).getMonth() === e
                                ? a + b.totalAmount
                                : a,
                            0
                          ) *
                            5) /
                          100
                      ),
                    },
                    {
                      name: 'Sales',
                      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((e) =>
                        orders.reduce(
                          (a, b) =>
                            new Date(b.createdAt).getFullYear() === 2024 &&
                              new Date(b.createdAt).getMonth() === e
                              ? a + b.totalAmount
                              : a,
                          0
                        )
                      ),
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>

        {/* <Grid xs={12} lg={8}>
          <AppNewInvoice
            title="New Invoice"
            tableData={_appInvoices}
            tableLabels={[
              { id: 'id', label: 'Invoice ID' },
              { id: 'category', label: 'Category' },
              { id: 'price', label: 'Price' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopRelated title="Top Sellers" list={_appRelated} />
        </Grid> */}

        <Grid xs={12} md={6} lg={4}>
          <AppTopInstalledCountries title="Top  Partners" list={users} />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopAuthors title="Top Authors" list={ <Grid xs={12} md={6} lg={4}>
          <Stack spacing={3}>
            <AppWidget
              title="Conversion"
              total={0}
              icon="solar:user-rounded-bold"
              chart={{
                series: 0,
              }}
            />

            <AppWidget
              title="Applications"
              total={0}
              icon="fluent:mail-24-filled"
              color="info"
              chart={{
                series: 0,
              }}
            />
          </Stack>
        </Grid> */}
      </Grid>
    </Box>
  );
}
