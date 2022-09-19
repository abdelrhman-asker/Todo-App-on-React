import React, {useState, useEffect} from 'react'
import Home from './Home'
import 'animate.css';
import "./App.css"

import { ClimbingBoxLoader } from 'react-spinners';
// import TodoForm from './components/TodoForm';


const App = () => {
  const [loading , setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)

        } , 3000)

    },[])
  return (
    <>
    { loading ? (<ClimbingBoxLoader className="animate__animated animate__flipInX" style={{display:"flex", justifyContent:"center", alignItems:"center", color:"brown", position:"fixed", top:"50%", left:"50%"} } loading={loading}/>) : ( <Home />)
}    
    </>
   
  )
}

export default App