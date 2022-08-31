import React from 'react'
import './ConnectBoxOne.css'
import profile from '../img/profile-pic.png'


export default function ConnectBox({handleClick, handleMouseOver}) {
  

  return (
    <div className='container'>
        <header className="connect-box-header">
            <div className="connect-box-header-left">
                <p className="get-started">Getting Started</p>
            </div>  
            <div className="connect-box-header-right">
            <p className="get-started-step">Step 1 of 2 ..</p>
            </div>
        </header>
        <div className="connect-box-main">
            <div className="profile-graphic">
              <img src={profile} alt="profile-pic" />
            </div>
            <p className="connect-account-text">Connect Stripe Account</p>
            <p className="connect-account-subtext">Client Billing requires a free Stripe account. Connect your existing account <br />
            or create a new one.</p>
            <div className="transaction-box">
              <p className="transaction-text">Transaction Fee</p>
              <p className="transaction-text"> 5%</p>
              </div>
            <button className="getting-started-btn"
            onMouseOver={handleMouseOver}
            onClick={handleClick}>
              Getting Started
              </button>
            <p className="link-text">Find out more about Client Billing <i className="fa-solid fa-arrow-up-right-from-square"></i></p>
        </div>
          &nbsp;
    </div>
  )
}
