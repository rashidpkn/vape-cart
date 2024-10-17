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
import { collection, getDocs } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import OrderDetailsInfo from '../order-details-info';
import OrderDetailsItems from '../order-details-item';
import OrderDetailsToolbar from '../order-details-toolbar';
import { Card, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// ----------------------------------------------------------------------

export default function OrderDetailsView() {


  const [store, setStore] = useState([])


  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(DB, 'users'));
    const users = [];

    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });

    setStore(users);
  };

  useEffect(() => {
    getUsers();
  }, []);





  const params = useParams();

  const { id } = params;

  // const currentOrder = _orders.filter((order) => order.id === id)[0];

  const [currentOrder, setCurrentOrder] = useState({});
  const fetchOrder = async () => {
    try {
      const { data } = await api.get(`orders/${id}`);
      setCurrentOrder(data);
      setStatus(data.status);
    } catch (error) { }
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  const [status, setStatus] = useState(currentOrder.status);

  const handleChangeStatus = useCallback(async (newValue) => {
    await api.patch(`/orders/status/${id}`, { status: newValue });
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
        <Grid xs={12} md={8}>
          <Stack spacing={3} direction={{ xs: 'column-reverse', md: 'column' }}>
            {/* <OrderDetailsItems
              store={store}
              items={currentOrder.items}
              taxes={currentOrder.taxes}
              shipping={currentOrder.shipping}
              discount={currentOrder.discount}
              subTotal={currentOrder.subTotal}
              totalAmount={currentOrder.totalAmount}
            /> */}

            <Card>
              <Table>
                <TableHead>
                  <TableRow>

                    <TableCell>Product Details</TableCell>
                    <TableCell>Partner</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell>Total Value</TableCell>
                    <TableCell>Commission</TableCell>
                    <TableCell>Net</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentOrder?.items?.map(item => (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>   {store?.find((s) => s.uid === item.userId)?.displayName}</TableCell>
                      <TableCell>x{item.quantity}</TableCell>
                      <TableCell>AED {item.price}</TableCell>
                      <TableCell>AED {item.price * item.quantity}</TableCell>
                      <TableCell>AED {(item.price * item.quantity * 0.3).toFixed(2)}</TableCell>
                      <TableCell>AED {(item.price * item.quantity * 0.7).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}


                  <TableRow>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell>Subtotal</TableCell>
                    <TableCell>AED {currentOrder?.subTotal}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell>Discount</TableCell>
                    <TableCell>AED {currentOrder?.discount}</TableCell>
                  </TableRow>


                  <TableRow>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>AED {currentOrder?.totalAmount}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell>VAT 5%</TableCell>
                    <TableCell>AED {(currentOrder?.totalAmount * 0.05).toFixed(2)}</TableCell>
                  </TableRow>


                  <TableRow>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell>Shipping</TableCell>
                    <TableCell>AED {currentOrder?.shipping}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell>Refunded</TableCell>
                    <TableCell>AED {currentOrder?.refunded}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={3}></TableCell>
                    <TableCell>Grand Total</TableCell>
                    <TableCell>AED {((currentOrder.totalAmount * 1.05) + currentOrder?.shipping - currentOrder?.refunded).toFixed(2)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </Stack>
        </Grid>

        <Grid xs={12} md={4}>
          <OrderDetailsInfo
            customer={currentOrder.customer}
            delivery={currentOrder.delivery}
            payment={currentOrder.payment}
            shippingAddress={currentOrder.shippingAddress}

          />
        </Grid>
      </Grid>
    </Box>
  );
}
