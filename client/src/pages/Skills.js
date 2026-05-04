import React from 'react';
import { ReactTyped } from "react-typed";
import { FiDownload } from "react-icons/fi";

const skillCategories = {
  Frontend: [
    { name: 'React', icon: 'react' },
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'Vue.js', icon: 'vue' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'Python', icon: 'python' },
    { name: 'Java', icon: 'java' },
    { name: 'C', icon: 'c' },
    { name: 'Flask', icon: 'flask' },
  ],
  Database: [
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'MySQL', icon: 'mysql' },
  ],
  Tools: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Tableau', icon: null, image: '/icons/tab.webp' },
    { name: 'Power BI', icon: null, image: '/icons/powerbi.webp' },
  ],
  'Software Testing': [
    { name: 'Selenium', icon: 'selenium' },
    { name: 'Katalon', icon: null, image: '/icons/katalon.png' },
    { name: 'Postman', icon: 'postman' },
  ],
  'Graphic Designing': [
    { name: 'Canva', icon: null, image: '/icons/canva.webp' },
    { name: 'Figma', icon: 'figma' },
  ],
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-5xl font-bold mb-4">
            My <span className="text-purple-400">Skills</span>
          </h1>
          <div className="w-16 h-1 bg-purple-600 mx-auto rounded mb-4"></div>
          <p className="text-gray-400">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-gray-800 border border-gray-700 hover:border-purple-600 rounded-2xl p-6 transition">
              <h2 className="text-purple-400 font-bold text-xl mb-6">{category}</h2>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-1 hover:scale-110 transition-transform">
                    {skill.image ? (
                      <img src={skill.image} alt={skill.name} width="40" height="40" style={{ objectFit: 'contain' }} />
                    ) : (
                      <img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt={skill.name} width="40" height="40" />
                    )}
                    <span className="text-gray-400 text-xs">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-3 px-10 py-4 
    bg-gradient-to-r from-purple-500 to-purple-400 
    text-white text-lg font-semibold 
    rounded-2xl shadow-lg 
    transition-all duration-300 
    hover:-translate-y-2 hover:scale-105 hover:shadow-purple-500/40"
          >
            {/* Icon */}
            <FiDownload className="text-2xl transition-transform duration-300 group-hover:-translate-y-1" />

            {/* Text */}
            <ReactTyped
              strings={["Download Full Resume"]}
              typeSpeed={60}
              showCursor={false}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;