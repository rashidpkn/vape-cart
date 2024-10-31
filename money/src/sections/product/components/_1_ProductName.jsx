import { Autocomplete, Box, TextField } from '@mui/material';
import React from 'react';

export default function ProductName({ values, products, setValue }) {
  return (
    <Autocomplete
      value={values.name}
      onChange={(e, value) => {
        if (value) {
          const product = products.find((product) => product.name === value);
          if (product) {
            setValue('images', product.images);
            setValue('name', product.name);
            setValue('category', product.category);
            setValue('brand', product.brand);
            setValue('type', product.type);
          }
        } 
        // else {
        //   setValue('images', null);
        // }
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
  );
}
