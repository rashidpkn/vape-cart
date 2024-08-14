import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { AccountCircle, Close, Menu } from '@mui/icons-material';
import { m } from 'framer-motion';
import { _category } from 'src/data/createProducts';
import { Link } from 'react-router-dom';
import { NavbarBottomLinks } from '../dashboard/config-navigation';
import SideHeader from './SideHeader';

const HeaderBottom = () => {
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);
  return (
    <Box
      style={{
        width: '100%',
        height: '36px',
        background: '#232f3e',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        paddingRight: '16px',
        paddingLeft: '16px',
      }}
    >
      <ul
        className="md-gap bt-ul"
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '14px',
          gap: '10px',
          paddingLeft: '0px',
          cursor: 'pointer',
          listStyle: 'none',
        }}
      >
        <li
          onClick={() => setSidebar(true)}
          className="navborder"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Menu />
          All
        </li>
        <li
          className="navborder"
          style={{
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingLeft: '6px',
            paddingRight: '6px',
            listStyle: 'none',
          }}
        >
          <Link to="/shop" style={{ color: 'white' }}>
            Shop
          </Link>
        </li>

        {_category.map((item) => (
          <li
            className="navborder"
            style={{
              paddingTop: '6px',
              paddingBottom: '6px',
              paddingLeft: '6px',
              paddingRight: '6px',
              listStyle: 'none',
            }}
            key={item}
          >
            <Link to={`/shop/?category=${item}`} style={{ color: 'white' }}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
      {sidebar && (
        <Box className="sidebar-bg" style={{ with: '100%', height: '100%', color: 'black' }}>
          <Box style={{ width: '100%', height: '100%', position: 'relative' }}>
            <m.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="sidemenu_width"
              style={{
                width: '350px',
                height: '100%',
                background: '#fff',
                border: '1px solid #000',
                overflowY: 'auto',
              }}
            >
              <Box
                style={{
                  width: '100%',
                  background: '#232f3e',
                  color: '#fff',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingRight: '26px',
                  paddingLeft: '26px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <AccountCircle />
                <Typography variant="h6">Hello, Sign In </Typography>
              </Box>
              <Box>
                <SideHeader
                  title="Trending"
                  one="Best Sellers"
                  two="New Releases"
                  three="Mover and Shakers"
                />
                <SideHeader
                  title="Trending"
                  one="Best Sellers"
                  two="New Releases"
                  three="Mover and Shakers"
                />
                <SideHeader
                  title="Trending"
                  one="Best Sellers"
                  two="New Releases"
                  three="Mover and Shakers"
                />
                <SideHeader title="Trending" one="Disposable Pods" two="Kits" three="Tugboat" />
              </Box>
              <span className="close-button" onClick={() => setSidebar(false)}>
                <Close />
              </span>
            </m.div>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HeaderBottom;
