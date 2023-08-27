import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';


function App() {
  const [mode, setMode] = useState("light") //Check Dark Mode is Enabled or Not
  const [buttonText, setButtonText] = useState("Enable Dark Mode")
  const [textColor, setTextColor] = useState("dark")
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      setTextColor("light")
      setButtonText("Enable Light Mode")
      document.body.style.backgroundColor = "#1d1d1d"
    }
    else{
      setMode("light")
      setTextColor("dark")
      setButtonText("Enable Dark Mode")
      document.body.style.backgroundColor = "white"

    }
  }
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {mode} toggleMode = {toggleMode} buttonText = {buttonText} textColor = {textColor}/>
      <div className="myapp">
        <TextForm heading = "Welcome To TextUtils" mode = {mode}/>
        <Footer/>
      </div>


    </>
  );
}

export default App;
