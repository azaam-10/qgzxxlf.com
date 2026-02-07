
import React from 'react';
import { User, ClipboardList, CreditCard, Settings, ChevronRight } from 'lucide-react';

const MenuList: React.FC = () => {
  const menuItems = [
    { icon: <User size={20} />, label: 'Profile' },
    { icon: <ClipboardList size={20} />, label: 'Deposit records' },
    { icon: <CreditCard size={20} />, label: 'Withdrawal records' },
    { icon: <Settings size={20} />, label: 'Setting' },
  ];

  return (
    <div className="px-4 py-2">
      <div className="bg-[#fcfcfc] rounded-[16px] border border-gray-100 overflow-hidden">
        {menuItems.map((item, idx) => (
          <button 
            key={idx}
            className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors ${
              idx !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="text-gray-400">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
