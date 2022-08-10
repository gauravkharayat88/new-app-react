import React,{useState} from 'react'
import img from './Images/Group.svg'
import icn from './Images/Vector (1).svg'
import {Link} from 'react-router-dom'
import imgg from './Images/Vectorcross.svg'
import image from './Images/TRJ.svg'
import indi from './Images/Rectangle 117.svg'
import Images from './Images/Vectormessage.svg'
import indiii from './Images/Rectangle 121.svg'

import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap'

const Hompage = () => {
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
<Link to="/Support">
   <div className='trainss train-7'>
   <p className='trains' >Support</p>
   <img className='mes-icn' src={Images}></img>
   </div></Link>
   
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
<nav>

<div className='burger_menu'onClick={updateMenu}>
<div className={burger_class}> </div>
<div className={burger_class}></div>
<div className={burger_class}></div>
  
  </div>
   </nav>
</div>

<Carousel controls={false}>
  <CarouselItem>




    <div className='shtr-img'>
  <div className='card-00'>
    <div className='card-body-00'>
<p className='premium'> Premium Rail Journeys passing through the Indian Culture</p>
<img className='indi' src={indiii}></img>
<img className='indi' src={indi}></img>
  </div>
  </div>
  </div>

   </CarouselItem>
   <CarouselItem>




   <div className='shtr-img-1'>
  <div className='card-00'>
    <div className='card-body-00'>
<p className='premium'> Resuming the promises
to put back the Smiles where
they Belong</p>
<img className='indii' src={indiii}></img>
<img className='indi' src={indi}></img>
  </div>
  </div>
  </div>

   </CarouselItem>
   <CarouselItem>



   <div className='shtr-img-2'>
  <div className='card-00'>
    <div className='card-body-00'>
<p className='resuming'> Resuming experiences
which changed perception</p>
<img className='indi' src={indi}></img>
  </div>
  </div>
  </div>

</CarouselItem>
<CarouselItem>



<div className='shtr-img-4'>
  <div className='card-00'>
    <div className='card-body-00'>
<p className='premium'>Resuming the Journeys to a World which existed and
Lived by the very select</p>
<img className='indi' src={indi}></img>
  </div>
  </div>
  </div>

</CarouselItem>
</Carousel>
  
</div>





  )
}

export default Hompage
