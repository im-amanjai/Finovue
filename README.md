# 💸 Finovue - Stock Portfolio Tracker

Finovue is a full-stack web application that allows users to monitor their stock holdings, orders, and positions in one place. Built with a modular MERN architecture, it offers a secure login system, an interactive dashboard, and responsive design.

---

## 🚦 Overview

Finovue is split into three separate applications:

1. **Frontend** (`/frontend`) - Signup/Login and landing page UI
2. **Dashboard** (`/dashboard`) - Authenticated user's trading dashboard
3. **Backend** (`/backend`) - Express server with MongoDB, routes, and authentication logic

Each part is deployed independently (Netlify, Vercel, Render).

---

## 🚀 Features

* 🔐 JWT-based Authentication (Sign Up, Login, Logout)
* 📈 Dashboard with:
  - Holdings
  - Positions
  - Orders
* 📊 Real-time Graphs and Stats
* 🎨 Clean UI (MUI + Bootstrap)
* 🌍 Deployed for production
* 🔐 Role-based routing (only authenticated users can access the dashboard)

---

## 🧱 Tech Stack

* **Frontend:** React, React Router, Axios, MUI, Bootstrap
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Auth:** JWT, Cookies, bcryptjs
* **Deployment:**

  * Frontend: Netlify
  * Dashboard: Vercel
  * Backend: Render

---

## 🛠️ Step-by-Step Setup

### ✅ Step 1: Clone the Repo

```bash
git clone https://github.com/im-amanjai/Finovue.git
cd finovue
```

### ✅ Step 2: Backend Setup (`/backend`)

```bash
cd backend
npm install
```

Create `.env` file:

```
MONGO_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Run the backend:

```bash
npm start
```

### ✅ Step 3: Frontend Setup (`/frontend`)

```bash
cd ../frontend
npm install
npm start
```

### ✅ Step 4: Dashboard Setup (`/dashboard`)

```bash
cd ../dashboard
npm install
npm start
```

---

## 🌐 Live Demo Links

| Part      | URL                                                                          |
| --------- | ---------------------------------------------------------------------------- |
| Frontend  | [https://finovuee.netlify.app](https://finovuee.netlify.app)                 |
| Dashboard | [https://finovue-dashboard.vercel.app](https://finovue-dashboard.vercel.app) |
| Backend   | [https://finovue.onrender.com](https://finovue.onrender.com)                 |

---

## 🧪 Test Credentials (for Demo)

```
Email: demo@finovue.com
Password: Demo1234@
```

---

## 📦 Folder Structure

```
finovue/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── model/
│   └── middleware/
├── frontend/           # Login + Signup
├── dashboard/        # Authenticated dashboard
└── README.md
```

---

## 🔧 Troubleshooting

* Make sure cookies are enabled in browser
* Backend CORS must allow frontend & dashboard origins
* Clear cookies after deploying updates

---

## ✍️ Author

Made with ❤️ by **Aman Jaiswal**
📫 [GitHub](https://github.com/im-amanjai) | [LinkedIn](https://www.linkedin.com/in/aman-jaiswal-504ab3258)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
