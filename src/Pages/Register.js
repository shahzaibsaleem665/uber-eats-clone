import React, { useEffect } from 'react'
import SignUp from '../Components/SignUp'
function Register() {
  useEffect(() => {
    document.title= "Uber | Register"
  })
  
  return (
    <div className='register'>
      <SignUp />
    </div>
  )
}

export default Register