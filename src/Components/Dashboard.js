import React from 'react'
import './Dashboard.css';


export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
      <h5>Overview</h5>
      <h5>
        <i className="fa-solid fa-people-group"></i> Clients
      </h5>
    <h5>
    <i className="fa-solid fa-layer-group"></i> Products & Services
    </h5>

    <h5>
    <i className="fa-solid fa-file-invoice-dollar"></i> Invoices
    </h5>
    </div>
    <div className="dashboard-right">
      <button className="configure-btn"><i className="fa-solid fa-wrench"></i> Configure</button>
      </div>

    </div>
  )
}
