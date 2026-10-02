import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Safe monkey-patch for React 18/19 to prevent crash when Google Translate modifies DOM nodes
function patchDOMForGoogleTranslate() {
  if (typeof window === 'undefined' || typeof Node === 'undefined' || !Node.prototype) return;

  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child.parentNode !== this) {
      return child;
    }
    return originalRemoveChild.apply(this, [child]) as T;
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      return newNode;
    }
    return originalInsertBefore.apply(this, [newNode, referenceNode]) as T;
  };
}

// Helper to set Google Translate cookie
function setGoogleTranslateCookie(lang: Language) {
  const cookieVal = lang === 'hi' ? '/en/hi' : '/en/en';
  const hostname = window.location.hostname;

  // Set for current path
  document.cookie = `googtrans=${cookieVal}; path=/`;

  // Set for root domain & localhost
  if (hostname) {
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${hostname}`;
    if (hostname.includes('.')) {
      document.cookie = `googtrans=${cookieVal}; path=/; domain=.${hostname}`;
    }
  }

  if (lang === 'en') {
    // Also clear cookie when reverting to English
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    if (hostname) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname}`;
      if (hostname.includes('.')) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname}`;
      }
    }
  }
}

// Helper to trigger Google Translate dropdown
function triggerGoogleTranslateElement(lang: Language): boolean {
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event('change'));
    return true;
  }
  return false;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem('language');
    if (saved === 'hi' || saved === 'en') return saved;
    // Check cookie
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
    if (match && (match[1] === 'hi' || match[1] === 'en')) {
      return match[1] as Language;
    }
    return 'en';
  });

  useEffect(() => {
    patchDOMForGoogleTranslate();
  }, []);

  const changeLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
    setGoogleTranslateCookie(newLang);

    // Attempt to trigger google translate widget directly
    const triggered = triggerGoogleTranslateElement(newLang);

    if (!triggered) {
      // If element not ready yet, poll for it briefly
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (triggerGoogleTranslateElement(newLang) || attempts > 10) {
          clearInterval(interval);
          if (attempts > 10 && newLang === 'hi') {
            // If still not translated, reload page so cookie takes effect
            window.location.reload();
          }
        }
      }, 250);
    } else if (newLang === 'en') {
      // When reverting from Hindi to English, sometimes Google Translate needs a fresh DOM reload to reset all text
      const wasHindi = document.cookie.includes('/en/hi') || document.documentElement.classList.contains('translated-ltr');
      if (wasHindi) {
        setTimeout(() => {
          window.location.reload();
        }, 150);
      }
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    changeLanguage(language === 'en' ? 'hi' : 'en');
  }, [language, changeLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
    setGoogleTranslateCookie(language);

    // On initial mount, if saved language is Hindi, trigger translation when widget is ready
    if (language === 'hi') {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (triggerGoogleTranslateElement('hi') || attempts > 15) {
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
