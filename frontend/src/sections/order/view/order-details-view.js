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
import { useSettingsContext } from 'src/components/settings';
//
import api from 'src/utils/api';
import OrderDetailsInfo from '../order-details-info';
import OrderDetailsItems from '../order-details-item';
import OrderDetailsToolbar from '../order-details-toolbar';

// ----------------------------------------------------------------------

export default function OrderDetailsView() {
  const settings = useSettingsContext();

  const params = useParams();

  const { id } = params;

  // const currentOrder = _orders.filter((order) => order.id === id)[0];

  const [currentOrder, setCurrentOrder] = useState({});
  const fetchOrder = async () => {
    try {
      const { data } = await api.get(`orders/${id}`);
      setCurrentOrder(data);
      setStatus(data.status);
    } catch (error) {}
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

            {/* <OrderDetailsHistory history={currentOrder.history} /> */}
          </Stack>
        </Grid>

        {/* <Grid xs={12} md={4}>
          <OrderDetailsInfo
            customer={currentOrder.customer}
            delivery={currentOrder.delivery}
            payment={currentOrder.payment}
            shippingAddress={currentOrder.shippingAddress}
          />
        </Grid> */}
      </Grid>
    </Box>
  );
}
