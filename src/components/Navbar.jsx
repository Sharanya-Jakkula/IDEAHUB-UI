import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed  top-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-md px-10 py-4 z-50">
      <div className="flex flex-wrap items-center justify-between">
        {/* Brand */}
        <Link className="text-[#7F00FF]/70 font-bold text-3xl no-underline" to="/">
          Idea Hub <span>!</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          type="button"
          data-collapse-toggle="navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 000-2H3a1 1 0 000 2zm14 4H3a1 1 0 100 2h14a1 1 0 100-2zm0 6H3a1 1 0 100 2h14a1 1 0 100-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div className="hidden w-full lg:flex lg:items-center lg:w-auto" id="navbarNav">
            {[
              { name: "Home", path: "/" },
              { name: "Explore", path: "/explore" },
              { name: "Propose", path: "/propose" },
              { name: "My Ideas", path: "/myIdeas" },
            ].map((item, index) => (
                <Link
                  to={item.path}
                  className="text-[#7F00FF]/60 no-underline px-4 py-2 rounded-md hover:text-[#7F00FF]/100 transition duration-200 text-xl"
                >
                  {item.name}
                </Link>
            ))}
        </div>
        <div>
           <Link
              to="/login"
              className="text-xl no-underline font-medium text-white bg-[#7F00FF]/70 py-3 px-4 rounded-xl cursor-pointer hover:bg-[#6B47C6]"
            >
              Log In
            </Link>
        </div>
      </div>
    </nav>
  );
}
