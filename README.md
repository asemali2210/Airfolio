Airophlio Portfolio Website

Overview

Welcome to the Airophlio Portfolio Website. This site showcases the work, projects, and achievements of the creator, built using modern web technologies like Next.js, React, Bootstrap SCSS, and React Motion. This portfolio is designed to provide a seamless, responsive user experience, and it's optimized for performance and accessibility.


---

Technologies Use

Next.js: A React framework for server-side rendering and static site generation. This allows the website to be fast and SEO-friendly.

React: A JavaScript library for building user interfaces, making the site dynamic and responsive.

Bootstrap SCSS: Utilized for responsive grid layouts, components, and styling with custom SCSS for a personalized design.

React Motion: A library for animating components, giving the website a smooth, interactive feel.



---

Features

Responsive Design: Built with Bootstrap's grid system, the portfolio adapts to different screen sizes (desktop, tablet, and mobile).

Smooth Animations: Powered by React Motion, the site features fluid transitions and animations that make browsing more engaging.

Interactive UI: Dynamic components such as project showcases, skills list, and contact form create an interactive and intuitive user experience.

SEO Optimized: By leveraging Next.js's server-side rendering, the website is SEO-friendly, ensuring it ranks well on search engines.

Contact Form: Easily get in touch through an integrated contact form, powered by React and Bootstrap styling.



---

Installation

To run the portfolio site locally, follow the steps below.

Prerequisites

Node.js (LTS version recommended) – Install from Node.js Official Site

npm or yarn – Package managers for JavaScript


Steps

1. Clone the repository:

git clone https://github.com/your-username/airophlio-portfolio.git


2. Navigate to the project folder:

cd airophlio-portfolio


3. Install dependencies using npm or yarn:

Using npm:

npm install

Using yarn:

yarn install



4. Run the development server:

Using npm:

npm run dev

Using yarn:

yarn dev



5. Visit http://localhost:3000 in your browser to view the website.




---

Project Structure

Here is the basic directory structure of the project:

/airophlio-portfolio
  ├── /components
  │   ├── Header.js
  │   ├── ProjectCard.js
  │   └── ContactForm.js
  ├── /pages
  │   ├── index.js
  │   ├── about.js
  │   └── projects.js
  ├── /public
  │   ├── /images
  │   └── favicon.ico
  ├── /styles
  │   ├── global.scss
  │   └── bootstrap-custom.scss
  ├── /utils
  │   └── motionAnimations.js
  ├── next.config.js
  ├── package.json
  └── README.md

Key Folders and Files:

/components: Contains reusable React components like Header.js, ProjectCard.js, and ContactForm.js.

/pages: Next.js pages that correspond to different sections of the site (e.g., Home, About, Projects).

/public: Static assets like images and icons.

/styles: Custom styles including SCSS files for Bootstrap customization and global styles.

/utils: Utility functions, like motion animations using React Motion.

next.config.js: Configuration file for Next.js (customizations for build, routing, etc.).






