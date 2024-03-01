// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="bg-white-900 w-screen h-screen border-box">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
