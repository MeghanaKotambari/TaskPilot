# Database Schema Documentation

Project: TaskPilot

The system consists of two main entities: Users and Tasks.

## Users Table
| Field | Type | Description |
|-----|-----|-----|
id | ObjectId | Unique user identifier |
name | String | User full name |
email | String | User email address |
password | String | Encrypted password |
createdAt | Date | Account creation date |

## Tasks Table
| Field | Type | Description |
|-----|-----|-----|
id | ObjectId | Unique task identifier |
title | String | Task title |
description | String | Task description |
priority | String | High / Medium / Low |
status | String | Pending / In Progress / Completed |
deadline | Date | Task deadline |
userId | ObjectId | Reference to user |
createdAt | Date | Task creation date |

## Relationship
One user can create multiple tasks.
User (1) → Tasks (Many)