import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
// utils
import { fShortenNumber } from 'src/utils/format-number';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Iconify from 'src/components/iconify';
//
import ProductReviewList from './product-review-list';
import ProductReviewNewForm from './product-review-new-form';

// ----------------------------------------------------------------------

export default function ProductDetailsReview({ reviews=[] }) {
  const review = useBoolean();

  const renderSummary = (
    <Stack spacing={1} alignItems="center" justifyContent="center">
      <Typography variant="subtitle2">Average rating</Typography>

      <Typography variant="h2">
        {reviews?.reduce((a, b) => a + b.rating, 0) / reviews.length}/5
      </Typography>

      <Rating
        readOnly
        value={reviews?.reduce((a, b) => a + b.rating, 0) / reviews.length}
        precision={0.1}
      />

      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        ({fShortenNumber(reviews.length)} reviews)
      </Typography>
    </Stack>
  );

  const renderProgress = (
    <Stack
      spacing={1.5}
      sx={{
        py: 5,
        px: { xs: 3, md: 5 },
        borderLeft: (theme) => ({
          md: `dashed 1px ${theme.palette.divider}`,
        }),
        borderRight: (theme) => ({
          md: `dashed 1px ${theme.palette.divider}`,
        }),
      }}
    >
      {[1, 2, 3, 4, 5].map((rating) => (
        <Stack key={rating} direction="row" alignItems="center">
          <Typography variant="subtitle2" component="span" sx={{ width: 42 }}>
            {rating}
          </Typography>

          <LinearProgress
            color="inherit"
            variant="determinate"
            value={(reviews.filter((e) => e.rating === rating).length / reviews.length) * 100}
            sx={{
              mx: 2,
              flexGrow: 1,
            }}
          />

          <Typography
            variant="body2"
            component="span"
            sx={{
              minWidth: 48,
              color: 'text.secondary',
            }}
          >
            {fShortenNumber(reviews.filter((e) => e === rating).length)}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );

  const renderReviewButton = (
    <Stack alignItems="center" justifyContent="center">
      <Button
        size="large"
        variant="soft"
        color="inherit"
        onClick={review.onTrue}
        startIcon={<Iconify icon="solar:pen-bold" />}
      >
        Write your review
      </Button>
    </Stack>
  );

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        sx={{
          py: { xs: 5, md: 0 },
        }}
      >
        {renderSummary}

        {renderProgress}

        {renderReviewButton}
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <ProductReviewList reviews={reviews} />

      <ProductReviewNewForm open={review.value} onClose={review.onFalse} />
    </>
  );
}

ProductDetailsReview.propTypes = {
  ratings: PropTypes.array,
  reviews: PropTypes.array,
  totalRatings: PropTypes.number,
  totalReviews: PropTypes.number,
};
