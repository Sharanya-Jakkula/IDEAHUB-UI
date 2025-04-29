import React, { useState } from "react";
import axios from "axios"
import {motion} from "framer-motion"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import  Cookies  from "js-cookie";
export default function Login() {
  
  const [formData, setFormData] = useState({email:"", password:""});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_URL = "http://localhost:8080";
  const navigate = useNavigate();

  const handleInputChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true);
    setError("");

    try{
      if (formData.emailId === "" || formData.password === "") {
        setError("Please fill all the fields");
        setLoading(false);
        return;
      }

      const response = await axios.post(`${API_URL}/api/auth/login`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(response.data);
      if(!response.data.token){
        setError("Something went wrong");
        toast.error("Error has occured!", {position:"top-right",duration:3000});
        console.log("Error occured");
        return;
      }
      if(response.data){
        toast.success("Logged In Successful!", {position:"bottom-right",duration:3000});
      }
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify( response.data.user ));
      localStorage.setItem("id",response.data.id);
      Cookies.set("jwt",response.data.token);
      navigate("/explore");

    }catch (err) {
      setError(err.response?.data || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="flex items-center justify-center mt-4 bg-cover bg-center relative"
    >

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-sm px-4">
        <form className="bg-white bg-opacity-90 text-purple p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <h3 className="text-center text-purple-600 text-2xl font-bold mb-6">Login</h3>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-purple mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value= {formData.email}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-purple mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value = {formData.password}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleInputChange}
              required
            />
          </div>
          <p>{error}</p>
          <motion.button
            type="submit"
            className="w-full bg-[#7F56D9] hover:bg-[#a17df0] text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
            whileHover={{ scale: loading ? 1 : 1.05 }}
            disabled={loading}
          >
            {loading ? "Processing..." : "Log In"}
          </motion.button>

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
