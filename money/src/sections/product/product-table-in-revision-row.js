import PropTypes from 'prop-types';
import { format } from 'date-fns';
// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';
// utils
import { fCurrency } from 'src/utils/format-number';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import api from 'src/utils/api';
import { Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function ProductTableInRevisionRow({
  row,
  selected,
  onSelectRow,
  onDeleteRow,
  onEditRow,
  onViewRow,
  fetchProduct
}) {
  const {
    id,
    name,
    salePrice,
    userId,
    status,
    category,
    quantity,
    createdAt,
    inventoryType,
    images,
    regularPrice,
    type,
    brand
  } = row;

  const confirm = useBoolean();

  const popover = usePopover();

  const [open, setOpen] = useState(false)

  const [message, setMessage] = useState('')

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt={name}
            src={images[0]}
            variant="rounded"
            sx={{ width: 64, height: 64, mr: 2 }}
          />

          <ListItemText
            disableTypography
            primary={
              <Link
                noWrap
                color="inherit"
                variant="subtitle2"
                onClick={onViewRow}
                sx={{ cursor: 'pointer' }}
              >
                {name}
              </Link>
            }
            secondary={
              <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
                {category}
              </Box>
            }
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

        <TableCell sx={{ typography: 'caption', color: 'text.secondary' }}>
          <LinearProgress
            value={(quantity * 100) / quantity}
            variant="determinate"
            color={
              (inventoryType === 'out of stock' && 'error') ||
              (inventoryType === 'low stock' && 'warning') ||
              'success'
            }
            sx={{ mb: 1, height: 6, maxWidth: 80 }}
          />
          {!!quantity && quantity} {inventoryType}
        </TableCell>

        <TableCell>{type === 'Simple' && fCurrency(regularPrice)}</TableCell>

        <TableCell>{type === 'Simple' && regularPrice > salePrice && fCurrency(salePrice)}</TableCell>

        <TableCell>
          <Label variant="soft" color={(status === "Published" && 'info') || 'default'}>
            {status}
          </Label>
        </TableCell>

        <TableCell align="right">
          <Box display={'flex'} gap={1}>
            <a href={`https://vapes-uae.com/product/${id}`} target='_blank'>
              <Button size='small' variant='contained' color='success'>View</Button>
            </a>
            <Button size='small' variant='contained' color='success'
              onClick={async () => {
                try {

                  // await api.patch('/products', { id, status: 'Published' });
                  const { data } = await api.post('/brands', { name: brand })
                  await api.post('/notifications', {
                    userId: userId,
                    role: 'user',
                    title: '🚀 In Revision Product is Approved  🚀',
                    message: `Your In Revision Product is Approved`,
                    type: 'product',
                  });
                  fetchProduct()
                  alert("Product is Approved")
                } catch (error) {

                }
              }}

            >Approve</Button>
            <Button size='small' variant='contained' color='warning'
              onClick={() => setOpen(true)}
            >Request Adjustment</Button>
            <Button size='small' variant='contained' color='error'
              onClick={async () => {
                try {

                  await api.delete(`/products/${id}`);
                  await api.post('/notifications', {
                    userId: userId,
                    role: 'user',
                    title: 'In Revision Product is Rejected',
                    message: `Your In Revision Product is Rejected`,
                    type: 'product',
                  });
                  fetchProduct()
                  alert("Product is Rejected")
                } catch (error) {
                  console.log(error);
                }
              }}
            >Reject</Button>
          </Box>
        </TableCell>
      </TableRow>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >

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


      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: 'none',
          borderRadius: '4px',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Request Adjustment
          </Typography>
          <TextField fullWidth sx={{ mt: 3 }} onChange={e => setMessage(e.target.value)} value={message} label="Adjustment Message" />
          <Button color='success' variant='contained' size='medium' sx={{ mt: 3 }}
            onClick={async () => {
              try {

                await api.patch('/products', { id, status: 'Adjustment' });
                await api.post('/notifications', {
                  userId: userId,
                  role: 'user',
                  title: 'In Revision,  Request Adjustment',
                  message,
                  type: 'product',
                });
                fetchProduct()
                alert("Message has send Successfully")
              } catch (error) {

              }
            }}
          >Submit</Button>
        </Box>
      </Modal>
    </>
  );
}

