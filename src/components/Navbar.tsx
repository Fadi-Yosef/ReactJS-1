import React from 'react';
import { Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-primary-600 p-1.5 rounded-lg text-white">
              <Leaf size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">EcoTracker</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#dashboard" className="hover:text-primary-600 transition-colors">Dashboard</a>
            <a href="#metrics" className="hover:text-primary-600 transition-colors">Metrics</a>
            <a href="#goals" className="hover:text-primary-600 transition-colors">Your Goals</a>
            <a href="#community" className="hover:text-primary-600 transition-colors">Community</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-primary-600 hover:text-primary-700">Log In</button>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-700 transition-all shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
