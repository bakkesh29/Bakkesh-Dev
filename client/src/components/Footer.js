import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaHackerrank
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10 py-4 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* LEFT */}
        <div>
          <h2 className="text-purple-400 font-semibold text-lg">
            Bakkesh Y M R
          </h2>
          <p className="text-sm text-gray-500">
            © 2026 All rights reserved.
          </p>
        </div>

        {/* RIGHT */}
        {/* RIGHT */}
        <div className="flex items-center gap-4 text-sm flex-wrap justify-center md:justify-end">

          <p className="hidden md:block text-gray-500">
            Built with React, Tailwind & MERN
          </p>

          <Link
            to="/login"
            className="border border-white/10 px-3 py-1.5 rounded-md hover:bg-white/10 transition"
          >
            → Admin Login
          </Link>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-lg">

            <a href="https://github.com/bakkesh29" target="_blank" rel="noreferrer">
              <FaGithub className="text-gray-400 hover:text-white hover:scale-110 transition cursor-pointer" />
            </a>

            <a href="https://www.linkedin.com/in/bakkeshymr29072003/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-blue-500 hover:scale-110 transition cursor-pointer" />
            </a>

            <a href="https://www.instagram.com/bakkesh_yajman/" target="_blank" rel="noreferrer">
              <FaInstagram className="text-gray-400 hover:text-pink-500 hover:scale-110 transition cursor-pointer" />
            </a>

            <a href="https://www.facebook.com/share/1CBgmpHvxg/" target="_blank" rel="noreferrer">
              <FaFacebook className="text-gray-400 hover:text-blue-600 hover:scale-110 transition cursor-pointer" />
            </a>

            <a href="https://www.hackerrank.com/profile/bakkeshymr" target="_blank" rel="noreferrer">
              <FaHackerrank className="text-gray-400 hover:text-green-400 hover:scale-110 transition cursor-pointer" />
            </a>

            <a href="mailto:bakkeshymr@gmail.com">
              <MdEmail className="text-gray-400 hover:text-red-500 hover:scale-110 transition cursor-pointer" />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;