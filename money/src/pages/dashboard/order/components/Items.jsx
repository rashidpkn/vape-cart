import { Box, Grid, Icon, Stack, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react'
import api from 'src/utils/api';

export default function Items({item,state,setState,index,disabled}) {
    const [product, setProduct] = useState({})
const getProduct = useCallback(
  async () => {
    try {
        const {data} = await api.get(`/products/${item.id}`)
        setProduct(data)
    } catch (error) {
        
    }
  },
  [],
)

useEffect(() => {
  getProduct()
}, [])



  return (
    <Grid item xs={12} md={12}>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            sx={{ px: 1, border: '1px solid black', borderRadius: '6px' }}
                        >
                            <Stack>
                                <p>{item.name}</p>
                                <p>{item.id}</p>
                                {product.type === 'Simple' &&<p>Available : {product.quantity}</p>}

                            </Stack>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
                                <TextField
                                    disabled={disabled}
                                    label="Quantity"
                                    value={item.quantity}
                                    type='number'
                                    onChange={(e) => {
                                        const newQuantity = parseInt(e.target.value, 10) || 0; // Ensure numeric input
                                        if(newQuantity <0){
                                            return
                                        }
                                        if(newQuantity >product.quantity){
                                                alert(`The quantity must not exceed ${product.quantity}`)
                                                return
                                        }
                                        const updatedItems = state.order.items.map((itm, i) =>
                                            i === index
                                                ? {
                                                    ...itm,
                                                    quantity: newQuantity,
                                                    subTotal: newQuantity * itm.price, // Update subTotal based on the new quantity
                                                }
                                                : itm
                                        );
                                        setState((prevState) => ({
                                            ...prevState,
                                            order: {
                                                ...prevState.order,
                                                items: updatedItems,
                                            },
                                        }));
                                    }}
                                />
                                <p>x</p>
                                <p>AED {item.price}</p>
                                <p>=</p>
                                <p>AED {item.subTotal}</p>
                                <Icon
                                    icon={'material-symbols:close'}
                                    width={24}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        if (disabled) {
                                            return
                                        }
                                        const items = state.order.items.filter((e) => e.id !== item.id);
                                        setState((_) => ({
                                            ..._,
                                            order: {
                                                ..._.order,
                                                items,
                                            },
                                        }));
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
  )
}
