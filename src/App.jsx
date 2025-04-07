import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Submit from './components/Submit';
import Myideas from './components/Myideas';
import Explore from './components/Explore';
import SignUp from './components/signUp';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/myideas" element={<Myideas />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </Router>
  );
}

export default App;
