
import React, { useState } from 'react';
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import MenuList from './components/MenuList';
import BottomNav from './components/BottomNav';
import DepositModal from './components/DepositModal';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mine');
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="flex justify-center min-h-screen bg-[#f3f4f6] relative overflow-hidden">
      {/* تم استخدام قيمة مخصصة blur-[2px] لتخفيف الضبابية جداً وجعل المحتوى خلف المربع أكثر وضوحاً */}
      <div className={`w-full max-w-[430px] bg-[#f8f8f8] min-h-screen relative flex flex-col pb-20 custom-scrollbar transition-all duration-300 ${isModalOpen ? 'blur-[2px] pointer-events-none' : ''}`}>
        {/* Profile/Mine Page Content */}
        <Header />
        
        <main className="flex-1 -mt-4 z-10">
          <div className="bg-white rounded-t-[20px] pt-4">
            <QuickActions />
            <div className="h-2 bg-[#f3f4f6] w-full mt-4" />
            <MenuList />
          </div>
        </main>

        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {isModalOpen && <DepositModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;
