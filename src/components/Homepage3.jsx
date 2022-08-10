import React,{useState} from 'react'
import img from './Images/Group.svg'
import {Link} from 'react-router-dom'
import imgg from './Images/Vectorcross.svg'
import image from './Images/TRJ.svg'
import images from './Images/Vector (3).svg'
import Images from './Images/Vectormessage.svg'
import Icn from './Images/Group (1).svg'
import icn from './Images/Vector (1).svg'
import elipse from './Images/Ellipse 38.svg'
import camera from './Images/photo-camera-interface-symbol-for-button 1.png'
import dot from './Images/Ellipse 28dot.svg'
import coin from './Images/Layer 0 copy 2 1coin.svg'
import knights from './Images/145-1458983_armor-png 1knights.png'
import bell from './Images/Vectornotification.svg'
const Homepage3 = () => {
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
  <div className='sign'>
    <p className='trains-01 ' >Welcome Saurav!</p>
    <img className='icn-022' src={Icn}></img>
    </div>
   
      <div className='trainss train-1'>
   <p className='trains ' >Dashboard</p>
   </div>
   <div className='trainss  train-2 '>
   <p className='trains' >Book</p>
   </div>
   <Link to="/Homepage2">
   <div className='trainss train-3'>
   <p className='trains' >Support</p>
   <img className='mes-icn' src={Images}></img>
   </div></Link>
   <div className='trainss train-4'>
   <p className='trains' >Trains</p>
   </div>
   <div className='trainss train-5'>
   <p className='trains' >Routes</p>
   </div>
   <div className='trainss train-6'>
   <p className='trains' >Partner</p>
   </div>
   <div className='trainss train-7'>
   <p className='trains' >Blogs</p>
   </div>

      <button className='login-01 '>Logout</button>
  
   <div className='box-01'>   </div>

   <div className='sign'>
       <img src={images} className='set-icn'></img>
<div className='box-00'>   </div>
    </div> 
 </div>
</div>

</div>
      <div className='sign' >
    <img className='img-sign-00' src={image} alt="" >
</img>
<Link to="/Search">
<img className='search-icn' src={icn}></img></Link> 
<nav-00>
<img className='dot' src={dot}></img>
<div className='burger_menu'onClick={updateMenu}>
  
<div className={burger_class}> </div>
<div className={burger_class}></div>
<div className={burger_class}></div>
  
  </div>
   </nav-00>
</div>

<div className='profile'>
  <div className='bear'>

<img className='elipse' src={elipse}></img>
<img className='camera' src={camera}></img>
  </div>
   </div>
     <p className='bear-00'>Hi Bear!</p>
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
       <img className='bell' src={bell}></img>
     </div>
        <img className='coin' src={knights}></img>
        </div>
        </div>
    </div>
  )
}

export default Homepage3
