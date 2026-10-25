import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, MinusCircle } from 'lucide-react';
import { useLocation } from 'react-router';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function FloatingChat() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; isWhatsAppPrompt?: boolean }[]>([
    { text: "Hello! I'm the Mike Alpha Agronomist. How can I help you with your crop nutrition needs today?", isUser: false },
  ]);

  const whatsappUrl = getWhatsAppUrl({ pathname: location.pathname });

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setMessage('');
    // Simulate response with quick WhatsApp option
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Thank you for reaching out! Our agronomy team has received your inquiry. For real-time expert recommendations, you can also continue directly with us on WhatsApp.',
          isUser: false,
          isWhatsAppPrompt: true,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="origin-bottom-right mb-4 w-[calc(100vw-2rem)] max-w-[350px] h-[490px] bg-white rounded-xl shadow-floating overflow-hidden flex flex-col border border-gray-200"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white block leading-tight">Mike Alpha Agronomist</span>
                  <span className="text-[10px] text-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online Support
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-white/80 hover:text-white transition-colors"
                >
                  <MinusCircle className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick WhatsApp Bar */}
            <div className="bg-emerald-50 px-3.5 py-2 border-b border-emerald-100 flex items-center justify-between gap-2">
              <span className="text-[11px] text-emerald-800 font-medium truncate">
                Instant WhatsApp agronomy support
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-semibold rounded-full shadow-xs transition-colors shrink-0"
              >
                <MessageCircle className="w-3 h-3" /> Chat Now
              </a>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.isUser
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-gray-100 text-gray-700 rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.isWhatsAppPrompt && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-full shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Continue on WhatsApp
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..."
                  className="flex-1 h-10 px-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-2 text-center">
                powered by <span className="text-primary font-medium">MIKE ALPHA</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-primary shadow-floating flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}
