import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Submit.css';
import bgImage from "../assets/front-view-dye-liquid.jpg";

export default function Submit() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center mt-4"
      style={{
        backgroundImage: `url(${bgImage})`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "3rem 1rem"
      }}
    >
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <h2 className="text-center mb-4" style={{ color: "#6f42c1" }}>
          Submit Your Idea
        </h2>
        <form
          className="p-4 p-md-5 rounded shadow"
          style={{
            backgroundColor: "white",
            border: "1px solid #ddd",
          }}
        >
          {/* Idea Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-purple">
              Idea Title
            </label>
            <input
              type="text"
              className="form-control border-purple"
              id="title"
              placeholder="Enter a short title for your idea"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label text-purple">
              Description
            </label>
            <textarea
              className="form-control border-purple"
              id="description"
              rows="4"
              placeholder="Describe your idea in detail"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label text-purple">
              Category
            </label>
            <select className="form-select border-purple" id="category" required>
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
          <div className="mb-3">
            <label htmlFor="tags" className="form-label text-purple">
              Tags <small>(comma separated)</small>
            </label>
            <input
              type="text"
              className="form-control border-purple"
              id="tags"
              placeholder="e.g., AI, Sustainability, Startups"
            />
          </div>

          {/* File Upload */}
          <div className="mb-3">
            <label htmlFor="attachment" className="form-label text-purple">
              Attach Supporting Files (optional)
            </label>
            <input
              className="form-control border-purple"
              type="file"
              id="attachment"
              accept=".pdf,.docx,.pptx,.png,.jpg"
            />
          </div>

          {/* Link */}
          <div className="mb-3">
            <label htmlFor="link" className="form-label text-purple">
              Related Link (optional)
            </label>
            <input
              type="url"
              className="form-control border-purple"
              id="link"
              placeholder="https://yourproject.com"
            />
          </div>

          {/* Terms */}
          <div className="form-check mb-4">
            <input
              className="form-check-input border-purple"
              type="checkbox"
              id="terms"
              required
            />
            <label className="form-check-label text-purple" htmlFor="terms">
              I agree to the <a href="#">terms and conditions</a>.
            </label>
          </div>

          {/* Submit */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn text-white"
              style={{ backgroundColor: "#6f42c1" }}
            >
              Submit Idea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
