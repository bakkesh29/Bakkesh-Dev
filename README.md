# 🚀 Bakkesh-Dev | Full Stack MERN Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Bakkesh.dev-purple?style=for-the-badge&logo=vercel)
![Made With](https://img.shields.io/badge/Made%20With-MERN%20Stack-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

### 🌐 [Live Demo](https://bakkesh-dev.vercel.app) · 📦 [Backend API](https://bakkesh-dev-backend.onrender.com) · 👤 [GitHub](https://github.com/bakkesh29)

</div>

---

## 📌 About The Project

**Bakkesh-Dev** is a full-stack MERN portfolio website built as a Final Year Project at **Bapuji Institute of Engineering and Technology, Davangere (VTU)**. It showcases projects, achievements, skills, and daily developer activity — all powered by a real backend with JWT authentication, MongoDB Atlas, and live email notifications.

> 🎓 Final Year Project | Information Science Engineering | VTU | 2025-26

---

## ✨ Features

- 🏠 **Home** — Typing animation, floating particles, stats, about section, skills icons, education & internship timeline
- 💼 **Projects** — Fetches from MongoDB, displays cards with tech stack tags and GitHub/Live links
- 🏆 **Achievements** — Filter by category, view credential links
- ✅ **Tasks** — Daily task tracker with GitHub contribution graph and streak stats
- 🛠️ **Skills** — Categorized with icons (Frontend, Backend, Database, Tools, Software Testing, Graphic Design)
- 🎯 **Services** — 6 service cards with hover effects
- 📬 **Contact** — Left info panel + right form, sends real emails via Nodemailer
- 🔐 **Admin Login** — Glass morphism design with JWT authentication and password toggle

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 📁 Project Structure

```
Bakkesh-Dev/
│
├── client/                         # ⚛️ React Frontend (deployed on Vercel)
│   ├── public/
│   │   └── profile.png             # Profile photo displayed on Home page
│   └── src/
│       ├── components/
│       │   ├── Navbar.js           # Top navigation bar with active link highlighting
│       │   └── Footer.js           # Footer with social links and copyright info
│       │
│       ├── context/
│       │   └── AuthContext.js      # Global auth state using React Context API
│       │                           # Stores JWT token, handles login/logout globally
│       │
│       ├── pages/
│       │   ├── Home.js             # Landing page: typing animation, floating particles,
│       │   │                       # stats counter, about section, skills, edu timeline
│       │   ├── Projects.js         # Fetches projects from MongoDB Atlas, renders cards
│       │   │                       # with tech stack tags, GitHub & Live links
│       │   ├── Achievements.js     # Filter achievements by category (Internship,
│       │   │                       # Certification, etc.), View Credential button
│       │   ├── Tasks.js            # Daily task tracker (add/complete/delete tasks),
│       │   │                       # GitHub contribution graph, streak stats
│       │   ├── Skills.js           # Skills grouped by category with React Icons:
│       │   │                       # Frontend, Backend, Database, Tools, Testing, Design
│       │   ├── Services.js         # 6 service cards with hover glow animation effects
│       │   ├── Contact.js          # Contact form sends real emails via backend Nodemailer
│       │   │                       # Left info panel + right form layout
│       │   └── Login.js            # Admin login page with glass morphism UI design,
│       │                           # JWT-based authentication, password show/hide toggle
│       │
│       ├── utils/
│       │   └── api.js              # Axios instance — baseURL points to Render backend
│       │                           # Interceptor auto-attaches JWT token to every request
│       │
│       └── App.js                  # Main router — defines all page routes using
│                                   # React Router DOM, handles protected admin routes
│
└── server/                         # 🟢 Node.js + Express Backend (deployed on Render)
    ├── models/
    │   ├── User.js                 # Admin user schema — stores email + bcrypt hashed password
    │   ├── Project.js              # Project schema — title, description, techStack array,
    │   │                           # githubLink, liveLink, image URL
    │   ├── Achievement.js          # Achievement schema — title, category, issuer,
    │   │                           # date, credentialLink
    │   └── Task.js                 # Task schema — title, completed (bool), createdAt date
    │
    ├── routes/
    │   ├── auth.js                 # POST /api/auth/login — validates email & password,
    │   │                           # returns signed JWT token on success
    │   ├── projects.js             # GET /api/projects — public (no auth needed)
    │   │                           # POST /api/projects — protected (JWT required)
    │   ├── achievements.js         # GET /api/achievements — public
    │   │                           # POST /api/achievements — protected
    │   ├── tasks.js                # Full CRUD for daily tasks — all routes protected
    │   │                           # GET, POST, PUT (toggle complete), DELETE
    │   └── contact.js              # POST /api/contact — receives form data,
    │                               # sends formatted email via Nodemailer + Gmail
    │
    ├── middleware/
    │   └── auth.js                 # JWT verification middleware — decodes token,
    │                               # blocks unauthorized access to protected routes
    │
    ├── .env                        # Secret environment variables (NOT pushed to GitHub)
    │                               # PORT, MONGO_URI, JWT_SECRET, EMAIL credentials
    └── server.js                   # App entry point — connects to MongoDB Atlas,
                                    # initializes Express, sets up CORS for Vercel URL,
                                    # mounts all route handlers, starts HTTP server
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/bakkesh29/Bakkesh-Dev.git
cd Bakkesh-Dev
```

2. **Setup Backend**
```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:
```env
PORT=8000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your_email@gmail.com
CLIENT_URL=http://localhost:3000
```

Start the server:
```bash
npm run dev
```

3. **Setup Frontend**
```bash
cd client
npm install
npm start
```

The app will run at `http://localhost:3000`

---

## 🌐 Deployment

| Service | Platform | URL |
|---------|----------|-----|
| Frontend | Vercel | https://bakkesh-dev.vercel.app |
| Backend | Render | https://bakkesh-dev-backend.onrender.com |
| Database | MongoDB Atlas | Cloud hosted |

---

## 🔑 API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/login` | Admin login, returns JWT token | ✅ |
| GET | `/api/projects` | Get all projects from MongoDB | ✅ |
| POST | `/api/projects` | Add new project | ✅ |
| GET | `/api/achievements` | Get all achievements | ✅ |
| POST | `/api/achievements` | Add new achievement | ✅ |
| GET | `/api/tasks` | Get all daily tasks | ✅ |
| POST | `/api/tasks` | Add new task | ✅ |
| PUT | `/api/tasks/:id` | Update task status | ✅ |
| DELETE | `/api/tasks/:id` | Delete a task | ✅ |
| POST | `/api/contact` | Send contact email via Resender | ✅ |

---

## 👨‍💻 Author

**Bakkesh Y M R**

- 🎓 Final Year, Information Science Engineering
- 🏫 Bapuji Institute of Engineering and Technology, Davangere (VTU)
- 🌐 Portfolio: [bakkesh-dev.vercel.app](https://bakkesh-dev.vercel.app)
- 💻 GitHub: [@bakkesh29](https://github.com/bakkesh29)

---

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Render](https://render.com/)
- [Vercel](https://vercel.com/)
- [Nodemailer](https://nodemailer.com/)

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

⭐ **If you like this project, give it a star!** ⭐

Made with ❤️ by **Bakkesh Y M R** | Final Year Project 2025-26

</div>
