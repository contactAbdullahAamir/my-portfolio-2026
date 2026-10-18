import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { InteractiveLab } from './components/InteractiveLab';
import { StorySection } from './components/StorySection';
import { ContactSection } from './components/ContactSection';
import { FloatingDock } from './components/FloatingDock';
import { CredentialsDrawer } from './components/CredentialsDrawer';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Toast } from './components/Toast';

export function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isCredentialsOpen, setIsCredentialsOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('aa_portfolio_theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('aa_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('aa_portfolio_theme', 'light');
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div
      className={`min-h-screen relative selection:bg-indigo-500 selection:text-white transition-colors duration-300 ${
        isDark ? 'bg-[#07080D] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >
      {/* Cosmic Celestial Grain Overlay */}
      <div className="cosmic-grain fixed inset-0 pointer-events-none z-10 opacity-40" />

      {/* Interactive Astronomy Constellation Canvas */}
      <BackgroundCanvas isDark={isDark} />

      {/* Spring Custom Cursor */}
      <CustomCursor />

      {/* Main Layout Container */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Sticky Top Navbar with Social Media Icons */}
        <Navbar onOpenCredentials={() => setIsCredentialsOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero with Social Strip & 3-Layer Perspective Lens */}
          <Hero />

          {/* Flagship Systems: Interactive Production Stats & Architecture Topology */}
          <SelectedWork />

          {/* Guardrails Concurrency Sandbox */}
          <InteractiveLab />

          {/* The Story Trajectory */}
          <StorySection onOpenCredentials={() => setIsCredentialsOpen(true)} />

          {/* Frictionless Contact & Coordinates */}
          <ContactSection onShowToast={showToast} />
        </main>

        {/* Bottom Padding for Floating Dock */}
        <div className="h-24" />
      </div>

      {/* Floating Bottom Glass Dock */}
      <FloatingDock
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenCredentials={() => setIsCredentialsOpen(true)}
      />

      {/* Credentials Slide-Over Drawer */}
      <CredentialsDrawer
        isOpen={isCredentialsOpen}
        onClose={() => setIsCredentialsOpen(false)}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
