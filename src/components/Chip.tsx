import { motion } from 'framer-motion';

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export const Chip = ({ children, className = '' }: ChipProps) => {
  return (
    <motion.span
      className={`chip ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
};

