
import React,{useState} from 'react'
import img from './Images/Group.svg'
import icn from './Images/Vector (1).svg'
import {Link} from 'react-router-dom'
import imgg from './Images/Vectorcross.svg'
import image from './Images/TRJ.svg'
import down from './Images/Vectordownarrow.svg'
import Images from './Images/Vectormessage.svg'
import dot from './Images/Ellipse 28dot.svg'
import chat from './Images/Vectorchat00.svg'
import chat2 from './Images/Vector (4).svg'
import left from './Images/Vectorleft.svg'
import call from './Images/Vectorcall.svg'
import set from './Images/Polygon 6 (1).svg'
const Support4 = () => {
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
  return (

  <div>
     <div className=  {menu_class}  >
 <div className='sign-1'>
  
  <div className='sign-2'>
    <div className='sign' >
    <img className='img-sign-1'src={img}></img>
    <img onClick={closeBurger} className='cross'src={imgg}></img>
    </div>
  

  
<Link to="/Trainsroute"style={{textDecoration:'none'}}>
      <div className='trainss train-1'>
   <p className='trains ' >Trains</p>
   </div></Link>
   <div className='trainss  train-2 '>
   <p className='trains' >Bookings</p>
   </div>
<Link to="/Homepage2">
   <div className='trainss train-3'>
   <p className='trains' >Gallery</p>
   </div></Link>
   <Link to="/Homepage5">
   <div className='trainss train-4'>
   <p className='trains' >Offers</p>
   </div></Link>
   <div className='trainss train-5'>
   <p className='trains' >My Account</p>
   </div>
  <Link to ="/Homepage3">
   <div className='trainss train-6'>
   <p className='trains' >Blogs</p>
   </div></Link>

   <div className='trainss train-7'>
   <p className='trains' >Support</p>
   <img className='mes-icn' src={Images}></img>
   </div>
   
   <div className='bttns '>
    <Link to ="/Login">
      <button className='login-00 '>Login</button></Link>
      <Link to ="/Usersection">
    <button className='signup-00' >Sign up</button></Link>
    </div>
   <div className='box'>   </div>

    <div className='box-20'></div>



</div>
  </div>


</div>
    <div className='sign-3' >
    <img className='img-sign-00' src={image} alt="" >
</img>
<Link to="/Search">
<img className='search-icn' src={icn}></img></Link> 
<img src={dot} className='red-dott-00'></img>
<nav>

<div className='burger_menu'onClick={updateMenu}>
<div className={burger_class}> </div>
<div className={burger_class}></div>
<div className={burger_class}></div>
  
  </div>
   </nav>
</div>
<Link to="/">
<img src={left} className='left-00'></img>
</Link>

<p className='spprt-00'>Support</p>
<div className='sign-000'>
<div className='spprt-card-12'>

    <p className='chat-01'>Chat</p>
    <div className='chatting'>
        <img className='set-sqr' src={set}></img>
        <p className='hii-0'>Hi</p>
    </div>
    <p className='tym-7'>7:00PM</p>
    <div className='chatting-00'>

        <p className='hii-00'>Hello Bear, Welcome to Maharaja’s Express. I am Raghav for your query <br/ > assistance.
<br /><br />
How can I help you?</p>
    <img className='set-sqr-00' src={set}></img>
    </div>
    <p className='tym-07'>7:00PM</p>

<div >
    
    <img className='red-dot-00' src={dot}></img></div>
    <img className='chat-icn' src={chat}></img>
    <img className='chat-02' src={chat2}></img>
    <Link to='/Support'>
     <img className='down-arrow' src={down}></img></Link>
</div>

    </div>
    <div className='sign-000'>
        <div className='spprt-rqst-card'>
            <p className='spprt-reqst'>Support Request</p>
            <Link to="/Activetickets" style={{textDecoration:'none'}}>
            <div className='active-rqst'>
                <p className='active-rqst-00'>Active Tickets</p>
            </div></Link>
        
            <div className='active-rqst'>
                    <Link to="/Support2" style={{textDecoration:'none'}}>
                <p className='active-rqst-00'>Generate New Ticket</p></Link>
            </div>
            <div className='active-rqst'>
            <Link to="/Support3" style={{textDecoration:'none'}}>
                <p className='active-rqst-00'>All Tickets</p></Link>
            </div>
         </div>
 
         <div className='blue-back'>
  <div className='sign-21'>
    <div className='white-back-00'>
      <p className='call-now'>Call Us Now</p>    </div>
      <img className='call-05' src={call}></img>
      <p className='english-pre-00'>English Preferred</p>

  </div>
</div>
    </div>
    </div>
  )
}

export default Support4
