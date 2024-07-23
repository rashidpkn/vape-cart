import * as Yup from 'yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// hooks
// utils
import { fData } from 'src/utils/format-number';
// assets
import { countries } from 'src/assets/data';
// components
import Iconify from 'src/components/iconify';
import FormProvider, {
  RHFTextField,
  RHFUploadAvatar,
  RHFAutocomplete,
} from 'src/components/hook-form';

import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import { deleteUser } from 'firebase/auth';
import { useNavigate } from 'react-router';
import api from 'src/utils/api';

// ----------------------------------------------------------------------

export default function AccountGeneral({ user }) {

  const navigate = useNavigate()

  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string(),
    email: Yup.string(),
    storeName: Yup.string(),
    contactPersonInTouch: Yup.string(),
    tradeLicense: Yup.mixed().nullable(),
    phoneNumber: Yup.string(),
    country: Yup.string(),
    address: Yup.string(),
    state: Yup.string(),
    city: Yup.string(),
    zipCode: Yup.string(),
    about: Yup.string(),
  });

  const defaultValues = {
    displayName: user?.displayName || '',
    email: user?.email || '',
    storeName: user?.storeName || '',
    tradeLicense: user?.tradeLicense || null,
    contactPersonInTouch: user?.contactPersonInTouch || null,
    phoneNumber: user?.phoneNumber || '',
    country: user?.country || 'United Arab Emirates',
    address: user?.address || '',
    state: user?.state || '',
    city: user?.city || '',
    zipCode: user?.zipCode || '',
    about: user?.about || '',
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const userRef = doc(DB, 'users', user.uid);
      console.log(data);

      await updateDoc(userRef, data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('tradeLicense', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  if (!user) return;


  const _deleteStore = async () => {
    try {
      api.delete(`/firebase/${user.uid}`)
      const userRef = doc(DB, 'users', user.uid);
      deleteDoc(userRef).then(() => {
        console.log('User document deleted from Firestore');
        navigate('/dashboard/user/cards')
      }).catch((error) => {
        alert('Error deleting user document from Firestore:', error);
        console.error('Error deleting user document from Firestore:', error);
      });



    } catch (error) {

    }
  }

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3, textAlign: 'center' }}>
            <RHFUploadAvatar
              name="tradeLicense"
              maxSize={3145728}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 3,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.disabled',
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />

            <Button variant="soft" color="error" sx={{ mt: 3 }} onClick={_deleteStore}>
              Delete Store
            </Button>
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="displayName" label="Name" />
              <RHFTextField name="email" label="Email Address" />
              <RHFTextField name="storeName" label="Store Name" />
              <RHFTextField name="contactPersonInTouch" label="Contact person in touch" />
              <RHFTextField name="phoneNumber" label="Phone Number" />
              <RHFTextField name="address" label="Address" />

              <RHFAutocomplete
                name="country"
                label="Country"
                options={countries.map((country) => country.label)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => {
                  const { code, label, phone } = countries.filter(
                    (country) => country.label === option
                  )[0];

                  if (!label) {
                    return null;
                  }

                  return (
                    <li {...props} key={label}>
                      <Iconify
                        key={label}
                        icon={`circle-flags:${code.toLowerCase()}`}
                        width={28}
                        sx={{ mr: 1 }}
                      />
                      {label} ({code}) +{phone}
                    </li>
                  );
                }}
              />

              <RHFTextField name="state" label="State/Region" />
              <RHFTextField name="city" label="City" />
              <RHFTextField name="zipCode" label="Zip/Code" />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <RHFTextField name="about" multiline rows={4} label="About" />

              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
