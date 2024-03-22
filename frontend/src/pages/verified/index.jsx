import React, { useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useAuthContext } from 'src/auth/hooks'


export default function Verified() {
    const {handleVerifyEmail} = useAuthContext()
    const navigate = useNavigate()

    const urlParams = new URLSearchParams(window.location.search)
    const mode = urlParams.get('mode');
    const oobCode = urlParams.get('oobCode');
    
    
    
    useEffect(() => {
        handleVerifyEmail(oobCode)
        navigate('/dashboard')
    }, [])
    
    // return(<></>)
}
