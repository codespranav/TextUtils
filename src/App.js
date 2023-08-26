import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  
  return (
    <>
        <Navbar title = "TextUtils" aboutText = "About TextUtils"/>
        <TextForm heading = "Welcome To TextUtils"/>

    </>
  );
}

export default App;
