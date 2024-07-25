// @mui
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// _mock
// components
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import UserCardList from '../user-card-list';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function UserCardsView() {
  const settings = useSettingsContext();

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
            href={'https://vape-amazon.com/auth/firebase/register'}
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
