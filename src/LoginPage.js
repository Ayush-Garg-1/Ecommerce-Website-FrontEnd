import React from 'react'

const LoginPage = () => {
  return (
    <div className="login-form">
    <h1>Create Your Account</h1>
    <form action="#">
    <div className="form-group">
    <label htmlFor="email">email</label>
    <input type="text" required />
    </div>
    <div className="form-group">
    <label htmlFor="password">password</label>
    <input type="password" required />
    </div>
    <button className='login-btn'>Login</button>
    </form>
    </div>
  )
}

export default LoginPage