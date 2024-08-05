import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { RHFCheckbox, RHFTextField } from 'src/components/hook-form';

export default function RenderPricing({ values }) {
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
            <RHFCheckbox name="track" label="Track" />

            {values.track && (
              <RHFTextField
                name="quantity"
                label="Quantity"
                placeholder="0.00"
                type="number"
                InputLabelProps={{ shrink: true }}
              />
            )}

            {!values.track && (
              <FormControl>
                <RadioGroup defaultValue="Instock" row>
                  <FormControlLabel
                    d
                    value="Instock"
                    control={<Radio defaultChecked />}
                    label="Instock"
                  />
                  <FormControlLabel value="Outstock" control={<Radio />} label="Outstock" />
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
