import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Nav from "./components/nav.jsx";
import Morpion from "./pages/morpion.jsx";
import Ranking from "./pages/ranking.jsx"


function App() {
  return (
    <div className="min-h-screen bg-[#203741]"
    style={{fontFamily: 'Rubik, sans-serif'}}>
      <Nav></Nav>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Morpion />} />
            <Route path={"/ranking"} element={<Ranking />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
