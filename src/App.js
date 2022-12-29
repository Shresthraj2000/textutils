// import logo from './logo.svg';
// import React,{useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

function App() {

  return (
   <>
   <Router>
   <Navbar title="TextUtils"/>
   <Routes>
          <Route path="/about" element={<About />} />
          
          <Route path="/" element={<TextForm heading="Enter text to change" />} />
          
    </Routes>
    </Router>
   </>
  );
}
 
export default App;
