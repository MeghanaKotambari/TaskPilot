import React from "react";
import { motion } from "framer-motion";

const TaskCard = ({ title, description, priority, status, deadline }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white shadow-md rounded-xl p-5 border border-gray-200 w-full max-w-md"
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-[#0F172A]">{title}</h2>
        <span className="text-xs px-3 py-1 rounded-full bg-[#14B8A6] text-white">
          {priority}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex justify-between items-center text-sm">
        <span className="text-[#2563EB] font-medium">{status}</span>
        <span className="text-gray-500">Due: {deadline}</span>
      </div>
    </motion.div>
  );
};

export default TaskCard;