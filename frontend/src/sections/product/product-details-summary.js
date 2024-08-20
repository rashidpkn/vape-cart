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

export default function ProductDetailsSummary({
  cart,
  product,
  onAddCart,
  onGotoStep,
  disabledActions,
  setProduct,
  parentProduct = {},
  ...other
}) {
  const [quantityToPurchase, setQuantityToPurchase] = useState(1);

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
    subDescription,
    variations,
  } = product;

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
      <Box
        sx={{ width: { sm: '100%', md: '60%' } }}
        display="flex"
        justifyItems="center"
        alignItems="center"
        gap={1}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setQuantityToPurchase((_) => {
              if (_ <= 1) {
                return 1;
              }
              return _ - 1;
            });
          }}
        >
          -
        </Button>
        <TextField
          fullWidth
          label="Quantity"
          type="number"
          inputProps={{ min: 1, max: quantity ?? 100 }}
          onChange={(e) => {
            setQuantityToPurchase((_) => {
              const { value } = e.target;
              if (value <= 0) {
                return 1;
              }

              if (quantity) {
                return Math.min(quantity, value);
              }

              return Math.min(value, 100);
            });
          }}
          value={quantityToPurchase}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setQuantityToPurchase((_) => {
              if (_ < quantity) {
                return _ + 1;
              }
              return _;
            });
          }}
        >
          +
        </Button>
      </Box>

      <Button
        fullWidth
        size="large"
        color="warning"
        variant="contained"
        startIcon={<Iconify icon="solar:cart-plus-bold" width={24} />}
        onClick={() => {
          if (type === 'Variable' && !selectedVariation) {
            alert('Please choose a variable from the list.');
            return;
          }
          onAddCart({
            id,
            name,
            price: salePrice,
            images,
            subTotal: salePrice,
            userId,
            quantity: quantityToPurchase,
            available: quantity,
          });
          navigate(paths.product.checkout);
        }}
        sx={{ width: { sm: '100%', md: '40%' } }}
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

  const [selectedVariation, setSelectedVariation] = useState('');

  const renderVariables = (
    <Box display="flex" flexDirection="column" gap="10px">
      <Box>
        <FormControl fullWidth>
          <InputLabel id="variations">Select Variations</InputLabel>
          <Select
            labelId="variations"
            label="Select Variations"
            value={selectedVariation}
            onChange={(e) => {
              setSelectedVariation(e.target.value);
              const { track, quantity, regularPrice, salePrice, image } = product.variations.find(
                (v) => JSON.stringify(v.attributes) === JSON.stringify(e.target.value)
              );

              const name =
                `${parentProduct.name 
                }-${ 
                Object.keys(e.target.value)
                  .map((a) => e.target.value[a])
                  .join('-')}`;
              let {images} = parentProduct;
              if (image) {
                images = image;
              }

              setProduct((prevProduct) => ({
                ...prevProduct, // Spread the existing product state
                track,
                quantity,
                regularPrice,
                salePrice,
                name,
                images,
              }));
            }}
          >
            {variations?.map((variation, i) => (
              <MenuItem key={i} value={variation.attributes}>
                {Object.keys(variation.attributes)
                  .map(
                    (e) =>
                      `${e.replace(/([A-Z])/, ' $1').replace(/^./, (str) => str.toUpperCase()) 
                      } : ${ 
                      variation.attributes[e]}`
                  )
                  .join(', ')}{' '}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* {!!error && <p style={{ color: '#F00A' }}>{error}</p>} */}
    </Box>
  );

  return (
    <FormProvider>
      <Stack spacing={3} sx={{ pt: 3 }} {...other}>
        <Stack spacing={2} alignItems="flex-start">
          <Typography variant="h5">{name}</Typography>

          {renderRating}

          {type === 'Variable' && !!selectedVariation && salePrice !== null && renderPrice}

          {renderSubDescription}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {renderQuantity}

        <Divider sx={{ borderStyle: 'dashed' }} />

        {type === 'Variable' && renderVariables}
        {renderActions}
      </Stack>
    </FormProvider>
  );
}
