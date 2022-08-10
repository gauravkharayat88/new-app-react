import React from 'react'
import img from './Images/TRJ.svg'
import {Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
import Calendar from 'react-calendar'
const Trainsroute = () => {
  return (
    <div>
            
            <div className='sign'>
      <img className='img-sign' src={img} alt="" >

      </img>
      <Link to="/"style={{textDecoration:'none'}}>
      <button className='exit' >Back</button></Link>
      </div>
      <p className='select-train'>SELECT TRAINS</p>
      <div className='dropdown-train'>
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        Maharaja's Express
      </Dropdown.Toggle>

    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      Palace on Wheels
      </Dropdown.Toggle>

    </Dropdown>
      </div>
      <div className='dropdown-train'>
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
       Deccan odyssey
      </Dropdown.Toggle>

    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
    The Golden Chariot
      </Dropdown.Toggle>

    </Dropdown>
      </div>
      <Calendar>

      </Calendar>
      <div className='sign-09'>
     <Link to ="/Passengerdetails" >
<button className='sve-01'>Next</button></Link>
</div>
    </div>
  )
}

export default Trainsroute
