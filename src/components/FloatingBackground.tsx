import { motion } from 'framer-motion';
import React from 'react';

interface FloatingBackgroundProps {
  elementCount?: number;
  colors?: string[];
  shapes?: string[];
}

const FloatingBackground: React.FC<FloatingBackgroundProps> = ({ 
  elementCount = 20, 
  colors = [
    'bg-brand-pink', 'bg-brand-primary', 'bg-brand-secondary', 
    'bg-brand-accent', 'bg-brand-rose', 'bg-brand-blue', 'bg-white'
  ],
  shapes = ['rounded-full', 'rounded-lg', 'rounded-md', 'rounded-none']
}) => {
  const generateRandomElements = () => {
    return Array.from({ length: elementCount }, (_, i) => {
      const verticalPositions = [
        'top-1/6', 'top-1/5', 'top-1/4', 'top-1/3', 'top-2/5', 'top-1/2', 
        'top-3/5', 'top-2/3', 'top-3/4', 'top-4/5', 'top-5/6',
        'bottom-1/6', 'bottom-1/5', 'bottom-1/4', 'bottom-1/3', 
        'bottom-2/5', 'bottom-1/2', 'bottom-3/5', 'bottom-2/3', 'bottom-3/4', 'bottom-4/5', 'bottom-5/6'
      ];
      const horizontalPositions = [
        'left-1/6', 'left-1/5', 'left-1/4', 'left-1/3', 'left-2/5', 'left-1/2',
        'left-3/5', 'left-2/3', 'left-3/4', 'left-4/5', 'left-5/6',
        'right-1/6', 'right-1/5', 'right-1/4', 'right-1/3', 
        'right-2/5', 'right-1/2', 'right-3/5', 'right-2/3', 'right-3/4', 'right-4/5', 'right-5/6'
      ];
      
      const sizes = ['w-1 h-1', 'w-2 h-2', 'w-3 h-3', 'w-4 h-4', 'w-5 h-5', 'w-6 h-6', 'w-8 h-8', 'w-10 h-10', 'w-12 h-12', 'w-16 h-16', 'w-20 h-20'];
      const gradients = [
        '', 'bg-gradient-to-br from-brand-blue/20 to-brand-primary/20',
        'bg-gradient-to-r from-brand-accent to-brand-pink',
        'bg-gradient-to-br from-brand-blue/30 to-brand-primary/30',
        'bg-gradient-to-tr from-brand-pink/20 to-brand-rose/20',
        'bg-gradient-to-bl from-brand-secondary/20 to-brand-accent/20'
      ];
      
      const randomX = horizontalPositions[Math.floor(Math.random() * horizontalPositions.length)];
      const randomY = verticalPositions[Math.floor(Math.random() * verticalPositions.length)];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      const randomBorder = Math.random() > 0.5 ? 'border' : 'border-none';
      const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
      const randomDuration = 3 + Math.random() * 17;
      const randomDelay = Math.random() * 2;
      
      const shouldRotate = Math.random() > 0.4;
      const shouldScale = Math.random() > 0.3;
      const shouldOpacity = Math.random() > 0.4;
      const shouldFloat = Math.random() > 0.2;
      
      const animation: any = {};
      if (shouldRotate) {
        const rotateRange = 180 + Math.random() * 540;
        animation.rotate = [0, rotateRange];
      }
      if (shouldScale) {
        const scaleMin = 0.6 + Math.random() * 0.4;
        const scaleMax = 1.0 + Math.random() * 0.8;
        animation.scale = [scaleMin, scaleMax, scaleMin];
      }
      if (shouldOpacity) {
        const opacityMin = 0.1 + Math.random() * 0.4;
        const opacityMax = 0.6 + Math.random() * 0.4;
        animation.opacity = [opacityMin, opacityMax, opacityMin];
      }
      
      if (shouldFloat) {
        const yRange = 15 + Math.random() * 85;
        const xRange = 8 + Math.random() * 42;
        animation.y = [-yRange, yRange, -yRange];
        animation.x = [-xRange, xRange, -xRange];
      }
      
      const shadowChance = Math.random();
      const shadowClass = shadowChance > 0.4 
        ? (shadowChance > 0.7 
          ? `shadow-lg shadow-${randomColor.split('-')[1]}/40` 
          : `shadow-md shadow-${randomColor.split('-')[1]}/20`)
        : '';
      
      const className = [
        'absolute', randomX, randomY, randomSize,
        randomGradient || randomColor, randomShape, randomBorder,
        randomBorder !== 'border-none' ? `border-current/${10 + Math.floor(Math.random() * 40)}` : '',
        shadowClass,
        Math.random() > 0.8 ? 'backdrop-blur-sm' : ''
      ].filter(Boolean).join(' ');
      
      return (
        <motion.div
          key={`random-element-${i}`}
          animate={animation}
          transition={{ 
            duration: randomDuration,
            delay: randomDelay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={className}
        />
      );
    });
  };

  return (
    <div className="absolute inset-0 z-0">
      {/* Large gradient orbs - Static */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-brand-pink/10 via-brand-rose/5 to-transparent rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-brand-accent/10 via-brand-blue/5 to-transparent rounded-full blur-3xl"
      />
      
      {/* Static background elements for depth */}
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-brand-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-brand-accent/5 rounded-full blur-3xl"></div>
      
      {/* Randomly generated floating elements */}
      {generateRandomElements()}
      
      {/* Animated lines/waves */}
      <motion.div
        animate={{ 
          x: [-200, 200, -200],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/5 left-0 w-96 h-1 bg-gradient-to-r from-transparent via-brand-pink/30 to-transparent"
      />
      <motion.div
        animate={{ 
          x: [200, -200, 200],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 right-0 w-80 h-1 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"
      />
      
      {/* Animated dot pattern */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4 w-32 h-32"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '8px 8px'
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        animate={{ 
          y: [-30, 30, -30],
          x: [-15, 15, -15],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-brand-blue/20 to-brand-primary/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{ 
          y: [25, -25, 25],
          x: [10, -10, 10],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-gradient-to-tr from-brand-pink/20 to-brand-rose/20 rounded-lg blur-lg"
      />
    </div>
  );
};

export default FloatingBackground;