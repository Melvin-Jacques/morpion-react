import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Game from "./pages/game.jsx";
import Nav from "./components/nav.jsx";


function App() {
  return (
    <div className="min-h-screen bg-[#203741]">
      <Nav></Nav>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
