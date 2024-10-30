import PropTypes from 'prop-types';
import { format } from 'date-fns';
// @mui
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// utils
import { fCurrency } from 'src/utils/format-number';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import api from 'src/utils/api';
import { FormControl, InputLabel, Select } from '@mui/material';

// ----------------------------------------------------------------------

export default function OrderTableRow({ row, selected, onViewRow, onSelectRow, onDeleteRow }) {
  const { id, items, status, createdAt, customer } = row;

  const confirm = useBoolean();

  const collapse = useBoolean();

  const popover = usePopover();

  console.log(items);

  const renderPrimary = (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell>
        <Box
          onClick={onViewRow}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          #{id.toString().padStart(3, '0')}
        </Box>
      </TableCell>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={customer?.first_name} src={customer?.avatarUrl} sx={{ mr: 2 }} />

        <ListItemText
          primary={customer?.first_name + customer?.last_name}
          // secondary={customer.email}
          primaryTypographyProps={{ typography: 'body2' }}
          secondaryTypographyProps={{ component: 'span', color: 'text.disabled' }}
        />
      </TableCell>

      <TableCell>
        <ListItemText
          primary={format(new Date(createdAt), 'dd MMM yyyy')}
          secondary={format(new Date(createdAt), 'p')}
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: 'span',
            typography: 'caption',
          }}
        />
      </TableCell>

      <TableCell align="center"> {items?.reduce((a, b) => a + b.quantity, 0)} </TableCell>

      <TableCell> {fCurrency(items?.reduce((a, b) => a + b.quantity * b.price, 0))} </TableCell>
      <TableCell>
        {' '}
        {fCurrency(items?.reduce((a, b) => a + b.quantity * b.price, 0) * 0.3)}{' '}
      </TableCell>

      <TableCell>{fCurrency(items?.reduce((a, b) => a + b.quantity * b.price, 0) * 0.7)}</TableCell>

      <TableCell>
        <Label
          variant="soft"
          color={
            (status === 'completed' && 'success') ||
            (status === 'pending' && 'warning') ||
            (status === 'cancelled' && 'error') ||
            'default'
          }
        >
          {status}
        </Label>
      </TableCell>

      <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
        <IconButton
          color={collapse.value ? 'inherit' : 'default'}
          onClick={collapse.onToggle}
          sx={{
            ...(collapse.value && {
              bgcolor: 'action.hover',
            }),
          }}
        >
          <Iconify icon="eva:arrow-ios-downward-fill" />
        </IconButton>

        <IconButton color={popover.open ? 'inherit' : 'default'}
        // onClick={popover.onOpen}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </TableCell>
    </TableRow>
  );

  const renderSecondary = (
    <TableRow>
      <TableCell sx={{ p: 0, border: 'none' }} colSpan={10}>
        <Collapse
          in={collapse.value}
          timeout="auto"
          unmountOnExit
          sx={{ bgcolor: 'background.neutral' }}
        >
          <Stack component={Paper} sx={{ m: 1.5 }}>
            {items.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                alignItems="center"
                sx={{
                  p: (theme) => theme.spacing(1.5, 2, 1.5, 1.5),
                  '&:not(:last-of-type)': {
                    borderBottom: (theme) => `solid 2px ${theme.palette.background.neutral}`,
                  },
                }}
              >
                <Avatar
                  src={item.images[0]}
                  variant="rounded"
                  sx={{ width: 48, height: 48, mr: 2 }}
                />

                <ListItemText
                  primary={item.name}
                  secondary={item.id}
                  primaryTypographyProps={{
                    typography: 'body2',
                  }}
                  secondaryTypographyProps={{
                    component: 'span',
                    color: 'text.disabled',
                    mt: 0.5,
                  }}
                  sx={{ width: "50%" }}
                />

                <Box>x{item.quantity}</Box>

                <Box sx={{ width: 110, textAlign: 'right' }}>{fCurrency(item.price)}</Box>

                <Button variant='contained' color='success' sx={{ mx: 5 }} onClick={async () => {
                  try {
                    await api.patch(`/orders/change-item-status/${id}`, {
                      itemId: item.id,
                      status: 'Product Is ready'
                    })
                    await api.post('/notifications', {
                      userId: item.userId,
                      role: 'admin',
                      title: `🚀 ${item.name} Product Is ready 🚀`,
                      message: `${item.name} is ready for shipping`,
                      type: 'product',
                    });

                    alert('Product Status is update to admin,they will pick the order');
                  } catch (error) {
                    console.log();
                  }
                }}>Product is Ready</Button>
                <Button variant='contained' color='warning' sx={{ mx: 5 }} onClick={async () => {
                  try {
                    const message = window.prompt("Issues?")
                    await api.patch(`/orders/change-item-status/${id}`, {
                      itemId: item.id,
                      status: 'Product has some issue'
                    })
                    await api.post('/notifications', {
                      userId: item.userId,
                      role: 'admin',
                      title: `🚀 ${item.name} Product has some issue 🚀`,
                      message: message,
                      type: 'product',
                    });

                    alert('Product Status is update to admin,they will resolve the issue');
                  } catch (error) {

                  }
                }}>Product has some issue</Button>





              </Stack>
            ))}
          </Stack>
        </Collapse>
      </TableCell>

    </TableRow>
  );

  return (
    <>
      {renderPrimary}

      {renderSecondary}

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        {/* <MenuItem
          onClick={() => {
            onViewRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:eye-bold" />
          View
        </MenuItem> */}
        <MenuItem
          onClick={() => {
            confirm.onTrue();
            popover.onClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}

OrderTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
