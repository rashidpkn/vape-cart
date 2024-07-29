// @mui
// routes
import { paths } from 'src/routes/paths';
// components
import { useParams } from 'src/routes/hook';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import { useEffect, useState } from 'react';
import api from 'src/utils/api';
import { Box } from '@mui/material';
import InvoiceDetails from '../invoice-details';

// ----------------------------------------------------------------------

export default function InvoiceDetailsView() {


  const params = useParams();

  const { id } = params;

  const [currentInvoice, setCurrentInvoice] = useState({});
  const fetchInvoice = async () => {
    try {
      const { data } = await api.get(`invoice/${id}`);
      setCurrentInvoice(data);
    } catch (error) { }
  };

  useEffect(() => {
    fetchInvoice();
  }, []);

  return (
    <Box px={5}>
      <CustomBreadcrumbs
        heading={currentInvoice?.invoiceNumber}
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
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <InvoiceDetails invoice={currentInvoice} />
    </Box>
  );
}
