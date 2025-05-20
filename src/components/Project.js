import React from "react";
import { ExternalLink } from "lucide-react";
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Weather site",
      description:
        "A site to check the weather at places all around the world.",
      link: "https://example.com",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    },
    {
      id: 2,
      title: "To-Do List",
      description: "A simple task manager site.",
      link: "https://example.com",
      technologies: ["JavaScript", "LocalStorage", " CSS"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website built with JavaScript and CSS.",
      link: "https://example.com",
      technologies: ["HTML", "CSS", "Responsive Design"],
    },
    {
      id: 4,
      title: "A Restaurant website",
      description:
        "A user-friendly site for a restaurant built with JavaScript and CSS.",
      link: "https://example.com",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div
      id="project"
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            A showcase of all projects that I have made
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-green-500 transition-all duration-200 p-5"
            >
              <h2 className="text-2xl font-semibold text-indigo-900 mb-5">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-green-100 text-indigo-900 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-teal-900 hover:text-green-900 font-semibold transition-all duration-200 my-2"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
