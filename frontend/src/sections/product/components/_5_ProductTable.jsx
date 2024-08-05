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
import { useState } from 'react';
import api from 'src/utils/api';

export function ProductTable({
  counter,
  skuAlpha,
  va,
  values,
  setProductAdded,
  currentProduct,
}) {
  const sku = skuAlpha[counter] ? `${values.SKU}-${skuAlpha[counter]}` : values.SKU;
  const name = `${va}`;

  const [productDetails, setProductDetails] = useState({
    track: true,
    quantity: null,
    regularPrice: null,
    salePrice: null,
    image: null,
  });

  const [stock, setStock] = useState('instock');
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
      console.error("Image upload failed:", error);
    }
  };

  const handleAddProduct = async () => {
    const { track, quantity, regularPrice, salePrice } = productDetails;

    if (track && !quantity) {
      return alert('Quantity is required.');
    }
    if (!regularPrice) {
      return alert('Regular price is required.');
    }
    if (salePrice && regularPrice <= salePrice) {
      return alert('Sale price must be less than the regular price');
    }
    if (status !== 'pending') {
      return;
    }
    setStatus('loading');
    try {
      // Add product API call here
      setStatus('success');
      setProductAdded(true);
    } catch (error) {
      console.error("Product creation failed:", error);
      setStatus('failed');
    }
  };

  const renderActionButton = () => {
    switch (status) {
      case 'loading':
        return <Button color="success" variant="contained" size="small">Loading</Button>;
      case 'success':
        return <Button color="success" variant="contained" size="small">Product Created</Button>;
      case 'failed':
        return <Button color="error" variant="contained" size="small">Product creation failed</Button>;
      default:
        return (
          <Button
            color="success"
            variant="contained"
            size="small"
            onClick={handleAddProduct}
          >
            {currentProduct ? 'Save Changes' : 'Add Product'}
          </Button>
        );
    }
  };

  const { track, quantity, regularPrice, salePrice, image } = productDetails;

  return (
    <TableRow>
      <TableCell>{counter}</TableCell>
      <TableCell>{sku}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <FormControlLabel
          control={<Checkbox checked={track} onChange={handleProductDetailsChange('track')} />}
        />
      </TableCell>
      <TableCell width={150}>
        {track ? (
          <TextField
            size="small"
            label="Quantity"
            type="number"
            inputProps={{ min: 0 }}
            onChange={handleProductDetailsChange('quantity')}
            value={quantity || ''}
          />
        ) : (
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
        <input
          type="file"
          onChange={handleUploadImage}
          style={{ width: '150px' }}
        />
      </TableCell>
      <TableCell>{renderActionButton()}</TableCell>
    </TableRow>
  );
}
