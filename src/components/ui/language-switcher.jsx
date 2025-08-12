import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { 
      code: 'en', 
      name: t('language.english'),
      nativeName: 'English',
      flag: '🇺🇸'
    },
    { 
      code: 'ar', 
      name: t('language.arabic'),
      nativeName: 'العربية',
      flag: '🇸🇦'
    },
    { 
      code: 'sq', 
      name: t('language.albanian'),
      nativeName: 'Shqip',
      flag: '🇦🇱'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Set initial direction based on current language
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (i18n.language === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', i18n.language);
    }
  }, [i18n.language]);

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    
    // Handle RTL for Arabic
    const htmlElement = document.documentElement;
    if (languageCode === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', languageCode);
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300"
        style={{ 
          backgroundColor: 'rgba(0, 200, 150, 0.1)',
          borderColor: 'rgba(0, 200, 150, 0.3)',
          color: '#FFFFFF'
        }}
        whileHover={{ 
          backgroundColor: 'rgba(0, 200, 150, 0.2)',
          scale: 1.05
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe size={16} />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              className="absolute top-full right-0 mt-2 py-2 rounded-xl border backdrop-blur-xl z-50 min-w-[200px]"
              style={{ 
                backgroundColor: 'rgba(19, 41, 70, 0.95)',
                borderColor: 'rgba(0, 200, 150, 0.3)'
              }}
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ type: "spring", bounce: 0.3 }}
            >
              {languages.map((language, index) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full text-left px-4 py-3 transition-all duration-300 flex items-center gap-3 ${
                    currentLanguage.code === language.code ? 'font-semibold' : ''
                  }`}
                  style={{ 
                    backgroundColor: currentLanguage.code === language.code ? 'rgba(0, 200, 150, 0.2)' : 'transparent',
                    color: currentLanguage.code === language.code ? '#00C896' : '#FFFFFF'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    backgroundColor: 'rgba(0, 200, 150, 0.1)',
                    x: 4
                  }}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{language.nativeName}</span>
                    {language.name !== language.nativeName && (
                      <span className="text-xs opacity-70">{language.name}</span>
                    )}
                  </div>
                  {currentLanguage.code === language.code && (
                    <motion.div
                      className="ml-auto w-2 h-2 rounded-full"
                      style={{ backgroundColor: '#00C896' }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
