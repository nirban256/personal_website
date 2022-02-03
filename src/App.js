import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {

  const [toggle, setToggle] = useState(false);

  const navClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <div className={`side-bar ${toggle ? 'toggle' : ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="/project" exact element={<ProjectsPage />} />
            <Route path="/contact" exact element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
