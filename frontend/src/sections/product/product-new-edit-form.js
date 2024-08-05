import * as Yup from 'yup';
import { useCallback, useMemo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import LoadingButton from '@mui/lab/LoadingButton';
import {
  Box,
  Card,
  Stack,
  Grid,
  CardHeader,
  Typography,
  Button,
  Table,
  TableBody,
} from '@mui/material';

import { paths } from 'src/routes/paths';

import { useResponsive } from 'src/hooks/use-responsive';

import { useSnackbar } from 'src/components/snackbar';
import { useRouter } from 'src/routes/hook';
import FormProvider, { RHFEditor, RHFTextField } from 'src/components/hook-form';
import api from 'src/utils/api';
import { useAuthContext } from 'src/auth/hooks';
import { alpha } from 'src/data/createProducts';
import { useNavigate } from 'react-router';
import ProductName from './components/_1_ProductName';
import ImageUpload from './components/_2_ImageUpload';
import KeyProperties from './components/_3_KeyProperties';
import RenderPricing from './components/_4_RenderPricing';
import { ProductTable } from './components/_5_ProductTable';
import TableHeading from './components/_6_TableHead';
import Attributes from './components/_7_Attributes';
import VariationSelection from './components/_8_VariationSelection';

export default function ProductNewEditForm({ currentProduct }) {
  const navigate = useNavigate();
  const [productAdded, setProductAdded] = useState(false);

  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const { user } = useAuthContext();

  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),

    subDescription: Yup.string()
      .required('Short description is required')
      .test(
        'not-four-digits',
        'Your content contain continues 7 digit number, Please remove',
        (value) => !/\d{7,}/.test(value)
      )
      .test(
        'no-at-symbol',
        'Your content contains the "@" symbol. Please remove it.',
        (value) => !/@/.test(value)
      ),

    content: Yup.string()
      .test(
        'not-four-digits',
        'Your content contain continues 7 digit number, Please remove',
        (value) => !/\d{7,}/.test(value)
      )
      .test(
        'no-at-symbol',
        'Your content contains the "@" symbol. Please remove it.',
        (value) => !/@/.test(value)
      ),
    images: Yup.array().min(1, 'Image is required'),

    type: Yup.string(),
    category: Yup.string().required('Category is required'),
    tags: Yup.array(),
    SKU: Yup.string().required('SKU is required'),
    brand: Yup.string().required('brand is required'),
    status: Yup.string().required('brand is required'),

    attributes: Yup.object().shape({
      bottleSize: Yup.array().of(Yup.string()).optional(),
      puffs: Yup.array().of(Yup.string()).optional(),
      flavour: Yup.array().of(Yup.string()).optional(),
      nicotineStrength: Yup.array().of(Yup.string()).optional(),
      color: Yup.array().of(Yup.string()).optional(),
      batteries: Yup.array().of(Yup.string()).optional(),
    }),

    track: Yup.boolean(),
    quantity: Yup.number(),
    regularPrice: Yup.number().moreThan(0, 'Price should not be AED 0.00'),
    salePrice: Yup.number().lessThan(
      Yup.ref('regularPrice'),
      'Sale price must be less than the regular price'
    ),
    variations: Yup.array(),
  });

  const defaultValues = useMemo(
    () => ({
      id: currentProduct?.id || '',

      name: currentProduct?.name || '',
      subDescription: currentProduct?.subDescription || '',
      content: currentProduct?.content || '',
      images: currentProduct?.images || [],

      type: currentProduct?.type || 'Simple',
      category: currentProduct?.category || 'Disposables',
      tags: currentProduct?.tags || [],
      SKU: currentProduct?.SKU || '',
      brand: currentProduct?.brand || 'SMOK',
      status: currentProduct?.status || 'Published',
      attributes: currentProduct?.attributes || {},
      track: currentProduct?.track || true,
      quantity: currentProduct?.quantity || 0,
      regularPrice: currentProduct?.regularPrice || 0,
      salePrice: currentProduct?.salePrice || 0,
      variations: currentProduct?.variations || [],
    }),
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  const [savedAttibutes, setSavedAttibutes] = useState([]);

  useEffect(() => {
    api.get('/attributes').then((res) => {
      setSavedAttibutes(res.data);
    });
  }, []);

  const [products, setProducts] = useState([]);

  const fetchProduct = useCallback(async () => {
    const { data } = await api.get('/products', {
      params: {
        name: values.name,
        productGroup: 'parent',
      },
    });
    setProducts(data.products.filter((pr) => !pr.name.includes('-')));
  }, [values.name]);

  useEffect(() => {
    fetchProduct();
  }, [values.name]);

  useEffect(() => {
    if (currentProduct) {
      reset(defaultValues);
    }
  }, [currentProduct, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (currentProduct) {
        await api.patch('products', {
          ...data,
          username: user.displayName,
          userId: user.id,
          storeName: user.storeName,
        });
      } else {
        await api.post('products', {
          ...data,
          username: user.displayName,
          userId: user.id,
          storeName: user.storeName,
        });
      }
      reset();
      enqueueSnackbar(currentProduct ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.product.root);
    } catch (error) {
      console.log(error);
    }
  });

  const renderDetails = (
    <>
      {mdUp && (
        <Grid md={4} item>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Details
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Title, short description, image...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={12} item>
        <Card>
          {!mdUp && <CardHeader title="Details" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <ProductName products={products} setValue={setValue} values={values} />

            <RHFTextField name="subDescription" label="Sub Description" multiline rows={4} />

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Content</Typography>
              <RHFEditor simple name="content" />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Images</Typography>
              <ImageUpload values={values} setValue={setValue} />
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [variation, setVariation] = useState([]);

  useEffect(() => {
    if (currentProduct && currentProduct.attributes) {
      setSelectedAttributes(Object.keys(currentProduct.attributes));
    }
  }, [currentProduct]);

  useEffect(() => {
    setValue('attributes', {});
    setVariation([]);
    setValue('variations', []);
  }, [values.type]);

  const renderAttributes = (
    <>
      {mdUp && (
        <Grid md={4} item>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Product Attributes
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Additional functions and attributes...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={12} item>
        <Card>
          {!mdUp && <CardHeader title="Attributes" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
              <Box sx={{ gridColumn: 'span 2 ' }}>
                <Attributes
                  selectedAttributes={selectedAttributes}
                  setSelectedAttributes={setSelectedAttributes}
                  setValue={setValue}
                  values={values}
                />
              </Box>
              {selectedAttributes.map((e) => (
                <VariationSelection
                  setValue={setValue}
                  setVariation={setVariation}
                  values={values}
                  e={e}
                  key={e}
                  savedAttibutes={savedAttibutes}
                />
              ))}
            </Box>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderActions = (
    <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }} gap={2.5} item>
      <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
        {!currentProduct ? 'Create Product' : 'Save Changes'}
      </LoadingButton>
      <LoadingButton
        onClick={() => {
          setValue('status', 'Draft');
        }}
        type="submit"
        variant="contained"
        size="large"
        loading={isSubmitting}
      >
        Save as Draft
      </LoadingButton>
    </Grid>
  );



  const skuAlpha = [...alpha, ...alpha.slice(1).flatMap((i) => alpha.slice(1).map((j) => i + j))];

  let counter = 1;

  const productTable = (
    <>
      {mdUp && (
        <Grid md={4} item>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Variation Table
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={12} item>
        <Card>
          <Table>
            <TableHeading />
            <TableBody>
              {variation
                .reduce(
                  (a, k) => a.flatMap((c) => values.attributes[k].map((v) => `${c} - ${v}`)),
                  ['']
                )
                .map((c) => (
                  <ProductTable
                    counter={counter++}
                    skuAlpha={skuAlpha}
                    va={c.slice(3)}
                    values={values}
                    key={counter}
                    setProductAdded={setProductAdded}
                    currentProduct={currentProduct}
                  />
                ))}
            </TableBody>
          </Table>
        </Card>
      </Grid>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}
        <KeyProperties values={values} setValue={setValue} />
        {renderAttributes}
        {values.type === 'Simple' && <RenderPricing values={values} />}
        {values.type === 'Variable' && productTable}
        {renderActions}
      </Grid>
    </FormProvider>
  );
}
