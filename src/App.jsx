import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Main/pages/Home';
import About from './Main/pages/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App