import React from 'react';
import './login.css';
import { FaTelegram } from 'react-icons/fa'
import { Button } from '@material-ui/core';
import { auth, provider } from '../../Firebase/Firebase';
const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(error => alert(error.message))
  }
  return (
    <div className='login'>
      <FaTelegram className='telegram-icon' />
      <h1>Telegram</h1>
      <Button onClick={signIn} >Sign In</Button>
    </div>
  )
}

export default Login
