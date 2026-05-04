const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getAllTasks,
  getTaskStats,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

router.get('/stats', protect, getTaskStats);
router.get('/', protect, getAllTasks);
router.post('/', protect, createTask);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);

module.exports = router;