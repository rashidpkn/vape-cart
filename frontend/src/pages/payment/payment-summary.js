import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import Iconify from 'src/components/iconify';
import { Alert, IconButton, InputAdornment, TextField } from '@mui/material';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import api from 'src/utils/api';
// import QRCode from 'react-qr-code';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function PaymentSummary({
  currency,
  setCurrency,
  method,
  amount,
  setAmount,
  network,
  setNetwork,
}) {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { user } = useAuthContext();
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const { displayName, email, phoneNumber } = user;
  const [walletAddress, setWalletAddress] = useState('');
  const [account, setAccount] = useState({
    name: '',
    number: '',
    bankName: '',
    address: '',
    country: '',
    beneficiaryAddress: '',
    swift: '',
    routingNumber: '',
  });

  useEffect(() => {
    setError('');
  }, [method, currency, network, walletAddress, account]);

  const renderPrice = (
    <>
      {method === 'crypto' && (
        <div className="">
          <Button
            fullWidth
            sx={{ py: 1.5 }}
            variant="outlined"
            style={currency === 'btc' ? { border: '3px solid' } : { border: '1px solid' }}
            onClick={() => setCurrency('btc')}
            startIcon={<Icon icon="logos:bitcoin" />}
          >
            BTC
          </Button>
          <Button
            fullWidth
            sx={{ py: 1.5, mt: 2 }}
            variant="outlined"
            style={currency === 'usdt' ? { border: '3px solid' } : { border: '1px solid' }}
            onClick={() => setCurrency('usdt')}
            startIcon={<Icon icon="cryptocurrency-color:usdt" />}
          >
            USDT
          </Button>
        </div>
      )}

      {currency === 'usdt' && (
        <div className="">
          <p style={{ fontWeight: 600 }}>Choose payment network</p>
          <Button
            fullWidth
            sx={{ py: 1.5 }}
            variant="outlined"
            style={network === 'erc20' ? { border: '3px solid' } : { border: '1px solid' }}
            onClick={() => setNetwork('erc20')}
            // startIcon={<Icon icon="logos:bitcoin" />}
          >
            ERC20
          </Button>
          <Button
            fullWidth
            sx={{ py: 1.5, mt: 2 }}
            variant="outlined"
            style={network === 'trc20' ? { border: '3px solid' } : { border: '1px solid' }}
            onClick={() => setNetwork('trc20')}
            // startIcon={<Icon icon="cryptocurrency-color:usdt" />}
          >
            TRC20
          </Button>
        </div>
      )}

      {(currency === 'btc' || (currency === 'usdt' && !!network)) && (
        <TextField
            label="Enter Your Wallet Address"
            onChange={(e) => setWalletAddress(e.target.value)}
            value={walletAddress}
          />
      )}

      {method === 'wire transfer' && (
        <>
          <TextField
            value={account.name}
            onChange={(e) => setAccount((prev) => ({ ...prev, name: e.target.value }))}
            label="Account Name"
          />
          <TextField
            value={account.number}
            onChange={(e) => setAccount((prev) => ({ ...prev, number: e.target.value }))}
            label="Account Number"
          />
          <TextField
            value={account.bankName}
            onChange={(e) => setAccount((prev) => ({ ...prev, bankName: e.target.value }))}
            label="Bank Name"
          />
          <TextField
            value={account.address}
            onChange={(e) => setAccount((prev) => ({ ...prev, address: e.target.value }))}
            label="Bank Address"
          />
          <TextField
            value={account.country}
            onChange={(e) => setAccount((prev) => ({ ...prev, country: e.target.value }))}
            label="Bank Country"
          />
          <TextField
            value={account.beneficiaryAddress}
            onChange={(e) =>
              setAccount((prev) => ({ ...prev, beneficiaryAddress: e.target.value }))
            }
            label="Beneficiary Address"
          />
          <TextField
            value={account.swift}
            onChange={(e) => setAccount((prev) => ({ ...prev, swift: e.target.value }))}
            label="Swift/BIC"
          />
          <TextField
            value={account.routingNumber}
            onChange={(e) => setAccount((prev) => ({ ...prev, routingNumber: e.target.value }))}
            label="Routing Number"
          />
        </>
      )}
    </>
  );

  return (
    <Box
      sx={{
        p: 5,
        borderRadius: 2,
        bgcolor: '#dde8f9',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h6">Summary</Typography>

        <Link to="/dashboard" className="cursor-pointer">
          <Icon icon="eva:close-fill" className="text-2xl cursor-pointer" />
        </Link>
      </Stack>

      {error && <Alert severity="error">{error}</Alert>}
      {message && <Alert severity="success">{message}</Alert>}

      <>
        <Stack spacing={2.5} mt={2.5}>
          {renderPrice}

          <Divider sx={{ borderStyle: 'dashed' }} />
          {/* 
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle1">Total Amount</Typography>

              <Typography variant="subtitle1">$ {amount || '0.00'}*</Typography>
            </Stack>

            <Divider sx={{ borderStyle: 'dashed' }} /> */}
        </Stack>

        {/* <Typography component="div" variant="caption" sx={{ color: 'text.secondary', mt: 1 }}>
            * Plus applicable taxes
          </Typography>  */}

        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ mt: 5, mb: 3 }}
          onClick={async () => {
            if (submitted) {
              setMessage('');
              setError('You are already submit the request');
              return;
            }
            if (method === 'crypto') {
              if (!currency) {
                setError('Choose a currency');
                return;
              }
              if (currency === 'usdt' && !network) {
                setError('Choose a network');
                return;
              }
              if (!walletAddress) {
                setError('Enter your wallet address');
                return;
              }
            } else  if(method === 'wire transfer'){
              if (!account.name) {
                setError('Enter your account name');
                return;
              }
              if (!account.number) {
                setError('Enter your account number');
                return;
              }
              if (!account.bankName) {
                setError('Enter your bank name');
                return;
              }
              if (!account.address) {
                setError('Enter your bank address');
                return;
              }
              if (!account.country) {
                setError('Enter your bank country');
                return;
              }
              if (!account.beneficiaryAddress) {
                setError('Enter your beneficiary address');
                return;
              }
              if (!account.swift) {
                setError('Enter your Swift/BIC');
                return;
              }
              if (!account.routingNumber) {
                setError('Enter your routing number');
                return;
              }
              if (!sessionStorage.amount) {
                setError('Amount is not avalable');
                return;
              }
            }

            try {
              setSubmitted(true);
              const { data } = await api.post('/payout', {
                fName: displayName,
                email,
                phone: phoneNumber,
                method,
                currency,
                network,
                amount: sessionStorage.amount,
                account,
                walletAddress,
              });
              // await api.post('/notifications', {
              //   title: "Payout Request",
              //   message: `${displayName} is requesting a payout of $${sessionStorage.amount} via ${method}.`,
              //   user: 'admin'
              // })
              setMessage(
                'Your payout request has successfully created, You will redirect to dashboard soon'
              );
              setTimeout(() => {
                navigate('/dashboard');
              }, 4000);
            } catch (error) {}
          }}
        >
          Request Payout
        </Button>
      </>
    </Box>
  );
}
