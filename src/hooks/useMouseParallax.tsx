import { useEffect, useState } from "react";

/**
 * Tracks mouse position normalized to [-0.5, 0.5] on both axes
 * relative to the viewport. Used to drive parallax 3D transforms.
 */
export const useMouseParallax = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch / reduced motion
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        setPos({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return pos;
};
