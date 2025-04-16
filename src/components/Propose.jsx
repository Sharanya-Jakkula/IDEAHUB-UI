import React from "react";

export default function Propose() {
  return (
    <div
      className="flex justify-center items-center px-4"
    >
      <div className="w-full max-w-2xl">
        <h2 className="text-center text-3xl font-bold mb-6 text-purple-600">
          Propse Your Idea
        </h2>

        <form className="bg-white rounded shadow p-6 border border-gray-200">
          {/* Idea Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium text-purple-700 mb-1">
              Idea Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
              placeholder="Enter a short title for your idea"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium text-purple-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring focus:ring-purple-200"
              placeholder="Describe your idea in detail"
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
              required
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
            />
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <label htmlFor="attachment" className="block font-medium text-purple-700 mb-1">
              Attach Supporting Files (optional)
            </label>
            <input
              type="file"
              id="attachment"
              className="w-full border border-purple-300 rounded px-3 py-2"
              accept=".pdf,.docx,.pptx,.png,.jpg"
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
              required
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
              Submit Idea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
