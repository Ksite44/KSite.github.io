import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Code, Zap, Palette, Heart, Target, ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Navigation />

      {/* Header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.08),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black mb-6 tracking-tight"
          >
            Cześć, jestem <span className="text-indigo-400">Kacper</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            Pasjonat web developmentu, który kocha tworzyć rzeczy od zera. 
            Uczę się codziennie i wkładam serce w każdy projekt.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Kim jestem?</h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Jestem młodym web developerem, który dopiero zaczyna swoją przygodę z tworzeniem stron. 
              Ale to nie znaczy, że robię to byle jak — wręcz przeciwnie.
            </p>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Każdy projekt traktuję jako okazję do nauki i stworzenia czegoś naprawdę fajnego. 
              Korzystam z nowoczesnych technologii jak React i Tailwind CSS, 
              bo zależy mi na jakości kodu i wyglądzie końcowego produktu.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Moim celem jest pomaganie ludziom i firmom w zaistnieniu w internecie. 
              Wierzę, że dobra strona nie musi kosztować fortuny.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-2xl blur-xl" />
            <div className="relative p-6 rounded-2xl bg-slate-900/50 border border-white/5 space-y-4">
              {[
                { icon: <Code className="w-5 h-5 text-indigo-400" />, bg: "bg-indigo-500/10", title: "React & Tailwind", desc: "Nowoczesny stack technologiczny" },
                { icon: <Target className="w-5 h-5 text-violet-400" />, bg: "bg-violet-500/10", title: "Indywidualne podejście", desc: "Każdy projekt jest inny" },
                { icon: <Heart className="w-5 h-5 text-emerald-400" />, bg: "bg-emerald-500/10", title: "Pasja", desc: "Robię to, bo to kocham" },
                { icon: <Rocket className="w-5 h-5 text-amber-400" />, bg: "bg-amber-500/10", title: "Ciągły rozwój", desc: "Codziennie uczę się czegoś nowego" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/50">
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-center"
          >
            Na czym mi zależy
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: <Zap className="w-5 h-5 text-indigo-400" />,
                bg: "bg-indigo-500/10",
                title: "Szybkość",
                desc: "Strona musi się ładować szybko. Nikt nie lubi czekać, więc dbam o wydajność."
              },
              {
                icon: <Palette className="w-5 h-5 text-violet-400" />,
                bg: "bg-violet-500/10",
                title: "Estetyka",
                desc: "Stawiam na czysty, nowoczesny design. Bez chaosu, bez zbędnych elementów."
              },
              {
                icon: <Heart className="w-5 h-5 text-emerald-400" />,
                bg: "bg-emerald-500/10",
                title: "Komunikacja",
                desc: "Lubię gadać z klientami. Odpowiadam szybko i tłumaczę rzeczy prostym językiem."
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-center"
          >
            Jak to wygląda?
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Rozmowa", desc: "Piszesz do mnie, gadamy o tym czego potrzebujesz." },
              { step: "02", title: "Projekt", desc: "Tworzę makietę — widzisz jak strona będzie wyglądać." },
              { step: "03", title: "Kodowanie", desc: "Piszę kod, buduję stronę. Wysyłam Ci postępy." },
              { step: "04", title: "Gotowe!", desc: "Strona ląduje w sieci. Pomagam z wdrożeniem." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-slate-900/30 border border-white/5"
              >
                <span className="text-4xl font-black text-white/5 absolute top-4 right-4">{item.step}</span>
                <h3 className="font-semibold mb-2 mt-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-violet-500/5" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />

          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Chcesz pogadać o projekcie?
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm">
              Napisz do mnie — odpowiem najszybciej jak mogę. 
              Bez zobowiązań, bez presji.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            >
              Napisz do mnie
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
