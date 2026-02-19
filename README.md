# ONA Bridge English™ - Frontend Portal 🌉🚀

A responsive, highly accessible, and cinematic web application built for the New York State Office for New Americans (ONA). This platform provides free mobile English lessons and live coaching for immigrants living or working in New York State.

This repository contains the **Frontend UI**, built as part of a larger full-stack architecture for Cyberpurview.

## 🛠 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Styling:** CSS Modules (Custom `style.css` approach, entirely Tailwind-free)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Upcoming Backend Integration:** NestJS

## ✨ Key Features

* **Cinematic Hero & Landing Page:** Fully responsive layouts with seamless mobile stacking and custom Figma-matched styling.
* **Tabbed Course Navigation:** Dynamic, state-driven course categories (Beginner to Life Skills) with instant switching.
* **WCAG & ADA Compliant:** Dedicated accessibility features including screen reader compatibility, high contrast modes, and pre-literate learning tools.
* **Complex Form Handling:** Custom UI for the "Get Started" registration flow, featuring interactive radio cards and responsive design.
* **Live Coaching Hub:** UI built for multilingual support, integrating chat, call, and video coaching schedules.

## 🚀 Getting Started

To run this project locally on your machine:

**1. Clone the repository:**
\`\`\`bash
git clone https://github.com/Anthony-okonkwo/ona-bridge-english.git
cd ona-bridge-english
\`\`\`

**2. Install dependencies:**
\`\`\`bash
npm install
\`\`\`

**3. Run the development server:**
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Folder Structure

* `/app` - Contains all the Next.js routes (Home, Courses, Coaching, Accessibility, Start, How It Works).
* `/components` - Reusable UI components (Navbar, Footer, Hero, Features, etc.).
* `/public` - Static assets, images (like the hero phone, SMILE tiles), and icons.

