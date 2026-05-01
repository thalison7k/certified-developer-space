import type { Variants } from "framer-motion";

/**
 * Stagger container — animates children with a delay between each.
 */
export const staggerContainer = (stagger = 0.08, delayChildren = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/**
 * Fade + slide up child variant.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

/**
 * Scale-in child variant for chips / icons.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
};

/**
 * Default viewport options for whileInView animations.
 */
export const defaultViewport = { once: true, margin: "-80px" };
