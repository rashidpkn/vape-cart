import { Icon } from '@iconify/react';
import { Box, Card, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, Select, Stack } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import api from 'src/utils/api';
import { TextField, Button, Grid, MenuItem } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Customer from './components/Customer';
import SimpleProduct from './components/SimpleProduct';
import VariableProduct from './components/VariableProduct';

export default function OrderEditPage() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        products: [],
        selectedProduct: '',
        order: {
            id: 5,
            items: [
                {
                    id: 0,
                    name: '',
                    price: 0,
                    images: [''],
                    subTotal: 0,
                    userId: '',
                    quantity: 0,
                    status: 'pending',
                },
            ],
            subTotal: 0,
            shipping: 0,
            discount: 0,
            refunded: 0,
            totalAmount: 0,
            totalQuantity: 0,
            status: 'pending',
            customer: {
                first_name: '',
                last_name: '',
                phone_number: '',
                email: '',
                address_line_1: '',
                address_line_2: '',
                city: '',
                country: '',
            },

            paymentType: 'Cash',
        },
        loading: false,
        updating: false,
        message: null,
        error: null,
    });

    const { id } = useParams();

    const _getOrder = useCallback(async () => {
        try {
            setState((_) => ({ ..._, loading: true }));
            const { data } = await api.get(`/orders/${id}`);
            setState((_) => ({ ..._, order: data, loading: false }));
            console.log(order);
        } catch (error) {
            setState((_) => ({
                ..._,
                loading: false,
                error: 'Order has some issues, Please check later',
            }));
        }
    }, []);

    const _getProducts = useCallback(async () => {
        const { data } = await api.get('/products');
        setState((_) => ({ ..._, products: data.products }));
    }, []);

    useEffect(() => {
        _getOrder();
        _getProducts();
    }, []);

    const _update_order = async () => {
        try {
            if (!state.order.items.length) {
                alert('Updating the order requires at least one item to be included.');
                return;
            }
            if (state.order.totalAmount < 1) {
                alert(
                    'The total amount should be more than zero. To continue, ensure that the total value is greater than zero.'
                );
                return;
            }
            setState((_) => ({ ..._, updating: true, error: null, message: null }));


            if (state.order.status === 'completed') {
                const order = await api.patch(`/orders/${state.order.id}`, { ...state.order, status: 'refunded' });
            } else {

                const order = await api.patch(`/orders/${state.order.id}`, state.order);
            }
            navigate('/dashboard/order');
            _getOrder();
            setState((_) => ({
                ..._,
                updating: false,
                error: null,
                message: 'Order Successfully updated',
            }));
        } catch (error) {
            setState((_) => ({
                ..._,
                updating: false,
                error: 'Something is error on updating this order',
                message: false,
            }));
        }
    };

    useEffect(() => {
        setState((_) => ({
            ..._,
            order: {
                ..._.order,
                subTotal: _.order.items.reduce((a, b) => a + b.subTotal, 0),
                totalAmount: _.order.items.reduce((a, b) => a + b.subTotal, 0) - state.order.discount,
                totalQuantity: _.order.items.reduce((a, b) => a + b.quantity, 0),
            },
        }));
    }, [state.order]);

    const [productType, setProductType] = useState('Simple')


    const disabled = state.order.status !== 'pending'

    if (state.loading) {
        return (
            <Box display={'flex'} minHeight={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Icon icon={'line-md:loading-loop'} color="#15b3ee" width={100} height={100} />
            </Box>
        );
    }

    return (
        <div className="flex justify-center item-center">
            <CustomBreadcrumbs
                heading="Edit Order"
                links={[{}]}
                sx={{
                    mb: { xs: 3, md: 5 },
                }}
            />
            <Grid container spacing={2}>
                <Customer state={state} setState={setState} disabled={disabled} />

                <Grid item xs={12} md={12}>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Product Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Simple"
                            name="radio-buttons-group"
                            row
                            value={productType}
                            onChange={e => setProductType(e.target.value)}
                        >
                            <FormControlLabel value="Simple" control={<Radio />} label="Simple" />
                            <FormControlLabel value="Variable" control={<Radio />} label="Variable" />
                        </RadioGroup>
                    </FormControl>

                </Grid>
                {productType === 'Simple' && <SimpleProduct state={state} setState={setState} disabled={disabled} />}
                {productType === 'Variable' && <VariableProduct state={state} setState={setState} disabled={disabled} />}

                {state.order.items.map((item, index) => (
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
                            </Stack>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
                                <TextField
                                    disabled={disabled}
                                    label="Quantity"
                                    value={item.quantity}
                                    onChange={(e) => {
                                        const newQuantity = parseInt(e.target.value, 10) || 0; // Ensure numeric input
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
                ))}

                <Grid item xs={12}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        sx={{ p: 3, border: '1px solid black', borderRadius: '6px' }}
                        gap={5}
                    >
                        <Box display={'flex'} gap={3}>
                            <Box width={120}>Subtotal</Box>
                            <Box>AED {state.order.subTotal}</Box>
                        </Box>
                        <Box display={'flex'} gap={3}>
                            <TextField
                                label="Discount"
                                disabled={disabled}
                                value={state.order.discount}
                                onChange={(e) => {
                                    const discount = parseInt(e.target.value, 10) || 0;
                                    setState((_) => ({
                                        ..._,
                                        order: {
                                            ..._.order,
                                            discount: discount,
                                            // totalAmount: _.order.totalAmount - discount,
                                        },
                                    }));
                                }}
                            />
                        </Box>

                        <Box display={'flex'} gap={3}>
                            <Box width={120}>Total</Box>
                            <Box>AED {state.order.totalAmount}</Box>
                        </Box>
                        <Box display={'flex'} gap={3}>
                            <Box width={120}>VAT 5%</Box>
                            <Box>AED {(state.order.totalAmount * 0.05).toFixed(2)}</Box>
                        </Box>
                        <Box display={'flex'} gap={3}>
                            <TextField
                                disabled={disabled}
                                label="Shipping"
                                value={state.order.shipping}
                                onChange={(e) => {
                                    const shipping = parseInt(e.target.value, 10) || 0;
                                    setState((_) => ({
                                        ..._,
                                        order: {
                                            ..._.order,
                                            shipping: shipping,
                                            // totalAmount: _.order.totalAmount - discount,
                                        },
                                    }));
                                }}
                            />
                        </Box>


                        <Box display={'flex'} gap={3}>
                            <TextField
                                disabled={state.order.status !== 'completed'}
                                label="Refunded"
                                value={state.order.refunded}
                                onChange={(e) => {
                                    const refunded = parseInt(e.target.value, 10) || 0;
                                    setState((_) => ({
                                        ..._,
                                        order: {
                                            ..._.order,
                                            refunded,
                                            // totalAmount: _.order.totalAmount - discount,
                                        },
                                    }));
                                }}
                            />
                        </Box>

                        <Box display={'flex'} gap={3}>
                            <Box width={120}>Total Amount</Box>
                            <Box>AED {(state.order.totalAmount * 1.05 + state.order.shipping - state.order.refunded).toFixed(2)}</Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Button
                        size="large"
                        color="success"
                        variant="contained"
                        fullWidth
                        onClick={_update_order}
                        disabled={state.updating}
                    >
                        Update Order
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
