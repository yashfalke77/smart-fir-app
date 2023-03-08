import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import localStorageService from '../services/localStorage.service'

const Logout = () => {

    const navigate = useNavigate()
    useEffect(() => {
        localStorageService.logout()
        navigate("/")
    }, [])
    
    return (
        null
    )
}

export default Logout