'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Cookie preferences state
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (!cookieChoice) {
      // Small delay before showing to ensure smooth initial load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleDenyAll = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay for preferences modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-brand-dark w-full max-w-lg rounded-2xl p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowPreferences(false)}
              className="absolute top-4 right-4 text-brand-gray hover:text-brand-dark dark:hover:text-brand-light transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-2xl font-serif text-brand-dark dark:text-brand-light mb-2">Cookie Preferences</h2>
            <p className="text-sm font-secondary text-brand-gray mb-6">
              Manage your cookie settings. Essential cookies are required for the site to function properly and cannot be disabled.
            </p>

            <div className="space-y-4 mb-8">
              {/* Essential */}
              <div className="flex items-center justify-between p-4 bg-brand-gray/5 rounded-xl border border-brand-gray/10">
                <div>
                  <h3 className="font-bold text-brand-dark dark:text-brand-light font-secondary text-sm mb-1">Essential Cookies</h3>
                  <p className="text-xs text-brand-gray font-secondary">Required for basic site functionality.</p>
                </div>
                <div className="text-brand-blue text-xs font-bold uppercase tracking-wider">Always On</div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-4 bg-brand-gray/5 rounded-xl border border-brand-gray/10">
                <div>
                  <h3 className="font-bold text-brand-dark dark:text-brand-light font-secondary text-sm mb-1">Analytics Cookies</h3>
                  <p className="text-xs text-brand-gray font-secondary">Help us understand how visitors interact with our site.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={preferences.analytics}
                    onChange={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  />
                  <div className="w-11 h-6 bg-brand-gray/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-brand-gray/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between p-4 bg-brand-gray/5 rounded-xl border border-brand-gray/10">
                <div>
                  <h3 className="font-bold text-brand-dark dark:text-brand-light font-secondary text-sm mb-1">Marketing Cookies</h3>
                  <p className="text-xs text-brand-gray font-secondary">Used to deliver advertisements relevant to your interests.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={preferences.marketing}
                    onChange={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  />
                  <div className="w-11 h-6 bg-brand-gray/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-brand-gray/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={handleDenyAll}>Deny All</Button>
              <Button variant="primary" onClick={handleSavePreferences}>Save Preferences</Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom Banner */}
      {!showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6 pointer-events-none flex justify-center">
          <div className="w-full max-w-5xl bg-white dark:bg-[#1a1a1a] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-2xl border border-brand-gray/10 p-5 sm:p-6 pointer-events-auto flex flex-col md:flex-row items-center gap-6 animate-in slide-in-from-bottom-full duration-500">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-brand-dark dark:text-brand-light font-secondary text-lg mb-2">We value your privacy</h3>
              <p className="text-sm font-secondary text-brand-gray">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full md:w-auto shrink-0">
              <button 
                onClick={() => setShowPreferences(true)}
                className="text-sm font-secondary font-bold text-brand-gray hover:text-brand-dark dark:hover:text-brand-light underline decoration-brand-gray/30 hover:decoration-brand-dark transition-all px-2"
              >
                Manage
              </button>
              <Button variant="outline" onClick={handleDenyAll}>
                Deny
              </Button>
              <Button variant="primary" onClick={handleAcceptAll}>
                Accept All
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
