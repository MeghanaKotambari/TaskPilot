import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F8FAFC]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute w-10 h-10 border-4 border-[#14B8A6] border-b-transparent rounded-full animate-spin"></div>
        </div>

        <h1 className="text-2xl font-bold">
          <span className="text-[#0F172A]">Task</span>
          <span className="text-[#14B8A6]">Pilot</span>
        </h1>

        <p className="text-gray-500 text-sm tracking-wide animate-pulse">
          Preparing your productivity cockpit...
        </p>
      </div>
    </div>
  );
};

export default Loader;
