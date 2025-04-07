import React from "react";
import bgImage from "../assets/front-view-dye-liquid.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function SignUp() {
  return (
    <div
      className="login-hero d-flex align-items-center justify-content-center mt-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: 0,
        }}
      ></div>

      <div
        className="z-1 w-100 px-3"
        style={{
          maxWidth: "400px",
          position: "relative",
        }}
      >
        <form className="login-form text-white p-4 p-md-5 rounded shadow">
          <h3 className="text-center mb-4 text-purple">Sign Up</h3>

          <div className="mb-3">
            <label htmlFor="username" className="form-label text-purple">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-purple">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label text-purple">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label text-purple">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-purple w-100 mb-3">
            SignUp
          </button>
       
        </form>
      </div>
    </div>
  );
}
