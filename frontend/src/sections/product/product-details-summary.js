import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
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
import {Button} from '@mui/material';
import Iconify from 'src/components/iconify';
//

// ----------------------------------------------------------------------

export default function ProductDetailsSummary({
  cart,
  product,
  onAddCart,
  onGotoStep,
  disabledActions,
  ...other
}) {
  const router = useRouter();

  const {
    id,
    name,
    sizes,
    regularPrice,
    coverUrl,
    colors = [],
    quantity,
    salePrice,
    totalRatings,
    totalReviews,
    inventoryType,
    subDescription,
    images
  } = product;

  const existProduct = cart?.map((item) => item.id)?.includes(id);

  

  const defaultValues = {
    id,
    name,
    coverUrl,
    quantity:1,
    price:salePrice,
    colors:colors?.length&& colors[0],
    size: sizes?.lenght && sizes[0],
    images
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!existProduct) {
        onAddCart({
          ...data,
          colors: [values.colors],
          subTotal: data.price * data.quantity,
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
      onAddCart({ ...values,subTotal: values.price });
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

  

  const renderColorOptions = (
    <Stack direction="row">
      <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
        Color
      </Typography>

      <Stack direction="row">
  {colors?.map(e=><Typography key={e}>{e} , </Typography>)}
</Stack>

     
    </Stack>
  );

  const renderSizeOptions = (
    <Stack direction="row">
      <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
        Size
      </Typography>

<Stack direction="row">
  {sizes?.map(e=><Typography key={e}>{e} , </Typography>)}
</Stack>

    
    </Stack>
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
        // disabled={isMaxQuantity || disabledActions}
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

  
  const renderSubDescription = (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {subDescription}
    </Typography>
  );

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

  

  const renderInventoryType = (
    <Box
      component="span"
      sx={{
        typography: 'overline',
        color:
          (inventoryType === 'out of stock' && 'error.main') ||
          (inventoryType === 'low stock' && 'warning.main') ||
          'success.main',
      }}
    >
      {inventoryType}
    </Box>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} sx={{ pt: 3 }} {...other}>
        <Stack spacing={2} alignItems="flex-start">


          {renderInventoryType}

          <Typography variant="h5">{name}</Typography>

          {renderRating}

          {renderPrice}

          {renderSubDescription}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {renderColorOptions}

        {renderSizeOptions}

        {renderQuantity}

        <Divider sx={{ borderStyle: 'dashed' }} />

        {renderActions}


        {/* {renderShare} */}
      </Stack>
    </FormProvider>
  );
}

ProductDetailsSummary.propTypes = {
  cart: PropTypes.array,
  disabledActions: PropTypes.bool,
  onAddCart: PropTypes.func,
  onGotoStep: PropTypes.func,
  product: PropTypes.object,
};
