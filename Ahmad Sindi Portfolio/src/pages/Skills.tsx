import React from 'react';
import { Code, Database, Palette, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Palette size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Backend Development",
      icon: <Terminal size={24} />,
      skills: ["PHP", "Python", "Java"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MySQL", "SQLite"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Other Technologies",
      icon: <Code size={24} />,
      skills: ["Git", "Github", "Linux", "Figma", "Hugging Face"],
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-navy-900 mb-8">Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
          >
            <div className={`bg-gradient-to-r ${category.color} p-4 flex items-center gap-3`}>
              <span className="text-white">{category.icon}</span>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}