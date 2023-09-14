import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    <div className="error-page">
    <div className="error-img">
    <img src="../images/erroeImg.jpg" alt="ErrorImage"  />
    </div>
    <div className="error-text">
    <h1 className='main-heading'>opp's page is not found!!</h1>
    <NavLink to="/">
    <button className='reuse-btn'>go back to home</button>
    </NavLink>
    </div>
    </div>
    </>
  )
}

export default ErrorPage