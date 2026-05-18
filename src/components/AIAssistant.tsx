import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { Product } from '../types';

interface AIAssistantProps {
  products: Product[];
}

export const AIAssistant = ({ products }: AIAssistantProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hello! I am your Bioxcin specialist. How can I help you with your hair or skin care today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    setMessage('');
    setChat(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, products })
      });
      const data = await response.json();
      setChat(prev => [...prev, { role: 'bot', text: data.text }]);
    } catch (error) {
      setChat(prev => [...prev, { role: 'bot', text: "I'm sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[80]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-6 w-[350px] md:w-[400px] h-[500px] bg-editor-bg rounded-[2rem] shadow-2xl editorial-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-editor-text p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center italic font-serif">B</div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest">Concierge</h4>
                  <p className="text-[8px] text-white/50 tracking-widest uppercase">Expert Assistance</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100 transition-opacity">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {chat.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-[11px] leading-relaxed tracking-wide ${
                    msg.role === 'user' 
                    ? 'bg-neutral-200 text-editor-text rounded-2xl rounded-tr-none' 
                    : 'bg-white editorial-border text-editor-text rounded-2xl rounded-tl-none italic'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 editorial-border rounded-xl">
                    <Loader2 size={12} className="animate-spin opacity-40" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-6 bg-white border-t border-editor-border flex gap-4">
              <input 
                type="text"
                placeholder="ENQUIRE ABOUT PRODUCTS..."
                className="flex-1 bg-transparent border-none text-[10px] uppercase tracking-widest focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="opacity-60 hover:opacity-100 transition-opacity disabled:opacity-20" disabled={isLoading}>
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-editor-text text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group"
      >
        <MessageCircle size={28} strokeWidth={1} />
      </button>
    </div>
  );
};
