// @mui
import { useTheme } from '@mui/material/styles';
 
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
// hooks

// _mock
import { _appFeatured,  _appInvoices } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
// assets
import { SeoIllustration } from 'src/assets/illustrations';
//
import { useAuthContext } from 'src/auth/hooks';
import { Link } from 'react-router-dom';

import AppWelcome from '../app-welcome';
import AppFeatured from '../app-featured';
import AppNewInvoice from '../app-new-invoice';



import AppWidgetSummary from '../app-widget-summary';


// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
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

        <Grid xs={12} md={4}>
          <AppFeatured list={_appFeatured} />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Product"
            percent={0}
            total={0}
            chart={{
              series: [0,0,0,0,0,0,0,0,0,0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Sales"
            percent={0}
            total={0}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [0,0,0,0,0,0,0,0,0,0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Pending Orders"
            percent={0}
            total={0}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0,0,0,0,0,0,0,0,0,0],
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

        {/* <Grid xs={12} md={6} lg={8}>
          <AppAreaInstalled
            title="Area Installed"
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
                      name: 'Asia',
                      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    },
                    {
                      name: 'America',
                      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    {
                      name: 'Asia',
                      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    },
                    {
                      name: 'America',
                      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid> */}

        <Grid xs={12} lg={8}>
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
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopRelated title="Top Related Applications" list={_appRelated} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopInstalledCountries title="Top Installed Countries" list={_appInstalled} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
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
    </Container>
  );
}
