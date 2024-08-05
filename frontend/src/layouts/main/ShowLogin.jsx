import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ShowLogin() {
  const [loginStatus] = useState(localStorage.loginStatus || false);

  useEffect(() => {
    localStorage.setItem('loginStatus', loginStatus);
  }, [loginStatus]);

  const navigate = useNavigate();
  return (
    <Box>
      <ul
        className="sign_box"
        style={{
          position: 'absolute',
          width: '500px',
          height: 'auto',
          top: '35px',
          left: '-200px',
          overflowX: 'hidden',
          background: '#fff',
          color: '#000',
          display: 'flex',
          flexDirection: 'column',
          gap: '1',
          zIndex: '50',
          padding: '8px',
          border: '1px solid #131921',
        }}
      >
        <Button
          style={{
            background: '#FFD814',
            display: 'flex',
            margin: 'auto',
            width: '200px',
          }}
          onClick={() => {
            if (JSON.parse(loginStatus)) {
              localStorage.clear('loginStatus');
              localStorage.clear('customer');
              navigate('/');
            } else {
              navigate('/customer-dashboard');
            }
          }}
        >
          {JSON.parse(loginStatus) === true ? 'Logout' : 'Login'}
          {/* sign in */}
        </Button>

        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', px: 3 }}
          className="login-type"
        >
          <Typography
            variant="p"
            style={{
              fontSize: '12px',
              display: 'flex',
              justifyContent: 'center',
              padding: '10px 0px',
            }}
          >
            New Customer
            <Link
              to="/customer-dashboard"
              href="#"
              style={{ fontSize: '12px', textDecoration: 'none', paddingLeft: '5px' }}
            >
              <span> Start here.</span>
            </Link>
          </Typography>

          <Typography
            variant="p"
            style={{
              fontSize: '12px',
              display: 'flex',
              justifyContent: 'center',
              padding: '10px 0px',
            }}
          >
            Sell on vape amazon?
            <Link
              to="/auth/firebase/register"
              href="#"
              style={{ fontSize: '12px', textDecoration: 'none', paddingLeft: '5px' }}
            >
              <span> Click here</span>
            </Link>
          </Typography>
        </Box>
        <Divider />
        <Box style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
          <Box className="signUp">
            <Typography variant="p" style={{ fontWeight: 'bold' }}>
              Your List
            </Typography>
            <ul style={{ fontSize: '12px', padding: '0px', listStyleType: 'none' }}>
              {/* <li>
                            <a>Create a Wish List</a>
                          </li> */}
              <li>
                <Link to="/product/checkout-2">Wishlist</Link>
              </li>
            </ul>
          </Box>
          <Box className="signUp">
            <Typography variant="p" style={{ fontWeight: 'bold' }}>
              Your Account
            </Typography>
            <ul style={{ fontSize: '12px', padding: '0px', listStyleType: 'none' }}>
              <li>
                <Link to="/customer-dashboard">Your Account</Link>
              </li>
              <li>
                <Link to="/customer-dashboard">Your Orders</Link>
              </li>
              {/* <li>
                          <a>Your Wish list</a>
                        </li> */}
            </ul>
          </Box>
        </Box>
      </ul>
    </Box>
  );
}
