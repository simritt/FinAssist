import { motion } from "framer-motion";
import clsx from "clsx";

export default function Card({ children, className, hover = true, delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={hover ? { y: -4 } : {}}
      className={clsx(
        "rounded-2xl bg-white dark:bg-surface-darkCard border border-slate-100 dark:border-white/5 shadow-card dark:shadow-card-dark p-5 transition-shadow duration-200",
        hover && "hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
