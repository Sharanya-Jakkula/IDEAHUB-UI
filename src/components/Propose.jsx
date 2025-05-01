import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Propose() {
  const [formData, setFormData] = useState({title:"", description:"", image:null});
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:8080";

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result, // reader.result contains base64 string
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    toast.success("Into the function!", {duration:2000});
    const token = localStorage.getItem("token");
    if(!token || token==null || token==undefined){
      toast.error("Please signin first!", {position:"bottom-right", duration:2000});
      setLoading(false);
      return;
    }

    try{

      if (formData.title === "" || formData.description === ""|| formData.image==null) {
        toast.error("Please fill all the fields!", {position:"bottom-right", duration:2000});
        // setError("Please fill all the fields");
        setLoading(false);
        return;
      }
      console.log(formData);
      const response = await axios.post(`${API_URL}/api/idea`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log(response);
      if(response.status==200){
        toast.success("Submitted Successfully!", {position:"bottom-right",duration:3000});
        setFormData({title:"",description:""});
      }
      setLoading(false);
    }catch(error){
      console.log(error);
      toast.error(error.message, {duration:2000});
      setLoading(false);
    }

  }
  return (
    <div
      className="flex justify-center items-center px-4"
    >
      <div className="w-full max-w-2xl">
        <h2 className="text-center text-3xl font-bold mb-6 text-purple-600">
          Propse Your Idea
        </h2>

        <form className="bg-white rounded shadow p-6 border border-gray-200" onSubmit={handleSubmit}>
          {/* Idea Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium text-purple-700 mb-1">
              Idea Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
              placeholder="Enter a short title for your idea"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium text-purple-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
              placeholder="Describe your idea in detail"
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block font-medium text-purple-700 mb-1">
              Category
            </label>
            <select
              id="category"
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
              // required
            >
              <option value="">Select a category</option>
              <option>Technology</option>
              <option>Education</option>
              <option>Healthcare</option>
              <option>Environment</option>
              <option>Social Innovation</option>
              <option>Others</option>
            </select>
          </div>

          {/* Tags */}
          <div className="mb-4">
            <label htmlFor="tags" className="block font-medium text-purple-700 mb-1">
              Tags <small className="text-sm text-gray-500">(comma separated)</small>
            </label>
            <input
              type="text"
              id="tags"
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
              placeholder="e.g., AI, Sustainability, Startups"
              // required
            />
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label htmlFor="attachment" className="block font-medium text-purple-700 mb-1">
              Attach Supporting Files (optional)
            </label>
            <input
              type="file"
              name="image"
              className="w-full border border-purple-300 rounded px-3 py-2"
              accept=".png, .jpg, .jpeg"
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Related Link */}
          <div className="mb-4">
            <label htmlFor="link" className="block font-medium text-purple-700 mb-1">
              Related Link (optional)
            </label>
            <input
              type="url"
              id="link"
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
              placeholder="https://yourproject.com"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center mb-6">
            <input
              id="terms"
              type="checkbox"
              // required
              className="mr-2 border border-purple-300 rounded"
            />
            <label htmlFor="terms" className="text-purple-700">
              I agree to the <a href="#" className="no-underline">terms and conditions</a>.
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              {loading ? "Submitting..." : "Submit Idea"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
