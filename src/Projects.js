// Projects.js
import React from "react";
import project1 from "./profile.jpg";
import project2 from "./profile.jpg";
import project3 from "./profile.jpg";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-40 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white lg:text-3xl">
          Some of my projects
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Here are a few examples of the projects I have built using Node.js and
          other technologies. You can find more on my GitHub profile.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Add your projects here */}
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <img
              src={project1}
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Project 1
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                A brief description of the project and its features.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                {/* Add your project tags here */}
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 rounded-full">
                  Node.js
                </span>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 rounded-full">
                  Express
                </span>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 rounded-full">
                  MongoDB
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href="/#"
                  className="text-sm text-blue-500 dark:text-blue-400 hover:underline"
                >
                  View project
                </a>
                <a
                  href="/#"
                  aria-label="GitHub"
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  {/* Replace with your icon */}
                  🐙
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <img
              src={project2}
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Project 2
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                A brief description of the project and its features.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                {/* Add your project tags here */}
                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-300 rounded-full">
                  React
                </span>
                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-300 rounded-full">
                  Tailwind CSS
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href="/#"
                  className="text-sm text-green-500 dark:text-green-400 hover:underline"
                >
                  View project
                </a>
                <a
                  href="/#"
                  aria-label="GitHub"
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-
400"
                >
                  {/* Replace with your icon */}
                  🐙
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <img
              src={project3}
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Project 3
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                A brief description of the project and its features.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                {/* Add your project tags here */}
                <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-500 dark:text-purple-300 rounded-full">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-500 dark:text-purple-300 rounded-full">
                  GraphQL
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href="/#"
                  className="text-sm text-purple-500 dark:text-purple-400 hover:underline"
                >
                  View project
                </a>
                <a
                  href="/#"
                  aria-label="GitHub"
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  {/* Replace with your icon */}
                  🐙
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
