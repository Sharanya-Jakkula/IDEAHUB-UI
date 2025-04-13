import React from "react";
import bgImage from "../assets/front-view-dye-liquid.jpg";

export default function Myideas() {
  const ideas = [
    {
      title: "AI-Powered Health Assistant",
      description: "An AI tool to monitor patient vitals and suggest actions.",
      category: "Healthcare",
      tags: ["AI", "Health", "RemoteMonitoring"],
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Developing biodegradable packaging for online deliveries.",
      category: "Environment",
      tags: ["Sustainability", "Packaging"],
    },
    {
      title: "Smart Classroom",
      description: "IoT-based system to manage classroom attendance and energy.",
      category: "Education",
      tags: ["IoT", "Classroom", "Automation"],
    },
  ];

  return (
    <div className="relative min-h-screen text-white text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
      ></div>

   
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-10 pt-24">
        <h2 className="text-center text-3xl font-bold mb-8 text-purple-600">
          My Ideas
        </h2>

        {ideas.length === 0 ? (
          <p className="text-center text-gray-200">
            You haven’t submitted any ideas yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 border border-purple-100 shadow-md rounded-lg p-6 text-left text-gray-800"
              >
                <h5 className="text-xl font-semibold text-purple-600 mb-1">
                  {idea.title}
                </h5>
                <h6 className="text-sm text-gray-600 mb-2">
                  {idea.category}
                </h6>
                <p className="text-gray-700 mb-3">{idea.description}</p>
                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
