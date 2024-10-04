import { Grid, TextField } from '@mui/material'
import React from 'react'

export default function Customer({state,setState}) {
  return (
    <>
    <Grid item xs={12} md={6}>
        <TextField
            fullWidth
            label="Customer First Name"
            value={state.order.customer.first_name}
            onChange={(e) =>
                setState((_) => ({
                    ..._,
                    order: {
                        ..._.order,
                        customer: { ..._.order.customer, first_name: e.target.value },
                    },
                }))
            }
        />
    </Grid>

    <Grid item xs={12} md={6}>
        <TextField
            fullWidth
            label="Customer Last Name"
            value={state.order.customer.last_name}
            onChange={(e) =>
                setState((_) => ({
                    ..._,
                    order: {
                        ..._.order,
                        customer: { ..._.order.customer, last_name: e.target.value },
                    },
                }))
            }
        />
    </Grid>

    <Grid item xs={12} md={6}>
        <TextField
            fullWidth
            label="Customer Email"
            value={state.order.customer.email}
            onChange={(e) =>
                setState((_) => ({
                    ..._,
                    order: { ..._.order, customer: { ..._.order.customer, email: e.target.value } },
                }))
            }
        />
    </Grid>

    <Grid item xs={12} md={6}>
        <TextField
            fullWidth
            label="Customer Phone Number"
            value={state.order.customer.phone_number}
            onChange={(e) =>
                setState((_) => ({
                    ..._,
                    order: {
                        ..._.order,
                        customer: { ..._.order.customer, phone_number: e.target.value },
                    },
                }))
            }
        />
    </Grid>

    <Grid item xs={12} md={6}>
        <TextField
            fullWidth
            label="Address Line 1"
            placeholder="Apartment No. / Villa No. / Street no."
            value={state.order.customer.address_line_1}
            onChange={(e) =>
                setState((_) => ({
                    ..._,
                    order: {
                        ..._.order,
                        customer: { ..._.order.customer, address_line_1: e.target.value },
                    },
                }))
            }
        />
    </Grid>
    <Grid item xs={12} md={6}>
        <TextField
            fullWidth
            label="Address Line 2"
            placeholder="Area, Community, Tower"
            value={state.order.customer.address_line_2}
            onChange={(e) =>
                setState((_) => ({
                    ..._,
                    order: {
                        ..._.order,
                        customer: { ..._.order.customer, address_line_2: e.target.value },
                    },
                }))
            }
        />
    </Grid>

    <Grid item xs={12} md={6}>
        <TextField
            fullWidth
            label="City"
            placeholder="Dubai"
            value={state.order.customer.city}
            onChange={(e) =>
                setState((_) => ({
                    ..._,
                    order: { ..._.order, customer: { ..._.order.customer, city: e.target.value } },
                }))
            }
        />
    </Grid>
    <Grid item xs={12} md={6}>
        <TextField
            fullWidth
            label="Country"
            placeholder="United Arab Emirates"
            value={state.order.customer.country}
            onChange={(e) =>
                setState((_) => ({
                    ..._,
                    order: { ..._.order, customer: { ..._.order.customer, country: e.target.value } },
                }))
            }
        />
    </Grid>
</>
  )
}
