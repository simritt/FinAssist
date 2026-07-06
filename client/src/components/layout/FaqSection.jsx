import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is my financial data secure?",
    a: "Yes. All passwords are hashed with bcrypt and sessions are secured with JWT tokens delivered via httpOnly cookies, so tokens are never exposed to client-side scripts.",
  },
  {
    q: "Do I need to link a real brokerage account?",
    a: "No. FinAssist works standalone for tracking and analysis. Brokerage integrations are on our roadmap for a future release.",
  },
  {
    q: "Is FinAssist free to use?",
    a: "FinAssist is currently a demonstration platform built as a portfolio project, free to explore in full.",
  },
  {
    q: "Can I use FinAssist on mobile?",
    a: "Absolutely. The entire dashboard, including charts and the sidebar, is fully responsive across desktop, tablet, and mobile.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-28 px-6 bg-slate-50 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-slate-900 dark:text-white">{item.q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={20} className="text-slate-500 shrink-0" />
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
