import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Tasks = () => {

  const [tasks, setTasks] = useState([
    {
      title: "Design TaskPilot Landing Page",
      description: "Create modern UI with gradient design",
      priority: "High",
      status: "In Progress",
      deadline: "2026-06-20"
    },
    {
      title: "Implement Authentication",
      description: "Create login and register API using JWT",
      priority: "High",
      status: "Pending",
      deadline: "2026-06-22"
    },
    {
      title: "Build Analytics Dashboard",
      description: "Display productivity charts",
      priority: "Medium",
      status: "Pending",
      deadline: "2026-06-25"
    },
    {
      title: "Optimize UI Responsiveness",
      description: "Make UI mobile responsive",
      priority: "Low",
      status: "Completed",
      deadline: "2026-06-18"
    }
  ]);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    deadline: ""
  });

  const handleAddTask = () => {
    setTasks([...tasks, { ...newTask, status: "Pending" }]);
    setShowModal(false);
    setNewTask({
      title: "",
      description: "",
      priority: "Medium",
      deadline: ""
    });
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleStatusChange = (index, status) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = status;
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter(t => t.status === "Completed").length;
  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  const filteredTasks = tasks
    .filter(task =>
      filter === "All" ? true : task.status === filter
    )
    .filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <Navbar />

      <div className="px-10 py-8">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#0F172A]">
            My Tasks
          </h1>

          <button
            onClick={() => setShowModal(true)}
            className="bg-[#2563EB] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Add Task
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Task Progress</span>
            <span>{progress}% Completed</span>
          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div
              className="bg-[#2563EB] h-3 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full md:w-64"
          />

          <div className="flex gap-2">

            <button
              onClick={() => setFilter("All")}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              All
            </button>

            <button
              onClick={() => setFilter("Pending")}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Pending
            </button>

            <button
              onClick={() => setFilter("In Progress")}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              In Progress
            </button>

            <button
              onClick={() => setFilter("Completed")}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Completed
            </button>

          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredTasks.map((task, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border"
            >

              <div className="flex justify-between mb-2">

                <h2 className="font-semibold text-lg">
                  {task.title}
                </h2>

                <span
                  className={`text-xs px-3 py-1 rounded-full text-white ${
                    task.priority === "High"
                      ? "bg-red-500"
                      : task.priority === "Medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {task.priority}
                </span>

              </div>

              <p className="text-gray-600 mb-3">
                {task.description}
              </p>

              <p className="text-sm text-gray-500 mb-3">
                Deadline: {task.deadline}
              </p>

              <select
                value={task.status}
                onChange={(e) =>
                  handleStatusChange(index, e.target.value)
                }
                className="w-full border rounded-lg p-2 mb-3"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              <button
                onClick={() => handleDelete(index)}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Delete Task
              </button>

            </div>
          ))}

        </div>

      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white p-8 rounded-xl w-full max-w-md">

            <h2 className="text-2xl font-bold mb-4">
              Add New Task
            </h2>

            <input
              type="text"
              placeholder="Task Title"
              className="w-full border p-3 rounded-lg mb-3"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />

            <textarea
              placeholder="Task Description"
              className="w-full border p-3 rounded-lg mb-3"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  description: e.target.value
                })
              }
            />

            <select
              className="w-full border p-3 rounded-lg mb-3"
              value={newTask.priority}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  priority: e.target.value
                })
              }
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <input
              type="date"
              className="w-full border p-3 rounded-lg mb-4"
              value={newTask.deadline}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  deadline: e.target.value
                })
              }
            />

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleAddTask}
                className="bg-[#2563EB] text-white px-4 py-2 rounded-lg"
              >
                Add Task
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Tasks;