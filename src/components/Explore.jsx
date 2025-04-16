import React from "react";

export default function Explore() {
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
    <div className="relative text-white text-center overflow-hidden">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-600">
          Explore New Ideas
        </h2>

        {ideas.length === 0 ? (
          <p className="text-center text-gray-200">
            You haven’t submitted any ideas yet.
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
                <p className="mb-4">{idea.description}</p>
                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full"
                    >
                      #{tag}
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
