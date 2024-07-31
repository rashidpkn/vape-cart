import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// routes
import { paths } from 'src/routes/paths';
// utils
import { fShortenNumber, fCurrency } from 'src/utils/format-number';
// components

import FormProvider from 'src/components/hook-form';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import api from 'src/utils/api';

export default function ProductDetailsSummary({
  cart,
  product,
  onAddCart,
  onGotoStep,
  disabledActions,
  setProduct,
  ...other
}) {


  const [quantityToPurchase, setQuantityToPurchase] = useState(1)


  const navigate = useNavigate();

  const {
    id,
    name,
    regularPrice,
    quantity,
    salePrice,
    totalRatings,
    totalReviews,
    images,
    userId,
    type,
    productGroup,
    variables,
    subDescription,
  } = product;

  const [allProducts, setAllProducts] = useState([]);

  const getAllproducts = async () => {
    if (type === 'Variable' && productGroup === 'parent') {
      const { data } = await api.get('/products', {
        params: {
          perPage: 2000,
          name
        }
      });
      setAllProducts(data.products);
    }
  };

  useEffect(() => {
    getAllproducts();
  }, []);

  const renderPrice = (
    <Box sx={{ typography: 'h5' }}>

      <Box
        component="span"
        sx={{ color: 'text.disabled', textDecoration: 'line-through', mr: 0.5 }}
      >
        {fCurrency(regularPrice)}
      </Box>


      {fCurrency(salePrice)}
    </Box>
  );

  const renderQuantity = (
    <Stack direction="row">
      <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
        Quantity
      </Typography>

      <Stack spacing={1}>
        <Typography variant="caption" component="div" sx={{ textAlign: 'right' }}>
          Available: {quantity || 100}
        </Typography>
      </Stack>
    </Stack>
  );

  const renderActions = (
    <Stack direction="row" spacing={2}>
      <Box sx={{ width: { sm: '100%', "md": '60%' } }} display={'flex'} justifyItems={'center'} alignItems={'center'} gap={1} >

        <Button variant='outlined' color='primary'
          onClick={() => {
            setQuantityToPurchase(_ => {
              if (_ <= 1) {
                return 1
              }
              return _ - 1

            })
          }}
        >-</Button>
        <TextField
          fullWidth
          label='Quantity'
          type='number'
          inputProps={{ min: 1, max: quantity ?? 100 }}
          onChange={e => {
            setQuantityToPurchase(_ => {
              const { value } = e.target
              if (value <= 0) {
                return 1;
              }

              if (!!quantity) {
                return Math.min(quantity, value);
              }

              return Math.min(value, 100);
            }

            )
          }}
          value={quantityToPurchase}
        />
        <Button variant='outlined' color='primary' onClick={() => {
          setQuantityToPurchase(_ => {
            if (_ < quantity) {
              return _ + 1
            } else {
              return _
            }
          })
        }}>+</Button>
      </Box>


      <Button
        fullWidth
        size="large"
        color="warning"
        variant="contained"
        startIcon={<Iconify icon="solar:cart-plus-bold" width={24} />}
        onClick={() => {
          onAddCart({
            id,
            name,
            price: salePrice,
            images,
            subTotal: salePrice,
            userId,
            quantity: quantityToPurchase,
            available: quantity
          });
          navigate(paths.product.checkout);
        }}
        sx={{ width: { sm: '100%', "md": '40%' } }}
      >
        Add to Cart
      </Button>

    </Stack>
  );

  const renderSubDescription = !!subDescription && parse(subDescription);

  const renderRating = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        color: 'text.disabled',
        typography: 'body2',
      }}
    >
      <Rating size="small" value={totalRatings} precision={0.1} readOnly sx={{ mr: 1 }} />
      {`(${fShortenNumber(totalReviews)} reviews)`}
    </Stack>
  );

  const [selectedVariable, setSelectedVariable] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');

    let selectedName = name?.split(" -")[0];
    Object.keys(selectedVariable).map(
      (e) => (selectedName = `${selectedName} - ${selectedVariable[e]}`)
    );

    const found = allProducts.find((e) =>
      e.name.toLowerCase().includes(selectedName.toLowerCase())
    );
    if (found) {
      setProduct(_ => ({
        ..._,
        name: found.name,
        images: found.images,
        quantity: found.quantity,
        salePrice: found.salePrice,
        regularPrice: found.regularPrice
      }))
    }


  }, [selectedVariable]);




  const renderVariables = (
    <Box display="flex" flexDirection="column" gap="10px">
      {Object.keys(variables).map((v, i) => (
        <FormControl key={i}
          sx={{ width: { sm: '100%', "md": '50%' } }}
          size="small">
          <InputLabel id="demo-simple-select-label">{v}</InputLabel>
          <Select label={v} key={i}
            onChange={(e) => {
              setQuantityToPurchase(1)
              setSelectedVariable((_) => ({ ..._, [v]: e.target.value }));
            }}
          >
            {variables[v].map((va, j) => (
              <MenuItem key={j} value={va}>
                {va}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}

      <Box sx={{ width: { sm: '100%', "md": '50%' } }} display={'flex'} justifyItems={'center'} alignItems={'center'} gap={1} >

        <Button variant='outlined' color='primary'
          onClick={() => {
            setQuantityToPurchase(_ => {
              if (_ <= 1) {
                return 1
              }
              return _ - 1

            })
          }}
        >-</Button>
        <TextField
          fullWidth
          label='Quantity'
          type='number'
          inputProps={{ min: 1, max: quantity ?? 100 }}
          onChange={e => {
            setQuantityToPurchase(_ => {
              const { value } = e.target
              if (value <= 0) {
                return 1;
              }

              if (!!quantity) {
                return Math.min(quantity, value);
              }

              return Math.min(value, 100);
            }

            )
          }}
          value={quantityToPurchase}
        />
        <Button variant='outlined' color='primary' onClick={() => {
          setQuantityToPurchase(_ => {
            if (_ < quantity) {
              return _ + 1
            } else {
              return _
            }
          })
        }}>+</Button>
      </Box>
      <Button
        sx={{ width: { sm: '100%', "md": '50%' } }}
        variant="contained"
        color="success"
        disabled={!name.split("-")[1]}
        onClick={() => {
          let selectedName = name?.split(" -")[0];
          Object.keys(selectedVariable).map(
            (e) => (selectedName = `${selectedName} - ${selectedVariable[e]}`)
          );
          const found = allProducts.find((e) =>
            e.name.toLowerCase().includes(selectedName.toLowerCase())
          );
          if (found) {
            const { id, name, salePrice, images } = found;
            onAddCart({
              id,
              name,
              price: salePrice,
              images,
              subTotal: salePrice,
              userId,
              quantity: quantityToPurchase,
              available: quantity
            });
            navigate(paths.product.checkout);
          } else {
            setError('Out of stock');
          }
        }}
      >
        Buy
      </Button>

      {!!error && <p style={{ color: '#F00A' }}>{error}</p>}
    </Box>
  );

  return (
    <FormProvider >
      <Stack spacing={3} sx={{ pt: 3 }} {...other}>
        <Stack spacing={2} alignItems="flex-start">
          <Typography variant="h5">{name}</Typography>

          {renderRating}

          {salePrice !== null && renderPrice}

          {renderSubDescription}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {renderQuantity}

        <Divider sx={{ borderStyle: 'dashed' }} />

        {type === 'Variable' && productGroup === 'parent' ? renderVariables : renderActions}

      </Stack>
    </FormProvider>
  );
}