import React from 'react';

export default function AboutMe() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-navy-900 mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all">
          <img 
            src="data:image/png;base64,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" 
            alt="Profile" 
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
          />
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Ahmad Abdullah Sindi</h2>
          <p className="text-gray-600">Full Stack Developer</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-navy-900">Professional Summary</h3>
          <p className="text-gray-600">
            Passionate full-stack developer with expertise in modern web technologies.
            Committed to creating elegant, efficient, and user-friendly solutions.
          </p>
          
          <div className="pt-4">
            <h4 className="text-lg font-semibold text-navy-900 mb-2">Quick Facts</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Currently pursuing a degree in Computer Science</li>
            <li>Familiar with multiple programming langauges</li>
            <li>Contributing to open-source projects</li>
            <li>Active participant in tech communities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}