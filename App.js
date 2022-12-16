import './App.css';
import React , {useState} from 'react';
import Textforms from './Components/Textforms';

import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
// import{
//   BrowserReactor as Router,
//   Switch,
//   Route
// } from "react-router-dom"

function App() {
  const [mode, Setmode] = useState("light");
  const[alert , setalert] = useState(null);

  const showAlert = (message , type) => {
    setalert({
       msg : message,
       type : type
     })
     setTimeout(() => {
      setalert(null);
     }, 2000 )
   } 
  const toggleMode = () =>
  {
    if(mode === 'light')
    { 
      Setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert ("Dark Mode has been enabled" , "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else  
    
    {
      Setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled" , "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (  
   <>
   {/* Router */}
    <Navbar title="Textutils" mode ={mode} toggleMode={toggleMode}/>
    {/* <Navbar title="Textutils" AboutSet="About "  mode ={mode} toggleMode={toggleMode}/> */}
    <Alert alert = {alert}/>
    <div className="nav-item">
      {/* Switch */}
       {/* Route exact path ="/About" */}
         {/*< About/> */}
         {/* <Route/> */}
       {/* Route exact path ="/" */}
        <Textforms showAlert= {showAlert} Heading = "Enter The Text Analyzer" mode={mode}/>
         {/*< About/> */}
          {/* <Route/> */}
     
    </div>
   {/* Router */}
   
   </>   
  );
}

export default App;
  