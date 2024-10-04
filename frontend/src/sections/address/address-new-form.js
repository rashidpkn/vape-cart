import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
// assets
import { countries } from 'src/assets/data';
// components
import Iconify from 'src/components/iconify';
import FormProvider, {
  RHFCheckbox,
  RHFTextField,
  RHFRadioGroup,
  RHFAutocomplete,
  RHFSelect,
} from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function AddressNewForm({ open, onClose, onCreate }) {
  const NewAddressSchema = Yup.object().shape({

    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    phone_number: Yup.string().required('Phone Number is required'),
    email: Yup.string().required('Email is required'),
    address_line_1: Yup.string().required('Address line 1 is required'),
    address_line_2: Yup.string().required('Address line 2 is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),

  });

  const defaultValues = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    country: 'United Arab Emirates'
  };

  const methods = useForm({
    resolver: yupResolver(NewAddressSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onCreate(data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogTitle>New address</DialogTitle>

        <DialogContent dividers>
          <Stack spacing={3}>

            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="first_name" label="First Name" />
              <RHFTextField name="last_name" label="Last Name" />

              <RHFTextField name="phone_number" label="Phone Number" />
              <RHFTextField name="email" label="Email" />
            </Box>
            <RHFTextField name="address_line_1" label="Address Line 1" />
            <RHFTextField name="address_line_2" label="Address Line 2" />

            <RHFTextField name="city" label="City" />
            <RHFTextField name="country" label="Country" />


          </Stack>
        </DialogContent>

        <DialogActions>
          <Button color="inherit" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Deliver to this Address
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}

AddressNewForm.propTypes = {
  onClose: PropTypes.func,
  onCreate: PropTypes.func,
  open: PropTypes.bool,
};
