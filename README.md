# 🚀 Simple REST API – Node.js + Express

<p align="center">
<img src="https://img.shields.io/badge/Node.js-18%2B-brightgreen?logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-Backend-black?logo=express&logoColor=white">
<img src="https://img.shields.io/badge/REST-API-orange?logo=fastapi&logoColor=white">
<img src="https://img.shields.io/badge/CRUD-Operations-purple">
<img src="https://img.shields.io/badge/Status-Working-success">
</p>

<p align="center">
<img src="https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif" width="500">
</p>

A **Simple REST API** built with **Node.js and Express.js** demonstrating **CRUD operations** with a clean **MVC-like folder structure (Routes → Controllers → Models)**.

The API returns **JSON responses**, handles **errors**, and is tested using **Thunder Client/Postman**.

---

# 📌 Project Overview

This project implements a **RESTful backend service** that allows:

➕ Create users  
📖 Read users  
✏️ Update users  
❌ Delete users  

The project follows a **modular architecture used in real-world backend applications**.

---

# 🧰 Technologies Used

<p align="center">
<img src="https://skillicons.dev/icons?i=nodejs,express,js,vscode,git,postman" />
</p>

| Technology | Purpose |
|-----------|--------|
| Node.js | JavaScript runtime for backend development |
| Express.js | Web framework for building REST APIs |
| JavaScript | Programming language used in the project |
| Thunder Client / Postman | API testing tools |
| VS Code | Code editor |

---

# 📁 Project Folder Structure


simple-rest-api
│
├── controllers
│ └── userController.js
│
├── models
│ └── userModel.js
│
├── routes
│ └── userRoutes.js
│
├── node_modules
│
├── package.json
├── package-lock.json
│
└── server.js



---

# 📂 Folder Explanation

| Folder/File | Description |
|-------------|-------------|
controllers | Contains business logic for API requests |
models | Represents the data structure (mock database) |
routes | Defines API endpoints |
server.js | Main server file where Express app starts |

This structure improves **maintainability and scalability**.

---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository
git clone https://github.com/yourusername/simple-rest-api.git


## 2️⃣ Navigate to the Project
cd simple-rest-api


## 3️⃣ Install Dependencies
npm install

## 4️⃣ Start the Server
node server.js

Server will start at:
http://localhost:5000

---

# 🟢 Server Running Example

Terminal output:
Server running on port 5000

Browser output:
REST API is Running

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|------|------|------|
GET | /api/users | Retrieve all users |
GET | /api/users/:id | Retrieve user by ID |
POST | /api/users | Create new user |
PUT | /api/users/:id | Update user |
DELETE | /api/users/:id | Delete user |

---

# 🔁 CRUD Operations Explained

## 🟢 Create User
POST /api/users

Request Body:
{
"name":"Rahul",
"email":"rahul@gmail.com
"
}

Response:
Response:


{
"id":3,
"name":"Rahul",
"email":"rahul@gmail.com
"
}

Status Code:

201 Created


---

## 🔵 Read Users


GET /api/users


Response:


[
{ "id":1, "name":"John", "email":"john@example.com
" },
{ "id":2, "name":"Alice", "email":"alice@example.com
" }
]


---

## 🟡 Update User


PUT /api/users/1


Request Body:


{
"name":"Updated Name",
"email":"updated@gmail.com
"
}


---

## 🔴 Delete User


DELETE /api/users/1


Response:


{
"message":"User deleted successfully"
}


---

# ⚠️ Error Handling

Example error handling implemented in **userController.js**:


if (!user) {
return res.status(404).json({
message: "User not found"
});
}


---

# 📊 HTTP Status Codes

| Code | Meaning |
|------|------|
200 | Success |
201 | Resource Created |
404 | Not Found |
500 | Server Error |

---

# 🧪 API Testing

The API was tested using:

✔ Thunder Client  
✔ Postman  

Example request:


GET http://localhost:5000/api/users


---

# 🔄 REST API Flow


Client (Browser / Postman)
│
▼
Routes
│
▼
Controllers
│
▼
Models
│
▼
Data
│
▼
JSON Response

---

# 📚 What I Learned

Through this project I learned:

• REST API development  
• Express.js server setup  
• CRUD operations  
• Backend architecture  
• API routing  
• JSON responses  
• HTTP status codes  
• API testing

---

# 🎯 Internship Task Summary

For **Task-2**, I developed a **Simple REST API using Node.js and Express.js implementing CRUD operations**.

The project follows a **modular architecture including Routes, Controllers, and Models**.

The API endpoints were tested using **Thunder Client/Postman**, and proper **HTTP status codes and error handling** were implemented.

---

# 👨‍💻 Author

**Sasindra Madduri**

🔗 LinkedIn  
https://www.linkedin.com/in/sasindra-madduri

---

# ⭐ If you like this project

Give it a **star ⭐ on GitHub**
