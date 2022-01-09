import React from "react";
import './App.css'
import { Navbar, Header, About, Skills } from './components'

function App() {
  return (
    <div>
      <div className="container gradient_bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <Skills />
    </div>
  );
}

export default App;
