import React, { useEffect } from 'react'
import SignUp from '../Components/SignUp'

function Login() {
    useEffect(() => {
        document.title= 'Uber | Login'
    })
  return (
    <div className='login'>
        <SignUp />
    </div>
  )
}

export default Login