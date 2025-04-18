import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, LogOut, Settings, User, Menu, UserCircle, X } from "lucide-react";

export default function Navbar() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const profileRef = useRef(null);
  useEffect(()=>{
    const interval = setInterval(() => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
      if(!token){
        setProfileOpen(false);
      }
    }, 500); // runs every 1000 milliseconds (1 second)
  
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

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-16" onClick={() => setMenuOpen(!menuOpen)}>
            { menuOpen ? <X className="w-6 h-6 text-purple-700"/> : <Menu className="w-6 h-6 text-black" /> }
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
        <div className="hidden md:inline-block">
          {isAuthenticated ? (
            // If user is logged in, show Profile & Logout
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center space-x-2 text-gray-600 hover:text-red-700"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <UserCircle className="w-10 h-10 text-purple-500 ml-16" />
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
            <Link to="/login" className="no-underline flex items-center gap-1  bg-[#7F00FF]/70 text-white font-medium text-xl px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              <LogIn className="w-4 h-4 font-bold" /> Login
            </Link>
          )}

        </div>
      </div>

      {/* Mobile Navigation (Shown when menuOpen is true) */}
      {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-50">
            <Link to="/" className="no-underline py-2 text-[#03045E] hover:bg-gray-200 w-full text-center">Home</Link>
            <Link to="/explore" className="py-2 no-underline  text-[#03045E] hover:bg-gray-200 w-full text-center">Explore</Link>
            <Link to="/propose" className="py-2 no-underline text-[#03045E] hover:bg-gray-200 w-full text-center">Propose</Link>
            <Link to="/myIdeas" className="py-2 no-underline text-[#03045E] hover:bg-gray-200 w-full text-center">My Ideas</Link>
            <Link to="/profile" className="py-2 no-underline text-[#03045E] hover:bg-gray-200 w-full text-center">Profile</Link>
            {isAuthenticated ? (
              <button className="py-2 text-[#03045E] hover:bg-gray-200 w-full text-center" onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login" className="py-2 text-[#03045E] hover:bg-gray-200 w-full text-center">Login</Link>
            )}
          </div>
        )}

    </nav>
  );
}
