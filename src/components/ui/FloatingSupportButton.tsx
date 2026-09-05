'use client';
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function FloatingSupportButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-brand-dark dark:bg-brand-light text-white dark:text-brand-dark rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
        aria-label="Chat with support"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window Overlay */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white dark:bg-[#1a1a1a] border border-brand-gray/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-brand-dark dark:bg-brand-light text-white dark:text-brand-dark p-4 flex justify-between items-center">
            <div>
              <h3 className="font-serif font-bold text-lg">Support</h3>
              <p className="text-xs font-secondary opacity-80 uppercase tracking-widest">We typically reply in minutes</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-80 hover:opacity-100 transition-opacity">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="h-64 sm:h-80 p-4 overflow-y-auto bg-brand-gray/5 dark:bg-brand-dark/50 flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold font-secondary">BR</span>
              </div>
              <div className="bg-white dark:bg-brand-dark p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-brand-dark dark:text-brand-light font-secondary border border-brand-gray/10">
                Hi there! 👋 How can we help you today?
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-[#1a1a1a] border-t border-brand-gray/10 flex gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 px-4 py-2 bg-brand-gray/10 dark:bg-brand-dark border-transparent rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue font-secondary text-brand-dark dark:text-brand-light placeholder:text-brand-gray"
            />
            <Button size="icon" className="rounded-full shrink-0 w-10 h-10">
              <Send className="w-4 h-4 ml-[-2px]" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
