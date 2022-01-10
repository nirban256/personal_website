import React from "react";
import './App.css'
import { Navbar, Header, About, Skills, Projects, Contact } from './components'

function App() {
  return (
    <div>
      <div className="container gradient_bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
