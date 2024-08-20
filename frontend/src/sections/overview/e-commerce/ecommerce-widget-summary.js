import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// utils
import { fNumber, fPercent } from 'src/utils/format-number';
// components
import Iconify from 'src/components/iconify';
import { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function EcommerceWidgetSummary({ title, percent, total, chart, sx, ...other }) {
  const theme = useTheme();

  const {
    colors = [theme.palette.primary.light, theme.palette.primary.main],
    options,
  } = chart;





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
