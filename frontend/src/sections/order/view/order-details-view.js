import { useState, useCallback, useEffect } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { ORDER_STATUS_OPTIONS } from 'src/_mock';
// components
import { useParams } from 'src/routes/hook';
//
import api from 'src/utils/api';

import OrderDetailsItems from '../order-details-item';
import OrderDetailsToolbar from '../order-details-toolbar';

// ----------------------------------------------------------------------

export default function OrderDetailsView() {
  const params = useParams();

  const { id } = params;

  // const currentOrder = _orders.filter((order) => order.id === id)[0];

  const [currentOrder, setCurrentOrder] = useState({});
  const fetchOrder = async () => {
    try {
      const { data } = await api.get(`orders/${id}`);
      data.items = data.items.filter((item) => item.userId !== 'tpquNGEnfDOqPlug2Nh7VdzgcJ33');

      data.subTotal = data.items.reduce((sum, item) => sum + item.subTotal, 0);
      data.totalQuantity = data.items.reduce((sum, item) => sum + item.quantity, 0);
      data.totalAmount = data.subTotal + data.shipping;

      setCurrentOrder(data);
      setStatus(data.status);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  const [status, setStatus] = useState(currentOrder.status);

  const handleChangeStatus = useCallback((newValue) => {
    setStatus(newValue);
  }, []);

  return (
    <Box px={5}>
      <OrderDetailsToolbar
        backLink={paths.dashboard.order.root}
        orderNumber={currentOrder.orderNumber}
        createdAt={currentOrder.createdAt}
        status={status}
        onChangeStatus={handleChangeStatus}
        statusOptions={ORDER_STATUS_OPTIONS}
      />

      <Grid container spacing={3}>
        <Grid xs={12} md={12}>
          <Stack spacing={3} direction={{ xs: 'column-reverse', md: 'column' }}>
            <OrderDetailsItems
              items={currentOrder.items}
              taxes={currentOrder.taxes}
              shipping={currentOrder.shipping}
              discount={currentOrder.discount}
              subTotal={currentOrder.subTotal}
              totalAmount={currentOrder.totalAmount}
            />


          </Stack>
        </Grid>


      </Grid>
    </Box>
  );
}
