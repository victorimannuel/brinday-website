import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      console.log('Scroll progress:', progress); // Debug log
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-2 z-[9999]"
    >
      <div className="relative w-full h-full bg-gray-200/30 backdrop-blur-sm">
        {/* Main progress bar */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-primary to-brand-secondary shadow-lg shadow-brand-primary/30"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
        {/* Glow effect */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-primary/40 to-brand-secondary/40 blur-md"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
        {/* Subtle top border for visibility */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default ScrollProgress;