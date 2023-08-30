import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [buttonText, setButtonText] = useState('Enable Dark Mode');
  const [textColor, setTextColor] = useState('dark');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextColor('light');
      setButtonText('Enable Light Mode');
      document.body.style.backgroundColor = '#1d1d1d';
    } else {
      setMode('light');
      setTextColor('dark');
      setButtonText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Router> 
      <Navbar
      title="TextUtils"
      aboutText="About TextUtils"
      mode={mode}
      toggleMode={toggleMode}
      buttonText={buttonText}
      textColor={textColor}/>
  
        <Routes>
          <Route path="/" element={<TextForm heading="Welcome To TextUtils" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
