
import React from 'react';
import { Users, FileText, Wallet2, UserPlus } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    { icon: <Users size={28} />, label: 'Teams', color: '#EAB308' }, // Yellow/Orange
    { icon: <FileText size={28} />, label: 'Record', color: '#22C55E' }, // Green
    { icon: <Wallet2 size={28} />, label: 'Wallet management', color: '#EF4444' }, // Red
    { icon: <UserPlus size={28} />, label: 'Invite friends', color: '#3B82F6' }, // Blue
  ];

  return (
    <div className="grid grid-cols-4 px-2 py-6">
      {actions.map((action, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ color: action.color }}
          >
            {action.icon}
          </div>
          <span className="text-[11px] text-gray-600 font-medium text-center leading-tight max-w-[70px]">
            {action.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;
