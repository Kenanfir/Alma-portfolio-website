# Alma Alviana - Portfolio Website

A modern, minimalist portfolio website for Alma Alviana - Product Specialist & iOS Developer. Built with Astro and enhanced with liquid glass design elements.

🎂 **A birthday present from [Kenanfir](https://github.com/Kenanfir) to Alma** 🎂

**Based on the excellent template by [larry-xue/apple-style-portfolio](https://github.com/larry-xue/apple-style-portfolio)**

## About Alma

Alma Alviana is a Chemistry graduate passionate about project and product management. With extensive experience in collaborating with cross-functional teams, she excels in bridging technical expertise with strategic business goals. Currently working as a Junior iOS Developer at Apple Developer Academy at BINUS.

## Portfolio Highlights

- **iOS App Development**: BeO, Photophile, and Moddy apps
- **Product Management**: Expert in market research, data analysis, and user experience
- **Team Leadership**: Led teams of 10+ members with 95% success rate
- **Community Impact**: Active volunteer and community engagement officer

## Features

- 🍎 Apple-style design aesthetic with liquid glass enhancements
- ⚡️ Built with Astro for optimal performance
- 🎨 Tailwind CSS for styling with custom glassmorphism effects
- 🌟 GSAP animations and smooth transitions
- 📱 Fully responsive design
- 🎬 Three.js integration for 3D elements
- ⚛️ React components integration
- 💎 Liquid glass design elements and backdrop blur effects
- 🎯 Dynamic project showcase with conditional image rendering
- 📊 Comprehensive experience and skills presentation

## Table of Contents

- [About Alma](#about-alma)
- [Portfolio Highlights](#portfolio-highlights)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
  - [Deploy with Coolify](#deploy-with-coolify)
  - [Deploy with Vercel](#deploy-with-vercel)
  - [Deploy with Cloudflare Pages](#deploy-with-cloudflare-pages)
- [Tech Stack](#tech-stack)
- [Credits](#credits)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v20 or higher)

### Installation

1. Clone the repository:

```bash
# Clone this portfolio repository
git clone https://github.com/your-username/alma-portfolio-website
cd alma-portfolio-website

# Or use astro create with the original template
npm create astro@latest -- --template larry-xue/apple-style-portfolio
```

2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Deployment

### Deploy with Coolify

[![Deploy with Coolify](https://img.shields.io/badge/Deploy%20with-Coolify-blue.svg?logo=docker)](https://coolify.io)

Coolify is a self-hosted alternative to Vercel/Netlify that gives you full control over your deployments.

1. **Set up Coolify server**:
   - Install Coolify on your server following their [installation guide](https://coolify.io/docs)
   - Access your Coolify dashboard

2. **Create a new project**:
   - Click "New Project" in your Coolify dashboard
   - Connect your GitHub repository
   - Select this portfolio repository

3. **Configure build settings**:
   - **Build Pack**: Node.js
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node.js Version**: 20.x
   - **Install Command**: `npm install`

4. **Environment Variables** (if needed):
   - No environment variables required for this portfolio
   - Add any custom variables if you modify the project

5. **Deploy**:
   - Click "Deploy" and Coolify will automatically build and deploy your portfolio
   - Your portfolio will be available at the provided domain

6. **Custom Domain** (optional):
   - Add your custom domain in the project settings
   - Configure DNS records as instructed by Coolify

### Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/alma-portfolio-website)

1. Fork this repository
2. Connect to Vercel using your GitHub account
3. Select the forked repository
4. Vercel will automatically detect Astro and configure the build settings
5. Click "Deploy"

### Deploy with Cloudflare Pages

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Pages-orange.svg?logo=cloudflare)](https://dash.cloudflare.com/sign-up)

1. Fork this repository
2. Log in to the Cloudflare dashboard
3. Select "Pages" from the sidebar
4. Create a new project and connect your GitHub repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 20.x
6. Click "Save and Deploy"

## Tech Stack

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://greensock.com/gsap)
- [Three.js](https://threejs.org)
- [Inter Font](https://rsms.me/inter)
- [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)

## Credits

This portfolio is a birthday gift created by [Kenanfir](https://github.com/Kenanfir) for Alma Alviana, based on the excellent [Apple-Style Portfolio Template](https://github.com/larry-xue/apple-style-portfolio) by [larry-xue](https://github.com/larry-xue).

### Modifications Made

- **Liquid Glass Design**: Enhanced with glassmorphism effects and backdrop blur
- **Custom Content**: Updated with Alma Alviana's professional information
- **iOS Projects**: Showcasing BeO, Photophile, and Moddy applications
- **Dynamic Components**: Conditional image rendering and enhanced animations
- **Professional Focus**: Tailored for Product Specialist and iOS Developer roles
- **Personal Touch**: Created as a special birthday present with love and care

### Original Template Features Retained

- Apple-style minimalist design aesthetic
- Astro framework for optimal performance
- Tailwind CSS styling system
- GSAP animations
- Three.js 3D elements
- Responsive design principles

## License

MIT License

---

**Thank you to [larry-xue](https://github.com/larry-xue) for creating the original template that inspired this portfolio!**

**Happy Birthday, Alma! 🎂✨ - From [Kenanfir](https://github.com/Kenanfir)**
