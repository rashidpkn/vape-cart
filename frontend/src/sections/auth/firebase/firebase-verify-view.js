// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
// routes

import { useSearchParams } from 'src/routes/hook';

// assets
import { EmailInboxIcon } from 'src/assets/icons';
import { Button } from '@mui/material';
import api from 'src/utils/api';
// components

// ----------------------------------------------------------------------

export default function FirebaseVerifyView() {
  const searchParams = useSearchParams();

  const email = searchParams.get('email');

  const _resendVerificationlink = async () => {
    try {
      if (email) {
        const { data } = await api.post('/firebase/resend_verification_email', { email });
        alert(data.message);
      }
    } catch (error) {
      alert('There was an error sending the verification email.');
    }
  };

  const renderHead = (
    <>
      <EmailInboxIcon sx={{ mb: 5, height: 96 }} />

      <Typography variant="h3" sx={{ mb: 1 }}>
        Please check your email!
      </Typography>

      <Stack spacing={1} sx={{ color: 'text.secondary', typography: 'body2', mb: 5 }}>
        <Box component="span"> We have sent a confirmation link to</Box>
        <Box component="strong" sx={{ color: 'text.primary' }}>
          {email}
        </Box>
        <Box component="div">Please check your inbox/spam.</Box>
      </Stack>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Button variant="contained" color="success" onClick={_resendVerificationlink}>
          Resend verification link, please
        </Button>
        <Button variant="contained" color="success">
          Do you have questions about signing up?
        </Button>
      </Box>
    </>
  );

  return (
    <>
      {renderHead}

      {/* <Button
        component={RouterLink}
        href={paths.auth.firebase.login}
        size="large"
        color="inherit"
        variant="contained"
        startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
        sx={{ alignSelf: 'center' }}
      >
        Return to sign in
      </Button> */}
    </>
  );
}
