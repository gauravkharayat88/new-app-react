import React from 'react'
import img from './Images/TRJ.svg'
import imgg from './Images/Frame 30.svg'
import imggg from './Images/Frame 31.svg'
import {Link} from 'react-router-dom'
const Usersection = () => {
  return (
    <div>
        
        <div className='sign'>
      <img className='img-sign' src={img} alt="" >

      </img>
      <Link to="/Login">
      <button className='exit' >Back</button></Link>
      </div> 
      <p className='acc-09'>Create Account</p>
      <p className='regi-90'>Register as</p>
      <div className='frame-30' >
        <div>
          <Link to ="/Signup1" style={{textDecoration:"none"}}>
        <img src={imgg}></img>

        <p className='trave'>Agency</p> </Link>  </div>
         <Link to="/Travelersignup1"  style={{textDecoration: 'none'}}>
        <div>
         
        <img className='frame-31' src={imggg}></img>
        <p className='trave'>Traveller</p></div></Link>
        </div> 
    </div>
  )
}

export default Usersection
