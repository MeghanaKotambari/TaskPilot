import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import axios from "axios";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match ❌");
    }

    try {
      const { data } = await axios.post(
        "https://taskpilot1-0e8l.onrender.com/api/auth/register",
        { name, email, password }
      );

      localStorage.setItem("token", data.token);

      alert("Registration Successful ✅");

      window.location.href = "/dashboard";

    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2563EB] via-[#14B8A6] to-[#38BDF8]">

      <Navbar />

      <div className="flex items-center justify-center min-h-[90vh] px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-10 w-full max-w-md"
        >

          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Create Your Account
          </h2>

          <form className="space-y-5" onSubmit={handleRegister}>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />

            <button
              className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Register
            </button>

          </form>

          <p className="text-center text-white/80 mt-6">
            Already have an account?
            <span
              className="ml-2 underline cursor-pointer"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </span>
          </p>

        </motion.div>

      </div>

    </div>
  );
};

export default Register;