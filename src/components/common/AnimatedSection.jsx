import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedSection triggers smooth Elementor-style entrance animations
 * as sections enter the user's viewport.
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.15
}) {
  const directionOffset = {
    up: { y: 45, x: 0 },
    down: { y: -45, x: 0 },
    left: { x: 45, y: 0 },
    right: { x: -45, y: 0 },
    none: { x: 0, y: 0 }
  };

  const offset = directionOffset[direction] || directionOffset.up;

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y, scale: direction === 'none' ? 0.95 : 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
