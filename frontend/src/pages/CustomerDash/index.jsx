import React, { useEffect, useState } from 'react';
import Auth from './Auth';
import Dash from './dash';

export default function CustomerDash() {
  const [loginStatus, setLoginStatus] = useState(localStorage.loginStatus || false);
  const [customer, setCustomer] = useState(
    localStorage.customer || {
      email: '',
      password: '',
      fName: '',
      lName: '',
    }
  );

  useEffect(() => {
    localStorage.setItem('loginStatus', loginStatus);
  }, [loginStatus]);

  if (JSON.parse(loginStatus) === true) {
    return <Dash customer={customer} setLoginStatus={setLoginStatus} />;
  }
  return <Auth setCustomer={setCustomer} customer={customer} setLoginStatus={setLoginStatus} />;
}
