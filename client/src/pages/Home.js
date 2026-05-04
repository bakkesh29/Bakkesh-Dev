import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaTools, FaGraduationCap, FaClock } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaHackerrank } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { ReactTyped } from "react-typed";

const useScrollAnimation = () => {
  useEffect(() => {

    const elements = document.querySelectorAll(".animate-hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("animate-visible");

            // animate only once
            observer.unobserve(entry.target);

          }

        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);
};
const particles = [...Array(20)].map((_, i) => ({
  top: `${(i * 7) % 100}%`,
  left: `${(i * 13) % 100}%`,
  duration: `${2 + (i % 3)}s`
}));

const skills = [
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Express', icon: 'express' },
  { name: 'Tailwind', icon: 'tailwind' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'Flask', icon: 'flask' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Vue.js', icon: 'vue' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Python', icon: 'python' },
  { name: 'Java', icon: 'java' },
  { name: 'C', icon: 'c' },
  { name: 'Selenium', icon: 'selenium' },
  { name: 'Postman', icon: 'postman' },
  { name: 'VSCode', icon: 'vscode' },
  { name: 'Tableau', icon: null, image: '/icons/tab.webp' },
  { name: 'Power BI', icon: null, image: '/icons/powerbi.webp' },
  { name: 'Katalon', icon: null, image: '/icons/katalon.png' },
  { name: 'Canva', icon: null, image: '/icons/canva.webp' },
];

const education = [
  {
    degree: 'Software Intern',
    year: 'Feb 2026 - Present',
    college: 'X-Workz, Bangalore',
    grade: 'Java Full Stack Development',
    type: 'internship'
  },
  {
    degree: 'Software Development Intern',
    year: 'Jan 2026 - Apr 2026',
    college: 'SuprMentr Technologies Pvt Ltd, Bangalore',
    grade: 'Full Stack Web Development — MERN Stack',
    type: 'internship'
  },
  {
    degree: 'B.E in Information Science',
    year: '2022 - 2026',
    college: 'Bapuji Institute of Engineering and Technology, Davangere',
    grade: 'VTU University',
    type: 'education'
  },
  {
    degree: 'Pre-University Course (PUC)',
    year: '2020 - 2022',
    college: 'Vysnavi Chetana PU College',
    grade: 'Karnataka State Board',
    type: 'education'
  },
  {
    degree: 'SSLC',
    year: '2019 - 2020',
    college: 'Chetana Olympiad School',
    grade: 'Central Board of Secondary Education',
    type: 'education'
  }
];

const Home = () => {
  useScrollAnimation();

  return (
    <div style={{ overflowX: 'hidden' }} className="relative">

      {/* ✨ Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-purple-400 opacity-20 rounded-full animate-ping"
            style={{
              top: p.top,
              left: p.left,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>
      <style>{`


  html, body {
    margin: 0;
    padding: 0;
    background-color: #020617; /* your dark color */
  }

  #root {
    background-color: #020617;
    min-height: 100vh;
  }

  


/* SCROLL ANIMATION */
.animate-hidden {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
.delay-4 { transition-delay: 0.4s; }
.delay-5 { transition-delay: 0.5s; }

/* SKILLS HOVER */
.skill-card:hover {
  transform: translateY(-8px);
  border-color: #7C3AED;
}

.skill-card {
  transition: transform 0.3s ease, border-color 0.3s ease;
}

/* TIMELINE DOT */
.timeline-dot {
  width: 16px;
  height: 16px;
  background: #7C3AED;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 6px;
}

/* GLOW EFFECT */
.glow {
  box-shadow: 0 0 40px rgba(124, 58, 237, 0.3);
}

/* ========================= */
/* 🔥 NEW FLOAT ANIMATIONS 🔥 */
/* ========================= */

/* IMAGE FLOAT */
@keyframes floatSlow {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
}

.animate-float-slow {
  animation: floatSlow 6s ease-in-out infinite;
}

/* ICON FLOATS */
@keyframes float1 {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

@keyframes float2 {
  0% { transform: translateY(0); }
  50% { transform: translateY(8px); }
  100% { transform: translateY(0); }
}

@keyframes float3 {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}

.animate-float-delay1 {
  animation: float1 5s ease-in-out infinite;
}

.animate-float-delay2 {
  animation: float2 6s ease-in-out infinite;
}

.animate-float-delay3 {
  animation: float3 7s ease-in-out infinite;
}


/* STATS ITEM */

.stats-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  transition: all 0.3s ease;
}

.stats-item:hover {
  transform: translateY(-6px);
}

/* ICON CIRCLE */

.stats-icon {
  width: 80px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 28px;

  border-radius: 50%;

  background: linear-gradient(
    135deg,
    #7C3AED,
    #6366F1
  );

  box-shadow:
    0 0 25px rgba(124, 58, 237, 0.45);
}

/* NUMBER */

.stats-number {
  font-size: 42px;
  font-weight: bold;

  color: #A78BFA;
}

/* LABEL */

.stats-label {
  color: #9CA3AF;

  font-size: 16px;
}

`}</style>


      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <div className="relative bg-[#020617] min-h-[90vh] flex items-center px-6 pt-24 overflow-hidden">

        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-center md:text-left">

            <p className="text-purple-400 text-lg">👋 Hello, I am</p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Bakkesh Y M R
              </span>
            </h1>

            {/* ✅ TYPING EFFECT */}
            <h2 className="text-2xl text-gray-300 font-medium">
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "React Developer",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </h2>

            <p className="text-gray-400 max-w-lg">
              I build scalable web applications with clean UI, real-time features,
              and modern technologies that solve real-world problems.
            </p>

            {/* ✅ BUTTONS FIXED */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start pt-2">

              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:scale-105 transition"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
              >
                Hire Me
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white transition"
              >
                Resume
              </a>

            </div>

            {/* SOCIALS - FIXED */}
            <div className="flex gap-5 text-2xl pt-4 justify-center md:justify-start">

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

          {/* RIGHT SIDE IMAGE */}

          <div className="flex justify-center md:justify-end items-center relative md:pr-10">
            <div className="relative flex items-center justify-center">

              {/* SOFT GLOW (VERY SUBTLE) */}
              <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-3xl opacity-40"></div>

              {/* IMAGE */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 animate-float-slow">
                <img
                  src="/profile.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FLOATING ICONS (SEPARATE ANIMATION) */}
              {/* ICON 1 */}
              <div className="absolute top-8 -right-4 animate-float-delay1">
                <div className="bg-[#0f172a] border border-white/10 p-4 text-xl rounded-full hover:scale-110 transition">
                  💻
                </div>
              </div>

              {/* ICON 2 */}
              <div className="absolute bottom-8 -left-4 animate-float-delay2">
                <div className="bg-[#0f172a] border border-white/10 p-4 text-xl rounded-full hover:scale-110 transition">
                  🚀
                </div>
              </div>

              {/* ICON 3 */}
              <div className="absolute top-1/2 -left-12 animate-float-delay3">
                <div className="bg-[#0f172a] border border-white/10 p-3 text-lg rounded-full hover:scale-110 transition">
                  ✨

                </div>
              </div>

            </div>

          </div>





        </div>
      </div>

      {/*cuut*/}




      {/* STATS SECTION */}
      {/* STATS SECTION */}
      <section className="relative bg-[#020617] py-24 px-6 overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
            By the Numbers
          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-400 mb-16">
            Some milestones from my journey as a developer
          </p>

          {/* STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

            {/* Projects */}
            <div className="stats-item">
              <div className="stats-icon">
                <FaCode />
              </div>

              <h3 className="stats-number">
                4+
              </h3>

              <p className="stats-label">
                Projects Built
              </p>
            </div>

            {/* Technologies */}
            <div className="stats-item">
              <div className="stats-icon">
                <FaTools />
              </div>

              <h3 className="stats-number">
                10+
              </h3>

              <p className="stats-label">
                Technologies Used
              </p>
            </div>

            {/* Final Year Project */}
            <div className="stats-item">
              <div className="stats-icon">
                <FaGraduationCap />
              </div>

              <h3 className="stats-number">
                1
              </h3>

              <p className="stats-label">
                Final Year Project
              </p>
            </div>

            {/* Coding Hours */}
            <div className="stats-item">
              <div className="stats-icon">
                <FaClock />
              </div>

              <h3 className="stats-number">
                100+
              </h3>

              <p className="stats-label">
                Coding Hours
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      {/* ABOUT */}
      <section className="py-24 px-6 bg-[#020617] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="animate-hidden">
            <div className="rounded-2xl overflow-hidden border border-white/10 glow">
              <img src="/profile.png" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6">

            <h2 className="text-4xl font-bold text-white">
              About <span className="text-purple-400">Me</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I am a final year Information Science student passionate about building
              scalable full stack applications that solve real-world problems.
            </p>

            <p className="text-gray-500">
              This portfolio is built using MERN stack with admin dashboard,
              task tracking, and real-time features.
            </p>

            <div className="flex gap-4">
              <Link to="/projects"
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition">
                Projects
              </Link>

              <Link to="/contact"
                className="px-6 py-3 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white transition">
                Contact
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* SKILLS SECTION */}
      <section className="py-20 px-6 bg-[#020617] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-white">
            My <span className="text-purple-400">Skills</span>
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-110 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-900/30 transition-all duration-300">

                {skill.image ? (
                  <img src={skill.image} alt={skill.name} width="40" />
                ) : (
                  <img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt={skill.name} width="40" />
                )}

                <p className="text-gray-400 text-xs">{skill.name}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <div className="bg-[#020617] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full"></div>

        {/* Background glow */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="animate-hidden text-white text-4xl font-bold mb-2">
              Experience & <span className="text-purple-400">Education</span>
            </h2>
            <div className="animate-hidden w-16 h-1 bg-purple-600 mx-auto rounded"></div>
          </div>

          <div className="flex flex-col gap-6">
            {education.map((edu, i) => (
              <div key={i} className={`animate-hidden delay-${i + 1} flex gap-4`}>
                <div className="flex flex-col items-center">
                  <div className="timeline-dot"></div>
                  {i < education.length - 1 && (
                    <div className="w-0.5 bg-purple-800 flex-1 mt-2"></div>
                  )}
                </div>
                <div className="bg-white/5 border border-white/10 hover:border-purple-600 rounded-xl p-6 flex-1 transition mb-4 hover:shadow-lg hover:shadow-purple-900/20">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${edu.type === 'internship'
                      ? 'bg-purple-900/50 text-purple-300 border border-purple-700'
                      : 'bg-blue-900/50 text-blue-300 border border-blue-700'
                      }`}>
                      {edu.year}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <MdLocationOn className="text-gray-500" />
                      {edu.type === 'internship' ? 'Bangalore' : 'Davangere'}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${edu.type === 'internship'
                      ? 'bg-purple-900/50 border border-purple-700'
                      : 'bg-blue-900/50 border border-blue-700'
                      }`}>
                      <span className="text-xl">
                        {edu.type === 'internship' ? '💼' : '🎓'}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-lg">{edu.degree}</h3>
                        {edu.type === 'internship' && (
                          <span className="text-green-400 text-xs font-medium bg-green-900/40 px-2 py-0.5 rounded-full border border-green-700">
                            Internship
                          </span>
                        )}
                      </div>
                      <p className="text-purple-400 text-sm font-medium">{edu.college}</p>
                      <p className="text-gray-500 text-xs mt-1">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};


export default Home;