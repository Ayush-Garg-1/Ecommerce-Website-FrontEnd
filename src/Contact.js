import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="contact-page">
    <h1 className='contact-heading'>fell free to <span>contact us</span></h1>
    <form>
    <div className="form-group">
    <label htmlFor="username">Name :</label>
    <input type="text" name='username' required />
    </div>
    <div className="form-group">
    <label htmlFor="email">Email :</label>
    <input type="email" name='email' required/>
    </div>
    <div className="form-group">
    <label htmlFor="username">message :</label>
    <textarea cols="30" rows="4" required></textarea>
    </div>
    <button className='reuse-btn' style={{backgroundColor:"blue", color:"white" , paddingLeft:"51px" , paddingRight:"51px" }}>send</button>
    </form>
    </div>
    </>
  )
}

export default Contact