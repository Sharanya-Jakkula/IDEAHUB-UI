import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-sm px-4">
      <div className="flex flex-wrap items-center justify-between">
        {/* Brand */}
        <Link className="text-purple-600 font-bold text-2xl no-underline" to="/">
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
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-4 lg:mt-0 text-lg font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Explore", path: "/explore" },
              { name: "Submit", path: "/submit" },
              { name: "My Ideas", path: "/myIdeas" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-purple-600 no-underline px-4 py-2 rounded-md hover:bg-purple-100 transition duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="text-white bg-purple-600 no-underline hover:bg-purple-700 px-4 py-2 rounded-md transition duration-200"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-white bg-purple-600 no-underline hover:bg-purple-700 px-4 py-2 rounded-md transition duration-200"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
