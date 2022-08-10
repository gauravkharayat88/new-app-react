import React from 'react'
import {Form} from 'react-bootstrap'
import img from './Images/TRJ.svg'

const Otpauthentication = () => {
  return (
    <div>

      <div >
      <img className='img-sign' src={img} alt="" >

      </img>
<p className='otp'>OTP Authentication</p>
<p className='otp-2'>Enter the one time password send to</p>
      </div>
      <div>
      <Form className='otp-form'>
  <Form.Group  controlId="formBasicEmail">

    <Form.Control className="otp-box" type="Name" />
 
  </Form.Group>
  <Form.Group  controlId="formBasicEmail">

    <Form.Control className="otp-box" type="Name" />
 
  </Form.Group>
  <Form.Group  controlId="formBasicEmail">

    <Form.Control className="otp-box" type="Name" />
 
  </Form.Group>
  <Form.Group  controlId="formBasicEmail">

    <Form.Control className="otp-box" type="Name" />
 
  </Form.Group>
  </Form>
      </div>
      <li className='resend'  > <a href="#">Resend OTP </a> </li>
      <li className='resend-2'  > <a href="#">Chande Number or Email </a> </li>
    </div>
  )
}

export default Otpauthentication
