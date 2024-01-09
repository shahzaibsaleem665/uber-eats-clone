import React from 'react'
import './SignUp.css'
import register_header_logo from '../assets/register_header_logo.png'
import { Button, Divider } from '@mui/material'
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import qr from '../assets/qr.png'
function SignUp() {

  return (
    <div className='signUp'>
      <div className="signUp__header">
        <img src={register_header_logo} alt='uber-eats logo'/>
      </div>
      <div className="signUp__content">
        <h2>What's your phone number or email?</h2>
        <input type='text' placeholder='Enter phone number or email' required />
        <Button type='submit' className='continue__button'>Continue</Button>
      </div> 
      <div className="signUp__content">
      <Divider className='divider' variant='middle'>or</Divider>
      <Button type='submit'><img src={google} />Continue with Google</Button>
      <Button type='submit'><img src={apple}  /> Continue with Apple</Button>
      <Button type='submit'><img src={facebook}  />Continue with Facebook</Button>
      </div>
      <div className="signUp__content">
      <Divider className='divider' variant='middle'>or</Divider>
      <Button type='button' className='qr__button'><img src={qr}/>Login with QR code</Button>
      <p>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
      
    </div>
  )
}

export default SignUp