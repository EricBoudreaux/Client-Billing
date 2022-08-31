import React from 'react'
import './PageHeading.css'
import { useState } from 'react'



export default function PageHeading( showSubText ) {


  return (
    <div className="page-header">
        <div className="page-header-left">
          <p className="page-heading-text">Client Billing</p>
         <p className="page-sub-text-heading">- A full payment solution for your business, free with company</p>
        </div>
        <div className="page-header-right">
          <p className="docs-text">Docs <i className="fa-solid fa-arrow-up-right-from-square"></i></p>
        </div>
    </div>
  )
}
