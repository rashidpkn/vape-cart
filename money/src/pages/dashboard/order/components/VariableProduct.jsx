import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

export default function VariableProduct({ state, setState,disabled }) {
  const [variations, setVariations] = useState([]);
  const [selectedVariations, setSelectedVariations] = useState({})

  return (
    <Grid item xs={12}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Variable Products</InputLabel>
          <Select
          disabled={disabled}
            labelId="demo-simple-select-label"
            value={state.selectedProduct}
            label="Variable Products"
            onChange={(e) => {
                setState((_) => ({ ..._, selectedProduct: e.target.value }));
                setVariations(state.products?.find(product=>product.id === e.target.value).variations);
            }}
          >
            {state.products
              ?.filter((e) => e.type === 'Variable')
              .map((e) => (
                <MenuItem key={e.id} value={e.id}>
                  {e.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

      { !!state.selectedProduct && <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Variation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={selectedVariations}
            label="Select Variation"
            onChange={(e) => {
              setSelectedVariations(e.target.value)
            }}
          >
            {variations?.map((variation, i) => (
              <MenuItem key={i} value={variation.attributes}>
                {Object.keys(variation.attributes)
                  .map(
                    (e) =>
                      `${e.replace(/([A-Z])/, ' $1').replace(/^./, (str) => str.toUpperCase())} : ${
                        variation.attributes[e]
                      }`
                  )
                  .join(', ')}{' '}
              </MenuItem>
            ))}
          </Select>
        </FormControl>}

        <Button
          sx={{ flexShrink: 0 }}
          variant="contained"
          color="success"
          onClick={() => {
            const selectedProduct = state.products.find((e) => e.id === state.selectedProduct);



            

            let price = selectedProduct.variations.find(e=>e.attributes===selectedVariations).salePrice

            console.log(selectedVariations);
            let name =  `${selectedProduct.name}-${Object.keys(selectedVariations)
                .map((a) => selectedVariations[a])
                .join('-')}`

            if (!selectedProduct) return;

            

            const add_product = {
              id: selectedProduct.id,
              name,
              price,
              images: [selectedProduct.images[0]],
              subTotal:price,
              userId: selectedProduct.userId,
              quantity: 1,
              status: 'processing',
              variation:selectedVariations
            };
            if (state.order.items.find((item) => item.name === name)) {
              alert('Product already exist');
              setState((_) => ({ ..._, selectedProduct: '' }));
              return;
            }

            const items = [...state.order.items, add_product];

            setState((_) => ({
              ...state,
              order: { ..._.order, items: items },
              selectedProduct: '',
            }));
          }}
        >
          Add Product
        </Button>
      </Box>
    </Grid>
  );
}
