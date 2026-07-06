import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200",
  danger:
    "inline-flex items-center justify-center gap-2 rounded-xl bg-rose-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-rose-600 hover:-translate-y-0.5",
};

export default function Button({
  children,
  variant = "primary",
  className,
  isLoading = false,
  icon: Icon,
  ...props
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={clsx(variants[variant], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
      ) : (
        Icon && <Icon size={18} />
      )}
      {children}
    </motion.button>
  );
}
