import "./App.css";
// import About from "./static/About.jsx";
import Navbar from "./static/Navbar.jsx";
import Textform from "./static/Textform.jsx";
// import Cards from "./static/Cards.jsx";
import React,{useState} from 'react'
import Alert from "./static/Alert.jsx";




function App(props) {

  const[mode,setMode] = useState('light'); 
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    }, 3000);
  }


  const toggleMode = () =>{ 
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#515151';
      showAlert("dark Mode Enabled","success");
    }
    else{
      
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode Enabled","success");
    }
    
  }
  
  return (
  <>
    <div>
      
        <Navbar title="TEXT CONVERTER" mode={mode} toggleMode= {toggleMode} Dropdowntext = "Features" option1="Upper" option2="Lower" />  
        <Alert alert={alert}/>
        <div className="container my-2 mx-3 py-3 px-3">
          <Textform showAlert={showAlert}Heading = "TEXT DECORATOR + CONVERTER + COPY + MORE" mode ={mode}/>
         </div> {/* Cards for Different Components    */}
        {/* <div className="product-grid">
          <Cards imageSrc="https://images.unsplash.com/photo-1569154107747-fb00e3b3430d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"/>
          <Cards imageSrc="https://images.unsplash.com/photo-1774392472598-bb810adcd4fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"/>
          <Cards imageSrc="https://plus.unsplash.com/premium_photo-1764431881498-318d04f3d8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"/>
          <Cards imageSrc="https://plus.unsplash.com/premium_photo-1791259089359-0fed29dd973d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"/>
          <Cards imageSrc="https://images.unsplash.com/photo-1780686616214-08da38e8ec29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"/>
          <Cards imageSrc="https://images.unsplash.com/photo-1791142145623-f967d6e67070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"/>
          
        </div> */}
        
        
    </div>
  
</>
  );
}

export default App;
