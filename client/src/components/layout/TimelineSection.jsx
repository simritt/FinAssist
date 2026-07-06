import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Create your account",
    desc: "Sign up in seconds with bank-grade security and encrypted credentials.",
  },
  {
    step: "02",
    title: "Connect your portfolio",
    desc: "Import your holdings or start fresh — FinAssist adapts to your workflow.",
  },
  {
    step: "03",
    title: "Get real-time insight",
    desc: "Track performance, risk, and valuation across every position you hold.",
  },
  {
    step: "04",
    title: "Act with confidence",
    desc: "Use AI-backed sentiment and risk signals to make sharper decisions.",
  },
];

export default function TimelineSection() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-slate-50 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
            How it works
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            From sign-up to insight in minutes
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10 md:-translate-x-1/2" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex items-start gap-6 mb-14 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-14 md:ml-0" : "md:pl-14 md:ml-auto md:flex-row-reverse md:text-right"
              }`}
            >
              <div className="absolute left-6 md:left-auto md:static -translate-x-1/2 md:translate-x-0 w-12 h-12 shrink-0 rounded-full bg-primary-500 text-white font-bold flex items-center justify-center shadow-glow z-10">
                {s.step}
              </div>
              <div className="ml-16 md:ml-0">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
