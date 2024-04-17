import * as Yup from 'yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fData } from 'src/utils/format-number';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFUploadAvatar } from 'src/components/hook-form';
import { useAuthContext } from 'src/auth/hooks';
import { doc, updateDoc } from 'firebase/firestore';
import { DB } from 'src/auth/context/firebase/auth-provider';
import api from 'src/utils/api';

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useAuthContext();

  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    storeName: Yup.string().required('Store name is required'),
    contactPersonInTouch: Yup.string().required('Contact person in touch is required'),
    tradeLicense: Yup.mixed().nullable().required('Trade License is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Pick up Address is required'),
    workingTime: Yup.string().required('working Time is required'),
    workingDate: Yup.string().required('working Date is required'),
  });

  const defaultValues = {
    displayName: user?.displayName || '',
    email: user?.email || '',
    storeName: user?.storeName || '',
    tradeLicense: user?.tradeLicense || '',
    contactPersonInTouch: user?.contactPersonInTouch || null,
    phoneNumber: user?.phoneNumber || '',
    address: user?.address || '',
    workingTime: user?.workingTime || '',
    workingDate: user?.workingDate || '',
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
      const userRef = await doc(DB, 'users', user.uid);
      await updateDoc(userRef, data);
      enqueueSnackbar('Update success!');
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      const form = new FormData();
      form.append('images', file);
      const { data } = await api.post('/upload', form);
      console.log(data);

      if (data.length) {
        setValue('tradeLicense', data[0], { shouldValidate: true });
      }
    },
    [setValue]
  );

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
                  Trade License
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />
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
              <RHFTextField name="address" label="Pick up address" />
              <RHFTextField name="workingTime" label="Working Time" />
              <RHFTextField name="workingDate" label="Working Date" />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
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
