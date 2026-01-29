import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

const Button = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled = false,
  className = '',
  type = 'button',
  target,
  rel
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 focus:ring-brand-primary',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary/90 focus:ring-brand-secondary',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = 'opacity-60 cursor-not-allowed pointer-events-none';
  
  const isDisabled = disabled || loading;
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${isDisabled ? disabledClasses : ''} ${className}`;

  const handleClick = async () => {
    if (onClick && !loading) {
      try {
        await onClick();
      } catch (error) {
        console.error('Button click error:', error);
      }
    }
  };

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={finalClasses}
        whileHover={!isDisabled ? { scale: 1.02 } : undefined}
        whileTap={!isDisabled ? { scale: 0.98 } : undefined}
      >
        {loading && <LoadingSpinner size="sm" color="white" />}
        {children}
      </motion.a>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      className={finalClasses}
      whileHover={!isDisabled ? { scale: 1.02 } : undefined}
      whileTap={!isDisabled ? { scale: 0.98 } : undefined}
    >
      {loading && <LoadingSpinner size="sm" color="white" />}
      {children}
    </motion.button>
  );
};

export default Button;