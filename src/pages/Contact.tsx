import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-navy-900 mb-8">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all">
          <div className="bg-blue-50 p-3 rounded-full mb-4">
            <Phone className="text-blue-500" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-navy-900 mb-2">Phone</h3>
          <p className="text-gray-600">+966 58 386 0871</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all">
          <div className="bg-blue-50 p-3 rounded-full mb-4">
            <Mail className="text-blue-500" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-navy-900 mb-2">Email</h3>
          <p className="text-gray-600">asindy200@gmail.com</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all">
          <div className="bg-blue-50 p-3 rounded-full mb-4">
            <MapPin className="text-blue-500" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-navy-900 mb-2">Location</h3>
          <p className="text-gray-600">Makkah, Saudi Arabia</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-navy-900 mb-6">
          Send a Message (under development)
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Message subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send size={20} />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
}
