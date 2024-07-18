// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import InvoiceNewEditForm from '../invoice-new-edit-form';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function InvoiceCreateView() {
  const settings = useSettingsContext();

  return (
    <Box px={5}>
      <CustomBreadcrumbs
        heading="Create a new invoice"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Invoice',
            href: paths.dashboard.invoice.root,
          },
          {
            name: 'New Invoice',
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <InvoiceNewEditForm />
    </Box>
  );
}
