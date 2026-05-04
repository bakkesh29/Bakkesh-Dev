import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '🖥️',
    title: 'Frontend Development',
    description: 'I create visually appealing, user-friendly interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.',
    color: 'bg-blue-600'
  },
  {
    icon: '⚡',
    title: 'Full Stack Web Development',
    description: 'I design clean and dynamic user interfaces with React while building secure and scalable backends with Node.js and MongoDB.',
    color: 'bg-purple-600'
  },
  {
    icon: '📱',
    title: 'Responsive Web Design',
    description: 'I build websites that look great on all devices — mobile, tablet, and desktop using modern CSS techniques.',
    color: 'bg-pink-600'
  },
  {
    icon: '🔧',
    title: 'REST API Development',
    description: 'I build secure and scalable REST APIs using Node.js and Express with JWT authentication and MongoDB.',
    color: 'bg-green-600'
  },
  {
    icon: '🗄️',
    title: 'Database Design',
    description: 'I design and manage MongoDB databases with proper schema design, indexing, and data modeling.',
    color: 'bg-yellow-600'
  },
  {
    icon: '🚀',
    title: 'Web App Deployment',
    description: 'I deploy full stack web applications to cloud platforms like Vercel and Render with CI/CD pipelines.',
    color: 'bg-teal-600'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-white text-5xl font-bold mb-4">
            My <span className="text-purple-400">Services</span>
          </h1>
          <div className="w-16 h-1 bg-purple-600 mx-auto rounded mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer comprehensive solutions tailored to your unique needs,
            combining cutting-edge technology with creative design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 hover:border-purple-600 rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-2xl`}>
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-xl">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-800 border border-purple-600 rounded-2xl p-10">
          <h2 className="text-white text-3xl font-bold mb-4">
            Interested in working <span className="text-purple-400">together?</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Let's build something amazing. Feel free to reach out!
          </p>
          <Link
            to="/contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition text-lg"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;