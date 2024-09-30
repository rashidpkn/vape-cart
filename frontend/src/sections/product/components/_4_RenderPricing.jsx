import {
  Box,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { RHFCheckbox, RHFTextField } from 'src/components/hook-form';

export default function RenderPricing({ values,setValue }) {
  return (
    <>
      <Grid md={4} width="100%" item>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Pricing
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Price related inputs
        </Typography>
      </Grid>

      <Grid xs={12} md={12} width="100%" item>
        <Card>
          <Stack spacing={3} sx={{ p: 3 }}>
          <FormControlLabel
              label="Track Stock"
              control={
                <Checkbox
                  checked={values.track}
                  onChange={(e) => {
                    setValue('track',e.target.checked)
                  }}
                />
              }
            />

            {values.track && (
              <TextField value={values.quantity}  onChange={e=>{
                const value = Math.max(0, Number(e.target.value));
                setValue('quantity', value);  
              }} label="Quantity" placeholder='0.00' type='number' inputProps={{min:0}}/>
              // <RHFTextField
              //   name="quantity"
              //   label="Quantity"
              //   placeholder="0.00"
              //   type="number"
              //   InputLabelProps={{ shrink: true }}
              // />
            )}

            {!values.track && (
              <FormControl>
                <RadioGroup defaultValue={values.availability || "In Stock"} row onChange={e=>setValue('availability',e.target.value)}>
                  <FormControlLabel
                    value="In Stock"
                    control={<Radio defaultChecked />}
                    label="In Stock"
                  />
                  <FormControlLabel value="Out Stock" control={<Radio />} label="Out Stock" />
                </RadioGroup>
              </FormControl>
            )}

            <RHFTextField
              name="regularPrice"
              label="Regular Price"
              placeholder="0.00"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="span" sx={{ color: 'text.disabled' }}>
                      AED
                    </Box>
                  </InputAdornment>
                ),
              }}
            />

            <RHFTextField
              name="salePrice"
              label="Sale Price"
              placeholder="0.00"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="span" sx={{ color: 'text.disabled' }}>
                      AED
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Card>
      </Grid>
    </>
  );
}
