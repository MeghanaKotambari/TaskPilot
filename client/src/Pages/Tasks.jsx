import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const API = "http://localhost:3000";

const Tasks = () => {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    deadline: ""
  });

  // ✅ Fetch Tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(`${API}/api/tasks`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        const formatted = data.map(t => ({
          ...t,
          priority: t.priority.charAt(0).toUpperCase() + t.priority.slice(1),
          status:
            t.status === "in-progress"
              ? "In Progress"
              : t.status.charAt(0).toUpperCase() + t.status.slice(1),
          deadline: t.dueDate?.split("T")[0]
        }));

        setTasks(formatted);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTasks();
  }, []);

  // ✅ Add Task
  const handleAddTask = async () => {
    try {
      const { data } = await axios.post(
        `${API}/api/tasks`,
        {
          title: newTask.title,
          description: newTask.description,
          priority: newTask.priority.toLowerCase(),
          dueDate: newTask.deadline
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      setTasks([
        ...tasks,
        {
          ...data,
          priority: newTask.priority,
          status: "Pending",
          deadline: newTask.deadline
        }
      ]);

      setShowModal(false);
      setNewTask({
        title: "",
        description: "",
        priority: "Medium",
        deadline: ""
      });

    } catch {
      alert("Failed to add task");
    }
  };

  // ✅ Delete
  const handleDelete = async (index, id) => {
    try {
      await axios.delete(`${API}/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      setTasks(tasks.filter((_, i) => i !== index));
    } catch {
      alert("Delete failed");
    }
  };

  // ✅ Update Status
  const handleStatusChange = async (index, status, id) => {
    try {
      const backendStatus =
        status === "In Progress" ? "in-progress" : status.toLowerCase();

      await axios.put(
        `${API}/api/tasks/${id}`,
        { status: backendStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      const updated = [...tasks];
      updated[index].status = status;
      setTasks(updated);

    } catch {
      alert("Update failed");
    }
  };

  const completedTasks = tasks.filter(t => t.status === "Completed").length;
  const progress =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);

  const filteredTasks = tasks
    .filter(task => filter === "All" || task.status === filter)
    .filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="px-10 py-8">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#0F172A]">My Tasks</h1>
          <button onClick={() => setShowModal(true)}
            className="bg-[#2563EB] text-white px-5 py-2 rounded-lg">
            + Add Task
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span>Task Progress</span>
            <span>{progress}% Completed</span>
          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div className="bg-[#2563EB] h-3 rounded-full"
              style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg mb-4"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">

              <h2>{task.title}</h2>
              <p>{task.description}</p>

              <select
                value={task.status}
                onChange={(e) =>
                  handleStatusChange(index, e.target.value, task._id)
                }
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              <button
                onClick={() => handleDelete(index, task._id)}
                className="bg-red-500 text-white px-3 py-1 mt-2">
                Delete
              </button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Tasks;