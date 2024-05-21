import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
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
import { Button, Card, Grid } from '@mui/material';
import Iconify from 'src/components/iconify';
import { ColorPicker } from 'src/components/color-utils';
//

// ----------------------------------------------------------------------
import parse from 'html-react-parser';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function ProductDetailsSummary({
  cart,
  product,
  onAddCart,
  onGotoStep,
  disabledActions,
  setProduct,
  similarProduct=[],
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
    images,
    userId,
  } = product;

  const existProduct = cart?.map((item) => item.id)?.includes(id);

  const defaultValues = {
    id,
    name,
    coverUrl,
    quantity: 1,
    price: salePrice,
    colors: colors?.length && colors[0],
    size: sizes?.lenght && sizes[0],
    images,
  };

  const methods = useForm({
    defaultValues,
  });

  const { reset, watch, handleSubmit, control } = methods;

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

  const renderColorOptions = (
    <Stack direction="row">
      <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
        Color
      </Typography>

      {/* <Stack direction="row">
        {colors?.map((e) => (
          <Typography key={e}>{e} , </Typography>
        ))}

      </Stack> */}

      <Controller
        name="colors"
        control={control}
        render={({ field }) => (
          <ColorPicker
            colors={colors}
            selected={field.value}
            onSelectColor={field.onChange}
            limit={4}
          />
        )}
      />

    </Stack>
  );

  const renderSizeOptions = (
    <Stack direction="row">
      <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
        Size
      </Typography>

      <Stack direction="row">
        {sizes?.map((e) => (
          <Typography key={e}>{e} , </Typography>
        ))}
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
    // <Typography variant="body2" sx={{ color: 'text.secondary' }}>
    //   {subDescription}
    // </Typography>
    !!subDescription && parse(subDescription)
  )

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

  const attributes = product?.attributes ? Object.keys(product?.attributes) : []

  const [selectedAttributes, setSelectedAttributes] = useState([])
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} sx={{ pt: 3 }} {...other}>
        <Stack spacing={2} alignItems="flex-start">
          {renderInventoryType}

          <Typography variant="h5">{name}</Typography>

          {renderRating}

          {renderPrice}


        <Box>
          {attributes.length && <Typography variant="p">Variables</Typography>}

          {
            attributes.map(e=><Box key={e}>
              <p style={{margin:'10px 0px',fontSize:'14px'}} >{e}</p>
              {product.attributes[e].map(ev=><Button key={ev} size='small' variant='outlined'  sx={{mx:0.25,fontSize:'12px',}} style={{fontSize:'12px',fontWeight:'400',border:selectedAttributes.find(ep=>ep==ev) ? '2px solid':'1px solid'}} onClick={()=>{
                if(selectedAttributes.find(att=>att===ev)){
                  setSelectedAttributes(selectedAttributes.filter(at=>at!==ev))
              }else{
                setSelectedAttributes(prev=>([...prev,ev]))
              }
              }}> {ev}</Button>)}
            </Box>)
          }
          </Box>

          {renderSubDescription}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {renderColorOptions}

        {/* {renderSizeOptions} */}

        {renderQuantity}

        <Box>
          <h4>Products related to this item</h4>

          <Grid container gap={1} justifyContent={'center'} mt={2}>

            {similarProduct.map(row=>{
              return(
            <Grid key={row.id} item xs={5.5} component={Link} to={'/product/'+row.id} >
              <Card>

              <img src={row.images[0]} width='100%'  />
              <Stack direction={'row'} sx={{fontSize:'16px'}} justifyContent={'space-between'} alignItems={'center'} px={0.5}>
              <p>{row.name}</p>
              <p>AED {row.salePrice}</p>
                </Stack>
              </Card>
            </Grid>

              )
            })}
          </Grid>
        </Box>

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
