import React from 'react'
import './PopUp.css'

export default function PopUp() {
  return (
    <div className="popup-container">

        <div className="popup-left">
        <div className="announcement-img"><i className="fa-solid fa-bullhorn fa-xl"></i></div>
          <div className="popup-left-text">
            <p className="popup-text">Upgrade to pay 0% transaction fee</p> 
            <p className="popup-sub-text">Pay 0% transaction fee and get added benefits by upgrading your account.</p>
            </div>
        </div>
        <div className="popup-right">
            <button className="upgrade-btn">Upgrade</button>
        </div>
    </div>
  )
}
