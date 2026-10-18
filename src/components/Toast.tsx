import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full border border-indigo-500/30 bg-white/95 dark:bg-[#141A2D]/95 backdrop-blur-md shadow-2xl flex items-center gap-2.5 text-xs font-mono text-slate-900 dark:text-white"
      >
        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
        <span>{message}</span>
      </motion.div>
    </AnimatePresence>
  );
};
