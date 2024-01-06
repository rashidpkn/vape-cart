import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';
// @mui
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import {Select} from '@mui/material';

// components
import Iconify from 'src/components/iconify';
import Chart, { useChart } from 'src/components/chart';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { collection, getDocs } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import api from 'src/utils/api';


// ----------------------------------------------------------------------

export default function EcommerceYearlySales({ title, subheader, chart, ...other }) {

  const [stores, setStores] = useState([])
  const [store, setStore] = useState('Vape Amazon')

  const getUsers = async()=>{
    const querySnapshot = await getDocs(collection(DB, 'users'));
    const users = [];
    
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    
    
    setStores(users.reverse())
    setStore(users[0].storeName)
  }

  useEffect(() => {

    

   getUsers()
  }, [])


  const [storeAnalytics, setStoreAnalytics] = useState([])

  

  useEffect(() => {

    api.get('store-analytics',{params:{storeName:store}}).then(res=>{
      setStoreAnalytics(res.data)
    })  

   const getAnalytics =  setInterval(() => {
      api.get('store-analytics',{params:{storeName:store}}).then(res=>{
        setStoreAnalytics(res.data)
      })  
    },5000 );
  
    return () => {
      clearInterval(getAnalytics)
    }
  }, [store])
  
  



  const { colors, categories,  options } = chart;

  const popover = usePopover();

  const [seriesData, setSeriesData] = useState(new Date().getFullYear().toString());
  

  const chartOptions = useChart({
    colors,
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    xaxis: {
      categories,
    },
    ...options,
  });

  const handleChangeSeries = useCallback(
    (newValue) => {
      popover.onClose();
      setSeriesData(newValue);
    },
    [popover]
  );

  return (
    <>
      <Card {...other}>
        <CardHeader
          title={title}
          subheader={subheader}
          action={
            <Box  display={'flex'} gap={3}>

            
            <ButtonBase
              onClick={popover.onOpen}
              sx={{
                pl: 1,
                py: 0.5,
                pr: 0.5,
                borderRadius: 1,
                typography: 'subtitle2',
                bgcolor: 'background.neutral',
              }}
            >
              {seriesData}

              <Iconify
                width={16}
                icon={popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
                sx={{ ml: 0.5 }}
              />
            </ButtonBase>

            {!!stores.length && <Select size='small' value={store} onChange={e=>setStore(e.target.value)}>
              { stores.map(e=><MenuItem key={e.uid} value={e.storeName}> {e.storeName}</MenuItem>)}              
            </Select>}


            </Box>
          }
        />

        {[
                {
                  year: '2024',
                  data: [
                    {
                      name: 'Traffic',
                      data: [0,1,2,3,4,5,6,7,8,9,10,11,].map(month=>storeAnalytics.filter(analytic=>analytic.storeName===store && new Date(analytic.createdAt).getMonth() === month ).length)
                    },
                    {
                      name: 'Revenue',
                      data: [0,0,0,0,0,0,0,0,0,0,0,0,],
                    },
                  ],
                },
              ].map((item) => (
          <Box key={item.year} sx={{ mt: 3, mx: 3 }}>
            {item.year === seriesData && (
              <Chart dir="ltr" type="area" series={item.data} options={chartOptions} height={364} />
            )}
          </Box>
        ))}
      </Card>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 140 }}>
        {[
                {
                  year: '2024',
                  data: [
                    {
                      name: 'Traffic',
                      data: [0,1,2,3,4,5,6,7,8,9,10,11,].map(month=>storeAnalytics.filter(analytic=>analytic.storeName===store && new Date(analytic.createdAt).getMonth() === month ).length)
                    },
                    {
                      name: 'Revenue',
                      data: [0,0,0,0,0,0,0,0,0,0,0,0,],
                    },
                  ],
                },
              ].map((option) => (
          <MenuItem
            key={option.year}
            selected={option.year === seriesData}
            onClick={() => handleChangeSeries(option.year)}
          >
            {option.year}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}

EcommerceYearlySales.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
