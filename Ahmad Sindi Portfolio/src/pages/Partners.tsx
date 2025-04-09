import React from 'react';
import { Building, Globe, MapPin } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: "TechCorp Solutions",
      location: "San Francisco, CA",
      description: "Strategic technology partner specializing in cloud solutions and digital transformation.",
      website: "https://techcorp.example",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Digital Innovators Ltd",
      location: "London, UK",
      description: "Leading digital agency focused on creating innovative web and mobile solutions.",
      website: "https://digitalinnovators.example",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "StartUp Hub",
      location: "Berlin, Germany",
      description: "Startup incubator and technology partner helping new businesses grow and succeed.",
      website: "https://startuphub.example",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-navy-900 mb-8">Partners</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={partner.image}
                alt={partner.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Building className="text-blue-500" size={20} />
                <h3 className="text-xl font-semibold text-navy-900">{partner.name}</h3>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <MapPin size={16} />
                <span>{partner.location}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{partner.description}</p>
              
              <a 
                href={partner.website}
                className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <Globe size={16} />
                <span>Visit Website</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}