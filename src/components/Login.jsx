import React,{useState} from 'react'
import img from './Images/Group.svg'
import {Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import imgg from './Images/Vectorcross.svg'
import image from './Images/TRJ.svg'
import frame from './Images/Frame 2.svg'
import vector from './Images/Frame 1.png'
import vector2 from './Images/Vector-90.svg'
const Login = () => {
    const[burger_class,setBurgerClass]=useState("burger-bar unclicked")
  const[menu_class, setMenuClass]=useState("menu hidden")
  const[isMenuClicked, setIsMenuClicked]=useState(false)
  const updateMenu=()=> {
    if(!isMenuClicked){
      setBurgerClass("Burger-bar clicked")
      setMenuClass("menu visible")
      setBurgerClass("burger-bar unclicked")
    }
   
   
    setIsMenuClicked(!isMenuClicked)
    

  }

   const closeBurger=()=>{
    setMenuClass("menu hidden")
    setBurgerClass("burger-bar unclicked")
    }
    const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  return (
    <div>
        
        <div className=  {menu_class}  >
 <div className='sign-1'>
  
  <div className='sign-2'>
    <div className='sign' >
    <img className='img-sign-1'src={img}></img>
    <img onClick={closeBurger} className='cross'src={imgg}></img>
    </div>
  

  
      <div className='trainss train-1'>
   <p className='trains ' >Trains</p>
   </div>
   <div className='trainss  train-2 '>
   <p className='trains' >Routes</p>
   </div>

   <div className='trainss train-3'>
   <p className='trains' >Book</p>
   </div>
   <div className='trainss train-4'>
   <p className='trains' >Partners</p>
   </div>
  
  
   <div className='trainss train-6'>
   <p className='trains' >Blogs</p>
   </div>

   <div className='trainss train-7'>
   <p className='trains' >Support</p>

   </div>
   <div className='bttns '>
      <button className='login-00 '>Login</button>
      <Link to ="/Signup1">
    <button className='signup-00' >Sign up</button></Link>
    </div>
   <div className='box'>   </div>
   <div className='box-01' > </div>
    <div className='box-00'></div>



</div>
  </div>


</div>
    <div className='sign-3' >
    <img className='img-sign-55' src={image} alt="" >
</img>

<nav-01>

<div className='burger_menu-00'onClick={updateMenu}>
<div className={burger_class}> </div>
<div className={burger_class}></div>
<div className={burger_class}></div>
  
  </div>
   </nav-01>
</div> 
<div>

<p className='wel-0'>Welcome Back !</p>
<Form>
  <Form.Group  controlId="formBasicEmail">

    <Form.Control className="mb-30" type="Name" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email or Mobile Number" />
 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">

    <Form.Control className='mb-31' type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"  />
  </Form.Group>
  </Form>
  <button className='bttn-get'>Get Started</button>
  <Link to="/Usersection">
  <li className='new-accnt' ><a href='#' >Create a new account</a></li></Link>
  <p className='or-login'
  > or login using</p>
  <div className='frame'>
    <img src={vector}></img>
    <img className='vector' src={frame}></img>

  </div>
      <p className='termsof-00'> terms of use <br /> privacy policy</p>
</div>

    </div>
  )
}

export default Login
