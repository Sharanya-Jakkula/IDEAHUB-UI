import React from "react";
import bgImage from "../assets/front-view-dye-liquid.jpg";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative">

      {/* Text Content */}
      <div className="relative z-10 text-center text-white">
        <p className="text-5xl md:text-7xl font-bold mb-6 text-[#7F00FF]/70">Inspire</p>
        <p className="text-4xl md:text-6xl font-semibold mb-6 text-[#7F00FF]/70">Ideate</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#7F00FF]/70">Innovate</h1>
      </div>
    </div>
  );
}
