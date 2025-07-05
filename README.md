# Abdulla Sadiku Portfolio

A modern, responsive portfolio web application built with **React** and **TailwindCSS** to showcase my work as a full-stack developer, data engineer, and creative professional.

## Features

- **Hero Section:** Eye-catching introduction with animated transitions.
- **About Me:** Brief biography, certifications, and profile image.
- **Skills & Badges:** Categorized technical skills and earned certifications/badges.
- **Experience:** Timeline of professional and internship experiences.
- **Projects:** Featured projects with descriptions, technologies, GitHub links, and demo videos in multiple languages.
- **Gallery:** Masonry-style image gallery of personal work.
- **Contact:** Contact form (Web3Forms integration) and social links.
- **Download CV:** Button to download resume as a DOCX file.
- **Responsive Design:** Fully responsive for desktop and mobile devices.

## Tech Stack

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Lucide React](https://lucide.dev/) (icons)
- [react-responsive-masonry](https://www.npmjs.com/package/react-responsive-masonry) (gallery)
- [Web3Forms](https://web3forms.com/) (contact form backend)
- [Vite](https://vitejs.dev/) (build tool)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/abdullah0sadiku/abdulla_portfolio.git
   cd abdulla_portfolio
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```

3. **Start the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
src/
  App.jsx           # Main application file
  components/
    ui/             # Reusable UI components (Button, Card, Badge, etc.)
  assets/           # Static assets (SVGs, images)
  hooks/            # Custom React hooks
  lib/              # Utility functions
public/
  images/           # Profile, badges, gallery images
  resume/           # Resume file
index.html          # HTML entry point
vite.config.js      # Vite configuration
tailwind.config.js  # TailwindCSS configuration
```

## Customization

- **Update Content:** Edit [`src/App.jsx`](src/App.jsx) to change sections, projects, skills, and contact info.
- **Add Images:** Place new images in `public/images/` or `public/images/gallery/`.
- **Resume:** Replace `public/resume/Resume Abdulla Sadiku.docx` with your own resume file.

## Deployment

You can deploy this app to any static hosting service (Vercel, Netlify, GitHub Pages, etc.):

```sh
pnpm build
# or
npm run build
```

The output will be in the `dist/` folder.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**© 2025 Abdulla Sadiku. Built with
