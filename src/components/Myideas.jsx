import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./MyIdeas.css"; // Optional for extra styling

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
    <div className="container py-5 mt-4">
      <h2 className="text-center mb-4" style={{ color: "#6f42c1" }}>
        My Ideas
      </h2>

      {ideas.length === 0 ? (
        <p className="text-center">You haven’t submitted any ideas yet.</p>
      ) : (
        <div className="row gy-4">
          {ideas.map((idea, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-purple">{idea.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{idea.category}</h6>
                  <p className="card-text">{idea.description}</p>
                  <div className="mt-3">
                    {idea.tags.map((tag, idx) => (
                      <span key={idx} className="badge bg-secondary me-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
