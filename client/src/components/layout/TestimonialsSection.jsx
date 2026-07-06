import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Retail Investor",
    text: "FinAssist replaced three separate apps for me. The risk analyzer alone caught an overexposure I hadn't noticed.",
  },
  {
    name: "Arjun Mehta",
    role: "Portfolio Manager",
    text: "The valuation calculator and historical tracker are genuinely fast. It feels built for people who actually trade.",
  },
  {
    name: "Sarah Chen",
    role: "Early Adopter",
    text: "Clean, fast, and the news sentiment analyzer has become part of my morning routine before market open.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
            Loved by investors
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            What our users are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7"
            >
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
