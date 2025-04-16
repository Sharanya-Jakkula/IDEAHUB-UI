import React from "react";

export default function Home() {
  return (
    <div className="w-full px-10 items-center justify-center">
      {/* Hero Section */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between p-8 rounded-lg shadow-2xl backdrop-blur-3xl bg-white">
        {/* Left Side (Text) */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 md:ml-12 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-medium leading-tight">
            Explore the Ideas ⚡
          </h1>
          <p className="text-lg sm:text-lg font-medium text-gray-700">
            Dummy Text Dummy Text Dummy TextDummy TextDummy TextDummy TextDummy TextDummy TextDummy TextDummy Text TextDummy TextTextDummy TextTextDummy TextTextDummy TextTextDummy TextTextDummy TextTextDummy Text
            TextDummy TextTextDummy TextTextDummy TextTextDummy Text
          </p>
          <button className="bg-[#7F56D9] py-3 px-6 rounded-xl text-xl text-white font-semibold mx-auto md:mx-0 transition-all duration-300 hover:bg-[#6A45C8] w-[60%]"
          onClick={() => {
            isLoggedIn ? navigate("/explore") : navigate("/login")
            }}>
            Explore Now 💪
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="image.png"
            alt="Logo"
            className="w-3/4 md:w-2/3 lg:w-1/2 shadow-xl rounded-lg"  
          />
        </div>
      </div>

      {/* Text Content */}
      {/* <div className="relative text-center text-white">
        <p className="text-5xl md:text-7xl font-bold mb-6 text-[#7F00FF]/70">Inspire</p>
        <p className="text-4xl md:text-6xl font-semibold mb-6 text-[#7F00FF]/70">Ideate</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#7F00FF]/70">Innovate</h1>
      </div> */}
    </div>
  );
}
