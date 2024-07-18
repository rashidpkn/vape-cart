// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hook';
// _mock
import { _invoices } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import InvoiceNewEditForm from '../invoice-new-edit-form';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function InvoiceEditView() {
  const settings = useSettingsContext();

  const params = useParams();

  const { id } = params;

  const currentInvoice = _invoices.find((invoice) => invoice.id === id);

  return (
    <Box px={5}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Invoice',
            href: paths.dashboard.invoice.root,
          },
          { name: currentInvoice?.invoiceNumber },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <InvoiceNewEditForm currentInvoice={currentInvoice} />
    </Box>
  );
}
