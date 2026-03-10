import React from "react";
import Navbar from "../components/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

const weeklyData = [
  { day: "Mon", tasks: 2 },
  { day: "Tue", tasks: 4 },
  { day: "Wed", tasks: 3 },
  { day: "Thu", tasks: 5 },
  { day: "Fri", tasks: 6 },
  { day: "Sat", tasks: 4 },
  { day: "Sun", tasks: 2 }
];

const taskDistribution = [
  { name: "Completed", value: 14 },
  { name: "Pending", value: 7 },
  { name: "In Progress", value: 3 }
];

const COLORS = ["#22c55e", "#ef4444", "#f59e0b"];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <Navbar />

      <div className="px-10 py-8">

        <h1 className="text-3xl font-bold text-[#0F172A] mb-8">
          Productivity Analytics
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h3 className="text-gray-500">Total Tasks</h3>
            <p className="text-3xl font-bold text-[#2563EB]">24</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h3 className="text-gray-500">Completed Tasks</h3>
            <p className="text-3xl font-bold text-green-500">14</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h3 className="text-gray-500">Pending Tasks</h3>
            <p className="text-3xl font-bold text-red-500">10</p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-xl shadow-md border">

            <h2 className="text-xl font-semibold mb-6">
              Weekly Productivity
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="tasks"
                  stroke="#2563EB"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border">

            <h2 className="text-xl font-semibold mb-6">
              Task Distribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={taskDistribution}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {taskDistribution.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Analytics;