
## �🏪 Trade Tribe WordPress App

A modern WordPress development environment built with Docker, featuring custom theme development, asset optimization with Webpack, and a complete staging/production workflow. This project showcases professional WordPress development practices with containerized environments for consistent development across teams.

## 📦 Technologies

- `Docker & Docker Compose`
- `WordPress`
- `Woocommerce`
- `MySQL 8.0`
- `Node.js & npm`
- `Webpack`
- `Sass/SCSS`
- `Bootstrap 5`
- `Babel`
- `PHP 8.0`
- `Apache`

## � Features

- **Dockerized WordPress**: Isolated containers for WordPress, MySQL, Webpack, and WP-CLI.
- **Custom E-commerce Theme**: Built from scratch for a hiking boots brand, with WooCommerce and ACF for product/image management.
-- **Asset Pipeline**: Webpack for SCSS/JS compilation, minification, and cache-busting, hosted inside a Docker container for consistent asset building.
- **Multi-Environment**: Dev and prod profiles with Docker Compose using single commands.
- **Hot Reloading**: Fast development with file watching and auto-recompilation.
- **WP-CLI**: Command-line management for plugins, database, and maintenance.

## �🏽‍🍳 The Process


I started by sketching the site design in Figma, laying the foundation for the project.

Next, I set up modern WordPress environment using Docker, Browser Sync and webpack, which solidified my skills with how to work with dev tools outside of pre-configured frameworks.

I built a custom e-commerce website for Trade Tribe, focusing on WooCommerce and ACF for easy product and image management. This involved making a theme from scratch, improving my PHP, and learning WordPress/WooCommerce hooks and WP-CLI.

Customizing WooCommerce and ACF was a big part of the journey. I explored pricing, taxes, product management, and webhooks, discovering how flexible and extensible these tools are for e-commerce.

I experimented with deployment flows, using GitHub Actions to push containers to Docker Hub, and considered automating deployments to AWS. The setup supports both local development and cloud strategies, making it scalable for different business needs.

Looking back, I realized that spending more time refining the design up front would have made development smoother. This is a key reflection I’ll remember for future projects.

## 📚 What I Learned


**Environment Setup & Dev Tools**: Learned to create a reproducible WordPress environment with Docker and Browser Sync, gaining experience with tools outside of pre-configured frameworks.

**Design Planning**: Starting with a rough Figma sketch taught me the importance of design planning and refinement before development.

**Custom Theme & E-commerce**: Built a custom theme for Trade Tribe, integrating WooCommerce and ACF for flexible product and image management.

**WordPress, WooCommerce & ACF Mastery**: Improved my skills with WordPress hooks, WooCommerce webhooks, and ACF blocks, discovering deep customization options for e-commerce.

**PHP, SCSS, JavaScript**: Enhanced my PHP syntax and applied SCSS and JavaScript for modern, maintainable front-end development.

**Deployment & DevOps**: Experimented with deployment flows using GitHub Actions, Docker Hub, and AWS, learning about staging, production, and CI/CD strategies.

**Full Project Lifecycle**: Experienced the full cycle from environment setup to deployment, bridging traditional WordPress and modern DevOps practices.

## 💭 How can it be improved?

- **Performance Optimization**: Optimize images, enable caching using a CDN like Cloudlfare, AWS for faster load times.
- **CI/CD Pipeline**: Implement GitHub Actions for automated testing and deployment.
- **UI Enhancements**: Elevate the overall design with unique motifs and animations to set the site apart from basic, functional layouts.
- **Custom Checkout**: Implement a custom checkout for a more tailored user experience.
- **SEO Improvements**: Add structured data, meta tags, and improve site markup for better search engine visibility.
- **Custom Checkout Experience**: Streamline and customize the WooCommerce checkout flow for better conversion.

## 🚦 Running the Project


**Quick Setup:**

1. Clone the repository.
2. Copy `.env.example` to `.env` and adjust as needed.
3. Run `yarn install` to install dependencies.
4. Use `yarn dev` for development or `yarn prod` for production.
5. For live reloading, run `yarn browsersync`. 

## 🛠️ Custom Scripts

**Main Scripts:**

- `yarn dev` / `yarn prod`: Start development or production environments.
- `yarn browsersync` + `yarn webpack:dev`: For live reloading and asset building during development.

See `package.json` for more options.

## � Showcase

[![Frontend Demo](https://img.youtube.com/vi/FRONTEND_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=FRONTEND_VIDEO_ID)
[![Backend Demo](https://img.youtube.com/vi/BACKEND_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=BACKEND_VIDEO_ID)
[![Extra Demo](https://img.youtube.com/vi/EXTRA_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=EXTRA_VIDEO_ID)
