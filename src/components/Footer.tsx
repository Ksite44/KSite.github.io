import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-16 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <span className="text-2xl font-mono font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                &lt;/&gt;
              </span>
              <span className="font-bold text-lg tracking-tight text-white">KSite</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Tworzę nowoczesne strony internetowe z pasją do czystego kodu i dobrego designu.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">Start</Link></li>
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">O mnie</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Kontakt</h3>
            <a href="mailto:ksite@proton.me" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors">
              ksite@proton.me
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} KSite. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
