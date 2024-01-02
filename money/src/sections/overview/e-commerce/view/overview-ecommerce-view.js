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
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import api from 'src/utils/api';

// ----------------------------------------------------------------------

export default function OverviewEcommerceView() {

  const theme = useTheme();


  const [orders, setOrders] = useState([])
const [users, setUsers] = useState([])
const [products, setProducts] = useState([])

  const getUsers = async()=>{
    const querySnapshot = await getDocs(collection(DB, 'users'));
    const users = [];
    
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    
    
    setUsers(users.reverse())
  }

  useEffect(() => {

   getUsers()

   api.get('orders').then(res=>{
    setOrders(res.data)
   })

   api.get('products').then(res=>{
    setProducts(res.data)
   })

  }, [])


  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Active Store"
            percent={0}
            total={users.length}
            chart={{
              series: [0,0,0,0,0,0,0,0,0,0],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Total Order Completed"
            percent={0}
            total={orders.filter(e=>e.status === 'completed').length}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [0,0,0,0,0,0,0,0,0,0],
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
              series: [0,0,0,0,0,0,0,0,0,0],
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
              series: [0,0,0,0,0,0,0,0,0,0],
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
              series: [0,0,0,0,0,0,0,0,0,0],
            }}
          />
        </Grid>


        <Grid xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Order Cancelled"
            percent={0}
            total={orders.filter(e=>e.status === 'cancelled').length}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [0,0,0,0,0,0,0,0,0,0],
            }}
          />
        </Grid>

       
        


    

        <Grid xs={12} md={12} lg={12}>
          <EcommerceBestSalesman
            title="Top Selling Products"
            tableData={products.products?.sort((a,b)=>-a.quantity + b.quantity)}
            tableLabels={[
              { id: 'Product', label: 'Product' },
              { id: 'price', label: 'Price', },
              { id: 'Store Name', label: 'Store Name' },
              { id: 'Count', label: 'Count' },
            ]}
          />
        </Grid>

        
      </Grid>
    </Container>
  );
}
