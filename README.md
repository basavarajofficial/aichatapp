
# SourceByte.AI using Next.js

## 📌 Overview

This project implements authentication in a **Next.js (App Router)** application using:

* **JWT (JSON Web Tokens)** for secure authentication
* **Bcrypt.js** for password hashing
* **Cookies** to store session tokens securely
* **Next.js API Routes** to handle authentication logic

## 🚀 Features

* User login with **email & password**
* **Password hashing** using bcrypt for security
* **JWT generation & verification**
* **Secure cookie storage** for authentication tokens
* **Middleware protection** for authenticated routes

## 🛠 Tech Stack

* **Next.js (App Router)**
* **TypeScript**
* **Bcrypt.js** (for password hashing)
* **jsonwebtoken (JWT)** (for token-based authentication)
* **Next.js Middleware** (for route protection)
* **Tailwind CSS & ShadCN UI** (for UI styling)

## 📂 Project Structure

```
📦 nextjs-auth-app
├── 📂 app
│   ├── 📂 api
│   │   ├── 📂 auth
│   │   │   ├── 📄 login/route.ts  # Login API Route
│   │   │   ├── 📄 logout/route.ts # Logout API Route
│   ├── 📂 middleware.ts           # Middleware for protected routes
├── 📂 lib
│   ├── 📄 jwt.ts                  # JWT utility functions
├── 📂 components
│   ├── 📄 LoginForm.tsx           # Login form component
│   ├── 📄 ProtectedPage.tsx       # Example protected page
├── 📄 README.md                   # Project documentation
```

## 🔑 Authentication Flow

1. **User Login**
   * The user submits email & password.
   * The server verifies credentials and generates a JWT token.
   * The token is stored as an  **HTTP-only, secure cookie** .
2. **JWT Middleware Verification**
   * Requests to protected routes are validated using  **JWT middleware** .
3. **Logout**
   * The user logs out by clearing the authentication cookie.

## 🛠 Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/basavarajofficial/aichatapp.git
cd aichatapp
```

### 2️⃣ Install Dependencies

```bash
pnpm install  # or npm install / yarn install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file and add:

```env
JWT_SECRET=your-secret-key
NODE_ENV=development
```

### 4️⃣ Run the Project

```bash
pnpm dev  # or npm run dev / yarn dev
```

### 5️⃣ Access the App

* Open [https://aichatapp-ashy.vercel.app/](https://aichatapp-ashy.vercel.app/)

## 🔍 API Endpoints

| Method | Endpoint             | Description                          |
| ------ | -------------------- | ------------------------------------ |
| POST   | `/api/auth/login`  | Authenticates the user & sets cookie |
| POST   | `/api/auth/logout` | Clears the authentication cookie     |

## 🔐 Middleware Protection

To protect a route, add authentication middleware in `middleware.ts`:
It helps to secure chat interface.
 - without authentication, user will not be able to access chat interface.

## 🏗️ Future Improvements

* User **registration** with hashed passwords
* **Database integration** for storing user data
* **Refresh tokens** for better session management
* **Role-based access control (RBAC)**
* **AI Model Integration** to actual functionality for user's propmts.
