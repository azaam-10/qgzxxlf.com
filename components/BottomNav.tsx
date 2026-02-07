
import React from 'react';
import { Home, Headphones, LayoutGrid, CalendarRange, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'Home', icon: <Home size={24} />, label: 'Home' },
    { id: 'Service', icon: <Headphones size={24} />, label: 'Service' },
    { id: 'Menu', icon: <LayoutGrid size={24} />, label: 'Menu' },
    { id: 'Record', icon: <CalendarRange size={24} />, label: 'Record' },
    { id: 'Mine', icon: <User size={24} />, label: 'Mine' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-16 bg-white border-t border-gray-100 flex items-center justify-around px-2 z-50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center justify-center flex-1 transition-colors ${
            activeTab === tab.id ? 'text-gray-900' : 'text-gray-400'
          }`}
        >
          <div className={activeTab === tab.id ? 'font-bold scale-110 transition-transform' : ''}>
            {tab.icon}
          </div>
          <span className={`text-[10px] mt-1 ${activeTab === tab.id ? 'font-bold' : 'font-medium'}`}>
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
