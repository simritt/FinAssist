import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function CtaSection() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl rounded-3xl bg-primary-600 px-8 py-16 md:px-16 md:py-20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Start investing smarter today.
          </h2>
          <p className="text-primary-100 text-lg max-w-xl mx-auto mb-10">
            Join thousands of investors already using FinAssist to track, analyze, and grow their portfolios.
          </p>
          <Link to="/register">
            <Button
              variant="secondary"
              className="bg-white text-primary-700 hover:bg-primary-50 border-transparent text-base px-8 py-3.5"
            >
              Get Started Free <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}