import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// utils
import { fNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function EcommerceWidgetSummary({ title, percent, total, chart, sx, ...other }) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" paragraph>
          {title}
        </Typography>

        <Typography variant="h3" gutterBottom>
          {fNumber(total)}
        </Typography>

        {/* {renderTrending} */}
      </Box>

      {/* <Chart
        type="line"
        series={[{ data: series }]}
        options={chartOptions}
        width={96}
        height={64}
      /> */}
    </Card>
  );
}

EcommerceWidgetSummary.propTypes = {
  chart: PropTypes.object,
  percent: PropTypes.number,
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
