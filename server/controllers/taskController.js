const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const { date } = req.query;
    let query = {};

    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);
      query.date = { $gte: startDate, $lte: endDate };
    }

    const tasks = await Task.find(query).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTaskStats = async (req, res) => {
  try {
    const total = await Task.countDocuments();
    const done = await Task.countDocuments({ status: 'done' });
    const inProgress = await Task.countDocuments({ status: 'in-progress' });
    const pending = await Task.countDocuments({ status: 'pending' });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);
    const todayTotal = await Task.countDocuments({
      date: { $gte: today, $lte: todayEnd }
    });
    const todayDone = await Task.countDocuments({
      date: { $gte: today, $lte: todayEnd },
      status: 'done'
    });

    res.json({
      total,
      done,
      inProgress,
      pending,
      todayTotal,
      todayDone
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description, status, date, tags } = req.body;
    const task = await Task.create({
      title,
      description,
      status,
      date,
      tags
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskStats,
  createTask,
  updateTask,
  deleteTask
};