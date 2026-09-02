# 🔗 SMSLink – URL Shortener

SMSLink is a modern and easy-to-use **URL Shortening Web Application** that converts long and complicated URLs into short, clean, and shareable links.

The application provides a simple interface where users can enter a long URL and generate a unique shortened URL instantly. The shortened URLs are stored in **MongoDB**, allowing the backend to retrieve the original URL whenever someone accesses the generated short link.

SMSLink is built using **Angular, Node.js, Express.js, and MongoDB**, making it a complete full-stack web application.

---

## 📌 Project Overview

Long URLs can be difficult to share, remember, and display, especially on social media, messaging platforms, emails, and other applications.

SMSLink solves this problem by providing a simple URL shortening service.

### How SMSLink Works

1. User enters a long URL.
2. Angular sends the URL to the backend.
3. Express.js receives the request.
4. A unique short code is generated.
5. The original URL and short code are stored in MongoDB.
6. The backend returns the shortened URL.
7. The user can copy and share the shortened URL.
8. When someone opens the shortened URL, the backend finds the original URL and redirects the user to it.

---

## ✨ Features

### 🔗 URL Shortening

Convert long URLs into short and easy-to-share links with a single click.

### ⚡ Fast URL Generation

Generate shortened URLs instantly without complicated steps.

### 📋 Copy Short URL

Users can easily copy the generated shortened URL using the Copy button.

### 🔄 URL Redirection

When a shortened URL is opened, SMSLink automatically redirects the user to the original URL.

### 💾 MongoDB Storage

Original URLs and generated short codes are stored in MongoDB using Mongoose.

### 🎨 Modern User Interface

The frontend provides a clean, responsive, and attractive interface designed for a better user experience.

### 📱 Responsive Design

The interface is designed to work across:

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📟 Tablet

### 🔐 Simple and Reliable

The application uses a backend API and database to manage shortened URLs reliably.

---

# 🛠️ Technologies Used

## Frontend

- **Angular**
- **TypeScript**
- **HTML5**
- **CSS3**
- **Angular Forms**
- **RxJS**
- **Canvas Confetti**

## Backend

- **Node.js**
- **Express.js**
- **Mongoose**
- **CORS**
- **dotenv**

## Database

- **MongoDB**

## Development Tools

- **Visual Studio Code**
- **MongoDB Compass**
- **Node Package Manager (npm)**
- **Git**
- **GitHub**
