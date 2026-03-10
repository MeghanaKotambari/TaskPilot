# API Documentation

Project: TaskPilot

This document describes the backend APIs required for the task management system.


## Authentication APIs

### Register User

POST /api/auth/register

Request Body

{
  "name": "User Name",
  "email": "user@email.com",
  "password": "password"
}

Description  
Creates a new user account.

### Login User

POST /api/auth/login

Request Body

{
  "email": "user@email.com",
  "password": "password"
}

Description  
Authenticates user and returns token.

## Task APIs

### Get All Tasks

GET /api/tasks

Description  
Returns list of tasks for the logged-in user.

### Create Task

POST /api/tasks

Request Body


{
  "title": "Task title",
  "description": "Task description",
  "priority": "High",
  "deadline": "2026-03-20"
}

Description  
Creates a new task.

### Update Task

PUT /api/tasks/:id

Description  
Updates task status, priority or details.

### Delete Task

DELETE /api/tasks/:id

Description  
Deletes the selected task.