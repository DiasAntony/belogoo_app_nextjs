# 📝 Belogoo - Modern Blogging Platform

A full-featured, modern blogging platform built with Next.js 15, MongoDB, and TypeScript. Belogoo provides a seamless experience for content creators to share their thoughts, engage with readers through comments, and manage their blog posts with a beautiful, responsive interface.

![Next.js](https://img.shields.io/badge/Next.js-15.1.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-8.9.5-green?style=flat-square&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎯 Core Features
- **User Authentication & Authorization**
  - Secure user registration and login
  - Email verification with OTP
  - Password reset functionality
  - JWT-based session management
  - Role-based access control (Admin/User)

- **Blog Management**
  - Rich text editor (Jodit) for creating and editing posts
  - Public/Private post visibility
  - Post thumbnails with Cloudinary integration
  - Post ratings and likes
  - SEO-optimized metadata for each post

- **Social Features**
  - Comment system on blog posts
  - User profiles with avatars
  - Social media links (Facebook, Twitter, LinkedIn)
  - User bio and profession display

- **Admin Dashboard**
  - User management
  - Post management
  - Feedback system
  - Admin-only routes and features

- **User Experience**
  - Dark mode support
  - Responsive design (mobile-first)
  - Loading states and error handling
  - Beautiful landing page with hero section
  - About, Contact, and Privacy Policy pages

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.1.5** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Jodit React** - Rich text editor
- **React Icons** - Icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing
- **JOSE** - JWT token handling

### Services & Tools
- **Cloudinary** - Image upload and management
- **Nodemailer** - Email service for OTP and notifications
- **ESLint** - Code linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **MongoDB** (local or MongoDB Atlas account)
- **Cloudinary** account (for image uploads)
- Email service credentials (for Nodemailer)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd belogoo_app_nextjs
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Application URL
NEXT_PUBLIC_URL=http://localhost:3000

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Email Configuration (for Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 5. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
belogoo_app_nextjs/
├── app/                    # Next.js App Router directory
│   ├── api/               # API routes
│   │   ├── admin/         # Admin endpoints
│   │   ├── post/          # Post endpoints
│   │   ├── user/          # User authentication endpoints
│   │   └── feedback/      # Feedback endpoints
│   ├── components/        # React components
│   │   └── landing/       # Landing page components
│   ├── home/              # Blog post pages
│   ├── admin/             # Admin dashboard
│   ├── profile/           # User profile pages
│   ├── post/              # Create/edit post pages
│   ├── signin/            # Sign in page
│   ├── signup/            # Sign up page
│   └── layout.tsx         # Root layout
├── libs/                   # Utility libraries
│   ├── dbConn.ts          # MongoDB connection
│   ├── mailTrigger.ts     # Email service
│   └── session.ts         # Session management
├── models/                 # Mongoose models
│   ├── user.ts            # User model
│   ├── post.ts            # Post model
│   ├── feedback.ts        # Feedback model
│   └── otptoken.ts        # OTP token model
├── public/                 # Static assets
├── middleware.ts           # Next.js middleware
└── package.json          # Dependencies
```

## 🎨 Key Features Explained

### Rich Text Editor
The application uses Jodit React editor, allowing users to create formatted blog posts with images, links, and various text styles.

### Image Management
Post thumbnails and user avatars are uploaded to Cloudinary, providing optimized image delivery and storage.

### Authentication Flow
1. User registration with email verification
2. OTP sent via email for verification
3. Secure login with JWT tokens
4. Password reset functionality with email confirmation

### SEO Optimization
Each blog post has dynamic metadata including:
- Custom title and description
- Open Graph tags for social sharing
- Dynamic thumbnail images
- Structured URLs

### Admin Features
- View and manage all users
- Moderate blog posts
- View user feedback
- Access to admin-only routes

## 🔒 Security Features

- Password hashing with bcrypt (12 salt rounds)
- JWT-based authentication
- Protected API routes
- Role-based access control
- Input validation and sanitization
- Secure session management

## 🌐 API Endpoints

### User Endpoints
- `POST /api/user` - Register new user
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout
- `POST /api/user/forget/email` - Request password reset
- `POST /api/user/otp` - Verify OTP

### Post Endpoints
- `GET /api/post` - Get all posts
- `POST /api/post` - Create new post
- `GET /api/post/[id]` - Get single post
- `POST /api/post/comment` - Add comment to post

### Admin Endpoints
- `GET /api/admin/user` - Get all users (Admin only)
- `GET /api/admin/post` - Get all posts (Admin only)

## 🧪 Development

### Linting
```bash
npm run lint
```

### Type Checking
TypeScript is configured to check types during build. Ensure all types are properly defined.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is private and proprietary. All rights reserved.

## 👨‍💻 Author

**Diaz**
- Passionate software developer with 2 years of experience
- Full-stack development expertise

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the database solution
- All open-source contributors whose packages made this project possible

---

**Note**: Make sure to set up all environment variables correctly before running the application. The application requires MongoDB, Cloudinary, and email service credentials to function properly.
