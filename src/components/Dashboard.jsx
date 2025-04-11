import React from "react";

export default function Dashboard() {
  return (
    <div className="pt-20 min-h-screen bg-gray-100"> {/* Prevent overlap with fixed navbar */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-52 bg-purple-800 text-white min-h-screen fixed left-0 top-20 bottom-0">
          <nav className="mt-4">
            <button className="w-full text-left px-4 py-2 hover:bg-purple-700 focus:outline-none">
              My Ideas
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-purple-700 focus:outline-none">
              Contribute
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-purple-700 focus:outline-none">
              Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-52 p-6 w-full"> {/* Margin-left same as sidebar width */}
          <p>This is your main dashboard content area.</p>
        </main>
      </div>
    </div>
  );
}
