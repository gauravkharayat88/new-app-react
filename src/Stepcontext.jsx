import React,{useState} from 'react'
import App from './App'
export const multiStepContext =React.createContext();
const Stepcontext = () => {
    const[currentStep,setStep]=useState(1);
    const[userData,setUserData]=useState([]);
    const[final,setFinalData]=useState([]);
  return (
    <div>
      <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,final,setFinalData}}></multiStepContext.Provider>
    <App/>
    </div>
  )
}

export default Stepcontext
