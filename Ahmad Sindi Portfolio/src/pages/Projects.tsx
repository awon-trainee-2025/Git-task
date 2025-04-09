import React from 'react';
import { Github, Globe, Star } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      description: "Java-based desktop application designed to optimize hospital workflows and enhance patient management. Built with JavaFX for an intuitive UI and JDBC with MySQL for secure data handling, this system ensures efficient hospital administration.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Java", "JavaFX", "MySQL"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mousmi",
      description: "Mousmi is a user-friendly platform designed to connect individuals and organizations during the Hajj season, facilitating job postings and applications. Whether you're part of an organization seeking to hire workers or an individual looking to contribute your skills during this sacred time, Mousmi makes the process simple and efficient.",
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQLite"],
      demoUrl: "#",
      githubUrl: "https://github.com/AhmadAbdullah123/Software-Systems.git"
    },
    {
      title: "Majors Hub",
      description: "Majors Hub is a web-based platform designed specifically for students at Umm Al-Qura University (UQU) to explore and discover the various majors and courses offered by the College of Computers. Whether you're a new student or someone considering a change in your academic path, Majors Hub helps you make informed decisions about your future by providing a comprehensive guide to the available options.",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-navy-900 mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-yellow-500">
                  {/* <Star size={16} /> */}
                  <span></span>
                </div>
                <div className="flex gap-3">
                  <a href={project.demoUrl} className="text-blue-500 hover:text-blue-600 transition-colors">
                    <Globe size={20} />
                  </a>
                  <a href={project.githubUrl} className="text-gray-700 hover:text-gray-900 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}