import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {

  const [formData, setFormData] =  useState({username:"", password:"",email:""});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const API_URL = "http://localhost:8080";
  const navigate = useNavigate();

  const handleInputChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handlePasswordConfirm = (e)=>{
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true);
    setError("");
    console.log("Entered");
    try{
      if (formData.email === "" || formData.password === "" || formData.username === "") {
        setError("Please fill all the fields");
        setLoading(false);
        return;
      }
      console.log("About to register");
      console.log(formData);
      const response = await axios.post(`${API_URL}/api/auth/register`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(response.data);
      if(response.data){
        toast.success("Registered Successfully!", {position:"bottom-right",duration:3000});
      }
      setFormData({username:"", password:"", email:""});
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("user", JSON.stringify( response.data.user ));
      // localStorage.setItem("id",response.data.id);
      // Cookies.set("jwt",response.data.token);
      navigate("/login");

    }catch (err) {
      setError(err.response?.data || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="flex items-center justify-center px-4 relative"
    >

      <div className="w-full max-w-sm z-10 relative">
        <form className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4" onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold text-center text-purple-600">Sign Up</h3>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-purple-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
              placeholder="Enter username"
              required
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
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              placeholder="Enter email"
              required
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
              name="password"
              placeholder="Enter password"
              onChange={handleInputChange}
              value={formData.password}
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
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={handlePasswordConfirm}
              value={confirmPassword}
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
            />
          </div>
          <p>{error}</p>
          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
