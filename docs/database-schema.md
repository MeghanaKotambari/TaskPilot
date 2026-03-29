# Database Schema Documentation

Project: TaskPilot

The system consists of two main entities: **Users** and **Tasks**.

---

## Users Collection

| Field     | Type     | Required     | Description                |
| --------- | -------- | ------------ | -------------------------- |
| id        | ObjectId | Yes          | Unique user identifier     |
| name      | String   | Yes          | User full name             |
| email     | String   | Yes (Unique) | User email address         |
| password  | String   | Yes          | Encrypted password         |
| createdAt | Date     | Yes          | Account creation timestamp |
| updatedAt | Date     | Yes          | Last updated timestamp     |

---

## Tasks Collection

| Field       | Type          | Required | Description                       |
| ----------- | ------------- | -------- | --------------------------------- |
| id          | ObjectId      | Yes      | Unique task identifier            |
| title       | String        | Yes      | Task title                        |
| description | String        | No       | Task description                  |
| priority    | String (Enum) | Yes      | High / Medium / Low               |
| status      | String (Enum) | Yes      | Pending / In Progress / Completed |
| deadline    | Date          | Yes      | Task deadline                     |
| userId      | ObjectId      | Yes      | Reference to User                 |
| createdAt   | Date          | Yes      | Task creation timestamp           |
| updatedAt   | Date          | Yes      | Last updated timestamp            |

---

## Relationships

* One user can create multiple tasks
* Each task belongs to one user

User (1) → Tasks (Many)

---

## Constraints & Validations

* Email must be unique
* Password must be securely hashed
* Priority must be one of: High, Medium, Low
* Status must be one of: Pending, In Progress, Completed

---

## Notes

* MongoDB automatically generates `_id` as ObjectId
* `timestamps: true` can be used in Mongoose to handle `createdAt` and `updatedAt` automatically

---
