import React from 'react'
import './ConnectedBoxOne.css'
import profile from '../img/profile-pic.png'


export default function ConnectBox({handleClick}) {
  

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
            <p className="connected-text">Connect Stripe Account</p>
            <div className="connected-box">
              <div className="connected-box-left">
                <p className="connected-text">Stripe Account</p>
                <p className="connected-sub-text"> email</p>
              </div>
              <div className="connected-box-right">
                <p className="confirmed-text">Connected <i class="fa-solid fa-circle-check"></i></p>
              </div>
              </div>
            <button className="getting-started-btn"
            onClick={handleClick}>
              Continue
              </button>
  
        </div>
          &nbsp;
    </div>
  )
}
