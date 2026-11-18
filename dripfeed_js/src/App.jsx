import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed.jsx";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
          <Route exact path="/feed" element={<Feed/>} />
      </Routes>
    </Router>
  )
}

export default App
