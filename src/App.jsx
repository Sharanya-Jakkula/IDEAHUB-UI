import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Propose from './components/Propose';
import MyIdeas from './components/MyIdeas';
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
          <Route path="propose" element={<Propose />} />
          <Route path="myideas" element={<MyIdeas />} />
          <Route path="explore" element={<Explore />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
