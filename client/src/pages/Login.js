import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth(); // ✅ KEEP THIS
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await API.post('/auth/login', { email, password });

      login(data.token); // ✅ DO NOT CHANGE
      navigate('/tasks');

    } catch (err) {
      setError('Invalid email or password');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden px-6">

      {/* 🌌 Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* ✨ Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white opacity-20 rounded-full animate-ping"
            style={{
              top: `${(i * 7) % 100}%`,
              left: `${(i * 13) % 100}%`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* 🔄 Gradient Border */}
      <div className="relative z-10 w-full max-w-md p-[2px] rounded-2xl bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition duration-500">
        {/* 💎 Glass Card */}
        <div className="backdrop-blur-xl bg-gray-900/80 p-8 rounded-2xl border border-purple-500/30 shadow-xl shadow-purple-900/20 hover:scale-[1.02] transition duration-300">

          {/* 🔐 Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-600/20 text-2xl">
              🔐
            </div>
          </div>

          <h1 className="text-white text-2xl font-bold text-center mb-2">
            Admin Login
          </h1>
          <p className="text-gray-400 text-center text-sm mb-6">
            Sign in to manage your portfolio
          </p>

          {/* ❌ Error */}
          {error && (
            <div className="bg-red-900/50 text-red-300 px-4 py-3 rounded-lg mb-4 text-sm border border-red-500/20">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Email */}
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800/60 text-white px-4 py-3 rounded-lg outline-none 
                focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password with toggle */}
            <div className="relative">
              <label className="text-gray-400 text-sm mb-1 block">Password</label>

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800/60 text-white px-4 py-3 rounded-lg outline-none 
                focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Enter your password"
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-gray-400 cursor-pointer"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;