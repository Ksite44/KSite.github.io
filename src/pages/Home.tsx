import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Globe, Code, Palette, Zap, ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Offer {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  color: string;
}

const offers: Offer[] = [
  {
    id: "landing",
    title: "Landing Page",
    description: "Strona, która robi wrażenie i przekonuje do działania.",
    price: "od 999 PLN",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "business",
    title: "Strona Firmowa",
    description: "Profesjonalna wizytówka Twojego biznesu w internecie.",
    price: "od 2499 PLN",
    icon: <Code className="w-6 h-6" />,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "shop",
    title: "Sklep Internetowy",
    description: "Nowoczesny sklep online gotowy do sprzedaży.",
    price: "od 4999 PLN",
    icon: <Zap className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "custom",
    title: "Projekt Custom",
    description: "Coś unikalnego? Zróbmy to razem od zera.",
    price: "Wycena indywidualna",
    icon: <Palette className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs text-slate-400">Tworzę strony, które działają</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]"
          >
            Cześć, jestem{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Kacper
            </span>
            <br />
            <span className="text-slate-300">Buduję strony www</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Projektuję i koduję nowoczesne strony internetowe. 
            Czysty design, szybkie ładowanie, zero komplikacji. 
            Powiedz mi czego potrzebujesz — ogarnę resztę.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-400 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 active:scale-95"
            >
              Zacznijmy współpracę
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#offers"
              className="px-8 py-4 rounded-xl border border-white/10 text-slate-300 font-semibold hover:bg-white/5 transition-all duration-300 active:scale-95"
            >
              Zobacz ofertę
            </a>
          </motion.div>
        </div>
      </section>

      {/* What I do */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Co mogę dla Ciebie{" "}
                <span className="text-indigo-400">zrobić</span>?
              </h2>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Tworzę strony od zera — od projektu graficznego po gotową, działającą stronę. 
                Nie używam szablonów. Każdy projekt jest szyty na miarę.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Zależy mi na tym, żeby Twoja strona nie tylko dobrze wyglądała, 
                ale też szybko się ładowała i była wygodna dla odwiedzających.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Więcej o mnie
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-2xl blur-xl" />
              <div className="relative grid grid-cols-2 gap-3">
                {[
                  { label: "Responsywność", desc: "Działa na każdym urządzeniu", color: "text-indigo-400" },
                  { label: "Szybkość", desc: "Błyskawiczne ładowanie", color: "text-violet-400" },
                  { label: "Czysty kod", desc: "Nowoczesne technologie", color: "text-emerald-400" },
                  { label: "Wsparcie", desc: "Pomogę po wdrożeniu", color: "text-amber-400" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="p-5 rounded-xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className={`text-lg font-bold mb-1 ${item.color}`}>{item.label}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Wybierz <span className="text-indigo-400">pakiet</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto text-sm">
              Kliknij w ofertę, żeby zobaczyć szczegóły. Każdy pakiet można dostosować do Twoich potrzeb.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to={`/offer/${offer.id}`}
                  className="group block h-full relative p-7 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:bg-slate-900/50"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${offer.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    {offer.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-slate-500 text-sm mb-5 leading-relaxed">{offer.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-indigo-400">{offer.price}</span>
                    <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 transition-all duration-300">
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent" />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px]"
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Masz pomysł na stronę?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Napisz do mnie — pogadamy, co mogę dla Ciebie zrobić. 
              Bez zobowiązań, bez presji.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Napisz do mnie
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
