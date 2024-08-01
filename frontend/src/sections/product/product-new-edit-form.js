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
  RHFCheckbox,
} from 'src/components/hook-form';
import api from 'src/utils/api';
import { useAuthContext } from 'src/auth/hooks';
import { _attributes, _brands, _category, _status, _tags, _type, _variables } from 'src/data/createProducts';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router';

// ----------------------------------------------------------------------

export default function ProductNewEditForm({ currentProduct }) {

  const navigate = useNavigate()
  const [productAdded, setProductAdded] = useState(false)

  const [savedAttibutes, setSavedAttibutes] = useState([]);

  useEffect(() => {
    api.get('/attributes').then((res) => {
      setSavedAttibutes(res.data);
    });
  }, []);

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
      ).test(
        'no-at-symbol',
        'Your content contains the "@" symbol. Please remove it.',
        (value) => !/@/.test(value)
      ),
    content: Yup.string().test(
      'not-four-digits',
      'Your content contain continues 7 digit number, Please remove',
      (value) => !/\d{7,}/.test(value)
    ).test(
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

    attributes: Yup.array(),
    track: Yup.boolean(),
    quantity: Yup.number(),

    regularPrice: Yup.number().moreThan(0, 'Price should not be AED 0.00'),
    salePrice: Yup.number().lessThan(Yup.ref('regularPrice'), 'Sale price must be less than the regular price'),
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

      attributes: currentProduct?.attributes || [],
      track: currentProduct?.track || true,
      quantity: currentProduct?.quantity || 0,

      regularPrice: currentProduct?.regularPrice || 0,
      salePrice: currentProduct?.salePrice || 0,
    }),
    [currentProduct]
  );

  const [variables, setVariables] = useState({});

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
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();


  const [products, setProducts] = useState([])

  const fetchProduct = useCallback(async () => {
    const {
      data
    } = await api.get('/products', {
      params: {
        name: values.name,
        productGroup: "parent"
      },
    });
    setProducts(data.products.filter(pr => !pr.name.includes('-')));
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
            {/* <RHFTextField name="name" label="Product Name" /> */}

            <Autocomplete
              value={values.name}
              onChange={(e, value) => {
                if (value) {
                  const product = products.find((product) => product.name === value);
                  if (product) {
                    setValue('images', product.images);
                    setValue('name', product.name)
                    setValue('category', product.category)
                    setValue('brand', product.brand)
                    setValue('type', product.type)
                  }
                } else {
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
            />

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

  const [newBrand, setNewBrand] = useState({
    name: '',
    show: false,
  });

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
              <Box display="flex" alignItems="center" gap={1}>
                <FormControlLabel
                  sx={{ width: 190 }}
                  label="Is your brand missing? Click here to add it."
                  control={
                    <Checkbox
                      checked={newBrand.show}
                      onChange={(e) => setNewBrand((_) => ({ ..._, show: e.target.checked }))}
                    />
                  }
                />
                {newBrand.show && (
                  <>
                    <TextField
                      label="Brand Name"
                      style={{ width: 300 }}
                      onChange={(e) => setNewBrand((_) => ({ ..._, name: e.target.value }))}
                      value={newBrand.name}
                    />
                    <Button
                      variant="contained"
                      color="success"
                      onClick={async () => {
                        try {

                          if (newBrand.name) {

                            await api.post('/notifications',
                              {
                                userId: user.id,
                                role: 'admin',
                                title: '🚀 New Brand Approval Request! 🚀',
                                message: `Exciting news! A new brand has been submitted for approval. Brand Name: ${newBrand.name}. 🛍️`,
                                type: "product"
                              })
                            alert("Your request to create a new brand is being processed. Please wait while we verify the brand.")
                          } else {
                            alert('Please enter brand name');
                          }

                        } catch (error) {
                          alert("An error occurred while adding this brand.")
                        }
                      }}
                    >
                      Add Brand
                    </Button>
                  </>
                )}
              </Box>

              <RHFSelect native name="status" label="status" InputLabelProps={{ shrink: true }}>
                {_status.map((classify) => (
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
    if (values.type === 'Variable' || (values.type === 'Simple' && attribute === 'Flavour')) {
      setVariables((prevVariables) => ({
        ...prevVariables,
        [attribute]: newValue,
      }));

      const att =
        (attribute === 'Bottle Size' && _variables.bottleSize) ||
        (attribute === 'Puffs' && _variables.puffs) ||
        (attribute === 'Flavour' && _variables.flavour) ||
        (attribute === 'Nicotine Strength' && _variables.nicotineStrength) ||
        (attribute === 'Color' && _variables.color) ||
        (attribute === 'Batteries' && _variables.batteries) ||
        [];

      const value = newValue[newValue.length - 1];

      if (!value) {
        return;
      }

      if (!att.find((at) => at === value)) {
        console.log('upload');
        api.post('/attributes', { username: user.displayName, attribute, value }).then((res) => {
          console.log('updated');
        });
      }

    } else {
      const value = newValue[newValue.length - 1];
      console.log({ ...variables, [attribute]: [value] });
      setVariables((prevVariables) => ({
        ...prevVariables,
        [attribute]: [value],
      }));
    }
  };

  console.log(variables)
  console.log(variation)

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
                <Box sx={{ gridColumn: 'span 1 ' }} key={e}>
                  <Autocomplete
                    multiple
                    freeSolo
                    options={[
                      ...(e === 'Bottle Size' ? _variables.bottleSize : []),
                      ...(e === 'Puffs' ? _variables.puffs : []),
                      ...(e === 'Flavour' ? _variables.flavour : []),
                      ...(e === 'Nicotine Strength' ? _variables.nicotineStrength : []),
                      ...(e === 'Color' ? _variables.color : []),
                      ...(e === 'Batteries' ? _variables.batteries : []),
                      ...savedAttibutes.filter((v) => v.attribute === e).map((e) => e.value),
                    ]}
                    value={variables[e] || []}
                    onChange={(event, newValue) => {
                      handleAutocompleteChange(event, newValue, e);
                      if (values.type === 'Simple') {

                        if (e === 'Flavour') {
                          if (newValue.length >= 2) {
                            if (!variation.find((ev) => ev === e)) {
                              setVariation((prev) => [...prev, e]);
                            }
                          } else {
                            setVariation((prev) => prev.filter((ev) => ev !== e));
                          }
                        } else {
                          setVariation([e]);
                        }
                      }
                    }}
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
                  {values.type === 'Variable' && <FormControlLabel
                    label="Use this attribute to create Variations"
                    control={
                      <Checkbox
                        onChange={ch => {
                          if (ch.target.checked) {
                            setVariation((prev) => [...new Set([...prev, e])]);
                          } else {
                            setVariation((prev) => [...new Set(prev.filter((ev) => ev !== e))]);
                          }
                        }}

                      />
                    }
                  />}
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

            <RHFCheckbox name={'track'} label='Track' />

            {values.track && <RHFTextField
              name="quantity"
              label="Quantity"
              placeholder="0.00"
              type="number"
              InputLabelProps={{ shrink: true }}
            />}

            {!values.track && <FormControl>
              <RadioGroup defaultValue="Instock" row>
                <FormControlLabel d value="Instock" control={<Radio defaultChecked />} label="Instock" />
                <FormControlLabel value="Outstock" control={<Radio />} label="Outstock" />
              </RadioGroup>
            </FormControl>}

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

  const renderGoToProduct = (
    <>
      {/* {mdUp && <Grid md={4} />} */}
      <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="contained" size="large" onClick={() => {
          navigate('/dashboard/product')
        }}>
          Save Product
        </Button>
      </Grid>
    </>
  );

  const alpha = [
    '',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const skuAlpha = [...alpha, ...alpha.slice(1).flatMap((i) => alpha.slice(1).map((j) => i + j))];

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
                <TableCell width={250}>Attributes</TableCell>
                <TableCell width={150}>Track Stock</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Regular Price</TableCell>
                <TableCell>Sales Price</TableCell>
                <TableCell>Image</TableCell>
                <TableCell width={200}>Add Product</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ProductTable
                counter={counter++}
                counter2={counter2++}
                skuAlpha={skuAlpha}
                va="Parent"
                values={values}
                key={counter}
                variables={variables}
                disabled
                isSubmitting={isSubmitting}
                isValid={isValid}
                setProductAdded={() => { }}
              />

              {variation
                .reduce((a, k) => a.flatMap((c) => variables[k].map((v) => `${c} - ${v}`)), [''])
                .map((c) => (
                  <ProductTable
                    counter={counter++}
                    counter2={counter2++}
                    skuAlpha={skuAlpha}
                    va={c.slice(3)}
                    values={values}
                    key={counter}
                    variables={variables}
                    disabled={false}
                    isSubmitting={isSubmitting}
                    isValid={isValid}
                    setProductAdded={setProductAdded}
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

        {renderProperties}

        {renderAttributes}

        {values.type === 'Simple' && renderPricing}

        {values.type === 'Variable' && productTable}

        {values.type === 'Simple' && renderActions}
        {values.type === 'Variable' && productAdded && renderGoToProduct}
      </Grid>
    </FormProvider>
  );
}

function ProductTable({
  counter,
  values,
  skuAlpha,
  counter2,
  va,
  variables,
  disabled,
  isSubmitting,
  isValid,
  setProductAdded
}) {
  const { user } = useAuthContext();
  const sku = skuAlpha[counter2] ? `${values.SKU}-${skuAlpha[counter2]}` : values.SKU;
  let { name } = values;

  const parent = va === 'Parent'

  if (!parent) {
    name = `${values.name} - ${va}`;
  }

  const [track, setTrack] = useState(true);
  const [stock, setStock] = useState('instock');
  const [regularPrice, setRegularPrice] = useState(null);
  const [salePrice, setSalePrice] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const [status, setStatus] = useState('pending');
  const [images, setImages] = useState(null);

  const _uploadImage = async (e) => {
    try {
      const formData = new FormData();
      formData.append('images', e.target.files[0]);

      const { data } = await api.post('upload', formData);

      setImages([data[0], ...values.images]);
    } catch (error) { }
  };

  const _addProduct = async () => {
    const emojiPattern =
      /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}\u{231A}-\u{231B}\u{23E9}-\u{23EC}\u{23F0}\u{23F3}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2B1B}-\u{2B1C}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{2B06}\u{2B07}\u{2B1B}\u{2B1C}]/u;
    const threeDigitPattern = /\d{7,}/;
    const atSymbol = /@/

    if (emojiPattern.test(values.subDescription) || emojiPattern.test(values.content)) {
      alert('Your content contain emojis, Please remove emojis');
      return;
    }
    if (threeDigitPattern.test(values.subDescription) || threeDigitPattern.test(values.content)) {
      alert('Your content contain continues 7 digit number, Please remove');
      return;
    }
    if (atSymbol.test(values.subDescription) || atSymbol.test(values.content)) {
      alert('Your content contains the "@" symbol. Please remove it.');
      return;
    }

    if (!parent) {

      if (!quantity && track) {
        return alert("Quantity is required.");
      }
      if (!regularPrice) {
        return alert("Regular price is required.")
      }

      if (salePrice) {
        if (regularPrice <= salePrice) {
          return alert("Sale price must be less than the regular price")

        }
      }

    }


    if (status !== 'pending') {
      return;
    }

    setStatus('loading');
    try {
      await api.post('/products', {
        username: user.displayName,
        userId: user.id,
        storeName: user.storeName,

        name,
        subDescription: values.subDescription,
        content: values.content,
        images: images ?? values.images,

        type: values.type,
        category: values.category,
        tags: values.tags,
        parentSku: values.SKU,
        brand: values.brand,
        status: values.status,

        attributes: values.attributes,
        variables,

        SKU: sku,
        track,
        quantity,
        regularPrice,
        salePrice,

        productGroup: parent ? 'parent' : 'child',
      });
      setStatus('success');
      setProductAdded(true)
    } catch (error) {
      console.log(`Product Creation failed :${error}`);
      setStatus('failed');
    }
  };

  return (
    <TableRow style={{ backgroundColor: disabled && 'rgba(0,0,0,0.1)' }}>
      <TableCell>{counter}</TableCell>
      <TableCell>{sku}</TableCell>
      <TableCell>{parent ? `${name} - Parent` : name}</TableCell>
      <TableCell>
        <FormControlLabel
          label=""
          control={
            <Checkbox
              checked={track}
              onChange={(e) => setTrack(e.target.checked)}
              disabled={disabled}
            />
          }
        />
      </TableCell>
      <TableCell width={150}>
        {track && (
          <TextField
            inputProps={{
              min: 0
            }}
            disabled={disabled}
            size="small"
            label="Quantity"
            type="number"
            onChange={(e) => setQuantity(+e.target.value || null)}
            value={quantity}

          />
        )}
        {!track && (
          <RadioGroup
            aria-label="Stock"
            name="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          >
            <FormControlLabel value="instock" control={<Radio />} label="Instock" />
            <FormControlLabel value="outstock" control={<Radio />} label="Outstock" />
          </RadioGroup>
        )}
      </TableCell>
      <TableCell width={150}>
        <TextField
          inputProps={{
            min: 0
          }}
          disabled={disabled}
          size="small"
          label="Price"
          type="number"
          onChange={(e) => setRegularPrice(+e.target.value || null)}
          value={regularPrice}
        />
      </TableCell>
      <TableCell width={150}>
        <TextField
          inputProps={{
            min: 0
          }}
          disabled={disabled}
          size="small"
          label="Price"
          type="number"
          onChange={(e) => setSalePrice(+e.target.value || null)}
          value={salePrice}
        />
      </TableCell>
      <TableCell width={150}>
        <input size="small" label="Image" type="file" onChange={_uploadImage} disabled={disabled} style={{ width: '150px' }} />
      </TableCell>
      <TableCell>


        {status === 'pending' && (
          <Button
            color="success"
            variant="contained"
            size="small"
            onClick={_addProduct}
            type="submit"
          >
            Add Product
          </Button>
        )}

        {status === 'loading' && (
          <Button color="success" variant="contained" size="small">
            Loading
          </Button>
        )}
        {status === 'success' && (
          <Button color="success" variant="contained" size="small">
            Product Created
          </Button>
        )}
        {status === 'failed' && (
          <Button color="success" variant="contained" size="small">
            Product creation failed
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
}
