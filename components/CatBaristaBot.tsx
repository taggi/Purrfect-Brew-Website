import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getBaristaResponse } from '../services/geminiService';
import { Send, Cat, Sparkles } from 'lucide-react';

export const CatBaristaBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'สวัสดีจ้าเมี๊ยว! หนูชื่อ "กะทิ" เป็นบาริสต้าประจำร้าน วันนี้รู้สึกยังไงบ้าง? บอกกะทิได้เลย เดี๋ยวแนะนำเครื่องดื่มอร่อยๆ ให้เมี๊ยว~ ☕🐱',
    },
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    // Prepare history for context
    const history = messages.map(m => `${m.role === 'user' ? 'User' : 'Nong Kati'}: ${m.text}`);
    
    const responseText = await getBaristaResponse(userMsg.text, history);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
    };

    setMessages(prev => [...prev, botMsg]);
    setIsThinking(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 h-[calc(100vh-80px)] flex flex-col">
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-brown-100 rounded-full mb-4">
          <Cat size={40} className="text-brown-600" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-brown-900">Ask Nong Kati</h2>
        <p className="text-brown-500">บาริสต้าแมวอัจฉริยะ พร้อมเลือกเมนูที่ใช่สำหรับคุณ</p>
      </div>

      <div className="flex-1 bg-white rounded-3xl shadow-xl border border-brown-100 overflow-hidden flex flex-col">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-brown-600 text-white rounded-br-none'
                    : 'bg-white text-brown-800 border border-brown-100 rounded-bl-none'
                }`}
              >
                {msg.role === 'model' && (
                   <span className="block text-xs font-bold text-brown-400 mb-1">Nong Kati 🐱</span>
                )}
                <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-white border border-brown-100 rounded-2xl p-4 rounded-bl-none flex items-center space-x-2">
                <Sparkles size={16} className="text-brown-400 animate-spin" />
                <span className="text-sm text-brown-500">กะทิกำลังคิด...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-brown-100">
          <div className="flex items-center space-x-2 bg-brown-50 rounded-full px-4 py-2 border border-brown-200 focus-within:ring-2 focus-within:ring-brown-300 focus-within:border-transparent transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="บอกความรู้สึกของคุณวันนี้..."
              className="flex-1 bg-transparent border-none focus:outline-none text-brown-800 placeholder-brown-400"
              disabled={isThinking}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isThinking}
              className="p-2 bg-brown-600 text-white rounded-full hover:bg-brown-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-center mt-2">
             <span className="text-xs text-brown-300">Powered by Gemini AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};