import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Login = () => {
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
            Welcome Back
          </h2>

          <form className="space-y-5">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />

            <button
              className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>

          </form>

          <p className="text-center text-white/80 mt-6">
            Don't have an account?
            <span className="ml-2 underline cursor-pointer">
              Register
            </span>
          </p>

        </motion.div>

      </div>

    </div>
  );
};

export default Login;