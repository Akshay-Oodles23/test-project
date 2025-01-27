Community Connect Frontend

A Community Connect Frontend application built with modern web technologies to allow users to create posts, comment on posts, and reply with nested comments. This project showcases a dynamic, interactive frontend for a community platform.

Features

Create Posts: Users can write and share posts on the community platform.

Comment on Posts: Add comments to any post to engage in discussions.

Nested Comments: Reply to specific comments, supporting threaded/nested discussions.

Preloaded Posts: The page is populated with initial posts fetched from the DummyJSON API, giving the application a realistic feel.

Responsive Design: Built with TailwindCSS to ensure a seamless experience across all devices.

Tech Stack

Vite: A fast and modern build tool for frontend development.

TypeScript: For type safety and improved developer experience.

TailwindCSS: For utility-first, customizable styling.

DummyJSON API: To preload initial posts for a realistic populated page.

Getting Started

Prerequisites

Make sure you have the following installed on your machine:

Node.js (LTS version recommended)

npm (comes with Node.js)

Installation

Clone the repository:

git clone <repository-url>

Navigate to the project directory:

cd community-connect-frontend

Install dependencies:

npm install

Run the Application

Start the development server:

npm run dev

The application will be available at http://localhost:3000 (default Vite port).

Usage

Preloaded Posts: Upon loading the app, you will see a few preloaded posts fetched from the DummyJSON API.

Creating Posts: Use the form to create and publish a new post.

Commenting: Add comments to posts and engage in discussions.

Replying to Comments: Click reply on a comment to add nested comments, supporting threaded conversations.

File Structure

community-connect-frontend/
├── src/
│ ├── components/ # React components (Post, PostList, PostForm, etc.)
│ ├── hooks/ # Custom hooks (e.g., useLocalStorage)
│ ├── state/ # State management helpers (e.g., functions to handle posts/comments)
│ ├── types/ # TypeScript type definitions
│ ├── App.tsx # Main application file
│ └── index.tsx # Entry point
├── public/ # Static assets
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json # TypeScript configuration
├── vite.config.ts # Vite configuration
└── package.json # Project metadata and dependencies

Dependencies

Key dependencies used in this project:

react & react-dom: For building the user interface.

vite: For fast development and bundling.

tailwindcss: For styling.

typescript: For type safety.

Contribution

Contributions are welcome! If you'd like to contribute:

Fork the repository.

Create a new branch for your feature or bug fix:

git checkout -b feature-name

Commit your changes:

git commit -m "Description of changes"

Push your branch and create a pull request.

License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license.

Acknowledgments

DummyJSON API for providing fake data for initial posts.

Vite for the fast build and development experience.

TailwindCSS for easy and responsive styling.

Author

Your Name - GitHub Profile
