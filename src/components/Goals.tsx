import React from 'react';
import { Target, Recycle, Droplets, Wind } from 'lucide-react';

interface GoalCardProps {
  icon: React.ElementType;
  title: string;
  progress: number;
  target: string;
  color: string;
}

const GoalCard: React.FC<GoalCardProps> = ({ icon: Icon, title, progress, target, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color} text-white`}>
        <Icon size={24} />
      </div>
      <span className="text-sm font-medium text-gray-400">{progress}% Done</span>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">Target: {target}</p>
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div 
        className={`${color.split(' ')[0]} h-2 rounded-full transition-all duration-500`} 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

const Goals: React.FC = () => {
  const goals = [
    {
      icon: Recycle,
      title: 'Zero Waste Week',
      progress: 65,
      target: '100% Recycled Waste',
      color: 'bg-emerald-500',
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      progress: 40,
      target: 'Max 50L per day',
      color: 'bg-blue-500',
    },
    {
      icon: Wind,
      title: 'Clean Energy Shift',
      progress: 90,
      target: 'Switch to Solar',
      color: 'bg-orange-500',
    },
    {
      icon: Target,
      title: 'Meat-Free Month',
      progress: 25,
      target: '30 Days Plant-Based',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section id="goals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Sustainability Goals</h2>
            <p className="text-gray-600">Active challenges you are currently working on.</p>
          </div>
          <button className="mt-4 md:mt-0 text-primary-600 font-bold hover:underline">
            Browse More Challenges →
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <GoalCard key={index} {...goal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
