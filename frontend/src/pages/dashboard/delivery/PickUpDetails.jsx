import { LoadingButton } from '@mui/lab';
import { Alert, Box, Grid, TextField } from '@mui/material'
import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { DB } from 'src/auth/context/firebase/auth-provider';
import { useAuthContext } from 'src/auth/hooks';

export default function PickUpDetails() {
    const { user,initialize } = useAuthContext();

    const [state, setState] = useState({
        data:{
            location_no:'',
            street_name:'',
            area:'',
            city:'',
            description:'',
            contact:''
        },
        loading:'',
        error:'',
        message:''
    })

    useEffect(() => {
        if (user.pick_up_details) {
            setState(_=>({..._,data:user.pick_up_details}))
        }
      }, []);

 
    const update_pick_up_address =  async (e)=>{
        e.preventDefault()
        
        try {
            setState(_=>({..._,loading:true,message:'',error:''}))
            const userRef = doc(DB, 'users', user.uid);
            const pick_up_details = state.data
            await updateDoc(userRef,  {pick_up_details} );
            setState(_=>({..._,loading:false,message:"Successfully updated",error:''}))
            initialize()
        } catch (error) {
            console.log(error);
            setState(_=>({..._,loading:false,message:"",error:"Apologies, an error has occurred. Please review all the fields you've entered."}))
        }
    }

    
  return (
    <Box mb={6}>

    
    <Grid component="form" container spacing={5} onSubmit={update_pick_up_address} >
    <Grid item xs={6}>
    <TextField required label='Pick Up loaction No' fullWidth onChange={e=>setState(_=>({..._,data:{..._.data,location_no:e.target.value}}))} value={state.data.location_no}/>
    </Grid>
    <Grid item xs={6}>
    <TextField required label='Street Name' fullWidth onChange={e=>setState(_=>({..._,data:{..._.data,street_name:e.target.value}}))} value={state.data.street_name}/>
    </Grid>
    <Grid item xs={6}>
    <TextField required label='Area' fullWidth onChange={e=>setState(_=>({..._,data:{..._.data,area:e.target.value}}))} value={state.data.area}/>
    </Grid>
    <Grid item xs={6}>
    <TextField required label='City' fullWidth onChange={e=>setState(_=>({..._,data:{..._.data,city:e.target.value}}))} value={state.data.city}/>
    </Grid>
    <Grid item xs={6}>
    <TextField required label='Description' fullWidth onChange={e=>setState(_=>({..._,data:{..._.data,description:e.target.value}}))} value={state.data.description}/>
    </Grid>
    <Grid item xs={6}>
    <TextField required label='Pick Up Contact' fullWidth onChange={e=>setState(_=>({..._,data:{..._.data,contact:e.target.value}}))} value={state.data.contact}/>
    </Grid>
    <Grid item xs={6}>
    {!!state.message && <Alert severity="success">{state.message}</Alert>}
    {!!state.error &&<Alert severity="error">{state.error}</Alert>}
    </Grid>
    <Grid item xs={6}>
    <LoadingButton loading={state.loading} loadingIndicator="Updating…" color='success' variant='contained' type='submit'>Update</LoadingButton>
    </Grid>
    
  </Grid>


  </Box>
  )
}
