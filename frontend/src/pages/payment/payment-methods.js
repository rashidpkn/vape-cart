import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Iconify from 'src/components/iconify';
//
import PaymentNewCardDialog from './payment-new-card-dialog';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const PAYMENT_OPTIONS = [
  {
    value: 'crypto',
    label: 'Crypto',
  },
  {
    value: 'wire transfer',
    label: 'Wire Transfer',
  },
  {
    value: 'cash',
    label: 'Cash',
  },
];

const CARD_OPTIONS = [];

export default function PaymentMethods({ setMethod, method, setCurrency }) {
  const newCard = useBoolean();

  const handleChangeMethod = useCallback((newValue) => {
    setMethod(newValue);
    if (newValue === 'wire transfer') {
      setCurrency('');
    }
  }, []);

  return (
    <Stack spacing={5}>
      <Typography variant="h6">How would you like us to pay you?</Typography>

      <Stack spacing={3}>
        {PAYMENT_OPTIONS.map((option) => (
          <OptionItem
            key={option.label}
            option={option}
            selected={method === option.value}
            isCredit={option.value === 'credit' && method === 'credit'}
            onOpen={newCard.onTrue}
            onClick={() => handleChangeMethod(option.value)}
          />
        ))}
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function OptionItem({ option, selected, isCredit, onOpen, ...other }) {
  const { value, label } = option;

  return (
    <Paper
      variant="outlined"
      key={value}
      sx={{
        p: 2.5,
        cursor: 'pointer',
        ...(selected && {
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
        }),
      }}
      {...other}
    >
      <ListItemText
        primary={
          <Stack direction="row" alignItems="center">
            <Iconify
              icon={selected ? 'eva:checkmark-circle-2-fill' : 'eva:radio-button-off-fill'}
              width={24}
              sx={{ mr: 2, color: selected ? 'primary.main' : 'text.secondary' }}
            />

            <Box component="span" sx={{ flexGrow: 1 }}>
              {label}
            </Box>

            <Stack spacing={1} direction="row" alignItems="center">
              {value === 'credit' && (
                <>
                  <Iconify icon="logos:mastercard" width={24} />,
                  <Iconify icon="logos:visa" width={24} />
                </>
              )}
              {value === 'crypto' && <Iconify icon="logos:bitcoin" width={24} />}
              {value === 'crypto' && <Iconify icon="cryptocurrency-color:usdt" width={24} />}
              {value === 'cash' && <Icon icon="la:money-bill-wave-alt" style={{color:'#81b562'}}   width={24} />}
            </Stack>
          </Stack>
        }
        primaryTypographyProps={{ typography: 'subtitle2' }}
      />
    </Paper>
  );
}

OptionItem.propTypes = {
  isCredit: PropTypes.bool,
  onOpen: PropTypes.func,
  option: PropTypes.object,
  selected: PropTypes.bool,
};
