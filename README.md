# Divya Sonara - Senior Frontend Engineer Portfolio

A modern, production-ready React portfolio showcasing expertise in React, Vue, System Design, and scalable frontend architectures.

## 🚀 Features

- **Modern React 18** with TypeScript
- **Tailwind CSS** for styling with custom design system
- **Vite** for lightning-fast development and optimized builds
- **Data Visualization** with Recharts for architectural case studies
- **Fully Responsive** design with dark theme
- **Production Optimized** with code splitting and minification
- **Type-Safe** with strict TypeScript configuration
- **Component Architecture** following React best practices

## 📦 Tech Stack

- React 18.3
- TypeScript 5.6
- Vite 5.4
- Tailwind CSS 3.4
- Recharts 2.12
- Lucide React (icons)

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd divya-sonara-portfolio
```

2. **Install dependencies**
```bash
npm install
```

## 🏃 Development

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/        # Page sections
│   │       ├── Hero.tsx
│   │       ├── CaseStudy.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx
│   │       └── SkillsAndBlogs.tsx
│   ├── constants/           # Data & configuration
│   │   └── constants.ts
│   ├── types/               # TypeScript types
│   │   └── types.ts
│   ├── App.tsx              # Main app component
│   ├── index.tsx            # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `src/constants/constants.ts` to update:
- Contact information
- Work experience
- Projects
- Skills
- Blog posts and sessions

### Styling

The design system is configured in:
- `tailwind.config.js` - Theme customization
- `src/index.css` - Global styles and custom utilities

### Component Architecture

The project follows a component-based architecture:
- **UI Primitives** (`components/ui/`) - Reusable atomic components
- **Layout** (`components/layout/`) - Header, Footer, Section wrappers
- **Sections** (`components/sections/`) - Page-level content sections

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the 'dist' folder
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use.

## 📧 Contact

- Email: divyasonara7105@gmail.com
- LinkedIn: https://www.linkedin.com/in/divya-sonara-81218619a/
- Location: Milan, Italy

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
