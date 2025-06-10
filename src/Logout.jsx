import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'  
import { useNavigate } from 'react-router-dom'
export default function Logout() {

    const {email,} = useContext(AppContext);
    const Navigate = useNavigate();
    navigate="/login"
  return 
  
}
