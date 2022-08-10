
import React,{useState} from 'react'
import img from './Images/Group.svg'
import icn from './Images/Vector.png'
import {Link} from 'react-router-dom'
import imgg from './Images/Vectorcross.svg'
import image from './Images/TRJ.svg'
import coin from './Images/Layer 0 copy 2 1coin.svg'
import knights from './Images/145-1458983_armor-png 1knights.png'
import bell from './Images/Vectornotification.svg'
import dot from './Images/Ellipse 28dot.svg'
import elipse from './Images/Ellipse 38.svg'
import camera from './Images/photo-camera-interface-symbol-for-button 1.png'
const Homepage5 = () => {
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
  

  
   <Link to="/Trainsroute">
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
   <div className='trainss train-4'>
   <p className='trains' >Offers</p>
   </div>
   <div className='trainss train-5'>
   <p className='trains' >My Account</p>
   </div>
   <Link to="/Homepage3">
   <div className='trainss train-6'>
   <p className='trains' >Blogs</p>
   </div></Link>
   <div className='trainss train-7'>
   <p className='trains' >Help</p>
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
    <img className='img-sign-00' src={image} alt="" >
</img>
<Link to="/Search">
<img className='search-icn' src={icn}></img></Link> 
<nav>

<div className='burger_menu'onClick={updateMenu}>
<div className={burger_class}> </div>
<div className={burger_class}></div>
<div className={burger_class}></div>
  
  </div>
   </nav>
</div>
<div className='profile'>
  <div className='bear-20'>

<img className='elipse' src={elipse}></img>
<img className='camera' src={camera}></img>
  </div>
   </div>
<p className='bear-00'>Hi Mr. Agent</p>
<p className='global-holi'>Global Holidays LLP</p>
     <div className='shuter'>
 <p className='exp-01'>Experience your trip</p>
 <p className='tour'>Virtual tour</p>
     </div>
     <div className='sign-11'>
     <div className='booking-card'>
      <p className='your-book-10'> Your Bookings</p>
      <div className='splend'>
      <p className='your-book-00'> Indian Splendor Routes</p>
      <p className='your-book-01'> 24th July 2022</p>
</div>

     </div>
     <div className='booking-card'>
     <p className='your-book-10'>Upcoming</p>
      <div >
      <p className='your-book-11'> 24th July </p>
      <p className='your-22'> 2022 </p>
   
      <p className='your-book-12'>The Indian Splendour
 </p>
 
</div>
</div>
</div>
<div className='sign-11'>
<div className='booking-card-00'>

  
      <p className='your-book'> Payments</p>
      
   
        <img className='coin' src={coin}></img>
        </div>
<div className='booking-card-00'>
<div className='sign'>
  
      <p className='your-book-13'> Support</p>
      <img src={dot} className='redd-dot-00'></img>
       <img className='bell' src={bell}></img>
     </div>
        <img className='coin' src={knights}></img>
        </div>
        </div> 

    </div>
  )
}

export default Homepage5
