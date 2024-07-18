// @mui

import { Link, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';



import './header.css';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



import api from 'src/utils/api';
// var data =require('/src/map/PRODUCT_MAP.json')

import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, CssBaseline, Typography } from '@mui/material';
import { AddShoppingCart, ArrowDropDown, LocationOn, Search } from '@mui/icons-material';
import Modal from '@mui/material/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from 'src/redux/slices/util';
import { allItems } from '../dashboard/config-navigation';
import BottomHeader from './BottomHeader';

import ShowLogin from './ShowLogin';
// ----------------------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  outline: 'none',
  boxShadow: 24,
};

export default function Header({ set }) {
  const navigate = useNavigate();

  const { city, postal } = useSelector((state) => state.util.location);
  const dispatch = useDispatch();

  const [showAll, setShowAll] = useState(false);

  const [showAllSign, setShowAllSign] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [result, setResults] = useState([]);
  const [input, setInput] = useState('');

  const fetchProducts = useCallback(async () => {
    const {
      data: { products },
    } = await api.get('/products', { params: { name: input, productGroup: "parent" } });
    setResults(products);
  }, [input]);

  useEffect(() => {
    fetchProducts();
  }, [input]);

  return (
    <AppBar>
      <CssBaseline />
      <Box style={{ width: '100%', height: '100%' }}>
        <Box
          className="md-px md-display md-bg"
          style={{
            width: '100%',
            background: '#131921',
            color: '#fff',
            paddingRight: '16px',
            paddingLeft: '16px',
            paddingTop: '0px',
            paddingBottom: '0px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            style={{
              paddingRight: '8px',
              paddingLeft: '8px',
              height: '80%',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            className="navborder logo_padding"
          >
            <a href="/">
              <img
                src="/assets/images/logo/logo_single.webp"
                className="logo_img"
                width={96}
                height={50}
                style={{
                  marginTop: '8px',
                  objectFit: 'contain',
                  display: 'flex',
                  alignItems: 'center',
                }}
                alt="logo"
              />
            </a>
          </Box>

          <Box
            onClick={handleOpen}
            style={{
              paddingRight: '8px',
              paddingLeft: '8px',
              paddingBottom: '12px',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            className="navborder location"
          >
            <LocationOn className="location_icon" style={{ marginTop: '20px' }} />
            <Typography
              variant="p"
              style={{
                fontSize: '12px',
                lineHeight: '14px',
                height: '14px',
                fontWeight: '400',
                color: '#ccc',
              }}
            >
              <span className="delivery_info">
                Delivering to {city} {postal}
              </span>
              <br />{' '}
              <span
                style={{ fontSize: '14px', fontWeight: '700', lineHeight: '15px', color: '#fff' }}
              >
                <span className="update_location">Update location</span>
              </span>
            </Typography>
          </Box>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ padding: '10px', paddingLeft: '20px', background: '#e6e6e6' }}
              >
                Choose your location
              </Typography>
              <Box style={{ borderBottom: '1px solid #ccc' }} />
              <Box style={{ padding: '20px', paddingTop: '10px' }}>
                <Typography id="modal-modal-description" variant="p" sx={{ fontSize: '13px' }}>
                  Select a delivery location to see product availability and delivery options
                </Typography>
                <Link to="/auth/firebase/login" style={{ color: '#000' }}>
                  <Button
                    type="button"
                    style={{ background: '#FFD814', width: '100%', marginTop: '10px' }}
                  >
                    <a>Sign in to see your address</a>
                  </Button>
                </Link>
                <Box
                  style={{
                    borderBottom: '1px solid #ccc',
                    paddingTop: '20px',
                    position: 'relative',
                  }}
                />
                <Typography
                  variant="p"
                  style={{
                    fontSize: '12px',
                    background: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto',
                    maxWidth: '170px',
                    position: 'absolute',
                    bottom: '60px',
                    left: '0',
                    right: '0',
                    width: '100%',
                  }}
                >
                  or enter an pincode
                </Typography>
              </Box>
              <Box style={{ padding: '20px', paddingTop: '0px' }}>
                <input
                  type="number"
                  style={{
                    width: '250px',
                    height: '30px',
                    borderRadius: '5px',
                    outline: 'none',
                    border: '1px solid #000',
                  }}
                  onChange={(e) => {
                    dispatch(setLocation({ postal: e.target.value }));
                  }}
                />
                <Button
                  type="button"
                  style={{
                    border: '1px solid #000',
                    width: '100px',
                    height: '30px',
                    marginLeft: '5px',
                    fontWeight: '300',
                  }}
                >
                  Apply
                </Button>
              </Box>
            </Box>
          </Modal>

          <Box
            className="search_bar"
            style={{
              height: '40px',
              borderRadious: '6px',
              display: 'flex',
              flexGrow: '1',
              position: 'relative',
              paddingRight: '16px',
              paddingLeft: '16px',
            }}
          >
            <span
              onClick={() => setShowAll(!showAll)}
              className="bg-gray"
              style={{
                width: '56px',
                fontSize: '14px',
                color: '#131921',
                borderTopLeftRadius: '6px',
                borderBottomLeftRadius: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              All
              <span />
              <ArrowDropDown />
            </span>
            {showAll && (
              <Box>
                <ul
                  style={{
                    position: 'absolute',
                    width: '224px',
                    height: '320px',
                    top: '24px',
                    left: '15px',
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    background: '#fff',
                    color: '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1',
                    zIndex: '50',
                    padding: '8px',
                    border: '1px solid #131921',
                    cursor: 'pointer',
                  }}
                >
                  {allItems.map((item) => (
                    <li style={{ cursor: 'poniter' }}>{item.title}</li>
                  ))}
                </ul>
              </Box>
            )}

            {/* <input type="text" value={input} onChange={(e) => handleChange(e.target.value)} placeholder='Search Products' style={{ height: '100%', fontSize: '16px', color: '#131921', flexGrow: '1', outline: 'none', border: 'none', paddingRight: '8px', paddingLeft: '8px' }}  /> */}

            <Autocomplete
              className="products"
              // sx={{ width: 300 }}
              style={{
                height: '100%',
                fontSize: '16px',
                color: '#131921',
                flexGrow: '1',
                outline: 'none',
                border: 'none',
              }}
              options={result}
              autoHighlight
              getOptionLabel={(option) => option.name}
              onChange={(e, v) => {
                if (v.id) {
                  navigate(`/product/${v.id}`);
                }
              }}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img loading="lazy" width="20" src={option.images[0]} alt="" />
                  {option.name}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  onChange={(e) => setInput(e.target.value)}
                  sx={{ backgroundColor: 'white', color: 'white', border: 'none', p: 0, m: 0 }}
                  variant="outlined"
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                />
              )}
            />

            <span
              className="search-hover"
              style={{
                width: '48px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#131921',
                borderTopRightRadius: '6px',
                borderBottomRightRadius: '6px',
              }}
              onClick={() => navigate(`/search/${input}`)}
            >
              <Search style={{ cursor: 'pointer', color: '#057aff' }} />
            </span>
          </Box>

          <Box
            onClick={() => setShowAllSign(!showAllSign)}
            className="navborder padding-lg account"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              paddingRight: '16px',
              paddingLeft: '16px',
              paddingTop: '12px',
              paddingBottom: '12px',
              cursor: 'pointer',
            }}
          >
            <Typography variant="p" style={{ fontSize: '12px', fontWeight: '400', height: '8px' }}>
              Hello {localStorage.customer ? JSON.parse(localStorage.customer).fName : ' Sign in'},
            </Typography>
            <Typography variant="p" style={{ fontSize: '14px', fontWeight: '700' }}>
              Account & Lists
              <span>
                <ArrowDropDown />
              </span>
            </Typography>
            {showAllSign && <ShowLogin />}
          </Box>

          <Box
            onClick={() => {
              navigate('/customer-dashboard')
            }}
            className="navborder padding-lg orders"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              paddingRight: '16px',
              paddingLeft: '16px',
              paddingTop: '12px',
              paddingBottom: '12px',
              cursor: 'pointer',
            }}
          >
            {/* <Link to={'/customer-dashboard'}> */}
            <Typography



              variant="p"
              style={{ fontSize: '12px', fontWeight: '400', lineHeight: '14px', height: '14px' }}
            >
              Returns
            </Typography>
            <Typography
              variant="p"
              style={{ fontSize: '14px', fontWeight: '700', lineHeight: '15px' }}
            >
              & Orders
            </Typography>

          </Box>

          <Link
            to="product/checkout-2"
            style={{ color: '#fff', textDecoration: 'none', position: 'relative' }}
          >
            <Box
              className="navborder padding-lg cart"
              style={{
                display: 'flex',
                allItems: 'start',
                justifyContent: 'center',
                paddingRight: '16px',
                paddingLeft: '16px',
                paddingTop: '12px',
                paddingBottom: '12px',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <AddShoppingCart />
              <Typography
                variant="p"
                className="sm-hidden"
                style={{ fontSize: '12px', fontWeight: '500' }}
              >
                Cart <span />
              </Typography>
            </Box>
          </Link>
        </Box>
        <BottomHeader />
      </Box>
    </AppBar>
  );
}
