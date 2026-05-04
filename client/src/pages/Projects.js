import React, { useState, useEffect } from 'react';
import API from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await API.get('/projects');
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <p className="text-white text-xl">Loading...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-4xl font-bold text-center mb-4">Projects</h1>
        <p className="text-gray-400 text-center mb-12">Things I have built</p>

        {projects.length === 0 ? (
          <p className="text-gray-400 text-center">No projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project._id} className="bg-gray-800 rounded-xl p-6 flex flex-col gap-3">
                <h2 className="text-white font-bold text-xl">{project.title}</h2>
                <p className="text-gray-400 text-sm flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer"
                      className="text-gray-400 hover:text-white text-sm">
                      GitHub →
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-sm">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;