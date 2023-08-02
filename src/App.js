import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
    setAlert(null);}
    ,1500

    );
  }

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark mode';
      // setInterval(()=> {
      //   document.title = 'TextUtils is amazing';
      // },2000);
      // setInterval(()=> {
      //   document.title = 'TextUtils is great';
      // },1300);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light mode';
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container my-3 ">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>} >  */}
            {/* <About /> */}
           {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="TextUtils - Word counter, Character counter" mode={mode} />} > */}
         <TextForm showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
