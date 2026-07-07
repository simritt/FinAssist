import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Card from "../ui/Card";
import AnimatedCounter from "../ui/AnimatedCounter";
import { formatCurrency } from "../../utils/formatters";

export default function StatCard({ icon: Icon, label, value, prefix = "$", decimals = 2, positive, delay = 0, iconColor }) {
  const [expanded, setExpanded] = useState(false);

  const toneClass =
    positive === true
      ? "text-emerald-600 dark:text-emerald-400"
      : positive === false
      ? "text-rose-600 dark:text-rose-400"
      : "text-slate-900 dark:text-white";

  const fullValue =
    prefix === "$" ? formatCurrency(value) : `${prefix}${value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;

  return (
    <>
      <Card
        variant="stat"
        delay={delay}
        className="flex flex-col gap-3 min-w-0 cursor-pointer"
        onClick={() => setExpanded(true)}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate">{label}</span>
          {Icon && (
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                iconColor || "bg-primary-500/10 text-primary-600 dark:text-primary-400"
              }`}
            >
              <Icon size={14} />
            </div>
          )}
        </div>
        {/* clamp() lets the number auto-shrink to fit the card width without ever truncating real data */}
        <p
          className={`font-display font-semibold leading-tight truncate ${toneClass}`}
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.35rem)" }}
        >
          <AnimatedCounter value={value} prefix={prefix} decimals={decimals} />
        </p>
      </Card>

      {/* Click-to-expand modal — always shows full precision, no matter the card width */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-surface-darkCard rounded-2xl p-8 max-w-sm w-full shadow-2xl relative border border-slate-100 dark:border-white/10"
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X size={18} />
              </button>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{label}</p>
              <p className={`font-display text-3xl font-bold ${toneClass}`}>{fullValue}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}