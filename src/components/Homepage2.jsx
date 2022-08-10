import React,{useState} from 'react'
import img from './Images/Group.svg'
import {Link} from 'react-router-dom'
import imgg from './Images/Vectorcross.svg'
import image from './Images/TRJ.svg'
import images from './Images/Vector (3).svg'
import Images from './Images/Vectormessage.svg'
import Icn from './Images/Group (1).svg'
import icn from './Images/Vector (1).svg'
import line from './Images/Line 12.png'
import { Dropdown } from 'react-bootstrap'
const Homepage2 = () => {
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
    <div >
      <div className=  {menu_class}  >
 <div className='sign-1'>
  
  <div className='sign-2'>
    <div className='sign-00' >
    <img className='img-sign-1'src={img}></img>
    <img onClick={closeBurger} className='cross'src={imgg}></img>
    </div>
    <div className='sign' >
      
    <p className='trains-00 ' >Welcome Amit!</p>
 <img className='icn-02' src={Icn}></img>
    </div>
   
      <div className='trainss train-1'>
   <p className='trains ' >Dashboard</p>
   </div>
   <div className='trainss  train-2 '>
   <p className='trains' >Trains</p>
   </div>
   <Link to="/Homepage2">
   <div className='trainss train-3'>
   <p className='trains' >Routes</p>
   </div></Link>
   <div className='trainss train-4'>
   <p className='trains' >Book</p>
   </div>
   <div className='trainss train-5'>
   <p className='trains' >Partners</p>
   </div>
   <div className='trainss train-6'>
   <p className='trains' >Blogs</p>
   </div>
   <div className='trainss train-7'>
   <p className='trains' >Support</p>
   <img className='mes-icn' src={Images}></img>
   </div>


      <button className='login-01 '>Logout</button>
      <div className='box-01'></div>   
<div className='sign'>
       <img src={images} className='set-icn'></img>
<div className='box-00'>   </div>
     
 </div>
  
 
    




  </div>
</div>

</div>
        <div className='sign' >
    <img className='img-sign-00' src={image} alt="" ></img>
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

<p className='booking-00'> My Bookings </p>
<div className='sign'>
<p className='your-trip-00'>Your Trip</p>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic-01">
        By Trips
      </Dropdown.Toggle>
      </Dropdown></div>
   
<p className='delhi-01'>Delhi-Mumbai</p>

<p className='july-20'>20 july 2022</p>


<div className='ticket'>
  <div className='sign'>
    <p className='exp-09'>Maharaja’s Express</p>
    <p className='rupee-00'>1,20,000</p>
  </div>
  <div className='sign'>
<p className='tym-12'>12:00pm  </p>
<img className='line' src={line}></img>
<p className='tym-11'>11:30pm</p>
<p className='BRT12-001'>BRT12-001</p>
</div>
<div className='sign'>
<p className='july-20-22'>20july 2022</p>
<p className='july-21-22'>21july 2022</p>
<p className='train-no'>Train NO.</p>
</div>
<div className='sign'>
  <p className='duration'>Duration:</p>
  <p className='hour-11'>11h 30m</p>
  <p className='station-3'>3</p>
  <p className='station-00'>Station</p>
</div>
    </div>
    <div className='ticket-00'>
  <div className='sign'>
    <p className='exp-09'>Deccan Odyssey </p>
    <p className='rupee-00'>1,00,000</p>
  </div>
  <div className='sign'>
<p className='tym-12'>12:00pm  </p>
<img className='line' src={line}></img>
<p className='tym-11'>11:30pm</p>
<p className='BRT12-001'>QPT12-001</p>
</div>
<div className='sign'>
<p className='july-20-22'>20july 2022</p>
<p className='july-21-22'>21july 2022</p>
<p className='train-no'>Train NO.</p>
</div>
<div className='sign'>
  <p className='duration'>Duration:</p>
  <p className='hour-11'>11h 30m</p>
  <p className='station-3'>6</p>
  <p className='station-00'>Station</p>
</div>
    </div>
    <div className='ticket-00'>
  <div className='sign'>
    <p className='exp-09'>Palaces on wheels</p>
    <p className='rupee-00'>1,80,000</p>
  </div>
  <div className='sign'>
<p className='tym-12'>12:00pm  </p>
<img className='line' src={line}></img>
<p className='tym-11'>11:30pm</p>
<p className='BRT12-001'>QPT12-001</p>
</div>
<div className='sign'>
<p className='july-20-22'>20july 2022</p>
<p className='july-21-22'>21july 2022</p>
<p className='train-no'>Train NO.</p>
</div>
<div className='sign'>
  <p className='duration'>Duration:</p>
  <p className='hour-11'>11h 30m</p>
  <p className='station-3'>6</p>
  <p className='station-00'>Station</p>
</div>
    </div>
</div>

  )
}

export default Homepage2
