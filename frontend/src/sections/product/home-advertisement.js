import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// theme
import { bgGradient } from 'src/theme/css';
// routes
// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const theme = useTheme();

  const renderDescription = (
    <Box
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: 'common.white', mb: 5, typography: 'h3' }}
      >
        <Typography sx={{ fontSize: 15 }}> Till 26th, Oct</Typography>
        25% Special Off Today
        <br /> Only for VGOD
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        spacing={2}
      >

        <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size="large"
            variant="contained"
            target="_blank"
            rel="noopener"
            href="#"
            sx={{
              color: 'grey.800',
              bgcolor: 'common.white',
            }}
          >
            Shop Now
          </Button>
        </m.div>
      </Stack>
    </Box>
  );

  const renderImg = (
    <Stack component={m.div} variants={varFade().inUp} alignItems="center">
      <Box
        component={m.img}
        alt="Vape"
        src="https://vapemonkeydubai.co/wp-content/uploads/2023/09/apple_bomb.png"
        sx={{ m: 5, maxWidth: 200 }}
      />
    </Stack>
  );

  return (
    <Container component={MotionViewport} sx={{ mt: 8 }}>
      <Stack
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          ...bgGradient({
            direction: '135deg',
            startColor: theme.palette.primary.main,
            endColor: theme.palette.primary.dark,
          }),
          borderRadius: 2,
          pb: { xs: 5, md: 0 },
        }}
      >
        {renderImg}

        {renderDescription}
      </Stack>
    </Container>
  );
}
