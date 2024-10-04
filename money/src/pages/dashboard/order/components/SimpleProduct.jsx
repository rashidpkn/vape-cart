import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'

export default function SimpleProduct({state,setState,}) {
  return (
    <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
                    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Simple Products</InputLabel>
    <Select
        labelId="demo-simple-select-label"
        value={state.selectedProduct || ""}
        label="Simple Products"
        onChange={(e) => {
            setState((prevState) => ({ ...prevState, selectedProduct: e.target.value }));
        }}
    >
        {state.products?.filter((product) => product.type === 'Simple').map((product) => (
            <MenuItem key={product.id} value={product.id}>
                {product.name}
            </MenuItem>
        ))}
    </Select>
</FormControl>

                        <Button
                            sx={{ flexShrink: 0 }}
                            variant="contained"
                            color="success"
                            onClick={() => {
                                const selectedProduct = state.products.find((e) => e.id === state.selectedProduct);

                                if (!selectedProduct) return;

                                const add_product = {
                                    id: selectedProduct.id,
                                    name: selectedProduct.name,
                                    price: selectedProduct.salePrice,
                                    images: [selectedProduct.images[0]],
                                    subTotal: selectedProduct.salePrice,
                                    userId: selectedProduct.userId,
                                    quantity: 1,
                                    status: 'processing',
                                };
                                if (state.order.items.find((item) => item.id === add_product.id)) {
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
  )
}
