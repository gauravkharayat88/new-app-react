import React from 'react'
import img from './Images/TRJ.svg'
import {Link} from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
const Passengerdetails = () => {
  return (
    <div>
                <div className='sign'>
      <img className='img-sign' src={img} alt="" >

      </img>
      <Link to="/Trainsroute"style={{textDecoration:'none'}}>
      <button className='exit' >Back</button></Link>
   
     
      </div>
         <p className='select-train'>Passenger Details</p>
          <div className='Cabins'>
          <p className='cabin'>Number of Cabins</p>
         <Dropdown>
         
      <Dropdown.Toggle  id="dropdown-basic-00">
         
       40
      </Dropdown.Toggle>
      </Dropdown>
        </div>
    </div>
  )
}

export default Passengerdetails
