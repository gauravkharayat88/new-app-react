import React,{useState} from 'react'
import img from './Images/Group.svg'
import {Link} from 'react-router-dom'
import imgg from './Images/Vectorcross.svg'
import image from './Images/TRJ.svg'
import images from './Images/Vector (3).svg'
import Images from './Images/Vectormessage.svg'
import Icn from './Images/Group (1).svg'
const Agentdashboard = () => {
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
<nav>

<div className='burger_menu'onClick={updateMenu}>
<div className={burger_class}> </div>
<div className={burger_class}></div>
<div className={burger_class}></div>
  
  </div>
   </nav>
</div>


        <div className='shtr-img-2'>
  <div className='card-00'>
    <div className='card-body-00'>
<p className='premium'> Resuming the Journeys to a World which existed and
Lived by the very select</p>
  </div>
  </div>
  </div>
    </div>
  )
}

export default Agentdashboard

