# Belogoo - Modern Blogging Platform

Belogoo is a full-stack, premium blogging platform built with modern web technologies. It is designed to offer a seamless and visually stunning experience for writers to publish posts and for readers to engage with content. The platform includes a robust administrative dashboard, user authentication, profile management, and interactive commenting systems.

## 🚀 Overview

The application is built to demonstrate a complete, production-ready full-stack architecture using the latest Next.js App Router paradigm. It handles everything from secure user authentication using JWT and OTP verification, to complex state management and media handling via Cloudinary. The UI/UX is heavily prioritized, featuring custom CSS animations, premium glassmorphism effects, and responsive Tailwind CSS layouts.

## 🏗 Architecture

The project follows a modern Serverless Architecture pattern:
- **Frontend & Backend (Monolith via Next.js):** Utilizes Next.js 15's App Router to handle both client-side rendering (CSR) for dynamic UI components and Server-Side Rendering (SSR) / API Routes for backend logic.
- **Database Layer:** MongoDB with Mongoose ODM for structured, scalable data modeling.
- **Media Storage:** Cloudinary integration for scalable, optimized image uploads (avatars, post thumbnails).
- **Security & Auth:** Custom JWT implementation using `jose`, paired with `bcrypt` for password hashing and `nodemailer` for email-based OTP verification.

## 💻 Tech Stack

### Core Technologies
- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS + Custom Vanilla CSS (Animations/Transitions)
- **Language:** TypeScript

### Backend & Database
- **Database:** MongoDB
- **ODM:** Mongoose
- **Media Storage:** Cloudinary API

### Security & Utilities
- **Authentication:** Custom JWT (`jose`) & HTTP-Only Cookies
- **Password Hashing:** Bcrypt
- **Email Service:** Nodemailer
- **Rich Text Editor:** Jodit-React
- **Icons:** React-Icons

## ✨ Key Features

### User Experience (Frontend)
- **Premium UI Design:** Dark mode support, glassmorphism overlays, custom scrollbars, and staggered micro-animations (`animate-fade-in-up`, `card-animated`).
- **Rich Text Authoring:** Integrated WYSIWYG editor allowing users to format blog posts easily.
- **Interactive Commenting:** Real-time feedback and comment sections on individual blog posts.
- **User Profiles:** Customizable user profiles with bio, social links, and avatar uploads.

### Administrative Capabilities (Admin Panel)
- **Dashboard Statistics:** At-a-glance metrics for total users, posts, and system feedback.
- **User Management:** Full administrative control to view, delete, or forcibly reset user passwords via secure modals.
- **Content Moderation:** Ability to oversee all posts and manage user feedback.

### Security & Authentication
- **OTP Email Verification:** Secure sign-up and password reset workflows requiring email validation.
- **Role-Based Access Control (RBAC):** Distinct privileges for standard users versus administrators (Role 1).
- **Session Management:** Encrypted, HTTP-only cookie-based sessions to prevent XSS attacks.

## 📂 Project Structure

```text
belogoo_app_nextjs/
├── app/
│   ├── admin/           # Administrative panel routes and dashboard
│   ├── api/             # Backend API routes (Auth, Posts, Users, Admin)
│   ├── components/      # Reusable React UI components (Nav, Cards, Modals)
│   ├── home/            # Main feed and individual post views
│   ├── profile/         # User profile management and editing
│   └── globals.css      # Global styles and custom animation utility classes
├── libs/                # Core utilities (DB connection, Session decryption)
├── models/              # Mongoose database schemas (User, Post, Feedback, Otp)
├── public/              # Static assets and placeholder images
├── tailwind.config.ts   # Tailwind configuration and custom theme extensions
└── middleware.js        # Edge middleware for route protection and auth checks
```

## 🛠 Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DiasAntony/belogoo_app_nextjs.git
   cd belogoo_app_nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secure_jwt_secret
   CLOUDINARY_URL=your_cloudinary_url
   SMTP_HOST=your_smtp_host
   SMTP_USER=your_email
   SMTP_PASS=your_email_password
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 Future Roadmap
- Integration of a robust search and tagging system for posts.
- Social features including "Likes" and "Followers".
- Server-side caching optimizations using Next.js caching layers.
