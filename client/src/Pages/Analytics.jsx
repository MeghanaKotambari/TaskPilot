import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const API = "https://taskpilot1-0e8l.onrender.com";

const COLORS = ["#22c55e", "#ef4444", "#f59e0b"];

const Analytics = () => {

  const [data, setData] = useState({
    completed: 0,
    pending: 0,
    inProgress: 0
  });

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${API}/api/analytics`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      setData(res.data.statusData);
    };

    fetch();
  }, []);

  const taskDistribution = [
    { name: "Completed", value: data.completed },
    { name: "Pending", value: data.pending },
    { name: "In Progress", value: data.inProgress }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <PieChart width={400} height={300}>
        <Pie data={taskDistribution} dataKey="value">
          {taskDistribution.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Analytics;