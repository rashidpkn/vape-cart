import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  
  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid xs={12} sm={12} md={5} lg={2.5} sx={{ backgroundColor: 'common.white', boxShadow: 15, mx: 2, mb:5, py: 2, borderRadius: 2 }}>
          <Grid container justifyContent="center" alignItems='center' sx={{ height: '100%' }}>
            <Grid xs={3} >
              <Box sx={{ pr: 1, pt: 1 }}>
                <Iconify icon='carbon:delivery' width={40} color='text.secondary'/>
              </Box>
            </Grid>
            <Grid xs={10}>
              <Box sx={{ fontWeight: 'bold', color: 'text.primary', fontSize: 20 }}>
                Fast Delivery
              </Box>
              <Box sx={{ color: 'text.secondary'}}>
                Start from $10
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={5} lg={2.5} sx={{ backgroundColor: 'common.white', boxShadow: 15, mx: 2, mb:5, borderRadius: 2 }}>
          <Grid container justifyContent="center" alignItems='center' sx={{ height: '100%' }}>
            <Grid xs={2}>
              <Box sx={{ pr: 1 }}>
                <Iconify icon='carbon:piggy-bank' width={50} color='text.secondary'/>
              </Box>
            </Grid>
            <Grid xs={10}>
              <Box sx={{ fontWeight: 'bold', color: 'text.primary', fontSize: 20 }}>
                Money Guarantee
              </Box>
              <Box sx={{ color: 'text.secondary'}}>
                7 Days Back
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={5} lg={2.5} sx={{ backgroundColor: 'common.white', boxShadow: 15, mx: 2, mb:5, borderRadius: 2 }}>
          <Grid container justifyContent="center" alignItems='center' sx={{ height: '100%' }}>
            <Grid xs={3} >
              <Box sx={{ pr: 2, pt: 1 }}>
                <Iconify icon='emojione-monotone:stopwatch' width={40} color='text.secondary'/>
              </Box>
            </Grid>
            <Grid xs={10}>
              <Box sx={{ fontWeight: 'bold', color: 'text.primary', fontSize: 20 }}>
                365 Days
              </Box>
              <Box sx={{ color: 'text.secondary'}}>
                For free return
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={5} lg={2.5} sx={{ backgroundColor: 'common.white', boxShadow: 15, mx: 2, mb:5, borderRadius: 2 }}>
          <Grid container justifyContent="center" alignItems='center' sx={{ height: '100%' }}>
            <Grid xs={3} >
              <Box sx={{ pr: 2, pt: 1 }}>
                <Iconify icon='iconoir:wallet' width={40} color='text.secondary'/>
              </Box>
            </Grid>
            <Grid xs={10}>
              <Box sx={{ fontWeight: 'bold', color: 'text.primary', fontSize: 20 }}>
                Payment
              </Box>
              <Box sx={{ color: 'text.secondary'}}>
                Secure system
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
