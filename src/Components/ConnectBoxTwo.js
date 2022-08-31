import React from 'react'
import './ConnectBoxTwo.css'

import { useState } from 'react'



export default function ConnectBox({handleClick, handleSubmit}) {

const handleChange =(e) => {
  console.log(e.target.checked)
}


  return (
    <div className='container'>
        <header className="connect-box-header">
            <div className="connect-box-header-left">
                <p className="get-started">Getting Started</p>
            </div>  
            <div className="connect-box-header-right">
            <p className="get-started-step">Step 2 of 2 ..</p>
            </div>
        </header>
        <div className="connect-box-main">
          <div className="back" onClick={handleClick}>
            <i className="fa-solid fa-chevron-left"></i> Back
          </div>
        <p className="currency-text">Choose Billing Currency</p>

        <p className="currency-sub-text">Select the currency you want to use to bill your clients.</p>
        <div className="note-box">
          <i className="fa-solid fa-circle-exclamation"></i> <span className="note-text">Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency.</span>
        </div>
        <select className="currency-input">
          <option value="usd">USD - United States Dollars</option>
          <option value="cad">CAD - Canadian Dollars</option>
          <option value="gbp">GBP - Great Britain Pound</option>
        </select>
        <div>
        
          <p className="aware-text"><input className="checkbox" type='checkbox' onChange={handleChange}></input>I am aware that I cannot change currency later</p>
        </div>

        <button className="finish-setup-btn" onClick={handleSubmit}>Finish Setup</button>

        </div>
          &nbsp;
    </div>
  )
}
