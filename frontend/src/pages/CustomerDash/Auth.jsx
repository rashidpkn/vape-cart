import React, { useEffect, useState } from 'react'
import './auth.css'
import { Alert, Button, TextField } from '@mui/material'
import api from 'src/utils/api'
import Header from 'src/layouts/main/header'

export default function Auth({customer, setCustomer,setLoginStatus}) {

    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
      
    setError('')
    }, [customer])
    

  return (
    <>
    <Header />
    <div className='auth-page'>
        <form className="" onSubmit={ async(e)=>{
            e.preventDefault()
            try {
                if(customer.password.length < 5){
                   setError("Password must be 5 character")
                   return
               }
               const {data} =  await api.post('/customers',customer)
               localStorage.setItem('customer',JSON.stringify(customer))
               setError('')
               setMessage(data.message)
               setTimeout(() => {
                
                   setLoginStatus(true)
               }, 2000);

            } catch (error) {
                setMessage('')
                setError(error.response.data.message)
            }
        }}>
        <img src="/assets/images/logo/logo_single.webp" width={200} alt="" />
            <h2>Welcome To Vape Amazon</h2>
            {!!error &&<Alert sx={{width:'100%'}} severity="error" >{error}</Alert>}
            {!!message &&<Alert sx={{width:'100%'}} severity="success" >{message}</Alert>}
            <TextField  fullWidth label='Email' onChange={e=>setCustomer(prev=>({...prev,email:e.target.value}))}  value={customer.email} type='email' required/>
            <TextField  fullWidth label='Password' onChange={e=>setCustomer(prev=>({...prev,password:e.target.value}))}  value={customer.password} type='password' required/>
            <Button variant='contained' color='success' sx={{px:5,py:1}} type='submit'>Login</Button>
        </form>
    </div>
    </>
  )
}
