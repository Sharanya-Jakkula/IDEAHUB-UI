import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import {Link} from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-2 fixed-top" style={{marginBottom:'15px'}}>

      <Link className="navbar-brand text-purple fw-bold" to="/">
        Idea Hub <span>!</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav align-items-center gap-4">
          <li className="nav-item">
            <Link className="nav-link text-purple nav-hover" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-purple nav-hover" to="/explore">Explore</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-purple nav-hover" to="/submit">Submit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-purple nav-hover" to="/myIdeas">My Ideas</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="btn btn-purple ms-3">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="btn btn-purple ms-3">DashBoard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
