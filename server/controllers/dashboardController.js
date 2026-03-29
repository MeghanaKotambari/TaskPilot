const Task = require("../models/Task");

// ✅ Get Dashboard Summary
exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user._id;

    // Total tasks
    const totalTasks = await Task.countDocuments({ user: userId });

    // Status counts
    const completedTasks = await Task.countDocuments({
      user: userId,
      status: "completed"
    });

    const pendingTasks = await Task.countDocuments({
      user: userId,
      status: "pending"
    });

    const inProgressTasks = await Task.countDocuments({
      user: userId,
      status: "in-progress"
    });

    // Recent tasks (last 5)
    const recentTasks = await Task.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalTasks,
      completedTasks,
      pendingTasks,
      inProgressTasks,
      recentTasks
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};