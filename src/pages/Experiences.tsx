import React from 'react';
import { Building2, Calendar } from 'lucide-react';

export default function Experiences() {
  const experiences = [
    {
      company: "Awon Technology",
      position: "CO-OP Intern",
      period: "Present",
      description: "Trainee at awon tech",
      technologies: ["Flutter", "Laravel", "Github", "Git", "Figma"]
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-navy-900 mb-8">Experience</h1>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-102 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Building2 size={20} className="text-blue-500" />
                  <h3 className="text-xl font-semibold text-navy-900">{exp.company}</h3>
                </div>
                <p className="text-lg text-gray-700">{exp.position}</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{exp.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}