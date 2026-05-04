import React, { useState, useEffect } from 'react';
import API from '../utils/api';

const categoryColors = {
  Certification: 'bg-green-900 text-green-300 border border-green-700',
  Award: 'bg-yellow-900 text-yellow-300 border border-yellow-700',
  Hackathon: 'bg-purple-900 text-purple-300 border border-purple-700',
  Academic: 'bg-blue-900 text-blue-300 border border-blue-700',
  Other: 'bg-gray-700 text-gray-300 border border-gray-600'
};

const categoryIcons = {
  Certification: '🏆',
  Award: '🥇',
  Hackathon: '💻',
  Academic: '📝',
  Other: '⭐'
};

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const { data } = await API.get('/achievements');
        setAchievements(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchAchievements();
  }, []);

  const categories = ['All', 'Certification', 'Academic', 'Award', 'Hackathon', 'Other'];

  const filtered = filter === 'All'
    ? achievements
    : achievements.filter(a => a.category === filter);

  if (loading) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
      <p className="text-white text-xl">Loading...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-5xl font-bold mb-4">
            My <span className="text-purple-400">Achievements</span>
          </h1>
          <div className="w-16 h-1 bg-purple-600 mx-auto rounded mb-6"></div>
          <p className="text-gray-400 text-lg">
            Certifications, research papers and recognitions
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === cat
                ? 'bg-purple-600 text-white'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:border-purple-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center">No achievements found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((achievement) => (
              <div
                key={achievement._id}
                className="bg-white/5 border border-white/10 hover:border-purple-600 rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-900/20"
              >
                <div className="flex justify-between items-start">
                  <span className={`text-xs px-3 py-1 rounded-full ${categoryColors[achievement.category]}`}>
                    {categoryIcons[achievement.category]} {achievement.category}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {new Date(achievement.date).toLocaleDateString('en-IN', {
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>

                <h2 className="text-white font-bold text-lg leading-tight">
                  {achievement.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {achievement.description}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-purple-400 text-xs font-medium">
                    {achievement.issuer}
                  </span>
                  {achievement.credentialLink && (
  <button
    onClick={() => window.open(achievement.credentialLink, "_blank")}
    className="inline-block mt-2 text-xs bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full transition"
  >
    View Credentials
  </button>
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

export default Achievements;