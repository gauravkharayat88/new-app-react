
import './App.css';
import Signup1 from './components/Signup1';
import Signup2 from './components/Signup2';
import Signup3 from './components/Signup3';
import Hompage from './components/Hompage';
import Otpauthentication from './components/Otpauthentication';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Search from './components/Search';
import Login from './components/Login';
import Usersection from './components/Usersection';
import Travelersignup1 from './components/Travelersignup1';
import Travelersignup2 from './components/Travelersignup2';
import Trainsroute from './components/Trainsroute';
import Passengerdetails from './components/Passengerdetails';
import Homepage2 from './components/Homepage2';
import Homepage3 from './components/Homepage3';
import Homepage5 from './components/Homepage5';
import Support from './components/Support';
import Support2 from './components/Support2';
import Support3 from './components/Support3';
import Support4 from './components/Support4';
import Activetickets from './components/Activetickets';
function App() {
  return (
   <>

   <Router>
    <Routes>
    <Route path="/" element={<Hompage />}/>
    <Route path="/Signup1" element={<Signup1/ >}/>
  <Route path="/Signup2" element={<Signup2 />}/>

  <Route path="/Signup3" element={<Signup3 />}/>
  <Route path="/Otpauthentication" element={<Otpauthentication />}/>

  
  <Route path="/Search" element={<Search/>}/>


 <Route path="/Login" element={<Login/>}/>
 <Route path="/Usersection" element={<Usersection/>}/>
 <Route path="/Travelersignup1" element={<Travelersignup1/>}/>
<Route path="/Travelersignup2" element={<Travelersignup2/>}/>
  <Route path="/Trainsroute" element={<Trainsroute/>}/>
  <Route path="/Passengerdetails" element={<Passengerdetails/>}/>
  <Route path="/Homepage2" element={<Homepage2/>}/>
  <Route path="/Homepage3" element={<Homepage3/>}/>
  <Route path="/Homepage5" element={<Homepage5/>}/>
  <Route path="/Support" element={<Support/>}/>
  <Route path="/Support2" element={<Support2/>}/>
  <Route path="/Support3" element={<Support3/>}/>
  <Route path="/Support4" element={<Support4/>}/>
  <Route path="/Activetickets" element={<Activetickets/>}/>
    </Routes>
   </Router>

    </>
  );
}

export default App;
