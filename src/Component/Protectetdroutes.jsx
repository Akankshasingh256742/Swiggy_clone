import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

function Protectetdroutes() {
    const isauthenticated = false
  return isauthenticated? <Outlet /> : <Navigate to='/contact' />
}

export default Protectetdroutes