import React from "react";
import bgImage from "../assets/front-view-dye-liquid.jpg";

export default function Login() {
  return (
    <div
      className="flex items-center justify-center mt-4 h-screen bg-cover bg-center relative"
    >

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-sm px-4">
        <form className="bg-white bg-opacity-90 text-purple p-6 rounded-lg shadow-lg">
          <h3 className="text-center text-purple-600 text-2xl font-bold mb-6">Login</h3>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-purple mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-purple mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Login
          </button>

          <p className="text-center text-sm mt-4 text-gray-700">
            Don't have an account?{" "}
            <a href="/signUp" className="text-purple-600 hover:underline">
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
