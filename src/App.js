import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Form from './components/TextForm';
import Alert from './components/Alert';

// import About from './components/About';

function App() {
  const[mode, setmode] = useState('light');


  const darkMode=()=>{
      setmode('dark');
      document.body.style.backgroundColor = 'black';
        showAlert("Dark Mode has been enabled successfully!", "secondary")
  }
  const lightMode=()=>{
      setmode('light');
      document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled successfully!", "secondary")
  }
  const blueMode=()=>{
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(6, 9, 31)';
        showAlert("Blue Mode has been enabled successfully!", "primary")
  }
  const redMode=()=>{
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(28, 3, 3)';
        showAlert("Red Mode has been enabled successfully!", "danger")
  }
  const greenMode=()=>{
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(4, 25, 9)';
        showAlert("Green Mode has been enabled successfully!", "success")
  }

  const [alert, setalert] = useState(null);
  const showAlert=((message,type)=>{
     setalert({
      message: message,
      type: type
     })
     setTimeout(() => {
      setalert("null")
     }, 1500);
  })

  return (
    <>
     <Navbar title="SyntaxSavvy" home="About" mode={mode} darkMode ={darkMode} lightMode ={lightMode} blueMode ={blueMode} redMode ={redMode} greenMode ={greenMode}/>
    
     <Alert alert={alert}/>

     <div className='container my-5' >
     <Form title = "SyntaxSavvy-Your Ultimate Text Utility Hub!" mode={mode} showAlert={showAlert}/>
     </div>
     
    {/* <About/> */}
    
    </>
    );
}

export default App;
