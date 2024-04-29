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
    
    const [type, setType] = useState('sign in')

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
               localStorage.setItem('customer',JSON.stringify(data.customer))
               setError('')
               setMessage(data.message)
               setTimeout(() => {
                
                   setLoginStatus(true)
               }, 500);

            } catch (error) {
                setMessage('')
                setError(error.response.data.message)
            }
        }}>
        <img src="/assets/images/logo/logo_single.webp" width={200} alt="" />
            <h2>Welcome To Vape Amazon</h2>
            {!!error &&<Alert sx={{width:'100%'}} severity="error" >{error}</Alert>}
            {!!message &&<Alert sx={{width:'100%'}} severity="success" >{message}</Alert>}
            {type === 'sign up' && <>
            <TextField  fullWidth label='First Name' onChange={e=>setCustomer(prev=>({...prev,fName:e.target.value}))}  value={customer.fName} type='text' required/>
            <TextField  fullWidth label='Last Name' onChange={e=>setCustomer(prev=>({...prev,lName:e.target.value}))}  value={customer.lName} type='text' required/>
            </>}
            <TextField  fullWidth label='Email' onChange={e=>setCustomer(prev=>({...prev,email:e.target.value}))}  value={customer.email} type='email' required/>
            <TextField  fullWidth label='Password' onChange={e=>setCustomer(prev=>({...prev,password:e.target.value}))}  value={customer.password} type='password' required/>
            <Button variant='contained' color='success' sx={{px:5,py:1}} type='submit'>{type === 'sign in' ? 'Login' : 'Register'}</Button>
            {type === 'sign in' ? <p style={{fontSize:'14px'}} onClick={()=>setType('sign up')}>Do you not have an Account?</p> :
            <p style={{fontSize:'14px'}} onClick={()=>setType('sign in')}>Already have an Account?</p>}
        
        </form>
    </div>
    </>
  )
}
