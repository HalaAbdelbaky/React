import React, { useEffect,useState } from 'react';
import MainNav from "./Components/MainNav"
import Introduct from  "./Components/Introduct"
import Skills from  "./Components/Skills"
import Projects from  "./Components/Projects"
import Contact from  "./Components/Contact"
import Footer from  "./Components/Footer"

function App() {
  return (
    <div className="main">
      <MainNav />
      <Introduct/>
    <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    );
}

export default App


