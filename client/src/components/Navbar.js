import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { token, logout } = useAuth();
  const location = useLocation();
  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Tasks', path: '/tasks' },
    { name: 'Skills', path: '/skills' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <nav
  className={`fixed w-full top-0 z-50 text-white px-6 py-4 transition-all duration-300 ${
    scrolled
      ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg"
      : "bg-transparent"
  }`}
>
      
      {/* 🔥 Wider container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-purple-400 font-bold text-xl">
          Bakkesh.dev
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base hover:text-purple-400 transition ${
                location.pathname === link.path
                  ? 'text-purple-400'
                  : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-base font-medium transition"
          >
            Contact Me
          </Link>

          {token && (
            <button
              onClick={logout}
              className="text-sm text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          )}
        </div>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 px-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm text-gray-300 hover:text-purple-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="text-sm text-purple-400">
            Contact Me
          </Link>
          {token && (
            <button
              onClick={logout}
              className="text-sm text-red-400 text-left"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;