import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Header() {
  const [login,setlogin]=useState('Signin')
 
  const cartItem = useSelector((store)=> store.cart.items)
  console.log(cartItem)
  
  return (
    <div className="sidebar" style={{display:'flex',justifyContent:'space-between',border:'1px white solid',alignItems:'center',boxShadow:'0 4px 6px rgba(0, 0, 0, 0.1)'}}>
      <div className="logo">
        <img style={{width:'15vw',marginLeft:'0px'}} src="https://www.logodesign.net/logo-new/hamburger-with-patty-and-salads-8090ld.png?size=large" alt="" />
      </div>  
      <div className="sidebar">
        <ul style={{display:'flex',gap:'60px',listStyle:'none',fontFamily:"sans-serif"}}>
         <NavLink to='/' style={({isActive})=>{ return isActive?{color:'red',textDecoration:'none'}:{color:'black',textDecoration:'none'}}}><li>Home</li></NavLink>
         <NavLink to='/grocery' style={({isActive})=>{ return isActive?{color:'red',textDecoration:'none'}:{color:'black',textDecoration:'none'}}}><li>Grocery</li></NavLink>
          <NavLink to='/about' style={({isActive})=>{ return isActive?{color:'red',textDecoration:'none'}:{color:'black',textDecoration:'none'}}}><li>About Us</li></NavLink>
          <NavLink to='/contact' style={({isActive})=>{ return isActive?{color:'red',textDecoration:'none'}:{color:'black',textDecoration:'none'}}}><li>Contact Us</li></NavLink>
          <NavLink to='/cart' style={({isActive})=>{ return isActive?{color:'red',textDecoration:'none'}:{color:'black',textDecoration:'none'}}}><li>Cart {`item no :(${cartItem.length})`}</li></NavLink>
          <li><button style={{
            backgroundColor:'black',
            color:'white',
            padding:'10px',
            marginTop:'-10px',
          }}  onClick={()=> login=='Signin'?setlogin('Login'):setlogin('Signin')}>{login}</button></li>
        </ul>
      </div>
  </div>
  )
}

export default Header