import {
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthContext } from 'src/auth/hooks';
import { RHFAutocomplete, RHFSelect, RHFTextField } from 'src/components/hook-form';
import { _brands, _category, _status, _tags, _type } from 'src/data/createProducts';
import { useResponsive } from 'src/hooks/use-responsive';
import api from 'src/utils/api';

export default function KeyProperties({ values, setValue }) {

  const [brands, setBrands] = useState(_brands)

  useEffect(() => {
  api.get('/brands').then(res=>
  {
    setBrands(prev=>[..._brands,res.data.data.map(e=>e.name)])
  }
  )  
  
    return () => {
      
    }
  }, [])
  

  const { user } = useAuthContext();

  const [newBrand, setNewBrand] = useState({ name: '', show: false });
  const [autoGenerateSku, setAutoGenerateSku] = useState(false);
  return (
    <>
      <Grid md={12} width="100%" item>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Key Properties
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Additional functions and attributes...
        </Typography>
      </Grid>

      <Grid xs={12} md={12} width="100%" item>
        <Card>
          <Stack spacing={3} sx={{ p: 3 }}>
            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
              <RHFSelect native name="type" label="Product Type" InputLabelProps={{ shrink: true }}>
                {_type.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </RHFSelect>

              <RHFSelect native name="category" label="Category" InputLabelProps={{ shrink: true }}>
                {_category.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </RHFSelect>

              {/* <RHFAutocomplete
                name="tags"
                label="Tags"
                placeholder="+ Tags"
                multiple
                freeSolo
                options={_tags.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              /> */}
              <Box>
                <RHFTextField name="SKU" label="Product SKU" />
                <FormControlLabel
                  label="Automatically generate SKUs"
                  control={
                    <Checkbox
                      checked={autoGenerateSku}
                      onChange={(e) => {
                        if (e.target.checked) {
                          if (values.name.replaceAll(' ', '').trim().length >= 15) {
                            setValue(
                              'SKU',
                              `${values.name.replaceAll(' ', '').trim().slice(0, 15)}-1`.toUpperCase()
                            );
                            setAutoGenerateSku(true);
                          } else {
                            setAutoGenerateSku(false);
                            alert(
                              'To automatically generate SKUs, ensure that the product name has at least 15 characters.'
                            );
                          }
                        } else {
                          setValue('SKU', '');
                          setAutoGenerateSku(false);
                        }
                      }}
                    />
                  }
                />
              </Box>

             {!newBrand.show && <RHFSelect native name="brand" label="Brand" InputLabelProps={{ shrink: true }}>
                {brands.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </RHFSelect>}
              <Box display="flex" alignItems="center" gap={1}>
                <FormControlLabel
                  sx={{ width: 190 }}
                  label="Is your brand missing? Click here to add it."
                  control={
                    <Checkbox
                      checked={newBrand.show}
                      onChange={(e) => setNewBrand((_) => ({ ..._, show: e.target.checked }))}
                    />
                  }
                />
                {newBrand.show && (
                  <>
                    <TextField
                      label="Brand Name"
                      style={{ width: 300 }}
                      onChange={(e) => setNewBrand((_) => ({ ..._, name: e.target.value }))}
                      value={newBrand.name}
                    />
                    <Button
                      variant="contained"
                      color="success"
                      onClick={async () => {
                        try {
                          if (newBrand.name) {
                            await api.post('/notifications', {
                              userId: user.id,
                              role: 'admin',
                              title: '🚀 New Brand Approval Request! 🚀',
                              message: `Exciting news! A new brand has been submitted for approval. Brand Name: ${newBrand.name}. 🛍️`,
                              type: 'product',
                            });
                            setValue('brand',newBrand.name)
                            setValue('status',"In Revision")
                            alert(
                              `Your request to create a new brand is being processed. Please wait while we verify the brand. You can add products, but their status will be 'In Revision.' After reviewing, the products will go live.`
                            );
                          } else {
                            alert('Please enter brand name');
                          }
                        } catch (error) {
                          console.log(error);
                          alert('An error occurred while adding this brand.');
                        }
                      }}
                    >
                      Add Brand
                    </Button>
                  </>
                )}
              </Box>

             {values.status !=='In Revision' && <RHFSelect native name="status" label="status" InputLabelProps={{ shrink: true }}>
                {_status.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </RHFSelect>}
            </Box>
          </Stack>
        </Card>
      </Grid>
    </>
  );
}
