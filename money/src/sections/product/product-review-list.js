import PropTypes from 'prop-types';
// @mui
//
import ProductReviewItem from './product-review-item';

// ----------------------------------------------------------------------

export default function ProductReviewList({ reviews }) {
  return (
    <>
      {reviews.map((review) => (
        <ProductReviewItem key={review.id} reviews={review} />
      ))}

      
    </>
  );
}

ProductReviewList.propTypes = {
  reviews: PropTypes.array,
};
