import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js'
import About from './components/About.js'
import Education from './components/Education.js'
import Experience from './components/Experience.js'
import Project from './components/Project.js'
import Contact from './components/Contact.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
