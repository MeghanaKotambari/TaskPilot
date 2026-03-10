import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Dashboard = () => {

  const stats = [
    { title: "Total Tasks", value: 24, color: "text-blue-600" },
    { title: "Completed", value: 14, color: "text-green-600" },
    { title: "Pending", value: 10, color: "text-red-600" }
  ];

  const recentTasks = [
    { title: "Design Landing Page", status: "In Progress" },
    { title: "Authentication API", status: "Pending" },
    { title: "Analytics Page", status: "Completed" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-10">

          <h1 className="text-3xl font-bold mb-2">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mb-8">
            Here’s your productivity overview for today.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md border"
              >

                <h3 className="text-gray-500">
                  {stat.title}
                </h3>

                <p className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>

              </motion.div>
            ))}

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-md border">

              <h2 className="text-xl font-semibold mb-6">
                Today's Focus
              </h2>

              <div className="space-y-4">

                {recentTasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>{task.title}</span>

                    <span
                      className={
                        task.status === "Completed"
                          ? "text-green-500"
                          : task.status === "Pending"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }
                    >
                      {task.status}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border">

              <h2 className="text-xl font-semibold mb-6">
                Quick Actions
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <button className="bg-[#2563EB] text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Add Task
                </button>

                <button className="border py-3 rounded-lg hover:bg-gray-100">
                  View Tasks
                </button>

                <button className="border py-3 rounded-lg hover:bg-gray-100">
                  Analytics
                </button>

                <button className="border py-3 rounded-lg hover:bg-gray-100">
                  Productivity Tips
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;