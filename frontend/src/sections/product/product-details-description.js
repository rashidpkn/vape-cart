import PropTypes from 'prop-types';
// components
import Markdown from 'src/components/markdown';
import parse from 'html-react-parser';
import { Box } from '@mui/material';
// ----------------------------------------------------------------------

export default function ProductDetailsDescription({ description }) {
  return (
    <Box p={5}>{parse(description)}</Box>
    // <Markdown
    //   children={description}
    //   sx={{
    //     p: 3,
    //     '& p, li, ol': {
    //       typography: 'body2',
    //     },
    //     '& ol': {
    //       p: 0,
    //       display: { md: 'flex' },
    //       listStyleType: 'none',
    //       '& li': {
    //         '&:first-of-type': {
    //           minWidth: 240,
    //           mb: { xs: 0.5, md: 0 },
    //         },
    //       },
    //     },
    //   }}
    // />
  );
}

ProductDetailsDescription.propTypes = {
  description: PropTypes.string,
};
