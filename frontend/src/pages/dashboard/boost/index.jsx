import { Box } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs';

export default function Boost() {
  return (
    <Box px={5}>
      <Helmet>
        <title>Dashboard: Boost</title>
      </Helmet>
      <CustomBreadcrumbs heading="Boost" links={[{}]} sx={{ mb: { xs: 3, md: 5 } }} />
    </Box>
  );
}
