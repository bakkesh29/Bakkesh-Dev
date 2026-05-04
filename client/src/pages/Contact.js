import React, { useState } from 'react';
import API from '../utils/api';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await API.post('/contact', form);
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-white text-5xl font-bold mb-4">
            Get in <span className="text-purple-400">Touch</span>
          </h1>
          <div className="w-16 h-1 bg-purple-600 mx-auto rounded mb-6"></div>
          <p className="text-gray-400 text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-white text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out through any of these channels.
              I am always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:bakkeshymr@gmail.com" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400 text-sm">bakkeshymr@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/bakkesh29" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <img src="https://skillicons.dev/icons?i=github" alt="GitHub" width="28" height="28" />
                </div>
                <div>
                  <p className="text-white font-medium">GitHub</p>
                  <p className="text-gray-400 text-sm">github.com/bakkesh29</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/bakkeshymr29072003/" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                  <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" width="28" height="28" />
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-gray-400 text-sm">linkedin.com/in/bakkeshymr29072003</p>
                </div>
              </a>

              <a href="https://www.instagram.com/bakkesh_yajman/" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:opacity-80 transition">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                  <img src="https://skillicons.dev/icons?i=instagram" alt="Instagram" width="28" height="28" />
                </div>
                <div>
                  <p className="text-white font-medium">Instagram</p>
                  <p className="text-gray-400 text-sm">@bakkesh_yajman</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-white text-2xl font-bold mb-6">Send a Message</h2>

            {success && (
              <div className="bg-green-900 text-green-300 px-4 py-3 rounded-lg mb-6 text-center">
                Message sent successfully! I'll get back to you soon. 🎉
              </div>
            )}

            {error && (
              <div className="bg-red-900 text-red-300 px-4 py-3 rounded-lg mb-6 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-1 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition text-lg"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;