# 🌱 GreenNest

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/) 
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.2-teal?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) 
[![Firebase](https://img.shields.io/badge/Firebase-9.22.0-orange?logo=firebase&logoColor=white)](https://firebase.google.com/) 
[![License](https://img.shields.io/badge/License-Educational-green)](#)

---

## 🌟 Project Overview
**GreenNest** is a single-page web application for indoor plant lovers. Users can browse plants, view detailed care guides, book consultations with experts, and manage their personal profiles.  

The platform is **responsive, visually elegant**, and built with **React, TailwindCSS, Firebase Authentication**, and JSON-based plant data.

**Live Demo:** https://endearing-dolphin-0b6714.netlify.app/

---

## 🎯 Project Goals
- Build a responsive SPA for indoor plant care and shopping.  
- Implement secure Firebase authentication (Email/Password + Google Sign-In).  
- Protect routes for logged-in users (Plant Details, Profile).  
- Display JSON-based plant data dynamically.  
- Maintain smooth SPA navigation and minimalist design.

---

## 🧩 Key Features

### 1️⃣ Layout
- **Navbar:** Logo, Home, Plants, My Profile  
  - Logged-in → User avatar + dropdown (Name & Logout)  
  - Logged-out → Login & Register buttons  
- **Footer:** Quick links, social icons, copyright  
- Persistent Navbar & Footer on all routes

---

### 2️⃣ Home Page Sections
- **Hero Slider:** Swiper.js / Framer Motion animations  
- **Top Rated Plants:** Cards showing image, name, price, rating, “View Details”  
- **Plant Care Tips:** Watering, sunlight, fertilizing info  
- **Meet Our Green Experts:** 3–4 experts with images and specialization  
- **Optional:** Eco Decor Ideas / Plant of the Week  

---

### 3️⃣ Plant Details Page (Protected)
- Full plant info: image, name, description, price, rating, stock  
- **Book Consultation Form:** Name, Email, “Book Now” → success toast  
- Redirects unauthenticated users to Login page

---

### 4️⃣ Authentication
- **Signup:** Name, Email, Photo URL, Password + validation  
  - Password rules: ≥6 characters, at least one uppercase & one lowercase  
  - Google Sign-In supported  
- **Login:** Email, Password, Forgot Password, Google Sign-In  
- **Password toggle:** Show/hide on both forms  
- Redirects to desired page after login/signup

---

### 5️⃣ My Profile
- Displays Name, Email, Photo (or default icon)  
- **Update Profile:** Updates Firebase `displayName` and `photoURL`  
- Real-time updates reflected in Navbar

---

## 📄 JSON Data
`plants.json` stores plant information:

```json
[
  {
    "plantId": 1,
    "plantName": "Snake Plant",
    "category": "Air Purifier",
    "price": 18,
    "rating": 4.8,
    "availableStock": 10,
    "careLevel": "Easy",
    "description": "A hardy plant that purifies indoor air and thrives in low light.",
    "image": "https://i.postimg.cc/example1.png",
    "providerName": "UrbanGreen Studio"
  }
]
```
🛠 Tech Stack & Packages

- **Frontend:** React, TailwindCSS  
- **Routing:** React Router v6  
- **Authentication:** Firebase (Email/Password, Google)  
- **Notifications:** React Hot Toast  
- **Icons:** React Icons / Phosphor Icons  
- **Animations:** Swiper.js / Framer Motion  

---

## ⚡ Challenges & Solutions

| Challenge | Solution |
|-----------|---------|
| Real-time profile updates | Firebase `updateProfile()` + AuthContext state update |
| Forgot Password | Firebase password reset integrated |
| Smooth SPA navigation | React Router v6 + `useNavigation()` loader |
| Dynamic avatar fallback | Default icon displayed if `photoURL` missing |
| Password validation | Regex for uppercase, lowercase, and minimum length |

---

