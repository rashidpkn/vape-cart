import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// components
import { MotionContainer, varFade } from 'src/components/animate';

import Autocomplete from '@mui/material/Autocomplete';
import api from 'src/utils/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

// ----------------------------------------------------------------------

export default function HomeHero({ name, setName, fetchProduct }) {
  const navigate = useNavigate();

  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    api.get('products').then((res) => {
      setOptions(res.data.products);
    });
  }, []);

  return (
    <Box
      sx={{
        height: { sm: 735, xs: 550 },
        py: { xs: 20, md: 0 },
        overflow: 'hidden',
        position: 'relative',
        backgroundSize: '22%, 18.75%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom, right bottom',
        backgroundImage:
          'url(/assets/images/home/Joyetech-Tralus.webp), url(/assets/images/home/apple_bomb.webp)',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 300 },
            left: { md: 100 },
            right: { md: 100 },
            position: { md: 'absolute' },
            textAlign: {
              xs: 'center',
              md: 'center',
            },
          }}
        >
          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.black' }}>
            <TextAnimate text="Get" />
            <TextAnimate text="your" />
            <TextAnimate text="vape" />
            <TextAnimate text="delivered" />
          </Stack>

          <br />

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.black' }}>
            <TextAnimate text="within" />
            <TextAnimate text="30" />
            <TextAnimate text="minutes" />
          </Stack>

          <br />

          {/* <TextField
            sx = {{
              height: { sm: 50, xs: 20 },
              width: { sm: 300, md: 600 },
            }}
            placeholder="Search..."
            value={name}
            onChange={e=>setName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ ml: 1, color: 'text.disabled' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <Button
                    variant="contained"
                    position="end"
                    sx={{
                      backgroundColor: 'primary.main',
                      height: 50,
                      borderRadius: '0 10rem 10rem 0',
                      width: 100,
                    }}
                    onClick={()=>{fetchProduct()}}
                  >
                    Search
                  </Button>
              ),
              style: {
                padding: 0,
                borderRadius: 50,
              },
            }}
          /> */}

          <Autocomplete
            sx={{
              borderRadius: 999,
              width: { sm: 300, md: 600 },
              position: 'relative',
              mx: 'auto',
            }}
            style={{ borderRadius: 999 }}
            options={options.map(({ name, id }) => ({ name, id }))}
            getOptionLabel={(option) => option.name}
            value={selectedValue}
            onChange={(event, newValue) => {
              setName(newValue.name);
              navigate(`/product/${newValue.id}`);
              setSelectedValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                sx={{ borderRadius: 999 }}
                style={{ borderRadius: 999 }}
                placeholder="Search Your Product"
              />
            )}
          />

          <br />

          <Stack
            spacing={2}
            display="inline-flex"
            direction="row"
            sx={{ color: 'common.black', mt: 3 }}
            className="inter-100"
          >
            <TextAnimate text="Your" />
            <TextAnimate text="Ultimate" />
            <TextAnimate text="Destination" />
            <TextAnimate text="for" />
            <TextAnimate text="All" />
            <TextAnimate text="Vape" />
          </Stack>

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.black' }}>
            <TextAnimate text="Shops:" />
            <TextAnimate text="One" />
            <TextAnimate text="Website," />
            <TextAnimate text="Endless" />
            <TextAnimate text="Choices!" />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h2',
        overflow: 'hidden',
        display: 'inline-flex',
        fontSize: { sm: 25, xs: 12.5 },
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span
          key={index}
          variants={variants || varFade().inUp}
          className="inter-100"
          style={{ fontWeight: 100 }}
        >
          {letter}
        </m.span>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};
