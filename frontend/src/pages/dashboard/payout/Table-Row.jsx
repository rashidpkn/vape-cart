import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import { TableRow, TableCell } from '@mui/material';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';
import Label from 'src/components/label';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';

export default function PayoutTableRow({ item, fetchPayout }) {
  const [viewTranaction, setViewTranaction] = useState(false);
  return (
    <>
      <TableRow>
        <TableCell>
          <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', gap: '10px' }}>
            <Avatar
              sx={{ width: '50px', height: '50px' }}
              src={
                (item.fName === 'Amber Jay' &&
                  ' https://climaxclones.com/assets/images/Section-1.png') ||
                (item.fName === 'cute Freak' &&
                  'https://climaxclones.com/assets/images/Section.png') ||
                (item.fName === 'Leya Falcon' &&
                  'https://climaxclones.com/assets/images/product_2.png') ||
                (item.fName === 'Star Girl' &&
                  'https://climaxclones.com/assets/images/Section-3.png') ||
                item.fName
              }
              alt={item.fName}
            />
            <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: '#212b36' }}>
              {item.fName}
            </p>
          </Box>
        </TableCell>
        <TableCell>{fDate(item.createdAt)}</TableCell>
        <TableCell sx={{ textTransform: 'capitalize' }}>{item.method}</TableCell>
        <TableCell>
          <p style={{ margin: 0 }}> {item.currency.toUpperCase()}</p>
          <p style={{ margin: 0 }}> {!!item.network && item.network.toUpperCase()}</p>
        </TableCell>
        <TableCell>{fCurrency(item.amount)}</TableCell>
        <TableCell sx={{ maxWidth: '100px', wordBreak: 'break-word' }}>
          {item.walletAddress}
          {!item.walletAddress && <p style={{ margin: 0 }}>{item.account.name}</p>}
        </TableCell>
        <TableCell sx={{ textTransform: 'capitalize' }}>
          <Label variant="soft" color={(item.status === 'pending' && 'warning') || 'success'}>
            {item.status}
          </Label>
        </TableCell>
        <TableCell sx={{ textTransform: 'capitalize', minWidth: '230px' }}>
          {item.status === 'completed' && (
            <Button
              sx={{
                backgroundColor: '#212b36',
                color: '#fff',
                '&:hover': { backgroundColor: '#454f5b' },
                ml: 1,
              }}
              variant="contained"
              onClick={() => setViewTranaction((prev) => !prev)}
            >
              View Transaction
            </Button>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={9} sx={{ px: '50px' }}>
          <Collapse in={viewTranaction} timeout="auto" unmountOnExit>
            {item.method === 'crypto' && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Transaction ID : {item.transactionId}</p>
              </div>
            )}
            {item.method !== 'crypto' && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <p>Transaction file </p>
                <img src={item.transactionId} width={400} alt="" />
              </div>
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
