import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const API = "http://localhost:3000";

const Dashboard = () => {

  const [data, setData] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    recentTasks: []
  });

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${API}/api/dashboard`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      setData(res.data);
    };

    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <h1>Total: {data.totalTasks}</h1>
      <h1>Completed: {data.completedTasks}</h1>
      <h1>Pending: {data.pendingTasks}</h1>

      {data.recentTasks.map((t, i) => (
        <div key={i}>{t.title}</div>
      ))}
    </div>
  );
};

export default Dashboard;