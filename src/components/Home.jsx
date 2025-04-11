import React from "react";
import bgImage from "../assets/front-view-dye-liquid.jpg";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // optional parallax effect
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50 z-0"></div> */}

      {/* Text Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-purple-600">Inspire</h1>
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-purple-600">Ideate</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-purple-600">Innovate</h1>
      </div>
    </div>
  );
}
