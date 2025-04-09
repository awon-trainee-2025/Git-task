import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: "Full Ethical Hacking by LiangYang Loi",
      issuer: "Udemy",
      date: "2024",
      image: "https://plus.unsplash.com/premium_photo-1714618835760-5b2175ad3249?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Advanced Command Line",
      issuer: "Satr",
      date: "2023",
      image: "https://media.istockphoto.com/id/2173923576/photo/abstract-quantum-computing.jpg?s=2048x2048&w=is&k=20&c=5tQpXUdt8wyL9LtjQ7D3dfLnyyOAfSrYtGiaMq_gekE="
    },
    {
      title: "Python for Cybersecurity",
      issuer: "Udemy",
      date: "2022",
      image: "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-navy-900 mb-8">Certificates</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Award className="text-blue-500" size={20} />
                <h3 className="text-lg font-semibold text-navy-900">{cert.title}</h3>
              </div>
              <div className="text-gray-600 mb-4">
                <p>{cert.issuer}</p>
                <p className="text-sm">{cert.date}</p>
              </div>
              {/* <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
                <span></span>
                <ExternalLink size={16} />
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}