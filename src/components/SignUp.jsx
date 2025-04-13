import React from "react";
import bgImage from "../assets/front-view-dye-liquid.jpg";

export default function SignUp() {
  return (
    <div
      className="flex items-center justify-center min-h-screen pt-16 px-4 relative"
    >

      <div className="w-full max-w-sm z-10 relative">
        <form className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4">
          <h3 className="text-2xl font-bold text-center text-purple-600">Sign Up</h3>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-purple-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-purple-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
