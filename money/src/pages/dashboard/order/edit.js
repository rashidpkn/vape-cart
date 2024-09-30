import { Icon } from '@iconify/react'
import { Box } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from 'src/utils/api'
import { TextField, Button, Grid, MenuItem } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs'



export default function OrderEditPage() {

    const [state, setState] = useState({
        order: {

        },
        loading: false,
        message: null,
        error: null

    })

    const { id } = useParams()
    const _getOrder = useCallback(
        async () => {
            try {
                setState(_ => ({ ..._, loading: true }))
                const { data } = await api.get(`/orders/${id}`)
                setState(_ => ({ ..._, order: data, loading: false }))
                console.log(order);
            } catch (error) {
                setState(_ => ({ ..._, loading: false, error: "Order has some issues, Please check later" }))
            }
        },
        [],

    )

    useEffect(() => {
        _getOrder()
    }, [])


    if (state.loading) {
        return (
            <Box display={'flex'} minHeight={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Icon icon={'line-md:loading-loop'} color='#15b3ee' width={100} height={100} />
            </Box>

        )
    }


    return (
        <div className='flex justify-center item-center'>
            <CustomBreadcrumbs
                heading="Edit Order"
                links={[
                    {}
                ]}
                sx={{
                    mb: { xs: 3, md: 5 },
                }}
            />
            <EditOrderForm initialData={orderData} />
        </div>
    )
}






const EditOrderForm = ({ initialData, onSubmit }) => {
    const [formData, setFormData] = useState(initialData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleItemChange = (index, key, value) => {
        const updatedItems = [...formData.items];
        updatedItems[index][key] = value;
        setFormData({
            ...formData,
            items: updatedItems,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {/* Customer Info */}
                <Grid item xs={12}>
                    <TextField
                        label="Customer Name"
                        name="customer.name"
                        value={formData.customer.name}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Customer Email"
                        name="customer.email"
                        value={formData.customer.email}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>

                {/* Shipping Address */}
                <Grid item xs={12}>
                    <TextField
                        label="Full Address"
                        name="shippingAddress.fullAddress"
                        value={formData.shippingAddress.fullAddress}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Phone Number"
                        name="shippingAddress.phoneNumber"
                        value={formData.shippingAddress.phoneNumber}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>

                {/* Payment & Order Info */}
                <Grid item xs={12}>
                    <TextField
                        label="Payment Type"
                        name="paymentType"
                        value={formData.paymentType}
                        onChange={handleInputChange}
                        fullWidth
                        select
                    >
                        <MenuItem value="Cash">Cash</MenuItem>
                        <MenuItem value="Credit Card">Credit Card</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        fullWidth
                        select
                    >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="shipped">Shipped</MenuItem>
                        <MenuItem value="delivered">Delivered</MenuItem>
                    </TextField>
                </Grid>



                {/* Submit Button */}
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Save Changes
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

// Usage example:
const orderData = {
    id: 5,
    items: [
        {
            id: 16,
            name: "Product 1",
            price: 42,
            images: [
                "http://localhost:3000/uploads/9f1830d2-db02-493c-b1d8-880094d894ef.webp"
            ],
            subTotal: 42,
            userId: "lgOws01QGpVZo44LVWKD6EiTMbm2",
            quantity: 1,
            status: "Product has some issues"
        },
        {
            id: 15,
            name: "Product 2",
            price: 60,
            images: [
                "http://localhost:3000/uploads/f0f89ff1-2c94-4f31-9202-646780d1fdf6.webp"
            ],
            subTotal: 60,
            userId: "LcF7SchAkTZrN1DvbVZtvBQU34U2",
            quantity: 1,
            status: "Product Is ready"
        }
    ],
    subTotal: 102,
    shipping: 0,
    discount: 0,
    totalAmount: 102,
    totalQuantity: 2,
    customer: {
        name: "Muhammed Rashid",
        email: "muhammed916rashid@gmail.com"
    },
    delivery: null,
    shippingAddress: {
        fullAddress: "asdasd ,Pallikunnu, Arakkuparamba, Abu Dhabi, United Arab Emirates",
        phoneNumber: "09562745975"
    },
    paymentType: "Cash",
    status: "pending",
    createdAt: "2024-09-26T08:48:57.740Z",
    updatedAt: "2024-09-30T10:13:04.837Z"
};
