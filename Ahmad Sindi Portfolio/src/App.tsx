import React from 'react';
import { User, Code, Briefcase, Award, FolderGit2, Users2, Mail } from 'lucide-react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// Pages
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Experiences from './pages/Experiences';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900 text-white flex">
        {/* Fixed Sidebar */}
        <div className="w-64 bg-navy-800 fixed h-full p-6">
          <h1 className="text-3xl font-bold italic mb-12">Portfolio</h1>
          
          <nav className="space-y-4">
            <NavLink to="/" className={({ isActive }) => 
              `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                isActive ? 'bg-navy-700 text-blue-400' : 'hover:bg-navy-700'
              }`
            }>
              <User size={20} />
              <span>About me</span>
            </NavLink>

            <NavLink to="/skills" className={({ isActive }) => 
              `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                isActive ? 'bg-navy-700 text-blue-400' : 'hover:bg-navy-700'
              }`
            }>
              <Code size={20} />
              <span>Skills</span>
            </NavLink>

            <NavLink to="/experiences" className={({ isActive }) => 
              `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                isActive ? 'bg-navy-700 text-blue-400' : 'hover:bg-navy-700'
              }`
            }>
              <Briefcase size={20} />
              <span>Experiences</span>
            </NavLink>

            <NavLink to="/certificates" className={({ isActive }) => 
              `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                isActive ? 'bg-navy-700 text-blue-400' : 'hover:bg-navy-700'
              }`
            }>
              <Award size={20} />
              <span>Certificates</span>
            </NavLink>

            <NavLink to="/projects" className={({ isActive }) => 
              `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                isActive ? 'bg-navy-700 text-blue-400' : 'hover:bg-navy-700'
              }`
            }>
              <FolderGit2 size={20} />
              <span>Projects</span>
            </NavLink>

             {/* Uncomment when you get partners :) */}    
            {/* <NavLink to="/partners" className={({ isActive }) => 
              `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                isActive ? 'bg-navy-700 text-blue-400' : 'hover:bg-navy-700'
              }`
            }>
              <Users2 size={20} />
              <span>Partners</span>
            </NavLink> */}

            <NavLink to="/contact" className={({ isActive }) => 
              `flex items-center space-x-3 p-3 rounded-lg transition-all ${
                isActive ? 'bg-navy-700 text-blue-400' : 'hover:bg-navy-700'
              }`
            }>
              <Mail size={20} />
              <span>Contact</span>
            </NavLink>
          </nav>

          <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-400">
            copyright © Ahmad 2025 Portfolio
          </div>
        </div>

        {/* Content Area */}
        <div className="ml-64 flex-1 p-8 bg-blue-50">
          <Routes>
            <Route path="/Aboutme" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;