# ToDoApp Web Application

<img width="225" height="225" alt="images" src="https://github.com/user-attachments/assets/42b65b6a-35af-4183-9384-1be357d2d9ba" />


## Overview

**ToDoApp** is a simple and interactive web application built with **Node.js**, **Express**, **PostgreSQL**, and **EJS** templating. It allows users to manage their daily tasks categorized under **Home**, **School**, and **Social** lists. Users can add, edit, and delete tasks dynamically through a clean and responsive UI.

This project was primarily a learning experience, helping me understand how to integrate **frontend and backend technologies**, work with **databases**, and handle **CRUD operations**.

---

##  Screenshots

<!-- Add your screenshots here -->
<img width="1908" height="901" alt="Screenshot 2025-09-26 165521" src="https://github.com/user-attachments/assets/82dd2425-3c81-474d-aa97-f4c1df07d5b2" />
<img width="1919" height="905" alt="image" src="https://github.com/user-attachments/assets/092b4858-22b2-47e7-8dbe-b7a84e3200bc" />
<img width="1919" height="902" alt="image" src="https://github.com/user-attachments/assets/4cec1714-3b41-44ee-97c0-3de069c7ac95" />



---

## Features

- Dynamic task management:
  - Add new tasks to a selected list.
  - Edit existing tasks inline.
  - Delete tasks using a checkbox.
- Categorized task lists:
  - Home
  - School
  - Social
- Responsive design using **Bootstrap 5**.
- Persistent storage with **PostgreSQL**.
- Simple and clean UI with smooth inline editing.

---

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Templating Engine:** EJS
- **Frontend:** HTML, CSS, Bootstrap 5, JavaScript
- **Environment Variables:** dotenv
- **Other:** body-parser for form handling

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/avelic5/todoapp.git
cd todoapp
```
2.Install dependencies:
```bash
npm install
```
3.Set up your PostgreSQL database and create the items table:
```sql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  type VARCHAR(20) NOT NULL
);
```
4.Create a `.env` file in the root directory and set your own database credentials
5.Start the server:
```bash
node index.js
```
6.Open your browser and visit:http://localhost:3000

## Usage

- Navigate between **Home**, **School**, and **Social** tabs using the navbar.
- Add a new task using the input field at the bottom of the list.
- Edit a task by clicking the pencil icon, make changes, and click the check icon to save.
- Delete a task by checking the box next to it.

## Future Improvements

This project is **open for enhancement**. Possible improvements include:

- User authentication and multi-user support.
- Drag-and-drop reordering of tasks.
- Adding task deadlines and reminders.
- Adding a dark mode for the UI.
- Using **AJAX** for real-time updates without page reload.
