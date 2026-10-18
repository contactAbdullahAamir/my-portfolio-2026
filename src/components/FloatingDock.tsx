import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Briefcase,
  Layers,
  BookOpen,
  Mail,
  Sun,
  Moon,
  Volume2,
  VolumeX
} from 'lucide-react';
import { playClick, playToggle, getSoundEnabled, setSoundEnabled } from '../utils/sound';

interface FloatingDockProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCredentials: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  isDark,
  onToggleTheme,
}) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [soundOn, setSoundOn] = useState<boolean>(true);

  useEffect(() => {
    setSoundOn(getSoundEnabled());

    const handleScroll = () => {
      const sections = ['hero', 'work', 'lab', 'story', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setSoundEnabled(nextState);
    if (nextState) playToggle();
  };

  const navItems = [
    { id: 'hero', label: 'Intro', icon: Sparkles },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'lab', label: 'Blueprint', icon: Layers },
    { id: 'story', label: 'Story', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-1rem)] sm:max-w-fit px-1 sm:px-3">
      <motion.nav
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel flex items-center gap-0.5 sm:gap-1.5 p-1 sm:p-1.5 rounded-full border border-slate-300 dark:border-indigo-500/25 bg-white/95 dark:bg-[#0E1220]/90 shadow-2xl backdrop-blur-2xl"
      >
        {/* Nav Links */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                playClick();
                setActiveSection(item.id);
              }}
              className={`relative flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-indigo-600 dark:text-white font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDockPill"
                  className="absolute inset-0 rounded-full bg-slate-100 dark:bg-indigo-600 border border-slate-200 dark:border-indigo-400/30 shadow-sm"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600 dark:text-white' : ''}`} />
                <span className="hidden sm:inline">{item.label}</span>
              </span>
            </a>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-4 bg-slate-300 dark:bg-indigo-500/20 mx-0.5 sm:mx-1" />

        {/* Theme Switcher */}
        <button
          onClick={() => {
            playToggle();
            onToggleTheme();
          }}
          className="p-1.5 sm:p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-indigo-600/20 transition-colors cursor-pointer"
          title={`Switch to ${isDark ? 'Solar Light' : 'Cosmic Dark'} mode`}
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>

        {/* Sound FX Switcher */}
        <button
          onClick={toggleSound}
          className={`p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer ${
            soundOn
              ? 'text-indigo-600 dark:text-indigo-400 hover:bg-slate-100 dark:hover:bg-indigo-600/20'
              : 'text-slate-400 hover:text-slate-600'
          }`}
          title={soundOn ? 'Mute acoustic effects' : 'Enable acoustic effects'}
          aria-label="Toggle Sound"
        >
          {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </button>
      </motion.nav>
    </div>
  );
};
