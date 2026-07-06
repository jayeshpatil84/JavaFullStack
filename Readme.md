# 📚 Library Management System

A full-stack **Library Management System** developed using **Spring Boot** for the backend and **Angular** for the frontend. The system provides secure authentication, role-based authorization, and complete library management functionalities for administrators and users.

---

# 📖 Project Overview

The Library Management System is designed to simplify the management of books, users, authors, categories, and borrowing activities in a library.

The application consists of:

- **Backend:** Spring Boot REST API
- **Frontend:** Angular
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Token)
- **Authorization:** Role-Based Access Control (Admin/User)

---

# 🚀 Technologies Used

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- JWT Authentication
- Maven
- MySQL

## Frontend

- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap
- RxJS

## Database

- MySQL

## Tools

- Visual Studio Code
- IntelliJ IDEA
- Git
- GitHub
- Postman

---

# 📂 Project Structure

```
LibraryManagementSystem
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── ...
│
├── frontend
│   ├── src
│   ├── angular.json
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

# ✨ Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Secure Password Encryption
- Logout

---

## User Features

- View Available Books
- Search Books
- View Book Details
- Borrow Books
- Return Books
- View Borrow History
- Update Profile

---

## Admin Features

- Dashboard
- Manage Users
- Add Books
- Update Books
- Delete Books
- Manage Authors
- Manage Categories
- View Borrow Records
- Manage Inventory

---

# 🔐 Authentication & Authorization

The application uses **JWT (JSON Web Token)** for authentication.

### User Roles

- Admin
- User

Protected APIs require the following header:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# 🗄 Database Configuration

Create a MySQL database:

```sql
CREATE DATABASE library_management;
```

Update the database configuration inside the backend's `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/library_management
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

# ⚙ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Build the project:

```bash
mvn clean install
```

Run the application:

```bash
mvn spring-boot:run
```

Backend will start on:

```
http://localhost:8080
```

Base API URL:

```
http://localhost:8080/api
```

---

# 💻 Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Configure the backend API in:

```
src/environments/environment.ts
```

Example:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

Run the Angular application:

```bash
ng serve
```

Frontend will start on:

```
http://localhost:4200
```

---

# 📡 API Modules

The backend exposes REST APIs for:

- Authentication
- Users
- Books
- Authors
- Categories
- Borrowing
- Returning

---

# 🛡 Security

- JWT Authentication
- Password Encryption
- Spring Security
- Role-Based Authorization
- Protected REST APIs

---

# 📸 Screens

The application includes:

- Login Page
- Registration Page
- Home Page
- Book Details
- User Dashboard
- Admin Dashboard
- Profile Page
- Orders/Borrow History

---

# 📈 Future Enhancements

- Email Notifications
- Fine Management
- Book Reservation
- PDF Reports
- Barcode/QR Code Integration
- Analytics Dashboard
- Dark Mode
- Docker Deployment

---

# 📄 License

This project is developed for educational purposes.

---

# 👨‍💻 Author

**Jayesh Patil**

- Final Year B.E CSE (AI & ML)
- Full Stack Java Developer
- Angular Developer

---

⭐ If you found this project useful, consider giving it a star on GitHub.