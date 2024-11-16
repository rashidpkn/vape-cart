// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import BlurLayer from 'src/common/blurlayer';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';
import { useAuthContext } from 'src/auth/hooks';
import { useEffect, useState } from 'react';
import api from 'src/utils/api';
import EcommerceYearlySales from '../ecommerce-yearly-sales';
import EcommerceBestSalesman from '../ecommerce-best-salesman';
import EcommerceWidgetSummary from '../ecommerce-widget-summary';
import EcommerceCurrentBalance from '../ecommerce-current-balance';

// ----------------------------------------------------------------------

export default function OverviewEcommerceView() {
  const theme = useTheme();

  const { user } = useAuthContext();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, ordersResponse, invoiceResponse] = await Promise.all([
          api.get('products', { params: { userId: user.id } }),
          api.get('/orders'),
          api.get('/invoice'),
        ]);

        const { products } = productsResponse.data;
        const orders = ordersResponse.data;

        const filteredOrders = orders.filter((order) =>
          order.items.some((item) => item.userId === user.uid)
        );



        setOrders(filteredOrders.map(order => {

          const filteredItems = order.items.filter(item => item.userId === user.uid);

          const subTotal = filteredItems.reduce((sum, item) => sum + item.subTotal, 0);
          const totalQuantity = filteredItems.reduce((sum, item) => sum + item.quantity, 0);

          return {
            ...order,
            items: filteredItems,
            subTotal: subTotal,
            totalAmount: subTotal + order.shipping - order.discount,
            totalQuantity: totalQuantity
          };
        }));
        setProducts(products);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, [user.id]);

  console.log(orders);

  return (
    <Box px={5}>
      <CustomBreadcrumbs
        heading="Analytics"
        links={[{}]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Grid container spacing={3} sx={{ position: 'relative' }}>
        <BlurLayer products={products} />

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Product Sold"
            percent={0}
            total={orders?.reduce((a, b) => a + b?.items?.reduce((c, d) => c + d?.quantity, 0), 0)}
            chart={{
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Total Balance"
            percent={0}
            total={orders?.reduce((a, b) => a + b?.items?.reduce((c, d) => c + (d?.quantity * d?.price), 0), 0)}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Sales Profit"
            percent={0}
            total={orders?.reduce((a, b) => a + b?.items?.reduce((c, d) => c + (d?.quantity * d?.price), 0), 0) * 0.7}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }}
          />
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <EcommerceYearlySales
            title="Sales By Month"
            chart={{
              categories: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
                24, 25, 26, 27, 28, 29, 30, 31,
              ],

              series: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => ({
                year: [
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
                ][month],
                data: [
                  {
                    name: 'Total Income',
                    data: [
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
                      23, 24, 25, 26, 27, 28, 29, 30, 31,
                    ].map((date) =>
                      orders.reduce(
                        (a, b) =>
                          new Date(b.createdAt).getMonth() === month &&
                            new Date(b.createdAt).getDate() === date
                            ? a +
                            b?.items?.reduce((c, d) => c + (d?.quantity * d?.price), 0)
                            : a,
                        0
                      )
                    ),
                  },
                ],
              })),

            }}
          />
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <EcommerceYearlySales
            title="Yearly Sales"
            // subheader="(+0%) than last year"
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
                  year: '2024',
                  data: [
                    {
                      name: 'Total Income',
                      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) =>
                        orders.reduce(
                          (a, b) =>
                            new Date(b.createdAt).getMonth() === month
                              ? a +
                              b?.items?.reduce((c, d) => c + (d?.quantity * d?.price), 0)
                              : a,
                          0
                        )
                      ),
                    },
                    // {
                    //   name: 'Total Expenses',
                    //   data: [0,0,0,0,0,0,0,0,0,0,0,0],
                    // },
                  ],
                },
              ],
            }}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={8}>
          <EcommerceSalesOverview title="Sales Overview" data={_ecommerceSalesOverview} />
        </Grid> */}

        <Grid xs={12} md={6} lg={8}>
          <EcommerceBestSalesman
            title="Top Selling Products"
            tableData={products}
            tableLabels={[
              { id: 'Product name', label: 'Product Name' },
              { id: 'category', label: 'Category' },
              { id: 'storeName', label: 'Store Name' },
              { id: 'sku', label: 'SKU' },
              { id: 'salePrice', label: 'Sale Price' },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <EcommerceCurrentBalance
            title="Current Balance"
            currentBalance={0}
            sentAmount={0}
            orders={orders}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <EcommerceLatestProducts title="Latest Products" list={_ecommerceLatestProducts} />
        </Grid> */}
      </Grid>
    </Box>
  );
}
