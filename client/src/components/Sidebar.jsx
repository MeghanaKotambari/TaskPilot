import React from "react";
import { FaHome, FaTasks, FaChartBar, FaTachometerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-64 bg-[#2563EB] text-white flex flex-col shadow-lg"
    >

      <div className="text-2xl font-bold p-6 border-b border-blue-400">
        TaskPilot
      </div>

      <ul className="flex flex-col gap-4 p-6 text-lg">

        <Link to="/">
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer hover:bg-blue-500 p-3 rounded-md"
          >
            <FaHome />
            Home
          </motion.li>
        </Link>

        <Link to="/dashboard">
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer hover:bg-blue-500 p-3 rounded-md"
          >
            <FaTachometerAlt />
            Dashboard
          </motion.li>
        </Link>

        <Link to="/tasks">
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer hover:bg-blue-500 p-3 rounded-md"
          >
            <FaTasks />
            Tasks
          </motion.li>
        </Link>

        <Link to="/analytics">
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer hover:bg-blue-500 p-3 rounded-md"
          >
            <FaChartBar />
            Analytics
          </motion.li>
        </Link>

      </ul>

    </motion.div>
  );
};

export default Sidebar;