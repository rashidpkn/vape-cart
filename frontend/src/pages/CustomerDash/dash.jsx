import React, { useCallback, useEffect, useState } from 'react';
import Header from 'src/layouts/main/header';
import './dash.css';
import { Button, Card, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import api from 'src/utils/api';

export default function Dash({ customer, setLoginStatus }) {
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(async () => {
    const { data } = await api.get('/orders', {
      params: {
        email: customer.email,
      },
    });
    setOrders(data);
  }, [customer]);

  useEffect(() => {
    if(!!customer.email){

      getOrders();
    }
  }, [customer]);

  return (
    <div>
      <Header />

      <div
        className="your-orders-content-container__content js-yo-main-content snipcss-i7lG7"
        style={{ margin: 'auto', marginTop: '200px' }}
      >
        <div
          className="a-section a-spacing-medium a-spacing-top-small"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <ul className="breadcrumbs">
            <li className="breadcrumbs__crumb">
              <a className="a-link-normal">Your Account</a>
            </li>
            <li className="breadcrumbs__crumb breadcrumbs__crumb--divider">›</li>
            <li className="breadcrumbs__crumb breadcrumbs__crumb--current">
              <span className="a-color-state">Your Orders</span>
            </li>
          </ul>

          <Button
            size="small"
            variant="contained"
            color="warning"
            onClick={() => setLoginStatus(false)}
          >
            Logout
          </Button>
        </div>
        <div className="a-row a-spacing-medium">
          <div className="a-column a-span6">
            <h1>Your Orders</h1>
          </div>
        </div>
        <div className="a-section a-spacing-medium page-tabs">
          <ul role="tablist">
            <li className="page-tabs__tab page-tabs__tab--selected" role="tab">
              Orders
            </li>
            {/* <li className="page-tabs__tab" role="tab">
            <a className="a-link-normal" href="/gp/buyagain?ref_=ppx_yo2ov_dt_b_tb_buy_again">Buy Again</a>
          </li> */}
          </ul>
        </div>
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Id</TableCell>

                <TableCell>Product Name</TableCell>

                <TableCell>Price</TableCell>

                <TableCell>Quantity</TableCell>

                <TableCell>Total Amount</TableCell>

                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((e) => (
                <TableRow>
                  <TableCell># {e.id}</TableCell>
                  <TableCell>{e.items[0].name}</TableCell>
                  <TableCell>AED {e.items[0].price}</TableCell>
                  <TableCell>{e.items[0].quantity}</TableCell>
                  <TableCell>AED {e.totalAmount}</TableCell>
                  <TableCell>{e.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
