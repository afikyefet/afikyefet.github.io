import { motion, useReducedMotion, Variants } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "blur" | "rotate" | "bounce" | "glow";

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
};

const ease = [0.22, 1, 0.36, 1];
const springConfig = { type: "spring", stiffness: 100, damping: 15 };

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  className,
  style,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const getVariants = (): Variants => {
    const baseHidden = { opacity: 0 };
    const baseVisible = {
      opacity: 1,
      transition: {
        delay,
        duration,
        ease,
      },
    };

    switch (direction) {
      case "up":
        return {
          hidden: { ...baseHidden, y: distance, scale: 0.95 },
          visible: {
            ...baseVisible,
            y: 0,
            scale: 1,
            transition: { ...baseVisible.transition, ...springConfig }
          },
        };
      case "down":
        return {
          hidden: { ...baseHidden, y: -distance, scale: 0.95 },
          visible: {
            ...baseVisible,
            y: 0,
            scale: 1,
            transition: { ...baseVisible.transition, ...springConfig }
          },
        };
      case "left":
        return {
          hidden: { ...baseHidden, x: distance, scale: 0.95 },
          visible: {
            ...baseVisible,
            x: 0,
            scale: 1,
            transition: { ...baseVisible.transition, ...springConfig }
          },
        };
      case "right":
        return {
          hidden: { ...baseHidden, x: -distance, scale: 0.95 },
          visible: {
            ...baseVisible,
            x: 0,
            scale: 1,
            transition: { ...baseVisible.transition, ...springConfig }
          },
        };
      case "scale":
        return {
          hidden: { ...baseHidden, scale: 0.8 },
          visible: {
            ...baseVisible,
            scale: 1,
            transition: {
              delay,
              duration: duration * 1.2,
              type: "spring",
              stiffness: 150,
              damping: 12
            }
          },
        };
      case "blur":
        return {
          hidden: { ...baseHidden, filter: "blur(12px)", scale: 0.9 },
          visible: {
            ...baseVisible,
            filter: "blur(0px)",
            scale: 1,
            transition: { delay, duration: duration * 1.1, ease }
          },
        };
      case "rotate":
        return {
          hidden: { ...baseHidden, rotate: -8, scale: 0.9, y: distance / 2 },
          visible: {
            ...baseVisible,
            rotate: 0,
            scale: 1,
            y: 0,
            transition: { ...baseVisible.transition, ...springConfig }
          },
        };
      case "bounce":
        return {
          hidden: { ...baseHidden, y: distance * 1.5, scale: 0.85 },
          visible: {
            ...baseVisible,
            y: 0,
            scale: 1,
            transition: {
              delay,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }
          },
        };
      case "glow":
        return {
          hidden: {
            ...baseHidden,
            scale: 0.92,
            filter: "brightness(0.5) blur(4px)"
          },
          visible: {
            ...baseVisible,
            scale: 1,
            filter: "brightness(1) blur(0px)",
            transition: { delay, duration: duration * 1.3, ease }
          },
        };
      default:
        return {
          hidden: baseHidden,
          visible: baseVisible,
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15, margin: "-50px" }}
      variants={getVariants()}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  style?: CSSProperties;
};

export function Stagger({
  children,
  delay = 0,
  staggerDelay = 0.08,
  className,
  style
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className} style={style}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function StaggerItem({ children, className, style }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className} style={style}>{children}</div>;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
          }
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

type ParallaxProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
};

export function Parallax({ children, speed = 0.5, className, style }: ParallaxProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className} style={style}>{children}</div>;

  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
      style={{
        ...style,
        willChange: "transform",
      }}
      transition={{ type: "tween", ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type FloatingProps = {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

export function Floating({
  children,
  amplitude = 10,
  duration = 3,
  className,
  style
}: FloatingProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className} style={style}>{children}</div>;

  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
