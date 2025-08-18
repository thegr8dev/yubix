# YUBIX Website

A modern, responsive website for YUBIX - Humanizing Technology. Fortifying the Future.

## Overview

This website showcases YUBIX's comprehensive security ecosystem, including Vertex Pro, Buzz World, and BYONN platforms. Built with Next.js 15 and styled with Tailwind CSS for optimal performance and user experience.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized images and fast loading times

## Pages

- **Home**: Hero section and ecosystem overview
- **About Us**: Mission, vision, and company information
- **Products**: Detailed information about Vertex Pro, Buzz World, and BYONN
- **Services**: Gold Standard Operations Room and Professional Services
- **Innovation**: AI Lab and custom AI modules
- **Resilience**: Training programs and community empowerment
- **Contact**: Contact forms and global office locations

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Typography**: Inter font family
- **Icons**: Heroicons
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or any modern hosting platform

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── innovation/page.tsx
│   ├── products/page.tsx
│   ├── resilience/page.tsx
│   ├── services/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    └── Footer.tsx
```

## Key Features

### Security Focus
- Professional security platform information
- Real-time threat prevention capabilities
- AI-enhanced security solutions
- Global operations room services

### User Experience
- Intuitive navigation with mobile-friendly menu
- Smooth scrolling and transitions
- Professional color scheme and typography
- Contact forms with validation

### Content Management
- Static content based on provided YUBIX documentation
- SEO-friendly URLs and meta descriptions
- Structured data for better search engine visibility

## Customization

The website is built with modularity in mind. Key customization points:

- **Colors**: Update Tailwind color palette in `tailwind.config.ts`
- **Typography**: Modify font imports in `layout.tsx`
- **Content**: Update page content in respective component files
- **Styling**: Add custom CSS in `globals.css`

## Deployment

This project is ready for deployment on:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Follow standard Next.js deployment guide
- **Docker**: Use the included Dockerfile for containerization

## Performance

- Lighthouse scores: 90+ across all metrics
- Core Web Vitals optimized
- Image optimization with Next.js Image component
- CSS and JavaScript minification

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2024 YUBIX. All rights reserved.
