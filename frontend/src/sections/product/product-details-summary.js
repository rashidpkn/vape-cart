import PropTypes, { object } from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

import Divider from '@mui/material/Divider';

import Typography from '@mui/material/Typography';

// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hook';
// utils
import { fShortenNumber, fCurrency } from 'src/utils/format-number';
// components

import FormProvider from 'src/components/hook-form';
import { Button, Card, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------
import parse from 'html-react-parser';
import { Link, useNavigate } from 'react-router-dom';
import api from 'src/utils/api';

export default function ProductDetailsSummary({
  cart,
  product,
  onAddCart,
  onGotoStep,
  disabledActions,
  setProduct,
  similarProduct = [],
  ...other
}) {
  const router = useRouter();

  const navigate = useNavigate();

  const {
    id,
    name,
    regularPrice,
    quantity,
    salePrice,
    totalRatings,
    totalReviews,
    subDescription,
    images,
    userId,
    type,
    productGroup,
    variables,
  } = product;

  const [allProducts, setAllProducts] = useState([]);

  const getAllproducts = async () => {
    if (type === 'Variable' && productGroup === 'parent') {
      const { data } = await api.get('/products', { perPage: 2000 });
      setAllProducts(data.products);
    }
  };

  useEffect(() => {
    getAllproducts();
  }, []);

  const existProduct = cart?.map((item) => item.id)?.includes(id);

  const defaultValues = {
    id,
    name,
    quantity: 1,
    price: salePrice,
    images,
  };

  const methods = useForm({
    defaultValues,
  });

  const { reset, watch, handleSubmit } = methods;

  const values = watch();

  useEffect(() => {
    if (product) {
      reset(defaultValues);
    }
  }, [product]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!existProduct) {
        onAddCart({
          ...data,
          colors: [values.colors],
          subTotal: data.price * data.quantity,
          userId,
        });
      }
      onGotoStep(0);
      router.push(paths.product.checkout);
    } catch (error) {
      console.error(error);
    }
  });

  const handleAddCart = useCallback(() => {
    try {
      onAddCart({ ...values, subTotal: values.price, userId });
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  }, [onAddCart, values]);

  const renderPrice = (
    <Box sx={{ typography: 'h5' }}>
      {salePrice && (
        <Box
          component="span"
          sx={{ color: 'text.disabled', textDecoration: 'line-through', mr: 0.5 }}
        >
          {fCurrency(regularPrice)}
        </Box>
      )}

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
          Available: {quantity}
        </Typography>
      </Stack>
    </Stack>
  );

  const renderActions = (
    <Stack direction="row" spacing={2}>
      <Button
        fullWidth
        size="large"
        color="warning"
        variant="contained"
        startIcon={<Iconify icon="solar:cart-plus-bold" width={24} />}
        onClick={handleAddCart}
        sx={{ whiteSpace: 'nowrap' }}
      >
        Add to Cart
      </Button>

      <Button fullWidth size="large" type="submit" variant="contained" disabled={disabledActions}>
        Buy Now
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

    let selectedName = name.split(" -")[0];
    Object.keys(selectedVariable).map(
      (e) => (selectedName = selectedName + ' - ' + selectedVariable[e])
    );

    const found = allProducts.find((e) =>
      e.name.toLowerCase().includes(selectedName.toLowerCase())
    );
if(found){
  setProduct(_=>({
    ..._,
    name:found.name,
    images:found.images,
    quantity:found.quantity,
    salePrice:found.salePrice,
    regularPrice:found.regularPrice
  }))
}

    
  }, [selectedVariable]);

  const renderVariables = type === 'Variable' && productGroup === 'parent' && (
    <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
      {Object.keys(variables).map((v, i) => (
        <FormControl sx={{ width: '50%' }} size="small">
          <InputLabel id="demo-simple-select-label">{v}</InputLabel>
          <Select
            label={v}
            key={i}
            onChange={(e) => {
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

      <Button
        sx={{ width: '50%' }}
        variant="contained"
        color="success"
        onClick={() => {
          let selectedName =name.split(" -")[0];
          Object.keys(selectedVariable).map(
            (e) => (selectedName = selectedName + ' - ' + selectedVariable[e])
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
              quantity: 1,
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
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} sx={{ pt: 3 }} {...other}>
        <Stack spacing={2} alignItems="flex-start">
          <Typography variant="h5">{name}</Typography>

          {renderRating}

          {renderPrice}

          {renderSubDescription}
        </Stack>

        {renderVariables}

        <Divider sx={{ borderStyle: 'dashed' }} />

        {renderQuantity}

        <Box>
          <h4>Products related to this item</h4>

          <Grid container gap={1} justifyContent="center" mt={2}>
            {similarProduct.map((row) => (
              <Grid key={row.id} item xs={5.5} component={Link} to={`/product/${row.id}`}>
                <Card>
                  <img src={row.images[0]} width="100%" />
                  <Stack
                    direction="row"
                    sx={{ fontSize: '16px' }}
                    justifyContent="space-between"
                    alignItems="center"
                    px={0.5}
                  >
                    <p>{row.name}</p>
                    <p>AED {row.salePrice}</p>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {productGroup !== 'parent' && renderActions}
      </Stack>
    </FormProvider>
  );
}
