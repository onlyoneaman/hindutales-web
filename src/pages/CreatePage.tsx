import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ChevronDown, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'mr', name: 'मराठी' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' }
];

const CreatePage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLang = languages.find(lang => lang.code === selectedLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-katha-bg to-katha-secondary/20 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <img src="/kaa-symbol.png" alt="Katha" className="w-10 h-10 mr-2" />
          <h1 className="text-3xl font-bold text-katha-primary">Create New Story</h1>
        </div>
        
        <div className="max-w-2xl mx-auto bg-katha-bg rounded-xl shadow-lg p-6 border border-katha-secondary">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Language Selection Dropdown */}
            <div className="space-y-2">
              <label className="block text-katha-primary font-medium text-center">Select Language</label>
              <div className="relative max-w-xs mx-auto" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full p-3 rounded-lg bg-katha-bg border border-katha-secondary flex items-center justify-between hover:border-katha-primary transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Languages size={20} className="text-katha-primary" />
                    <span className="text-katha-primary">{selectedLang?.name}</span>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-katha-primary transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-10 w-full mt-1 bg-katha-bg border border-katha-secondary rounded-lg shadow-lg max-h-60 overflow-y-auto"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setSelectedLanguage(lang.code);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full p-3 text-left hover:bg-katha-secondary/20 transition-colors ${
                          selectedLanguage === lang.code
                            ? 'bg-katha-primary text-katha-bg'
                            : 'text-katha-primary'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Story Prompt Input */}
            <div className="space-y-2">
              <label className="block text-katha-primary font-medium">Story Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the story you want to create..."
                className="w-full h-32 p-3 rounded-lg bg-katha-bg border border-katha-secondary focus:ring-2 focus:ring-katha-primary focus:border-transparent resize-none"
              />
            </div>

            {/* Generate Button */}
            <button
              type="submit"
              disabled={isGenerating || !prompt.trim()}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                isGenerating || !prompt.trim()
                  ? 'bg-katha-secondary/30 text-katha-primary/50 cursor-not-allowed'
                  : 'bg-katha-primary text-katha-bg hover:bg-katha-primary/90'
              }`}
            >
              {isGenerating ? 'Generating...' : 'Generate Story'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;