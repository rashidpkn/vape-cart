import PropTypes from 'prop-types';
import { format } from 'date-fns';
// @mui
import Box from '@mui/material/Box';
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
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, InputLabel, Modal, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import api from 'src/utils/api';

// ----------------------------------------------------------------------

export default function ProductTableRow({
  row,
  selected,
  onSelectRow,
  onDeleteRow,
  onEditRow,
  fetchProduct,
}) {
  const {
    id,
    name,
    salePrice,
    category,
    quantity,
    createdAt,
    inventoryType,
    images,
    regularPrice,
    status,
    track,
    type
  } = row;

  const [quickEdit, setQuickEdit] = useState(false);

  const [quickEditData, setQuickEditData] = useState({
    name,
    salePrice,
    quantity,
    regularPrice,
    status,
    track,
  });

  const _quickEdit = async () => {
    try {
      if (quickEditData.salePrice >= quickEditData.regularPrice) {
        return alert('Sale price must be less than the regular price');
      }
      const editPRoduct = await api.post(`/products/quick_edit/${id}`, quickEditData);
      alert('Product Updated');
      fetchProduct();
      setQuickEdit(false);
    } catch (error) { }
  };

  const confirm = useBoolean();

  const popover = usePopover();

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
                to={`/dashboard/product/${id}/edit`}
                noWrap
                color="inherit"
                variant="subtitle2"
                style={{ cursor: 'pointer', color: 'black' }}
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

        <TableCell>{type}</TableCell>

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

        <TableCell>{fCurrency(regularPrice)}</TableCell>

        <TableCell>{fCurrency(salePrice)}</TableCell>

        <TableCell>
          <Label variant="soft" color={(status === 'Published' && 'info') || 'default'}>
            {status}
          </Label>
        </TableCell>

        <TableCell align="center">
          <Icon
            icon={'mdi:magic'}
            cursor={'pointer'}
            width={25}
            color="#086c9c"
            onClick={() => setQuickEdit((_) => true)}
          />
        </TableCell>

        <TableCell align="right">
          <IconButton color={popover.open ? 'primary' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem>
          <Link to={`/product/${id}`} target="_blank" style={{ color: 'black' }}>
            <Iconify icon="solar:eye-bold" />
            View
          </Link>
        </MenuItem>

        <MenuItem
          onClick={() => {
            onEditRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>

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

      <Modal
        open={quickEdit}
        onClose={() => setQuickEdit((_) => false)}
        aria-labelledby="quickedit-model"
        aria-describedby="quickedit-model-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 650,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography id="quickedit-model" variant="h6" component="h2">
            Quick Edit - {name}
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} mt={5} gap={5}>


            <TextField
              label="Name"
              value={quickEditData.name}
              onChange={(e) => setQuickEditData((_) => ({ ..._, name: e.target.value }))}
            />
            <TextField
              type="number"
              label="Regular Price"
              value={quickEditData.regularPrice}
              onChange={(e) => setQuickEditData((_) => ({ ..._, regularPrice: e.target.value }))}
            />
            <TextField
              type="number"
              label="Sale Price"
              value={quickEditData.salePrice}
              onChange={(e) => setQuickEditData((_) => ({ ..._, salePrice: e.target.value }))}
            />
            <FormControlLabel
              label="Track Stock"
              control={<Checkbox checked={quickEditData.track} onChange={e => {
                setQuickEditData(_ => ({ ..._, track: e.target.checked }));
                if (!e.target.checked) {
                  setQuickEditData(_ => ({ ..._, quantity: 100 }))
                } else {
                  setQuickEditData(_ => ({ ..._, quantity: quantity }))
                }
              }

              } />}
            />

            {quickEditData.track ? <TextField
              type="number"
              label="Quantity"
              value={quickEditData.quantity}
              onChange={(e) => setQuickEditData((_) => ({ ..._, quantity: e.target.value }))}
            /> :
              <FormControl>
                <RadioGroup defaultValue="Instock" row>
                  <FormControlLabel d value="Instock" control={<Radio defaultChecked />} label="Instock" />
                  <FormControlLabel value="Outstock" control={<Radio />} label="Outstock" />
                </RadioGroup>
              </FormControl>
            }
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                value={quickEditData.status}
                onChange={(e) => setQuickEditData((_) => ({ ..._, status: e.target.value }))}
              >
                <MenuItem value="Published">Published</MenuItem>
                <MenuItem value="Draft">Draft</MenuItem>
                <MenuItem value="In Revision">In Revision</MenuItem>
                <MenuItem value="Hidden">Hidden</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" color="success" onClick={_quickEdit}>
              {/* <Icon
                icon={'mdi:magic'}
                cursor={'pointer'}
                width={18}
                color="#fff"
                style={{ margin: '0 12px' }}
              /> */}
              Save Changes
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

ProductTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
