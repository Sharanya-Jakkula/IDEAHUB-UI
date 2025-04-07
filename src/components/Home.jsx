import React from "react";
import bgImage from "../assets/front-view-dye-liquid.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";

export default function Home() {
  return (
    <div
      className="home-hero d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="overlay" style={{
        // backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 0,
      }}></div>

      <div className="z-1" style={{ position: "relative" }}>
        <h1 className="display-3 fw-bold mb-4" style={{color:'#6f42c1'}}>Inspire</h1>
        <h2 className="display-5 fw-semibold mb-4" style={{color:'#6f42c1'}}>Ideate</h2>
        <h1 className="display-3 fw-bold" style={{color:'#6f42c1'}}>Innovate</h1>
      </div>
    </div>
  );
}
