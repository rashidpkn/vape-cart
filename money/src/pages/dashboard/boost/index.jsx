import { Box } from '@mui/material'
import React from 'react'
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs/custom-breadcrumbs'

export default function Boost() {
  return (
    <Box px={5}>
        <CustomBreadcrumbs heading="Boost" links={[{ }]} sx={{ mb: { xs: 3, md: 5 } }}/>
    </Box>
  )
}
