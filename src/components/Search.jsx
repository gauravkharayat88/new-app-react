import React from 'react'
import img from './Images/taj.png'
import icn from './Images/Vector -00.png'
import {Form} from 'react-bootstrap'
import imgg from './Images/Vector -002.png'
const Search = () => {
  return (
    <div className='search-border'>
       <div className='form'>
      <Form action="" className='searchbar'>
        <input type="text" name='q'></input>

      </Form>
  <img className='search-icn-00' src={icn} width="20px" height='16px'></img>    
  <img className='cross-00' src={imgg}></img>
</div>

<div className='crd-00'>

<p className='express'>5 things to do when you are in Agra while on a  <br />  rail journey</p>
</div>

<div className='crd-22'>

<p className='agra'>Routes For Agra Trip</p>
<div className='card-22'></div>
</div>
<p className='cat'>Categories</p>
<div className='sign'>
<div className='tags'>
  <p className='people'>People</p>
  <img src={imgg} className="cros-11" width="7px"height="7px"></img>
</div>

<div className='tags'>
  <p className='people'>Places</p>
  <img src={imgg} className="cros-11" width="7px"height="7px"></img>
</div>
<div className='tags'>
  <p className='people'>Food</p>
  <img src={imgg} className="cros-11" width="7px"height="7px"></img>
</div>
</div>
<div className='tagss'>
  <p className='people'>Route</p>
  <img src={imgg} className="cros-11" width="7px"height="7px"></img>
</div>
    </div>
  )
}

export default Search
