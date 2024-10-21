// @mui
import Button from '@mui/material/Button';
// routes
import { paths } from 'src/routes/paths';
// _mock
// components
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import { Box } from '@mui/material';
import UserCardList from '../user-card-list';

// ----------------------------------------------------------------------

export default function UserCardsView() {


  return (
    <Box px={5}>
      <CustomBreadcrumbs
        heading="Partners"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Partners', href: paths.dashboard.user.root },
        ]}
        action={
          <Button
            component={RouterLink}
            href="https://vapes-uae.com/auth/firebase/register"
            target='_blank'
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New User
          </Button>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <UserCardList />
    </Box>
  );
}
