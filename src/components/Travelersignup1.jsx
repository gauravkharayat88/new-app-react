import React,{useState} from 'react'
import {Form }  from 'react-bootstrap'
import img from './Images/TRJ.svg'
import imgg from './Images/Frame 1.svg'
import imggg from './Images/Frame 2.svg'
import {Link} from 'react-router-dom'
const Travelersignup1 = () => {
    const[email,setEmail]=useState("");
 
    const[error,setError]=useState("");
    const[name,setName]=useState("");
    const[number,setNumber]=useState("");
    const[numbererror,setNumberError]=useState("");
    const regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const checkEmail =(e)=>{
     setEmail(e.target.value);
     if(regex.test(email)===false){
       setError('invalid Email');
       
     }else{
   
       setError('');
       
     }
    }
    const Regex= /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
const checkNumber =(e)=>{
  setNumber(e.target.value);
  if(Regex.test(number)===false){
    setNumberError('invalid Mobile Number');
  }else{
    setNumberError('');
  }
 }
  return (
    <div>
       <div className='sign'>
      <img className='img-sign' src={img} alt="" >

      </img>
      <Link to="/Usersection">
      <button className='exit' >Back</button></Link>
      </div> 
      <p className='acc-09'>Step 1</p>
      <Form>
      <Form.Group controlId="formBasicPassword">

<Form.Control className='mb-30' type="Name"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"  />
</Form.Group>
<Form.Group  controlId="formBasicCheckbox">
<Form.Control className="mb-31"  type="email"  value={email}  onChange={checkEmail}  placeholder=" Email"   />
{error}
</Form.Group>
<Form.Group  controlId="formBasicCheckbox">
<Form.Control className="mb-31"  type="number"  value={number} onChange={checkNumber} placeholder="Mobile Number" />
{numbererror}
</Form.Group>
</Form>
<div className='sign-09'>
     <Link to ="/Travelersignup2" >
<button className='nxt-01'>Next</button></Link>
</div>
<p className='orsignup-0-0-0'>Or Sign up using</p>
<div className='sign-09'  >
    <img src={imgg}></img>
    <img src={imggg}></img>

</div>
    </div>
  )
}

export default Travelersignup1
