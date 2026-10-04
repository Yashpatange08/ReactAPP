import "./App.css";
// import About from "./static/About.jsx";
import Navbar from "./static/Navbar.jsx";
import Textform from "./static/Textform.jsx";
// import Cards from "./static/Cards.jsx";
import React,{useState} from 'react'
import Alert from "./static/Alert.jsx";



function App() {

  const[mode,setMode] = useState('light'); 
  const toggleMode = () =>{ 
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#1d2442';
    }
    else{
      
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
    
  }
  return (
  <>
    <div>
      <Alert/>
        <Navbar title="TEXT CONVERTER" mode={mode} toggleMode= {toggleMode} Dropdowntext = "Features" option1="Upper" option2="Lower" />  
        
        <div className="container">
          <Textform Heading = "TEXT DECORATOR + CONVERTER + COPY + MORE" mode ={mode}/>
        </div>
        
    </div>
  
</>
  );
}

export default App;
