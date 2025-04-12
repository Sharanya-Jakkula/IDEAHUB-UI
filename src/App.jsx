import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Submit from './components/Submit';
import Myideas from './components/Myideas';
import Explore from './components/Explore';
import SignUp from "./components/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Body from './components/Body';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} >
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login />} />
          <Route path="propose" element={<Submit />} />
          <Route path="myideas" element={<Myideas />} />
          <Route path="explore" element={<Explore />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
