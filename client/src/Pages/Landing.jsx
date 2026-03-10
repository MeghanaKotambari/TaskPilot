import React from "react";
import Navbar from "../components/Navbar";
import ParticlesBg from "../components/ParticlesBg";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="w-full min-h-screen">

      <div className="relative min-h-screen bg-gradient-to-br from-[#2563EB] via-[#14B8A6] to-[#38BDF8] overflow-hidden">

        <Navbar />

        <div className="absolute inset-0">
          <ParticlesBg />
        </div>

        <div className="relative min-h-[90vh] flex items-center px-10 lg:px-24">

          <div className="grid lg:grid-cols-2 gap-16 w-full items-center">

            <div className="text-white space-y-8">

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Take Control of Your
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
                  Productivity
                </span>
              </motion.h1>

              <p className="text-lg text-white/90 max-w-xl">
                TaskPilot helps you organize tasks, track progress and stay
                focused with a powerful productivity dashboard designed for
                modern professionals.
              </p>

              <div className="flex gap-5">

               
               

              </div>

            </div>

            <div className="space-y-6 max-w-lg justify-self-end">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 shadow-2xl"
              >
                <h3 className="text-white font-semibold mb-2">
                  Smart Task Management
                </h3>
                <p className="text-white/80 text-sm">
                  Organize tasks with priorities, deadlines and workflow status.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 shadow-2xl"
              >
                <h3 className="text-white font-semibold mb-2">
                  Productivity Tracking
                </h3>
                <p className="text-white/80 text-sm">
                  Monitor task completion and progress with real-time insights.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 shadow-2xl"
              >
                <h3 className="text-white font-semibold mb-2">
                  Secure Authentication
                </h3>
                <p className="text-white/80 text-sm">
                  JWT based authentication for secure user access.
                </p>
              </motion.div>

            </div>

          </div>

        </div>

      </div>


      <section className="bg-white py-20 px-10">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-[#0F172A] mb-14">
            Why Choose TaskPilot
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition border">
              <h3 className="text-xl font-semibold mb-3 text-[#2563EB]">
                Smart Task Management
              </h3>
              <p className="text-gray-600">
                Easily organize and manage tasks with priority levels and
                deadlines.
              </p>
            </div>

            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition border">
              <h3 className="text-xl font-semibold mb-3 text-[#2563EB]">
                Productivity Insights
              </h3>
              <p className="text-gray-600">
                Track your productivity and understand your daily workflow.
              </p>
            </div>

            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition border">
              <h3 className="text-xl font-semibold mb-3 text-[#2563EB]">
                Secure System
              </h3>
              <p className="text-gray-600">
                Your data is protected with secure authentication and backend
                architecture.
              </p>
            </div>

          </div>

        </div>

      </section>


      <section className="bg-[#F8FAFC] py-20 px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold text-[#2563EB]">10K+</h2>
            <p className="text-gray-600 mt-2">Tasks Managed</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#2563EB]">5K+</h2>
            <p className="text-gray-600 mt-2">Active Users</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#2563EB]">99%</h2>
            <p className="text-gray-600 mt-2">Productivity Boost</p>
          </div>

        </div>

      </section>


      <footer className="bg-[#0F172A] text-white py-10 px-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

          <h2 className="text-2xl font-bold">
            Task<span className="text-[#14B8A6]">Pilot</span>
          </h2>

          <p className="text-gray-400 mt-4 md:mt-0">
            © 2026 TaskPilot. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Landing;