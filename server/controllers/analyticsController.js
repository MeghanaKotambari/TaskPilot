const Task = require("../models/Task");

// ✅ Get Analytics Data
exports.getAnalytics = async (req, res) => {
  try {
    const userId = req.user._id;

    // Count tasks by status
    const completed = await Task.countDocuments({
      user: userId,
      status: "completed"
    });

    const inProgress = await Task.countDocuments({
      user: userId,
      status: "in-progress"
    });

    const pending = await Task.countDocuments({
      user: userId,
      status: "pending"
    });

    // Count tasks by priority
    const high = await Task.countDocuments({
      user: userId,
      priority: "high"
    });

    const medium = await Task.countDocuments({
      user: userId,
      priority: "medium"
    });

    const low = await Task.countDocuments({
      user: userId,
      priority: "low"
    });

    res.json({
      statusData: {
        completed,
        inProgress,
        pending
      },
      priorityData: {
        high,
        medium,
        low
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};