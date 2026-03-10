import React from "react";
import logo from "../assets/tasklogo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md border-b">
      {" "}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="TaskPilot Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-2xl font-bold">
            <span className="text-[#0F172A]">Task</span>
            <span className="text-[#14B8A6]">Pilot</span>
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-medium text-[#0F172A]">
          <li className="cursor-pointer hover:text-[#2563EB] transition">
            Dashboard
          </li>
          <li className="cursor-pointer hover:text-[#2563EB] transition">
            Tasks
          </li>
          <li className="cursor-pointer hover:text-[#2563EB] transition">
            Analytics
          </li>
          <li className="cursor-pointer hover:text-[#2563EB] transition">
            Profile
          </li>
        </ul>

        <div>
          <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
