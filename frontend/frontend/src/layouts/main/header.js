// @mui
import { useTheme } from '@mui/material/styles';
import {Link, json} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import axios from 'axios';

import api from 'src/utils/api';
// var data =require('/src/map/PRODUCT_MAP.json')

// theme
import { bgBlur } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Logo from 'src/components/logo';
//
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
//
import React, { useState } from "react";
import { SettingsButton, HeaderShadow, LoginButton } from '../_common';
import { Box, Button, CssBaseline, Divider, FormGroup, Typography } from '@mui/material'
import { AddShoppingCart, ArrowDropDown, LocationOn, Search } from '@mui/icons-material';
import BottomHeader from "./BottomHeader";
import { allItems } from '../dashboard/config-navigation';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

export default function Header({set}) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const [showAll, setShowAll] = useState(false);
  const [showAllLang, setShowAllLang] = useState(false);
  const [showAllSign, setShowAllSign] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState('');
  const onChnage = (event) => {
    setValue(event.target.value);
  }

  const [result, setResults] = useState ([]);
  const [input, setInput] = useState("");

  

  // const fetchData = (value) => {
  //   fetch("https://delhi-vape.com/products")
  //   .then((response) => response.json())
  //     .then((json) => {
  //       const results = json.filter((products) => {
  //         return products && products.name && products.name.toLowerCase().includes(value);
  //       });
  //       console.log(results);
  //     });
  // }

  // const fetchData = (value) => {
  //   fetch("https://delhi-vape.com/products")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       if (Array.isArray(json)) {  
  //         const results = json.filter((product) => {
  //           return product && product.name && product.name.toLowerCase().includes(value);
  //         });
  //         console.log(results);
  //       } else {
  //         console.error('Response is not an array:', json);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // };

  const fetchData = async (value) => {
    try {
      const response = await axios.get("https://delhi-vape.com/products");
      const json = response.data;
  
      if (Array.isArray(json)) {
        const results = json.filter((product) => {
          return product && product.name && product.name.toLowerCase().includes(value);
        });
        console.log(results);
      } else {
        console.error('Response is not an array:', json);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    // <AppBar>
    //   <Toolbar
    //     disableGutters
    //     sx={{
    //       height: {
    //         xs: HEADER.H_MOBILE,
    //         md: HEADER.H_DESKTOP,
    //       },
    //       transition: theme.transitions.create(['height'], {
    //         easing: theme.transitions.easing.easeInOut,
    //         duration: theme.transitions.duration.shorter,
    //       }),
    //       ...(offsetTop && {
    //         ...bgBlur({
    //           color: theme.palette.background.default,
    //         }),
    //         height: {
    //           md: HEADER.H_DESKTOP_OFFSET,
    //         },
    //       }),
    //     }}
    //   >
    //     <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
    //       <Badge
    //         sx={{
    //           [`& .${badgeClasses.badge}`]: {
    //             top: 8,
    //             right: -16,
    //           },
    //         }}
    //         badgeContent={
    //           <Link
    //             href={paths.changelog}
    //             target="_blank"
    //             rel="noopener"
    //             underline="none"
    //             sx={{ ml: 1 }}
    //           >
    //             {/* <Label color="info" sx={{ textTransform: 'unset', height: 22, px: 0.5 }}>
    //               v5.1.0
    //             </Label> */}
    //           </Link>
    //         }
    //       >
    //         <Logo />
    //       </Badge>

    //       <Box sx={{ flexGrow: 1 }} />

    //       {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

    //       <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
    //         {/* <Button variant="contained" target="_blank" rel="noopener" href={paths.minimalUI}>
    //           Purchase Now
    //         </Button> */}

    //         {mdUp && <LoginButton />}

    //         <SettingsButton
    //           sx={{
    //             ml: { xs: 1, md: 0 },
    //             mr: { md: 2 },
    //           }}
    //         />

    //         {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
    //       </Stack>
    //     </Container>
    //   </Toolbar>
    //   {offsetTop && <HeaderShadow />}
    // </AppBar>
 <>
    <AppBar>
      <CssBaseline />
   <Box style={{ width: '100%', height: '100%' }}>
   <Box className="md-px md-display md-bg" style={{ width: '100%', background: '#131921', color: '#fff', paddingRight: '16px', paddingLeft: '16px', paddingTop: '0px', paddingBottom: '0px', display: 'flex', alignItems: 'center'}}>

        <Box style={{ paddingRight: '8px', paddingLeft: '8px', height: '80%', display: 'flex', alignItems: 'center', cursor: 'pointer'}} className="navborder logo_padding">
            <img src="/assets/images/logo/logo_single.webp" className="logo_img" width={96} height={50} style={{ marginTop: '8px', objectFit: 'contain', display: 'flex', alignItems: 'center' }} alt="logo" />
        </Box>

        <Box onClick={handleOpen} style={{ paddingRight: '8px', paddingLeft: '8px', paddingBottom: '12px', height: '100%', display: 'flex', alignItems: 'center', cursor: 'pointer'}} className="navborder location">
            <LocationOn className="location_icon" style={{ marginTop: '20px' }} />
            <Typography variant="p" style={{ fontSize: '12px', lineHeight: '14px', height: '14px', fontWeight: '400', color: '#ccc' }}><span className="delivery_info">Delivering to Delhi 682017</span><br/> <span style={{fontSize: '14px', fontWeight: '700', lineHeight: '15px', color: '#fff'}}><span className="update_location">Update location</span></span></Typography>
        </Box>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ padding: '10px', paddingLeft: '20px', background: '#e6e6e6'}}>
            Choose your location
          </Typography>
          <Box style={{ borderBottom: '1px solid #ccc' }}></Box>
         <Box style={{ padding: '20px', paddingTop: '10px'}}>
         <Typography id="modal-modal-description" variant='p' sx={{ fontSize: '13px'}}>
            Select a delivery location to see product availability and delivery options
          </Typography>
        <Link to="/auth/firebase/login" style={{color: '#000'}}><Button type='button' style={{ background: '#FFD814', width: '100%', marginTop: '10px' }}><a>Sign in to see your address</a></Button></Link>
          <Box style={{ borderBottom: '1px solid #ccc', paddingTop: '20px', position: 'relative' }}></Box>
          <Typography variant='p' style={{ fontSize: '12px', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', maxWidth: '170px', position: 'absolute', bottom: '60px', left: '0', right: '0', width: '100%' }}>or enter an Indian pincode</Typography>
         </Box>
         <Box style={{ padding: '20px', paddingTop: '0px' }}>
           <input type='text' style={{ width: '250px', height: '30px', borderRadius: '5px', outline: 'none', border: '1px solid #000'}} /> 
            <Button type='button' style={{ border: '1px solid #000', width: '100px', height: '30px', marginLeft: '5px', fontWeight: '300'}}>Apply</Button>
         </Box>
        </Box>
      </Modal>

        <Box className="search_bar" style={{ height: '40px', borderRadious: '6px', display: 'flex',  flexGrow: "1", position: 'relative', paddingRight: '16px', paddingLeft: '16px'}}>
            <span onClick={() => setShowAll(!showAll)} className='bg-gray' style={{ width: '56px', fontSize: '14px', color: '#131921', borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>All<span></span><ArrowDropDown /></span>
            {
                showAll && (
                    <Box>
                        <ul style={{ position: 'absolute', width: '224px', height: '320px', top: '24px', left: '15px', overflowY: 'scroll', overflowX: 'hidden', background: '#fff', color: '#000', display: 'flex', flexDirection: 'column', gap: '1', zIndex: '50', padding: '8px', border: '1px solid #131921', cursor: 'pointer' }}>
                         {
                            allItems.map((item)=>(
                              <li style={{cursor: 'poniter'}}>{item.title}</li>
                            ))
                         }
                        </ul>
                    </Box>
                )
            }
            <input type="text" value={input} onChange={(e) => handleChange(e.target.value)} setResults={setResults} placeholder='Search Products' style={{ height: '100%', fontSize: '16px', color: '#131921', flexGrow: '1', outline: 'none', border: 'none', paddingRight: '8px', paddingLeft: '8px' }} />
            <span className='search-hover' style={{ width: '48px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#131921', borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }}><Search style={{ cursor: 'pointer' }} /></span>
            {/* <Box className="dropdown">
              {data.filter(item=> {
                const searchTerm = value.toLowerCase();
                const name = item.name.toLowerCase();
                return searchTerm && name.startWith(searchTerm) && name !== searchTerm();
              }).slice(0,10)
              .map((item) => (
                <Box onClick={()=>onSearch(item.name)} className="dropdown-row" key={item.name}>
                  {item.name}
                </Box>
              ))}
            </Box> */}
        </Box>

        {/* <Box className="navborder padding-lg lang" style={{position: 'relative', paddingRight: '16px', paddingLeft: '16px', paddingTop: '12px', paddingBottom: '12px', display: 'flex', alignItems: 'center'}}>
            <span onClick={() => setShowAllLang(!showAllLang)} className='' style={{ width: '56px', fontSize: '14px', color: '#fff', borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}><img src="/assets/images/logo/india-flag.avif" width={20} height={15} alt="" /><Typography variant="p"style={{ fontSize: '12px', fontWeight: '400', lineHeight: '14px', height: '14px', paddingLeft: '5px' }} > EN</Typography><span></span><ArrowDropDown /></span>
            {
                showAllLang && (
                    <Box>
                        <ul style={{ position: 'absolute', width: '224px', height: 'auto', top: '30px', left: '0px', overflowX: 'hidden', background: '#fff', color: '#000', display: 'flex', flexDirection: 'column', gap: '1', zIndex: '50', padding: '8px', border: '1px solid #131921' }}>
                        <FormGroup style={{ paddingLeft: "10px" }}>
                <Box class="checkbox-group2">
                  <input
                    class="rounded-checkbox2"
                    name="machin"
                    value="title"
                    id="rad1"
                    type="radio"
                  />
                  <label for="rad1">English - EN</label>
                </Box>
                <Divider />
                <Box class="checkbox-group2">
                  <input
                    class="rounded-checkbox2"
                    name="machin"
                    value="title"
                    id="rad2"
                    type="radio"
                  />
                  <label for="rad2">हिन्दी - HI</label>
                </Box>
                <Box class="checkbox-group2">
                  <input
                    class="rounded-checkbox2"
                    name="machin"
                    value="title"
                    id="rad3"
                    type="radio"
                  />
                  <label for="rad3">தமிழ் - TA</label>
                </Box>
                <Box class="checkbox-group2">
                  <input
                    class="rounded-checkbox2"
                    name="machin"
                    value="title"
                    id="rad4"
                    type="radio"
                  />
                  <label for="rad4">తెలుగు - TE</label>
                </Box>
                <Box class="checkbox-group2">
                  <input
                    class="rounded-checkbox2"
                    name="machin"
                    value="title"
                    id="rad5"
                    type="radio"
                  />
                  <label for="rad5">ಕನ್ನಡ - KN</label>
                </Box>
                <Box class="checkbox-group2">
                  <input
                    class="rounded-checkbox2"
                    name="machin"
                    value="title"
                    id="rad6"
                    type="radio"
                  />
                  <label for="rad6">മലയാളം - ML</label>
                </Box>
                <Box class="checkbox-group2">
                  <input
                    class="rounded-checkbox2"
                    name="machin"
                    value="title"
                    id="rad7"
                    type="radio"
                  />
                  <label for="rad7">বাংলা - BN</label>
                </Box>
                <Box class="checkbox-group2">
                  <input
                    class="rounded-checkbox2"
                    name="machin"
                    value="title"
                    id="rad8"
                    type="radio"
                  />
                  <label for="rad8">मराठी - MR</label>
                </Box>
                        </FormGroup>
                        <Button>
                <a
                  href=""
                  style={{
                    color: "blue",
                    textTransform: "capitalize",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}
                >
                  learn more
                </a>
                        </Button>
                        <Divider />
                        <Box sx={{ paddingLeft: "10px", display: "flex" }}>
                <img
                  src="/src/assets/indiaflag.jpg"
                  width={15}
                  height={20}
                  style={{ marginTop: "10px" }}
                  alt=""
                />
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "12px",
                    marginTop: "13px",
                    paddingLeft: "5px",
                  }}
                >
                  You are shopping on Amazon.in
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="p"
                  sx={{ fontSize: "12px", paddingLeft: "30px" }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      textTransform: "capitalize",
                      cursor: "pointer",
                    }}
                  >
                    Change Country/region
                  </a>
                </Typography>
              </Box>
                        </ul>
                    </Box>
                )
            }
        </Box> */}

        <Box onClick={() => setShowAllSign(!showAllSign)} className= "navborder padding-lg account" style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', paddingRight: '16px', paddingLeft: '16px', paddingTop: '12px', paddingBottom: '12px', cursor: 'pointer'}}>
            <Typography variant="p" style={{ fontSize: '12px', fontWeight: '400', height: '8px' }}>Hello, Sign in</Typography>
            <Typography variant="p" style={{ fontSize: '14px', fontWeight: '700', }}>Account & Lists<span><ArrowDropDown /></span></Typography>
            {
                showAllSign && (
                    <Box>
                        <ul style={{ position: 'absolute', width: '500px', height: 'auto', top: '35px', left: '-200px', overflowX: 'hidden', background: '#fff', color: '#000', display: 'flex', flexDirection: 'column', gap: '1', zIndex: '50', padding: '8px', border: '1px solid #131921' }}>
                        <Button style={{background: "#FFD814",display: "flex",margin: "auto",width: "200px", }}
                >
                  <Link to="/auth/firebase/login" href="" style={{ color: "#111111", textTransform: "capitalize", textDecoration: "none", }}>
                    sign in
                  </Link>
                        </Button>
                        <Typography variant="p" style={{ fontSize: '12px', display: 'flex', justifyContent: 'center', padding: '10px 0px' }}>New Customer <Link to="/auth/firebase/login" href="#" style={{ fontSize: '12px', textDecoration: 'none' }}><span> Start here.</span></Link></Typography>
                        <Divider />
                        <Box style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                  <Box className="signUp">
                    <Typography variant="p" style={{ fontWeight: 'bold'}}>Your List</Typography>
                    <ul style={{ fontSize: '12px', padding: '0px', listStyleType: 'none' }}>
                      <li><a>Create a Wish List</a></li>
                      <li><a>Wishlist</a></li>
                    </ul>
                  </Box>
                  <Box className="signUp">
                  <Typography variant="p" style={{ fontWeight: 'bold'}}>Your Account</Typography>
                  <ul style={{ fontSize: '12px', padding: '0px', listStyleType: 'none' }}>
                      <li><a>Your Account</a></li>
                      <li><a>Your Orders</a></li>
                      <li><a>Your Wish list</a></li>
                    </ul>
                  </Box>
                        </Box>
                        </ul>
                    </Box>
                )
            }
        </Box>

        <Box className="navborder padding-lg orders" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', paddingRight: '16px', paddingLeft: '16px', paddingTop: '12px', paddingBottom: '12px', cursor: 'pointer'}}>
            <Typography variant="p" style={{ fontSize: '12px', fontWeight: '400', lineHeight: '14px', height: '14px' }}>Returns</Typography>
            <Typography variant="p" style={{ fontSize: '14px', fontWeight: '700', lineHeight: '15px' }}>& Orders</Typography>
        </Box>

       <a href='' style={{color: '#fff', textDecoration: 'none', position: 'relative'}}><Box className="navborder padding-lg cart" style={{ display: 'flex', allItems: 'start', justifyContent: 'center', paddingRight: '16px', paddingLeft: '16px', paddingTop: '12px', paddingBottom: '12px', position: 'relative', cursor: 'pointer' }}>
            <AddShoppingCart />
            <Typography variant="p" className="sm-hidden" style={{ fontSize: '12px', fontWeight: '500' }}>Cart <span></span></Typography>
        </Box></a>      
    </Box>
        <BottomHeader />
   </Box>
    </AppBar>
 </>
  );
}
