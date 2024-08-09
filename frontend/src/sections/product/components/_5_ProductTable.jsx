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
  selectedAttributes=[],
  counter,
  skuAlpha,
  attributes,
  values,
  setProductAdded,
  currentProduct,
  setValue
}) {
  const sku = skuAlpha[counter] ? `${values.SKU}-${skuAlpha[counter]}` : values.SKU;
  const name = Object.keys(attributes).map(e=>attributes[e] + ' - ');

  

  const [productDetails, setProductDetails] = useState({
    track: true,
    quantity: null,
    regularPrice: null,
    salePrice: null,
    image: null,
    // sku,
    attributes:{},
  });

  useEffect(() => {  

      const existingIndex = values.variations.findIndex(variation => {
        return Object.keys(attributes).every(key => 
            attributes[key] === variation.attributes[key]
        );
    });
    
    if(Object.keys(productDetails.attributes).length < selectedAttributes.length ){
      const data = values.variations[existingIndex]
      setProductDetails(_=>({..._,...data,attributes}))
      
    }

    
  }, [attributes])


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

    if (salePrice) {
      const regularPriceNumber = parseFloat(regularPrice);
      const salePriceNumber = parseFloat(salePrice);
  
      if (regularPriceNumber <= salePriceNumber) {
          return alert('Sale price must be less than the regular price');
      }
  }
  

    if (status !== 'pending') {
      return;
    }
    setStatus('loading');
    try {
      
      if (!currentProduct) {
        setValue("variations", [...values.variations, productDetails]);
    } else {
      const { attributes } = productDetails;

      
     const existing =  values.variations.some(variation => {
        return Object.keys(attributes).every(key => {
            return variation.attributes[key] === attributes[key];
        });
    });

  
      if (existing) {
          const updatedVariations = [...values.variations];
          
          const existingIndex = values.variations.findIndex(variation => {
            return Object.keys(attributes).every(key => 
                attributes[key] === variation.attributes[key]
            );
        });
        
          
          updatedVariations[existingIndex] = {
              ...updatedVariations[existingIndex],
              ...productDetails
          };
          setValue("variations", updatedVariations);
      } else {
          
          setValue("variations", [...values.variations, productDetails]);
      }
    }

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
        if(currentProduct){

          return <Button color="success" variant="contained" size="small">Product Updated</Button>;
        }else{
          return <Button color="success" variant="contained" size="small">Product Created</Button>;
        }
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
