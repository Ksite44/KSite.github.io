import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Start" },
  { to: "/about", label: "O mnie" },
  { to: "/#offers", label: "Oferta" },
  { to: "/contact", label: "Kontakt" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-2xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-2xl font-mono font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-violet-300 transition-all duration-300">
              &lt;/&gt;
            </span>
            <span className="font-bold text-lg tracking-tight text-white">KSite</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex px-5 py-2 text-sm font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Napisz do mnie
          </Link>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-slate-400 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block text-sm text-center font-medium px-4 py-3 mt-2 rounded-lg bg-indigo-500 text-white"
                onClick={() => setIsOpen(false)}
              >
                Napisz do mnie
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
