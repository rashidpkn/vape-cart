import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useMemo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import Autocomplete from '@mui/lab/Autocomplete';
import TextField from '@mui/material/TextField';

// routes
import { paths } from 'src/routes/paths';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// _mock
// components
import { useSnackbar } from 'src/components/snackbar';
import { useRouter } from 'src/routes/hook';
import FormProvider, {
  RHFSelect,
  RHFEditor,
  RHFUpload,
  RHFTextField,
  RHFAutocomplete,
} from 'src/components/hook-form';
import api from 'src/utils/api';
import { useAuthContext } from 'src/auth/hooks';
import { _attributes, _brands, _category, _tags, _type, _variables } from 'src/data/createProducts';
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

// ----------------------------------------------------------------------

export default function ProductNewEditForm({ currentProduct }) {
  const [products, setProduct] = useState([]);

  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const { user } = useAuthContext();

  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    subDescription: Yup.string().required('Short description is required'),
    content: Yup.string(),
    images: Yup.array().min(1, 'Image is required'),

    type: Yup.string(),
    category: Yup.string().required('Category is required'),
    tags: Yup.array(),
    SKU: Yup.string().required('SKU is required'),
    brand: Yup.string().required('brand is required'),

    attributes: Yup.array(),
    variables: Yup.array(),

    quantity: Yup.number(),

    regularPrice: Yup.number(),
    salePrice: Yup.number().moreThan(0, 'Price should not be AED 0.00'),
  });

  const defaultValues = useMemo(
    () => ({
      id: currentProduct?.id || '',

      name: currentProduct?.name || '',
      subDescription: currentProduct?.subDescription || '',
      content: currentProduct?.content || '',
      images: currentProduct?.images || [],

      type: currentProduct?.type || 'Simple',
      category: currentProduct?.category || 'None',
      tags: currentProduct?.tags || [],
      SKU: currentProduct?.SKU || '',
      brand: currentProduct?.brand || '',

      attributes: currentProduct?.attributes || [],
      variables: currentProduct?.attributes || [],

      quantity: currentProduct?.quantity || 0,

      regularPrice: currentProduct?.regularPrice || 0,
      salePrice: currentProduct?.salePrice || 0,
    }),
    [currentProduct]
  );

  const [variables, setVariables] = useState({
    'Bottle Size': [],
    Puffs: [],
  });

  const [variation, setVariation] = useState([]);

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const fetchProduct = useCallback(async () => {
    const {
      data: { products },
    } = await api.get('/products', {
      params: {
        name: values.name,
      },
    });
    setProduct(products);
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
    console.log(data);
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

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const files = values.images || [];

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setValue('images', [...files, ...newFiles], { shouldValidate: true });
    },
    [setValue, values.images]
  );

  const handleRemoveFile = useCallback(
    (inputFile) => {
      const filtered = values.images && values.images?.filter((file) => file !== inputFile);
      setValue('images', filtered);
    },
    [setValue, values.images]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue('images', []);
  }, [setValue]);

  const renderDetails = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Details
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Title, short description, image...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={12}>
        <Card>
          {!mdUp && <CardHeader title="Details" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            {/* <p className="" style={{ margin: 0, padding: 0, fontSize: 12 }}>
              {' '}
              * Search for your product
            </p> */}

            <RHFTextField name="name" label="Product Name" />

            {/* <Autocomplete
              onChange={(e, value) => {
                if (value) {
                  const product = products.find((product) => product.name === value);
                  setValue('images', product.images);
                  setValue('name', product.name);
                } else {
                  // Handle case where user clears the input
                  setValue('images', null);
                }
              }}
              name="name"
              label="Product Name"
              options={products.map((e) => e.name)}
              getOptionLabel={(option) => option}
              isOptionEqualToValue={(option, value) => option === value.value}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Product Name"
                  value={values.name}
                  onChange={(e) => setValue('name', e.target.value)}
                />
              )}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={products.find((e) => e.name === option).images[0]}
                    alt=""
                  />
                  {option}
                </Box>
              )}
              freeSolo
            /> */}

            <RHFTextField name="subDescription" label="Sub Description" multiline rows={4} />

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Content</Typography>
              <RHFEditor simple name="content" />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Images</Typography>
              <RHFUpload
                multiple
                // thumbnail
                name="images"
                maxSize={3145728}
                onDrop={handleDrop}
                onRemove={handleRemoveFile}
                onRemoveAll={handleRemoveAllFiles}
                onUpload={async (acceptedFiles) => {
                  try {
                    const form = new FormData();
                    values.images.forEach((e) => {
                      form.append('images', e);
                    });
                    const { data } = await api.post('upload', form);
                    setValue('images', data);
                    alert('Image upload complete.');
                  } catch (error) {
                    alert(' Image upload failed, try again.');
                  }
                }}
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderProperties = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Key Properties
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Additional functions and attributes...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={12}>
        <Card>
          {!mdUp && <CardHeader title="Properties" />}

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
              <RHFSelect native name="type" label="Product Type" InputLabelProps={{ shrink: true }}>
                {_type.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </RHFSelect>

              <RHFSelect native name="category" label="Category" InputLabelProps={{ shrink: true }}>
                {_category.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </RHFSelect>

              <RHFAutocomplete
                name="tags"
                label="Tags"
                placeholder="+ Tags"
                multiple
                freeSolo
                options={_tags.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              />

              <RHFTextField name="SKU" label="Product SKU" />

              <RHFSelect native name="brand" label="Brand" InputLabelProps={{ shrink: true }}>
                {_brands.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </RHFSelect>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const handleAutocompleteChange = (e, newValue, attribute) => {
    setVariables((prevVariables) => ({
      ...prevVariables,
      [attribute]: newValue,
    }));
  };

  const renderAttributes = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Product Attributes
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Additional functions and attributes...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={12}>
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
                <RHFAutocomplete
                  name="attributes"
                  label="Attributes"
                  placeholder="+ Attributes"
                  multiple
                  freeSolo
                  options={_attributes.map((option) => option)}
                  getOptionLabel={(option) => option}
                  renderOption={(props, option) => (
                    <li {...props} key={option}>
                      {option}
                    </li>
                  )}
                  renderTags={(selected, getTagProps) =>
                    selected.map((option, index) => (
                      <Chip
                        {...getTagProps({ index })}
                        key={option}
                        label={option}
                        size="small"
                        color="info"
                        variant="soft"
                      />
                    ))
                  }
                />
              </Box>

              {values.attributes.map((e) => (
                <Box sx={{ gridColumn: 'span 2 ' }} key={e}>
                  <Autocomplete
                    multiple={true}
                    freeSolo={true}
                    options={
                      (e === 'Bottle Size' && _variables.bottleSize) ||
                      (e === 'Puffs' && _variables.puffs) ||
                      (e === 'Flavour' && _variables.flavour) ||
                      (e === 'Nicotine Strength' && _variables.nicotineStrength) ||
                      (e === 'Color' && _variables.color) ||
                      (e === 'Batteries' && _variables.batteries) ||
                      []
                    }
                    value={variables[e]}
                    onChange={(event, newValue) => handleAutocompleteChange(event, newValue, e)}
                    renderInput={(params) => <TextField {...params} label={e} placeholder={e} />}
                    renderTags={(selected, getTagProps) =>
                      selected.map((option, index) => (
                        <Chip
                          {...getTagProps({ index })}
                          key={option}
                          label={option}
                          size="small"
                          color="info"
                          variant="soft"
                        />
                      ))
                    }
                  />

                  {values.type === 'Variable' && variables[e]?.length >= 2 && (
                    <FormControlLabel
                      label="Use this attributes to create variation"
                      control={
                        <Checkbox
                          checked={variation.find((ev) => ev === e)}
                          onChange={(event) => {
                            if (event.target.checked) {
                              if (variation.find((ev) => ev === e)) {
                                return;
                              } else {
                                setVariation((prev) => [...prev, e]);
                              }
                            } else {
                              setVariation((prev) => prev.filter((ev) => ev !== e));
                            }
                          }}
                        />
                      }
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderPricing = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Pricing
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Price related inputs
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={12}>
        <Card>
          {!mdUp && <CardHeader title="Pricing" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField
              name="regularPrice"
              label="Regular Price"
              placeholder="0.00"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="span" sx={{ color: 'text.disabled' }}>
                      AED
                    </Box>
                  </InputAdornment>
                ),
              }}
            />

            <RHFTextField
              name="salePrice"
              label="Sale Price"
              placeholder="0.00"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="span" sx={{ color: 'text.disabled' }}>
                      AED
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderActions = (
    <>
      {/* {mdUp && <Grid md={4} />} */}
      <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
        <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
          {!currentProduct ? 'Create Product' : 'Save Changes'}
        </LoadingButton>
      </Grid>
    </>
  );

  const skuAlpha = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let counter = 1;
  let counter2 = 0;

  const productTable = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
          Variation Table
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={12}>
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell width={150}>SKU</TableCell>
                <TableCell width={150}>Attributes</TableCell>
                <TableCell>Track</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Regular Price</TableCell>
                <TableCell>Sales Price</TableCell>
                <TableCell>Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              

              <ProductTable
                    counter={counter++}
                    counter2={counter2++}
                    skuAlpha={skuAlpha}
                    va={'Parent'}
                    values={values}
                    key={counter}
                  />
              {variation?.map((v, i) =>
                variables[v].map((va, j) => (
                  <ProductTable
                    counter={counter++}
                    counter2={counter2++}
                    skuAlpha={skuAlpha}
                    va={va}
                    values={values}
                    key={counter}
                  />
                ))
              )}
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

        {renderProperties}

        {renderAttributes}

        {values.type === 'Simple' && renderPricing}

        {values.type === 'Variable' && productTable}

        {renderActions}
      </Grid>
    </FormProvider>
  );
}

function ProductTable({ counter, values, skuAlpha, counter2, va }) {
  const [trackStock, setTrackStock] = useState(true);
  const [stock, setStock] = useState('instock')
  return (
    <TableRow>
      <TableCell>{counter}</TableCell>
      <TableCell>
        {values.SKU}-{skuAlpha[counter2]}
      </TableCell>
      <TableCell>{values.name}-{va}</TableCell>
      <TableCell>
        <FormControlLabel
          label=""
          control={<Checkbox checked={trackStock} onChange={(e) => setTrackStock(e.target.checked)} />}
        />
      </TableCell>
      <TableCell>
        {trackStock && <TextField size="small" label="Quantity" type="number" />}
        {!trackStock && (
          <RadioGroup aria-label="Stock" name="Stock" value={stock} onChange={e=>setStock(e.target.value)}>
            <FormControlLabel value="instock" control={<Radio />} label="Instock" />
            <FormControlLabel value="outstock" control={<Radio />} label="Outstock" />
          </RadioGroup>
        )}
      </TableCell>
      <TableCell>
        <TextField size="small" label="Price" type="number" />
      </TableCell>
      <TableCell>
        <TextField size="small" label="Price" type="number" />
      </TableCell>
      <TableCell>
        <TextField size="small" label="Image" type="file" />
      </TableCell>
    </TableRow>
  );
}
