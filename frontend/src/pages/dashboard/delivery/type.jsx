import React, { useState } from 'react'
// @mui
import { Box, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';


import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
// components
import Iconify from 'src/components/iconify';
import { Icon } from '@iconify/react';

export default function Type({label,setDelivery,value}) {
    const [edit, setEdit] = useState(false)
  return (
    <Paper
            variant="outlined"
            key={label}
            sx={{
              p: 2.5,
              px:5,
              cursor: 'pointer',
              display: 'flex',
              position:'relative'
            }}
          >
            {label === 'Next Day delivery' && <Iconify icon="carbon:bicycle" width={32} />}
            {label === 'Same Day Delivery' && <Iconify icon="carbon:delivery" width={32} />}
            {label === '1-2 Hour Delivery' && <Iconify icon="carbon:rocket" width={32} />}

            <ListItemText
              sx={{ ml: 2 }}
              primary={
                <Stack direction="row" alignItems="center">
                  <Box component="span" sx={{ flexGrow: 1 }}>
                    {label}
                  </Box>
                  {edit &&<TextField size='small' sx={{ width: '50px', margin: 0, padding: 0, textAlign: 'center' }} type='number'  value={value}
                    onChange={(ev) =>
                      setDelivery((prevDelivery) =>
                        prevDelivery.map((e) =>
                          e.label === label ? { ...e, value: Number(ev.target.value) } : e
                        )
                      )
                    }
                  />}
                  {!edit && <Box component="span" sx={{ typography: 'h6', ml: 1 }}>{`AED ${value}`}</Box>}
                </Stack>
              }
              secondary=""
              primaryTypographyProps={{ typography: 'subtitle1', mb: 0.5 }}
              secondaryTypographyProps={{ typography: 'body2' }}
            />
            

            <Icon icon="ic:round-edit"  style={{position:'absolute',top:"10px",right:'10px',zIndex:999,margin:0}} onClick={()=>setEdit(prev=>!prev)}/>
            
          </Paper>
  )
}
