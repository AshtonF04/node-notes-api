# 📝 Notes API (Node.js)

A simple RESTful API built with **Node.js** (no frameworks) to practice handling HTTP requests manually.  
This project demonstrates how to build a CRUD API from scratch without Express or external libraries.

---

## 🚀 Endpoints (current)
- **GET /notes** → Fetch all notes
- **GET /notes:ID** → Fetch a single note by ID (temporary format)
- **POST /notes** → Create a new note
- **PUT /notes/:id** → Update an existing note
- **DELETE /notes/:id** → Delete a note

---

## 🛠 Tech Stack
- [Node.js](https://nodejs.org/) (built-in `http` module)
- JavaScript (ES6+)
- No external frameworks

---

## ⚙️ Installation & Setup

Clone the repo and start the server:

```bash
# Clone the repository
git clone https://github.com/your-username/notes-api.git

# Navigate into project directory
cd notes-api

# Install dependencies
npm install

# Start the server
npm start

# Or run with auto-reload during development
npm run dev
```

The server will run on http://localhost:3000
