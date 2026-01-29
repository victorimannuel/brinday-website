import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  count?: number;
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

const SkeletonLoader = ({ 
  count = 1, 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = true 
}: SkeletonLoaderProps) => {
  const skeletons = Array.from({ length: count }, (_, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity, 
        repeatType: 'reverse',
        delay: i * 0.1 
      }}
      className={`
        ${height} ${width} bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 
        ${rounded ? 'rounded-lg' : ''} ${className}
      `}
    />
  ));

  return <>{skeletons}</>;
};

export default SkeletonLoader;