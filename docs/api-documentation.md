# API Documentation

Project: TaskPilot

This document describes the backend APIs for the Task & Productivity Management System.

Base URL:
http://localhost:5000/api

---

## Authentication APIs

### Register User

POST /auth/register

Request Body

{
"name": "User Name",
"email": "[user@email.com](mailto:user@email.com)",
"password": "password"
}

Success Response (201)

{
"message": "User registered successfully"
}

Error Response (400)

{
"error": "User already exists"
}

---

### Login User

POST /auth/login

Request Body

{
"email": "[user@email.com](mailto:user@email.com)",
"password": "password"
}

Success Response (200)

{
"token": "jwt_token"
}

Error Response (401)

{
"error": "Invalid credentials"
}

---

## Authentication Header

All protected routes require a token:

Authorization: Bearer <token>

---

## Task APIs

### Get All Tasks

GET /tasks

Headers

Authorization: Bearer <token>

Success Response (200)

[
{
"id": "123",
"title": "Task title",
"priority": "High",
"status": "Pending",
"deadline": "2026-03-20"
}
]

---

### Create Task

POST /tasks

Headers

Authorization: Bearer <token>

Request Body

{
"title": "Task title",
"description": "Task description",
"priority": "High",
"deadline": "2026-03-20"
}

Success Response (201)

{
"message": "Task created successfully"
}

---

### Update Task

PUT /tasks/:id

Headers

Authorization: Bearer <token>

Request Body

{
"status": "Completed"
}

Success Response (200)

{
"message": "Task updated successfully"
}

---

### Delete Task

DELETE /tasks/:id

Headers

Authorization: Bearer <token>

Success Response (200)

{
"message": "Task deleted successfully"
}

---

## Status Codes

200 – Success
201 – Created
400 – Bad Request
401 – Unauthorized
404 – Not Found
500 – Server Error

---
