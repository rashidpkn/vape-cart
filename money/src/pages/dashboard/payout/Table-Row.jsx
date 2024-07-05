import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { TableRow, TableCell } from '@mui/material';

import api from 'src/utils/api';
import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';
import Label from 'src/components/label';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';

export default function PayoutTableRow({ item, fetchPayout }) {
  const [uploadDoc, setUploadDoc] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [viewTranaction, setViewTranaction] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('pending');
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
              // src={item.fName}
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
          {item.status === 'pending' && (
            <>
              <Button
                sx={{
                  backgroundColor: '#ffe4df',
                  color: '#b71d18',
                  width: '45%',
                  '&:hover': { backgroundColor: '#ff563052' },
                }}
                variant="contained"
                onClick={async () => {
                  await api.delete(`/payout/${item.id}`);
                  fetchPayout();
                }}
              >
                Reject
              </Button>

              <Button
                sx={{
                  backgroundColor: '#212b36',
                  color: '#fff',
                  width: '45%',
                  '&:hover': { backgroundColor: '#454f5b' },
                  ml: 1,
                }}
                variant="contained"
                onClick={async () => {
                  if (item.method === 'cash') {
                    await api.patch(`/payout/${item.id}`, { status: 'completed', transactionId });
                    fetchPayout();
                  } else {
                    setUploadDoc((prev) => !prev);
                  }
                }}
              >
                Accept
              </Button>
            </>
          )}
          {item.status === 'completed' && (
            <Button
              sx={{
                backgroundColor: '#212b36',
                color: '#fff',
                '&:hover': { backgroundColor: '#454f5b' },
                ml: 1,
              }}
              variant="contained"
              onClick={() => {
                setViewTranaction((prev) => !prev);
              }}
            >
              View Transaction
            </Button>
          )}
        </TableCell>
      </TableRow>
      {
        // uploadDoc &&
        <TableRow>
          <TableCell colSpan={9} sx={{ px: '50px' }}>
            <Collapse in={uploadDoc} timeout="auto" unmountOnExit>
              {item.method === 'crypto' && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TextField
                    label="Enter transaction id"
                    size="small"
                    onChange={(e) => setTransactionId(e.target.value)}
                  />
                  <Button
                    sx={{
                      backgroundColor: '#212b36',
                      color: '#fff',
                      width: '200px',
                      '&:hover': { backgroundColor: '#454f5b' },
                      ml: 1,
                    }}
                    variant="contained"
                    onClick={async () => {
                      if (!transactionId) {
                        alert('Enter Transaction ID');
                        return;
                      }
                      await api.patch(`/payout/${item.id}`, { status: 'completed', transactionId });
                      fetchPayout();
                      setUploadDoc(false);
                    }}
                  >
                    Submit
                  </Button>
                </div>
              )}
              {item.method === 'wire transfer' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                  }}
                >
                  <Card sx={{ p: '20px' }}>
                    <p style={{ margin: 0, fontWeight: 500, marginBottom: '5px' }}>
                      <span className="title" style={{ width: '140px', display: 'inline-block' }}>
                        Account Name{' '}
                      </span>{' '}
                      : {item.account.name}
                    </p>
                    <p style={{ margin: 0, fontWeight: 500, marginBottom: '5px' }}>
                      <span className="title" style={{ width: '140px', display: 'inline-block' }}>
                        Account Number{' '}
                      </span>{' '}
                      : {item.account.number}
                    </p>
                    <p style={{ margin: 0, fontWeight: 500, marginBottom: '5px' }}>
                      <span className="title" style={{ width: '140px', display: 'inline-block' }}>
                        Bank Name{' '}
                      </span>{' '}
                      : {item.account.bankName}
                    </p>
                    <p style={{ margin: 0, fontWeight: 500, marginBottom: '5px' }}>
                      <span className="title" style={{ width: '140px', display: 'inline-block' }}>
                        Bank Address{' '}
                      </span>{' '}
                      : {item.account.address}
                    </p>
                    <p style={{ margin: 0, fontWeight: 500, marginBottom: '5px' }}>
                      <span className="title" style={{ width: '140px', display: 'inline-block' }}>
                        Bank Country{' '}
                      </span>{' '}
                      : {item.account.country}
                    </p>
                    <p style={{ margin: 0, fontWeight: 500, marginBottom: '5px' }}>
                      <span className="title" style={{ width: '140px', display: 'inline-block' }}>
                        Beneficiary Address{' '}
                      </span>{' '}
                      : {item.account.beneficiaryAddress}
                    </p>
                    <p style={{ margin: 0, fontWeight: 500, marginBottom: '5px' }}>
                      <span className="title" style={{ width: '140px', display: 'inline-block' }}>
                        Swift / BIC{' '}
                      </span>{' '}
                      : {item.account.swift}
                    </p>
                    <p style={{ margin: 0, fontWeight: 500, marginBottom: '5px' }}>
                      <span className="title" style={{ width: '140px', display: 'inline-block' }}>
                        Routing Number{' '}
                      </span>{' '}
                      : {item.account.routingNumber}
                    </p>
                  </Card>

                  <div
                    style={{
                      width: '300px',
                      height: '150px',
                      border: '1px solid black',
                      position: 'relative',
                      overflow: '0px',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <input
                      type="file"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        opacity: 0,
                      }}
                      onChange={(e) => {
                        const form = new FormData();
                        setUploadStatus('started');
                        form.append('images', e.target.files[0]);

                        api
                          .post('/upload', form)
                          .then((res) => {
                            setTransactionId(res.data[0]);
                            setUploadStatus('completed');
                          })
                          .catch((error) => {
                            setUploadStatus('failed');
                          });
                      }}
                    />
                    {uploadStatus == 'pending' && (
                      <Icon icon="line-md:upload-loop" fontSize="80px" />
                    )}
                    {uploadStatus == 'started' && (
                      <Icon icon="line-md:uploading-loop" fontSize="80px" />
                    )}
                    {uploadStatus == 'completed' && (
                      <Icon icon="fluent-mdl2:completed" fontSize="80px" />
                    )}
                    {uploadStatus == 'failed' && (
                      <Icon icon="line-md:upload-off-outline" fontSize="80px" />
                    )}
                    {!transactionId && <p>Upload Transaction file</p>}
                  </div>
                  <Button
                    sx={{
                      backgroundColor: '#212b36',
                      color: '#fff',
                      width: '200px',
                      '&:hover': { backgroundColor: '#454f5b' },
                      ml: 1,
                    }}
                    variant="contained"
                    onClick={async () => {
                      if (!transactionId) {
                        alert('Please upload transaction file');
                        return;
                      }
                      await api.patch(`/payout/${item.id}`, { status: 'completed', transactionId });
                      fetchPayout();
                      setUploadDoc(false);
                    }}
                  >
                    Upload & Submit
                  </Button>
                </div>
              )}
            </Collapse>

            <Collapse in={viewTranaction} timeout="auto" unmountOnExit>
              {item.method === 'crypto' && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <p>Transaction ID : {item.transactionId}</p>
                </div>
              )}
              {item.method === 'wire transfer' && (
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
      }
    </>
  );
}
