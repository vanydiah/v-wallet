import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{position: 'relative'}}>
      <div className='stars'></div>
      <div className='twinkling'></div>
      <div className='clouds'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
