import React, { useState, useEffect, useCallback } from 'react';
import API from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";



const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', status: 'pending', tags: '' });
  const { token } = useAuth();
  const navigate = useNavigate();

  const today = new Date().toISOString().split('T')[0];



  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await API.get(`/tasks?date=${today}`);
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [today]);

  const fetchStats = useCallback(async () => {
    try {
      const { data } = await API.get('/tasks/stats');
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!token) { navigate('/login'); return; }
    fetchTasks();
    fetchStats();
  }, [token, fetchTasks, fetchStats, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskData = {
        ...form,
        tags: form.tags.split(',').map(t => t.trim()).filter(t => t)
      };
      await API.post('/tasks', taskData);
      setForm({ title: '', description: '', status: 'pending', tags: '' });
      setShowForm(false);
      fetchTasks();
      fetchStats();
    } catch (error) {
      console.error(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/tasks/${id}`, { status });
      fetchTasks();
      fetchStats();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
      fetchStats();
    } catch (error) {
      console.error(error);
    }
  };

  const statusColors = {
    'pending': 'bg-gray-700 text-gray-300',
    'in-progress': 'bg-yellow-900 text-yellow-300',
    'done': 'bg-green-900 text-green-300'
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <p className="text-white text-xl">Loading...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-4xl font-bold text-center mb-4">Daily Tasks</h1>
        <p className="text-gray-400 text-center mb-8">Track what you do every day</p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-purple-400 text-3xl font-bold">{stats.total || 0}</p>
            <p className="text-gray-400 text-sm mt-1">Total Tasks</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-green-400 text-3xl font-bold">{stats.done || 0}</p>
            <p className="text-gray-400 text-sm mt-1">Completed</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <p className="text-yellow-400 text-3xl font-bold">{stats.todayTotal || 0}</p>
            <p className="text-gray-400 text-sm mt-1">Today</p>
          </div>
        </div>


        {/* GitHub Section */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg">
          {/* HEADER ROW */}
          <div className="flex justify-between items-center w-full mb-6">
            <h2 className="text-white text-xl font-semibold">
              Developer Activity
            </h2>

            <a
              href="https://github.com/bakkesh29"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-gray-400 text-xl hover:text-white hover:scale-110 transition cursor-pointer" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">




            {/* GitHub Stats */}
            <div className="flex justify-center">
              <img
                src="https://github-readme-stats-sigma-five.vercel.app/api?username=bakkesh29&show_icons=true&theme=tokyonight&hide_border=true"
                alt="GitHub Stats"
                className="rounded-lg w-full max-w-md"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x200?text=GitHub+Stats+Unavailable";
                }}
              />
            </div>

            {/* GitHub Streak */}
            <div className="flex justify-center">
              <img
                src="https://streak-stats.demolab.com?user=bakkesh29&theme=tokyonight&hide_border=true"
                alt="GitHub Streak"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Contribution Graph Full Width */}
          <div className="mt-6">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=bakkesh29&theme=react-dark&hide_border=true"
              alt="Contribution Graph"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-semibold">
            Today — {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            {showForm ? 'Cancel' : '+ Add Task'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-6 mb-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Task title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              placeholder="Description (optional)"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
            />
            <input
              type="text"
              placeholder="Tags (comma separated e.g. React, coding)"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium">
              Add Task
            </button>
          </form>
        )}

        {tasks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No tasks for today. Add your first task!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <div key={task._id} className="bg-gray-800 rounded-xl p-5 flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className={`font-medium ${task.status === 'done' ? 'line-through text-gray-500' : 'text-white'}`}>
                      {task.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${statusColors[task.status]}`}>
                      {task.status}
                    </span>
                  </div>
                  {task.description && (
                    <p className="text-gray-400 text-sm">{task.description}</p>
                  )}
                  {task.tags.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {task.tags.map((tag) => (
                        <span key={tag} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {task.status !== 'done' && (
                    <button
                      onClick={() => updateStatus(task._id, task.status === 'pending' ? 'in-progress' : 'done')}
                      className="text-xs bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg"
                    >
                      {task.status === 'pending' ? 'Start' : 'Done'}
                    </button>
                  )}
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="text-xs bg-red-900 hover:bg-red-800 text-red-300 px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;