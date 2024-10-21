import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hook';
import { RouterLink } from 'src/routes/components';
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField, RHFUpload } from 'src/components/hook-form';
import api from 'src/utils/api';

// ----------------------------------------------------------------------

export default function FirebaseRegisterView() {
  const { register } = useAuthContext();

  const [errorMsg, setErrorMsg] = useState('');

  const router = useRouter();

  const password = useBoolean();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    storeName: Yup.string().required('Store name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    phoneNumber: Yup.string().required('Phone number required'),
    contactPersonInTouch: Yup.string().required('Contact person in touch required'),
    tradeLicense: Yup.mixed().nullable(),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    storeName: '',
    email: '',
    phoneNumber: '',
    contactPersonInTouch: '',
    tradeLicense: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting },
    setValue,
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await register?.(
        data.email,
        data.password,
        data.firstName,
        data.lastName,
        data.storeName,
        data.phoneNumber,
        data.contactPersonInTouch,
        data.tradeLicense
      );
      const searchParams = new URLSearchParams({ email: data.email }).toString();

      const href = `${paths.auth.firebase.verify}?${searchParams}`;

      router.push(href);
    } catch (error) {
      console.error(error);
      reset();
      setErrorMsg(
        typeof error === 'string'
          ? error
          : error.message
            .replace('Firebase: Error ', '')
            .replace('(', '')
            .replace(')', '')
            .replace('auth/', '')
            .replaceAll('-', ' ')
      );
    }
  });

  const handleDrop = useCallback(
    async (acceptedFiles) => {
      try {
        alert('Please wait image is uploading');
        const form = new FormData();
        form.append('images', acceptedFiles[0]);
        const { data } = await api.post('upload', form);
        setValue('tradeLicense', `https://vapes-uae.com${data}`);
        alert('Image upload complete.');
      } catch (error) {
        alert(' Image upload failed, try again.');
      }
    },
    [setValue, values.images]
  );

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <Typography variant="h4">Get started absolutely free</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2"> Already have an account? </Typography>

        <Link href={paths.auth.firebase.login} component={RouterLink} variant="subtitle2">
          Sign in
        </Link>
      </Stack>
    </Stack>
  );

  const renderTerms = (
    <Typography
      component="div"
      sx={{ color: 'text.secondary', mt: 2.5, typography: 'caption', textAlign: 'center' }}
    >
      {'By signing up, I agree to '}
      <Link underline="always" color="text.primary">
        Terms of Service
      </Link>
      {' and '}
      <Link underline="always" color="text.primary">
        Privacy Policy
      </Link>
      .
    </Typography>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      {!!errorMsg && (
        <Alert severity="error" style={{ textTransform: 'capitalize' }}>
          {errorMsg}
        </Alert>
      )}

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <TextField
          onChange={(e) =>
            setValue('firstName', e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
          }
          value={values.firstName}
          name="firstName"
          label="First name"
        />
        <TextField
          onChange={(e) =>
            setValue('lastName', e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
          }
          value={values.lastName}
          name="lastName"
          label="Last name"
        />
      </Stack>

      <TextField
        onChange={(e) =>
          setValue('storeName', e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
        }
        value={values.storeName}
        name="storeName"
        label="Store Name"
      />
      {/* <RHFTextField name="storeName" label="Store name" /> */}

      <RHFTextField name="email" label="Email address" />
      <RHFTextField name="phoneNumber" label="Phone number" />
      {/* <RHFTextField name="contactPersonInTouch" label="Contact person in touch" /> */}
      <TextField
        onChange={(e) =>
          setValue(
            'contactPersonInTouch',
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          )
        }
        value={values.contactPersonInTouch}
        name="contactPersonInTouch"
        label="Contact person in touch"
      />
      {/* <RHFTextField name="tradeLicense" label="Trade license" /> */}

      <Typography variant="subtitle2">Trade license</Typography>
      <RHFUpload name="tradeLicense" maxSize={3145728} onDrop={handleDrop} />

      <RHFTextField
        name="password"
        label="Password"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Create account
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}

      {renderTerms}
    </FormProvider>
  );
}
