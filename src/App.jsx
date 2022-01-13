import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Vaults from "./components/Vaults/Vaults";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/vaults/:item" element={<Vaults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
