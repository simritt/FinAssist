import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, LineChart } from "lucide-react";
import Logo from "../ui/Logo";

const floatIcons = [
  { icon: TrendingUp, pos: "top-16 left-10", delay: 0 },
  { icon: ShieldCheck, pos: "bottom-24 left-20", delay: 0.6 },
  { icon: LineChart, pos: "top-1/2 right-10", delay: 1.2 },
];

export default function AuthBrandingPanel({ title, subtitle }) {
  return (
    <div className="relative hidden lg:flex flex-col justify-between w-1/2 min-h-screen bg-gradient-to-br from-primary-700 via-primary-600 to-indigo-700 p-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-[length:200%_200%] animate-gradient-shift opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 60%)" }}
      />

      {floatIcons.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.2 }}
          className={`absolute ${f.pos} text-white/20 animate-float`}
          style={{ animationDelay: `${f.delay}s` }}
        >
          <f.icon size={f.icon === LineChart ? 90 : 64} />
        </motion.div>
      ))}

      <div className="relative z-10">
        <Logo size="md" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10"
      >
        <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">{title}</h2>
        <p className="text-primary-100 text-lg max-w-md">{subtitle}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 text-primary-200 text-sm"
      >
        © {new Date().getFullYear()} FinAssist. Bank-grade security, built in.
      </motion.div>
    </div>
  );
}
