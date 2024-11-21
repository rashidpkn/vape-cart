import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TableCell,
  TableRow,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import api from 'src/utils/api';

export function ProductTable({
  selectedAttributes = [],
  counter,
  skuAlpha,
  attributes,
  values,
  currentProduct,
  setValue,
}) {
  const sku = skuAlpha[counter] ? `${values.SKU}-${skuAlpha[counter]}` : values.SKU;
  const name =
    !!attributes &&
    Object.keys(attributes)
      .map((e) => attributes[e])
      .join('-');

  const [productDetails, setProductDetails] = useState({
    track: true,
    availability: 'In Stock',
    quantity: null,
    regularPrice: null,
    salePrice: null,
    image: null,
    attributes: {},
  });

  useEffect(() => {
    const existingIndex = values.variations.findIndex(
      (variation) =>
        !!attributes &&
        Object.keys(attributes).every((key) => attributes[key] === variation.attributes[key])
    );

    if (Object.keys(productDetails.attributes).length < selectedAttributes.length) {
      const data = values.variations[existingIndex];
      setProductDetails((_) => ({ ..._, ...data, attributes }));
    }
  }, [attributes]);

  const [status, setStatus] = useState('pending');

  const handleProductDetailsChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setProductDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleUploadImage = async (e) => {
    try {
      const formData = new FormData();
      formData.append('images', e.target.files[0]);
      const { data } = await api.post('upload', formData);
      setProductDetails((prev) => ({
        ...prev,
        image: [data[0], ...values.images],
      }));
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  const handleAddProduct = async () => {
    let { track, quantity, regularPrice, salePrice } = productDetails;

    salePrice = Number(salePrice);
    regularPrice = Number(regularPrice);
    quantity = Number(quantity);

    if (track && !quantity) {
      return alert('Quantity is required.');
    }
    if (!regularPrice || !salePrice) {
      return alert('Sale Price and regular price are mandatory.');
    }

    if (salePrice > regularPrice) {
      return alert('Sale price must be less than the regular price');
    }

    if (status !== 'pending') {
      return;
    }
    setStatus('loading');
    try {
      if (!currentProduct) {
        setValue('variations', [...values.variations, productDetails]);
      } else {
        const { attributes } = productDetails;

        const existing = values.variations.some((variation) =>
          Object.keys(attributes).every((key) => variation.attributes[key] === attributes[key])
        );

        if (existing) {
          const updatedVariations = [...values.variations];

          const existingIndex = values.variations.findIndex((variation) =>
            Object.keys(attributes).every((key) => attributes[key] === variation.attributes[key])
          );

          updatedVariations[existingIndex] = {
            ...updatedVariations[existingIndex],
            ...productDetails,
          };
          setValue('variations', updatedVariations);
        } else {
          setValue('variations', [...values.variations, productDetails]);
        }
      }

      setStatus('success');
    } catch (error) {
      console.error('Product creation failed:', error);
      setStatus('failed');
    }
  };

  const renderActionButton = () => {
    switch (status) {
      case 'loading':
        return (
          <Button color="success" variant="contained" size="small">
            Loading
          </Button>
        );
      case 'success':
        if (currentProduct) {
          return (
            <Button color="success" variant="contained" size="small">
              Product Updated
            </Button>
          );
        }
        return (
          <Button color="success" variant="contained" size="small">
            Product Created
          </Button>
        );

      case 'failed':
        return (
          <Button color="error" variant="contained" size="small">
            Product creation failed
          </Button>
        );
      default:
        return (
          <Button color="success" variant="contained" size="small" onClick={handleAddProduct}>
            {currentProduct ? 'Save Changes' : 'Add Product'}
          </Button>
        );
    }
  };

  const { track, quantity, regularPrice, salePrice } = productDetails;

  return (
    <TableRow>
      <TableCell>{counter}</TableCell>
      <TableCell>{sku}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <FormControlLabel
          control={<Checkbox checked={track} onChange={
            (e) => setProductDetails((_) => ({ ..._, track: e.target.checked,availability:'In Stock' }))
          } />}
        />
      </TableCell>
      <TableCell width={150}>
        {track ? (
          <TextField
            size="small"
            label="Quantity"
            type="number"
            inputProps={{ min: 0 }}
            onChange={(e) => setProductDetails((_) => ({ ..._, quantity  :+e.target.value }))}
            value={quantity ?? ''}
          />
        ) : (
          <RadioGroup
            aria-label="Stock"
            name="Stock"
            value={productDetails.availability}
            onChange={(e) => setProductDetails((_) => ({ ..._, availability: e.target.value,quantity  :e.target.value === 'In Stock' ? 100 : 0 }))}
          >
            <FormControlLabel value="In Stock" control={<Radio />} label="In Stock" />
            <FormControlLabel value="Out Stock" control={<Radio />} label="Out Stock" />
          </RadioGroup>
        )}
      </TableCell>
      <TableCell width={150}>
        <TextField
          size="small"
          label="Price"
          type="number"
          inputProps={{ min: 0 }}
          onChange={handleProductDetailsChange('regularPrice')}
          value={regularPrice || ''}
        />
      </TableCell>
      <TableCell width={150}>
        <TextField
          size="small"
          label="Sale Price"
          type="number"
          inputProps={{ min: 0 }}
          onChange={handleProductDetailsChange('salePrice')}
          value={salePrice || ''}
        />
      </TableCell>
      <TableCell width={150}>
        <input type="file" onChange={handleUploadImage} style={{ width: '150px' }} />
      </TableCell>
      <TableCell>{renderActionButton()}</TableCell>
    </TableRow>
  );
}
