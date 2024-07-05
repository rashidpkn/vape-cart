import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// utils

// components

import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export default function AppTopInstalledCountries({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3 }}>
          {list.map((country, i) => (
            <CountryItem key={i} country={country} index={i} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}

AppTopInstalledCountries.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function CountryItem({ country, index }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Stack direction="row" alignItems="center">
        {index + 1}
      </Stack>

      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2" noWrap>
          {country.displayName}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle2" noWrap>
          {country.storeName}
        </Typography>
      </Stack>
    </Stack>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object,
};
