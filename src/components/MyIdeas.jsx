import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function MyIdeas() {

  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(0);
  const API_URL = "http://localhost:8080";

  const fetchIdeas = async(userId)=>{
    try{
      console.log("started");
      const response = await axios.get(`${API_URL}/api/idea`,{
        withCredentials:true,
      });
      console.log("done");
      if(response.data){ 
        console.log(id);
        console.log(response.data[0].createdBy);
        const filteredIdeas = response.data.filter(idea => idea.createdBy == userId);
        setIdeas(filteredIdeas);
        console.log(filteredIdeas);
        toast.success("Fetched successfully!", {position:"top-right", duration:2000});
      }
    }catch(err){
      console.log(err);
      // setIdeas([
      //   {
      //     title: "AI-Powered Health Assistant",
      //     description: "An AI tool to monitor patient vitals and suggest actions.",
      //     category: "Healthcare",
      //     tags: ["AI", "Health", "RemoteMonitoring"],
      //   },
      //   {
      //     title: "Eco-Friendly Packaging",
      //     description: "Developing biodegradable packaging for online deliveries.",
      //     category: "Environment",
      //     tags: ["Sustainability", "Packaging"],
      //   },
      //   {
      //     title: "Smart Classroom",
      //     description: "IoT-based system to manage classroom attendance and energy.",
      //     category: "Education",
      //     tags: ["IoT", "Classroom", "Automation"],
      //   },
      // ]);
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    const storedId = parseInt(localStorage.getItem("id"), 10);
  setId(storedId);
  fetchIdeas(storedId);
  },[]);

  return (
    <div className="relative text-white text-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 text-purple-600">
          My Ideas
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : ideas.length === 0 ? (
          <p className="text-center text-gray-800">
            You haven't submitted any ideas yet!.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 border border-purple-100 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200 text-left text-gray-800"
              >
                <h3 className="text-xl font-semibold text-purple-600 mb-1">
                  {idea.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{idea.category}</p>

                {/* Display image if present */}
                {idea.image && (
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-58 object-cover rounded-md mb-4"
                  />
                )}

                <p className="mb-4">{idea.description}</p>
                {/* <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
