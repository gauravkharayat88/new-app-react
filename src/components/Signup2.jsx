import React,{useState} from 'react'
import {Form } from 'react-bootstrap'
import img from './Images/TRJ.svg'
import {Link} from 'react-router-dom'
const Signup2 = () => {
  const[correspondenceAddress,setCorrespondenceAddress]=useState("");
  const[permanentadress,setPermanentadress]=useState("");
  const[addressproof,setAddressproof]=useState("");
  const[country,setCountry]=useState("");
 
  const[email,setEmail]=useState("");

  const[pincode,setPincode]=useState("");
  const[state,setState]=useState("");
 
  const collectData=async ()=>{
    console.warn(correspondenceAddress,permanentadress,email,pincode,addressproof,country,state);

  let result= await fetch("http://localhost:5000/register",{
method:'post',
body:JSON.stringify({correspondenceAddress,permanentadress,email,pincode,addressproof,country,state}),
headers:{
  'Content-Type':"application/json"
},
  })
  result= await result.json()
  console.warn(result)

}
  return (
    <div>
      
      <div className='sign'>
      <img className='img-sign' src={img} alt="" >

      </img>
      <Link to="/Signup1">
      <button className='exit' >Back</button></Link>
      </div>
      <p className='step' >Step 2</p>
      <div>
      <Form>
  <Form.Group  controlId="formBasicEmail">

    <Form.Control className="mb-30" type="Name"  value={correspondenceAddress} onChange={(e)=>setCorrespondenceAddress(e.target.value)} placeholder="Correspondence Address" />
 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">

    <Form.Control className='mb-31' type="Name" value={permanentadress} onChange={(e)=>setPermanentadress(e.target.value)} placeholder="Permanent Address" />
  </Form.Group>
  <Form.Group  controlId="formBasicCheckbox">
  <Form.Control className="mb-31"  type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Business Email" />
  </Form.Group>
  <Form.Group  controlId="formBasicCheckbox">
  <Form.Control className="mb-31"  type="Name" value={addressproof} onChange={(e)=>setAddressproof(e.target.value)}  placeholder="Adress Proof" />

<li className='help'  > <a href="#">Help </a> </li>

  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  <Form.Control className="mb-31"  type="Name"  value={country} onChange={(e)=>setCountry(e.target.value)}  placeholder="Country" />
  </Form.Group>
  <div className='sign'>
  <Form.Group  controlId="formBasicCheckbox">
  <Form.Control className="mb-1 "  type="Name"  value={state} onChange={(e)=>setState(e.target.value)}  placeholder="State" />
  </Form.Group>
  <Form.Group  controlId="formBasicCheckbox">
  <Form.Control className="mb-1"  type="Number"  value={pincode} onChange={(e)=>setPincode(e.target.value)}  placeholder="Pin-Code" />
  </Form.Group>
  </div>
</Form>
      </div>
      <div className='sign-09'>
      <Link to="/Signup3">
      <button onClick={collectData} className='sve-01'>Save</button></Link></div>
    </div>


  )
}

export default Signup2
