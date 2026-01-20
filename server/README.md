# ⚙️ Todo App Backend API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

This is the backend server for the **Todo Application**, built with **Node.js**, **Express**, and **TypeScript**. It provides RESTful APIs for user authentication and todo management using **MongoDB** as the database.

## 🚀 Features

-   **User Authentication**: JWT-based Signup and Login.
-   **Security**: Password hashing using Bcrypt.
-   **Data Validation**: Using Zod (or manual validation).
-   **Database**: Mongoose ODM for MongoDB interactions.
-   **Type Safety**: Fully typed with TypeScript.

---

## 🛠️ Prerequisites

Before running the server, ensure you have:

-   **Node.js** (v18+)
-   **Yarn** (Package Manager)
-   **MongoDB** (Local or Atlas connection string)

---

## 📥 Installation & Setup

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```

2.  **Install Dependencies:**
    ```bash
    yarn install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root of the `server` directory and configure the following:

    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/todo-app
    JWT_SECRET=your_super_secure_secret_key
    NODE_ENV=development
    ```

4.  **Run the Server (Development Mode):**
    This will start the server with hot-reloading (using `nodemon` or `ts-node-dev`).
    ```bash
    yarn dev
    ```

5.  **Build & Run (Production Mode):**
    To compile TypeScript to JavaScript and run the build:
    ```bash
    yarn build
    yarn start
    ```

---

## 🔗 API Documentation

### **Authentication**

| Method | Endpoint | Description | Body Params |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | `{ name, email, password }` |
| `POST` | `/api/auth/login` | Login user | `{ email, password }` |

### **Todos (Protected Routes)**
*Note: All Todo routes require the `Authorization: Bearer <token>` header.*

| Method | Endpoint | Description | Body Params |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/todos` | Get all todos for the user | - |
| `POST` | `/api/todos` | Create a new todo | `{ title, description? }` |
| `PUT` | `/api/todos/:id` | Update a todo status/title | `{ title?, completed? }` |
| `DELETE`| `/api/todos/:id` | Delete a todo | - |

---

## 📂 Folder Structure

```bash
server/
├── src/
│   ├── config/         # Database connection & env config
│   ├── controllers/    # Request handlers (logic)
│   ├── models/         # Mongoose Schemas (User, Todo)
│   ├── middleware/     # Auth checks, Error handling
│   ├── routes/         # API Route definitions
│   ├── utils/          # Helper functions
│   └── index.ts        # App entry point
├── dist/               # Compiled JavaScript (after build)
├── .env                # Environment variables
├── package.json
└── tsconfig.json
