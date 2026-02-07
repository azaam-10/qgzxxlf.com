
import React from 'react';

const PentagonLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    {/* الدائرة الخلفية باللون الرمادي الفاتح الموجود بالصورة */}
    <circle cx="50" cy="50" r="48" fill="#E5E5E5" />
    
    {/* مجموعة الأشكال الخماسية مرتبة دائرياً */}
    <g transform="translate(50, 50)">
      {/* الأحمر - أعلى */}
      <polygon points="0,-38 16,-26 12,-10 -12,-10 -16,-26" fill="#D34C4F" transform="rotate(0)" />
      
      {/* الأصفر - يمين أعلى */}
      <polygon points="0,-38 16,-26 12,-10 -12,-10 -16,-26" fill="#C7A721" transform="rotate(72)" />
      
      {/* البنفسجي - يمين أسفل */}
      <polygon points="0,-38 16,-26 12,-10 -12,-10 -16,-26" fill="#7B4B96" transform="rotate(144)" />
      
      {/* الأزرق - يسار أسفل */}
      <polygon points="0,-38 16,-26 12,-10 -12,-10 -16,-26" fill="#2C7896" transform="rotate(216)" />
      
      {/* الأخضر - يسار أعلى */}
      <polygon points="0,-38 16,-26 12,-10 -12,-10 -16,-26" fill="#4E9B56" transform="rotate(288)" />
    </g>
  </svg>
);

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] pt-12 pb-10 px-5 text-white relative">
      {/* أيقونة الخدمة في الزاوية العلوية اليمنى */}
      <div className="absolute top-8 right-5">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
          <path d="M8 9H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 12H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 15H13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* منطقة المعلومات الشخصية */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-[72px] h-[72px] rounded-full bg-[#E5E5E5] flex items-center justify-center overflow-hidden border border-white/10">
          <PentagonLogo />
        </div>
        <div className="pl-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">MOHMD517</span>
            <span className="bg-[#F5B400] text-white text-[9px] px-1.5 py-0.5 rounded-[6px] font-black italic">VIP 3</span>
          </div>
          <div className="text-[13px] text-white/80 mt-1 font-medium">Invitation code: 619805</div>
        </div>
      </div>

      {/* منطقة الرصيد والأزرار */}
      <div className="flex justify-between items-end mt-4">
        <div className="pb-1">
          <div className="text-[13px] font-bold opacity-90 mb-3">My Account</div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[12px] font-medium opacity-80">USDT</span>
            <span className="text-[26px] font-bold leading-none tracking-tight">11779.8049</span>
          </div>
        </div>

        <div className="flex gap-4">
          {/* زر الإيداع */}
          <div className="flex flex-col items-center">
            <button className="w-14 h-14 bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-sm active:scale-95 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1F6AE1" />
                    <stop offset="100%" stopColor="#0B4DB8" />
                  </linearGradient>
                </defs>
                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" fill="url(#blueGrad)" />
                <path d="M18 12C16.8954 12 16 12.8954 16 14C16 15.1046 16.8954 16 18 16C19.1046 16 20 15.1046 20 14C20 12.8954 19.1046 12 18 12Z" fill="white" />
                <path d="M2 11V17H5V11H2Z" fill="#0B4DB8" opacity="0.3" />
              </svg>
            </button>
            <span className="text-[11px] mt-2 font-medium opacity-90">Deposit</span>
          </div>
          
          {/* زر السحب */}
          <div className="flex flex-col items-center">
            <button className="w-14 h-14 bg-[#F5F5F5] rounded-[20px] flex items-center justify-center shadow-sm active:scale-95 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="18" height="12" rx="2" fill="url(#blueGrad)" />
                <rect x="3" y="9" width="18" height="3" fill="white" opacity="0.2" />
                <rect x="6" y="14" width="4" height="2" rx="0.5" fill="white" />
              </svg>
            </button>
            <span className="text-[11px] mt-2 font-medium opacity-90">Withdrawal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
