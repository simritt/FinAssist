import { motion } from "framer-motion";

// Blue circular badge with white "F" monogram — the FinAssist brand mark
export default function Logo({ size = "md", showText = true, animate = false }) {
  const sizes = {
    sm: { circle: "w-8 h-8", text: "text-sm", label: "text-base" },
    md: { circle: "w-10 h-10", text: "text-lg", label: "text-xl" },
    lg: { circle: "w-14 h-14", text: "text-2xl", label: "text-2xl" },
  };
  const s = sizes[size];

  const Circle = animate ? motion.div : "div";
  const circleProps = animate
    ? { whileHover: { rotate: 12, scale: 1.05 }, transition: { type: "spring", stiffness: 300 } }
    : {};

  return (
    <div className="flex items-center gap-2.5 select-none">
      <Circle
        className={`${s.circle} rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-glow shrink-0`}
        {...circleProps}
      >
        <span className={`${s.text} font-extrabold text-white`}>F</span>
      </Circle>
      {showText && (
        <span className={`${s.label} font-bold tracking-tight text-slate-900 dark:text-white`}>
          FinAssist
        </span>
      )}
    </div>
  );
}
