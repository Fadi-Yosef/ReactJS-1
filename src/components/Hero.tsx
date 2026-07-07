import React from 'react';
import { TrendingDown, TreeDeciduous, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="dashboard" className="pt-20 pb-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Track Your <span className="text-primary-600">Sustainability</span> Journey
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            EcoTracker helps you visualize your carbon footprint, set meaningful environmental goals, and join a community dedicated to a greener planet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-transform hover:-translate-y-1 shadow-lg">
              Start Your Journey
            </button>
            <button className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm">
              View Global Impact
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-50 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingDown size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Carbon Footprint</h3>
            <p className="text-gray-600 text-sm">Reduced by 12% this month compared to your previous average.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-50 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <TreeDeciduous size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trees Saved</h3>
            <p className="text-gray-600 text-sm">Your sustainable choices have equivalent to saving 4.5 mature trees.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-50 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Energy Saved</h3>
            <p className="text-gray-600 text-sm">You've saved 145 kWh through smart home energy management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
