import React,{useState} from 'react'

import {Form } from 'react-bootstrap'
import img from './Images/TRJ.svg'
import {Link} from 'react-router-dom'
const Signup1 = () => {
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[passworderror,setPassworderror]=useState("");
  const[email,setEmail]=useState("");
  const[error,setError]=useState("");
  const[agency,setAgency]=useState("");
  const[numbererror,setNumberError]=useState("");
  const[number,setNumber]=useState("");
  const regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 const checkEmail =(e)=>{
  setEmail(e.target.value);
  if(regex.test(email)===false){
    setError('invalid Email');
    
  }else{

    setError('');
    
  }
 }
  const collectData=async ()=>{
    console.warn(name,email,password,agency,number);
 
    
  let user= await fetch("http://localhost:5000/register",{
    method:'post',
    body:JSON.stringify({name,email,password,agency,number}),
    headers:{
      'Content-Type':"application/json"
    },
      })
      user=await user.save()
      console.warn(user)
    
  

  
    

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
const Re=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
const checkPassword =(e)=>{
  setPassword(e.target.value);
  if(Re.test(password)===false){
    setPassworderror('invalid password');
  }else{
    setPassworderror('');
  }
 }
function SubmitButton(){
  if(name && email && password && agency && number && (regex.test(email)===true) && (Re.test(password)===true) && (Regex.test(number)===true) ){
    return <button type ="button" onClick={collectData} className='next' >Next</button>
  }else{
    return <button type ="button"  className='sve-01'  disabled >Next</button>

  };
};

  return (
    <div>
        <div className='sign'>
      <img className='img-sign' src={img} alt="" >

      </img>
      <Link to="/">
      <button className='exit' >Exit</button></Link>
      </div>
      <p className='acc-09' >Step 1</p>
      <div>
      <Form>
  <Form.Group  controlId="formBasicEmail">

    <Form.Control className="mb-30" type="Name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">

    <Form.Control className='mb-31' type="Name"  value={agency} onChange={(e)=>setAgency(e.target.value)} placeholder="Agency's Name"  />
  </Form.Group>
  <Form.Group  controlId="formBasicCheckbox">
  <Form.Control className="mb-31"  type="email"  value={email} onChange={checkEmail}  placeholder="Business Email"   />
<p>{error}</p>
  </Form.Group>
  <Form.Group  controlId="formBasicCheckbox">
  <Form.Control className="mb-31"  type="number"  value={number} onChange={checkNumber} placeholder="Mobile Number" />
<p> {numbererror} </p>
  </Form.Group>
<Form.Group  controlId="formBasicCheckbox">
  <Form.Control className="mb-31"  type="password"  value={password} onChange={checkPassword}  placeholder="Create-Password" />
  <p> {passworderror} </p>
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
  <Form.Control className="mb-31"  type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Confirm-Password" />
  </Form.Group>
  
</Form>
      </div>
      <div className='sign-09'>
      <Link to="/Signup2">

     <   SubmitButton /></Link>
     </div>
    </div>
  )
}

export default Signup1
