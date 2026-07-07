import React from 'react';
import { Leaf, Globe, MessageSquare, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-600 p-1.5 rounded-lg text-white">
                <Leaf size={20} />
              </div>
              <span className="text-lg font-bold text-gray-900 tracking-tight">EcoTracker</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering individuals to take measurable action against climate change through data and community.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Personal Tracker</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Community Goals</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Impact Reports</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Mobile App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary-600 transition-colors">Sustainability Tips</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Climate Data API</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Partner Program</a></li>
              <li><a href="#" className="hover:text-primary-600 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-primary-600 transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-primary-600 transition-colors"><MessageSquare size={20} /></a>
              <a href="#" className="hover:text-primary-600 transition-colors"><Heart size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2026 EcoTracker Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
            <a href="#" className="hover:text-gray-600">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
