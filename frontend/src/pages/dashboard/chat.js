import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router';
import { useAuthContext } from 'src/auth/hooks';
// sections
import { ChatView } from 'src/sections/chat/view';
import api from 'src/utils/api';

const ticketTypes = [
  'Technical Issue',
  'Stock Issue',
  'Billing Inquiry',
  'Feature Request',
  'General Question',
  'Other'
];

// ----------------------------------------------------------------------

export default function ChatPage() {
  const navigate = useNavigate()
  const auth = useAuthContext()
  console.log(auth);

  const [state, setState] = useState({
data:{
  username:auth.user.displayName,
  email:auth.user.email,
  subject:'',
  message:'',
  type:'',
  status:'pending'
}
  })

  return (
    <>
      <Helmet>
        <title> Dashboard: Chat</title>
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        Support
      </Typography>

      <Box sx={{maxWidth:'600px',padding:5,border:1,mx:'auto',width:'100%',borderRadius:'6px'}} component={'form'} onSubmit={async (e)=>{
        try {
          e.preventDefault()
          navigate('/dashboard')
          await api.post('/support',state.data)
          alert("Ticket submitted successfully. We'll follow up with you as soon as possible.")
        } catch (error) {
          
        }
      }}>
        <p>Submit Your Concerns as a Support Request</p>
        <TextField sx={{mt:3}} fullWidth label="Subject" value={state.data.subject} onChange={e=>setState(_=>({..._,data:{..._.data,subject:e.target.value}}))}  />
        <FormControl fullWidth sx={{mt: 3}}>
        <InputLabel id="ticket-type-label">Type</InputLabel>
        <Select
          labelId="ticket-type-label"
          value={state.data.type}
          label="Type"
          onChange={e => setState(prev => ({...prev, data: {...prev.data, type: e.target.value}}))}
        >
          {ticketTypes.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
        <TextField sx={{mt:3}} fullWidth label="Message" value={state.data.message} onChange={e=>setState(_=>({..._,data:{..._.data,message:e.target.value}}))}  />
        <Button variant='contained' color='success' sx={{width:'100%',mt:3}} type='submit'> Submit</Button>
      </Box>
    </>
  );
}
