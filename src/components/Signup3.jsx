import React,{useState} from 'react'
import img from './Images/TRJ.svg'
import {Link} from 'react-router-dom'
import {Form} from 'react-bootstrap'
const Signup3 = () => {
  

  const[number,setNumber]=useState("");
  const[document,setDocument]=useState("");
 
  const collectData=async ()=>{
    console.warn(document,number);

  let result= await fetch("http://localhost:5000/register",{
method:'post',
body:JSON.stringify({number,document}),
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
      <Link to="/Signup2">
      <button className='exit' >Back</button></Link>
      </div>
      <p className='step' >Step 3</p>
      <div>
      <Form>
  <Form.Group  controlId="formBasicEmail">

    <Form.Control className="mb-30" type="Number" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="Agency's Registration Number" />
 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">

    <Form.Control className='mb-31' type="Name" value={document} onChange={(e)=>setDocument(e.target.value)} placeholder="Tax Related Document" />
  </Form.Group>
  
</Form>
      </div>
      <div className='sign-09'>
      <Link to="/Otpauthentication">
      <button onClick={collectData} className='sve-01'>Save</button>
</Link></div>
  <Form.Group className="mb" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I Accept all Terms of Use and Privacy Policy" />
  </Form.Group>

<button  className='apply'>Apply</button> 
    </div>
  
  )
}

export default Signup3
