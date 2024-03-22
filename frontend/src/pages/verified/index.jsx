import React, { useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Verified() {
    console.log('hello');
    const navigate = useNavigate()

    const urlParams = new URLSearchParams(window.location.search)
    const mode = urlParams.get('mode');
    const oobCode = urlParams.get('oobCode');
    
    window.location.href = `https://vape-cart.firebaseapp.com/__/auth/action?mode=${mode}&oobCode=${oobCode}`
    
    
    // useEffect(() => {
      
    // axios.get('https://vape-cart.firebaseapp.com/__/auth/action',{params:{mode,oobCode}}).then(res=>{
    //     navigate('/dashboard')
    // })

    // }, [])
    
}
