import React from "react";

const UserDashboard = ({ onLogout }) => {
  return (
    <div className="h-screen flex">
      <nav className="w-64 bg-slate-900"></nav>
      <main className="flex-1 flex flex-col">
        <header className="p-3 shadow-lg flex items-center justify-between">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <button
            className="bg-blue-600 text-white py-1 px-3 rounded-xl font-semibold hover:bg-blue-700"
            onClick={onLogout}
          >
            Logout
          </button>
        </header>
        <div className="flex-1 flex items-center justify-center text-5xl font-semibold">
          Dashboard
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
