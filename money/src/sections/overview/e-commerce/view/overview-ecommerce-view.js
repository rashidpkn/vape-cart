// @mui
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// _mock
import {
  _ecommerceSalesOverview,
  _ecommerceBestSalesman,
  _ecommerceLatestProducts,
} from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
// assets

//

import EcommerceYearlySales from '../ecommerce-yearly-sales';
import EcommerceBestSalesman from '../ecommerce-best-salesman';
import EcommerceSaleByGender from '../ecommerce-sale-by-gender';
import EcommerceSalesOverview from '../ecommerce-sales-overview';
import EcommerceWidgetSummary from '../ecommerce-widget-summary';
import EcommerceLatestProducts from '../ecommerce-latest-products';
import EcommerceCurrentBalance from '../ecommerce-current-balance';

// ----------------------------------------------------------------------

export default function OverviewEcommerceView() {

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        {/* <Grid xs={12} md={8}>
          <EcommerceWelcome
            title={`Congratulations! \n ${user?.displayName}`}
            description="Best seller of the month You have done 57.6% more sales today."
            img={<MotivationIllustration />}
            action={
              <Button variant="contained" color="primary">
                Go Now
              </Button>
            }
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceNewProducts list={_ecommerceNewProducts} />
        </Grid> */}

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Product Sold"
            percent={0}
            total={0}
            chart={{
              series: [0,0,0,0,0,0,0,0,0,0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Total Balance"
            percent={0}
            total={0}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [0,0,0,0,0,0,0,0,0,0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Sales Profit"
            percent={0}
            total={0}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0,0,0,0,0,0,0,0,0,0],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <EcommerceSaleByGender
            title="Sale By Gender"
            total={0}
            chart={{
              series: [
                { label: 'Mens', value: 0 },
                { label: 'Womens', value: 0 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <EcommerceYearlySales
            title="Yearly Sales"
            subheader="(+0%) than last year"
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
                  year: '2019',
                  data: [
                    {
                      name: 'Total Income',
                      data: [0,0,0,0,0,0,0,0,0,0,0,0],
                    },
                    {
                      name: 'Total Expenses',
                      data: [0,0,0,0,0,0,0,0,0,0,0,0],
                    },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    {
                      name: 'Total Income',
                      data: [0,0,0,0,0,0,0,0,0,0,0,0],
                    },
                    {
                      name: 'Total Expenses',
                      data: [0,0,0,0,0,0,0,0,0,0,0,0],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <EcommerceSalesOverview title="Sales Overview" data={_ecommerceSalesOverview} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <EcommerceCurrentBalance
            title="Current Balance"
            currentBalance={0}
            sentAmount={0}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <EcommerceBestSalesman
            title="Top Selling Products"
            tableData={_ecommerceBestSalesman}
            tableLabels={[
              { id: 'Product', label: 'Product' },
              { id: 'category', label: 'Category', align: 'center' },
              { id: 'price', label: 'Price', align: 'right' },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <EcommerceLatestProducts title="Latest Products" list={_ecommerceLatestProducts} />
        </Grid>
      </Grid>
    </Container>
  );
}
