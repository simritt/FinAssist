import Logo from "../ui/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Dashboard", "Portfolio Analyzer", "Valuation Calculator", "Risk Analyzer"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Support", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 dark:border-white/5 px-6 py-16 bg-white dark:bg-surface-dark">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              The unified platform for smarter, data-driven investment decisions.
            </p>
            <div className="flex gap-3 mt-6">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary-500 hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-slate-100 dark:border-white/5 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} FinAssist. Built as a demonstration fintech platform.
        </div>
      </div>
    </footer>
  );
}
