import React from 'react'
import '../css/login.css'
const Login = () => {
  return (
    <div id='login-main'>
        <div className='login-page'>
            <h3>Login to Pulkit bank</h3>
            <form id='login-form'>
                <input type="text" id='user-id' placeholder='Enter USER-ID'/>
                <input type="text" id='password-login' placeholder='Enter Password'/>
                <button id='login-btn'>Login</button>
            </form>
            <h4>OR</h4>
            <button id='create-btn'>Create Account</button>
        </div>
    </div>
  )
}

export default Login