// @mui
import { useTheme } from '@mui/material/styles';
 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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
import BlurLayer from 'src/common/blurlayer';


// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Box  px={5}>
      <Grid container  spacing={3} sx={{position:'relative'}}>
        <BlurLayer />
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

    

    
      </Grid>
    </Box>
  );
}
