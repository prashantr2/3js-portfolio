# Portfolio Website

This is a personal portfolio website built with React, showcasing my projects, work experience, and skills. The website is organized into several sections, each providing a unique look at my background and the technologies I work with.

## Overview

The portfolio includes the following sections:

- **Navbar:** A navigation bar at the top of the page for easy access to all sections.
- **Hero:** The introductory section with a greeting and brief description.
- **About:** A section detailing my experience, tech stack, and global work reach.
- **Projects:** A showcase of my projects, highlighting technologies used and live links.
- **Work Experience:** Highlights of my professional experience and roles.
- **Contact:** Contact information with a copy-to-clipboard feature.
- **Footer:** The footer contains additional links and contact information.

## File Structure

Each major component is structured in individual files for modularity and scalability. Here’s a breakdown of the main components:

### `App.jsx`

The root component that imports and organizes all sections of the website into a cohesive layout.

### `Navbar.jsx`

- **Description:** Contains the navigation bar with links to different sections.
- **Functionality:** Uses state to toggle the menu on mobile screens, and dynamically generates navigation items from a constant file.

### `Hero.jsx`

- **Description:** Displays a greeting message with my name and a brief tagline.
- **Functionality:** Includes 3D elements using `@react-three/fiber` and `@react-three/drei` libraries to render interactive graphics in the background.

### `About.jsx`

- **Description:** Highlights my background, technical skills, and experience.
- **Functionality:** Displays a globe visualization using `react-globe.gl` to showcase locations I work with globally and includes a copy-to-clipboard feature for my email.

### `Projects.jsx`

- **Description:** A list of my key projects, each including a title, description, tags, and live site link.
- **Functionality:** Provides navigation buttons to cycle through projects, as well as 3D models rendered using `@react-three/fiber` to showcase each project visually.

### `WorkExperience.jsx`

- **Description:** Summarizes my work experience in previous roles, including position titles, companies, and duration.

### `Contact.jsx`

- **Description:** A section with a globe visualization indicating my work locations, and options to copy my contact email or navigate to the contact section.
- **Functionality:** Includes a copy button to copy my email address with a visual confirmation.

### `Footer.jsx`

The footer section with links to social profiles, a privacy policy, or any additional information.

## Key Features

1. **Responsive Design:** The website is fully responsive, providing an optimal viewing experience across devices.
2. **3D Graphics:** Uses `@react-three/fiber` to create 3D visuals, adding an interactive dimension to the Hero and Projects sections.
3. **Copy-to-Clipboard Functionality:** The About and Contact sections include a simple copy-to-clipboard feature for ease of contact.
4. **Dynamic Project Navigation:** Allows easy navigation through projects, showing each with detailed visuals and descriptions.

## Technologies Used

- **Frontend Framework:** React
- **3D Graphics:** `@react-three/fiber`, `@react-three/drei`
- **Globe Visualization:** `react-globe.gl`
- **Styling:** Tailwind CSS

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Install dependencies:
    ```bash
    npm install
3. Start the development server:
    ```bash
    npm run dev