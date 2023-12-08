// import logo from './logo.svg';
import './App.css';
import FormGroupExample from './FormGroupExample';
import BasicExample from './BasicExample';
import React,{useState} from 'react';
import { Logincontext } from './Logincontext';
function App() {

  const[productname,setProductname] =useState("")
    const[productprice,setproductprice] =useState("")
    const[productquality,setproductquality] =useState("")
    const[productdescription,setproductdescription] =useState("")

  const[showprofile,setshowprofile]=useState(false)
  return (
    <div className="App">
       <Logincontext.Provider  value={{productname,setProductname,productprice,setproductprice,productquality,setproductquality,productdescription,setproductdescription,setshowprofile}}>
       { showprofile ?<BasicExample/> :<FormGroupExample/>  }
      
       </Logincontext.Provider>
   
      </div>
  )
}

export default App;
