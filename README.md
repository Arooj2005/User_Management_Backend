# User Management Backend

A RESTful User Management API built with **Node.js, Express.js, MongoDB, and Mongoose**.

This project provides CRUD operations for managing users and demonstrates a clean backend structure with controllers, routes, models, database connection, validation, and environment variables.

## Features

* Create a new user
* Get all users
* Get a single user by ID
* Update user information
* Delete a user
* MongoDB Atlas database integration
* Mongoose schema and validation
* Centralized route and controller structure
* Environment variables for sensitive configuration
* CORS support
* JSON request handling
* Error handling for database and API requests

## Technologies Used

* Node.js
* Express.js
* MongoDB
* MongoDB Atlas
* Mongoose
* CORS
* dotenv

## Project Structure

```text
User_Management_Backend/
│
├── controller/
│   └── userController.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   └── userRoutes.js
│
├── utils/
│   └── db.js
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Get all users     |
| GET    | `/api/users/:id` | Get a single user |
| POST   | `/api/users`     | Create a new user |
| PUT    | `/api/users/:id` | Update a user     |
| DELETE | `/api/users/:id` | Delete a user     |

## User Fields

Each user contains:

* `name` — String, required
* `age` — Number, required, between 18 and 100
* `createdAt` — Automatically generated timestamp
* `updatedAt` — Automatically generated timestamp

## Setup and Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the project

```bash
cd User_Management_Backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the project root and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

Do not share or commit your actual MongoDB connection string.

### 5. Start the server

```bash
node app.js
```

The server will run locally on:

```text
http://localhost:3000
```

## Testing

The API was tested using **Thunder Client** for:

* GET all users
* GET user by ID
* POST user
* PUT user
* DELETE user
* Validation and error responses

## Purpose

This project was built to practice and demonstrate **MERN stack backend development**, REST API development, MongoDB integration, CRUD operations, and a structured backend architecture.

## Author

Arooj
