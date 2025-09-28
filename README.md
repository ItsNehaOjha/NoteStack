# 📝 NoteStack - MERN Notes App

A modern, minimalist notes application built with the MERN stack (MongoDB, Express, React, Node.js) featuring real-time updates and rate limiting.

🔗 **Tutorial (Notion):** <a href="https://legend-rhythm-686.notion.site/MERN-Simplest-notes-27bcbc792e0d80d79713e8315bfedfe8" target="_blank">MERN Simplest Notes Guide</a>  
🔗 **Live Demo (Render):** <a href="https://notestack-g6v2.onrender.com" target="_blank">Live Demo</a>


## ✨ Features

- **📋 Full CRUD Operations**
  - Create, read, update, and delete notes
  - Real-time updates
  - Markdown support
  
- **🛡️ Security**
  - Rate limiting protection
  - Error handling
  - Input validation

- **💅 Modern UI/UX**
  - Responsive design
  - Dark/Light mode
  - Toast notifications
  - Loading states

## 🚀 Quick Start

### Prerequisites
- Node.js >= 14.x
- MongoDB instance
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ItsNehaOjha/NoteStack.git
cd NoteStack
```

2. **Set up backend**
```bash
cd backend
npm install
cp .env.example .env    # Configure your environment variables
```

3. **Set up frontend**
```bash
cd ../frontend
npm install
```

4. **Start development servers**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 🛠️ Tech Stack

### Frontend
- React 18 (Vite)
- React Router v6
- Tailwind CSS
- DaisyUI
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Rate Limiting
- CORS

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/notes | Get all notes |
| POST   | /api/notes | Create new note |
| PUT    | /api/notes/:id | Update note |
| DELETE | /api/notes/:id | Delete note |

## 🌟 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👥 Contact

Neha Ojha - [@Linkdin](https://www.linkedin.com/in/neha-ojha0028/)

Project Link: [https://github.com/ItsNehaOjha/NoteStack](https://github.com/ItsNehaOjha/NoteStack)

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)