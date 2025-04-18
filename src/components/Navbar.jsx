import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, LogOut, Settings, User, Menu, UserCircle } from "lucide-react";

export default function Navbar() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  useEffect(()=>{
    const interval = setInterval(() => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
      if(!token){
        setProfileOpen(false);
      }
    }, 1000); // runs every 1000 milliseconds (1 second)
  
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  },[]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setProfileOpen(false); // Close profile dropdown on logout
    navigate("/login"); // Redirect to login page
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="hidden w-full lg:flex md:items-center lg:items-center py-2 px-16 lg:w-auto shadow-lg px-30 rounded-[40px] gap-4 w-[750px]">
            {[
              { name: "Home", path: "/" },
              { name: "Explore", path: "/explore" },
              { name: "Propose", path: "/propose" },
              { name: "My Ideas", path: "/myIdeas" },
            ].map((item, index) => (
                <Link
                  to={item.path}
                  className="text-[#7F00FF]/60 no-underline px-4 py-2 rounded-md hover:text-[#7F00FF]/100 transition duration-200 text-xl font-medium"
                >
                  {item.name}
                </Link>
            ))}
        </div>
        <div>
          {isAuthenticated ? (
            // If user is logged in, show Profile & Logout
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center space-x-2 text-gray-600 hover:text-red-700"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <UserCircle className="w-10 h-10 text-purple-500" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <Link to="/profile" className="no-underline block px-4 py-2 hover:bg-gray-100 text-blue-500 flex gap-2 items-center">
                    <User className="w-4 h-4"/>Profile</Link>
                  <Link to="/settings" className="no-underline block px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-blue-500">
                    <Settings className="w-4 h-4" /> Settings
                  </Link>
                  <button
                    className="no-underline block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-blue-500"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-4 h-4 text-blue-500" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // If user is not logged in, show Login button
            <Link to="/login" className="no-underline flex items-center gap-2 bg-[#7F00FF]/70 text-white font-medium text-xl px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              <LogIn className="w-5 h-5 font-bold" /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
