import { motion } from "motion/react";

type ParticleProps = {
  /** Horizontal offset in px from the side (left or right). */
  offsetX: number;
  /** Which side this particle is on — sets left or right positioning. */
  side: "left" | "right";
  delay: number;
  duration: number;
};

export function Particle({ offsetX, side, delay, duration }: ParticleProps) {
  const style = side === "left" ? { left: offsetX } : { right: offsetX };
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: -800, opacity: [0, 1, 1, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      className="absolute bottom-0 w-1 h-1 bg-purple-400 rounded-full blur-sm"
      style={style}
      aria-hidden
    />
  );
}