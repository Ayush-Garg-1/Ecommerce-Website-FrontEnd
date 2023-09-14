import React from 'react'
import Trusted from './Trusted';
const Services = () => {
  return (
    <>
        <div className="key-services">
            <div className="service">
            <i class="fa-solid fa-truck"></i>
            <p>super fast and free delivery</p>
            </div>
            <div className="service">
            <i class="fa-solid fa-shield"></i>
            <p>provide high quality product</p>
            </div>
            <div className="service">
            <i class="fa-solid fa-money-bill-trend-up"></i>
            <p>super secure payment system</p>
            </div>
        </div>
        <Trusted/>
    </>
  )
}

export default Services;