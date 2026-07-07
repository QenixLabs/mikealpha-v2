import type { Transition, Variants } from 'framer-motion';

export const easeOutCustom: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export const fadeUpTransition: Transition = {
  duration: 0.6,
  ease: easeOutCustom,
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fadeUpTransition,
  },
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const slideLeftVariant: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: fadeUpTransition,
  },
};

export const slideRightVariant: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: fadeUpTransition,
  },
};
