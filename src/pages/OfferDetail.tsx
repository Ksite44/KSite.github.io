import { useParams, useNavigate, Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Globe, Code, Palette, Zap, ArrowRight, Check, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1468703353096900618/zuuWCp_PP-2X_UhFAASjPX909cotrYMnb9_WRExqVnflDR-_a5Aol4Z4trMrIiYh2AA0";

interface Offer {
  id: string;
  title: string;
  fullDescription: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: React.ReactNode;
  color: string;
}

const offers: Record<string, Offer> = {
  landing: {
    id: "landing",
    title: "Landing Page",
    fullDescription:
      "Landing page to strona, która ma jeden cel — przekonać odwiedzającego do działania. Stworzę Ci stronę, która wygląda profesjonalnie i robi robotę.",
    price: "od 999 PLN",
    features: [
      "Responsywny design (mobile + desktop)",
      "Optymalizacja pod SEO",
      "Formularz kontaktowy",
      "Szybkie ładowanie",
      "Animacje i efekty",
      "Hosting i domena — pomogę ogarnąć",
    ],
    benefits: [
      "Realizacja w 3-7 dni",
      "Drobne poprawki gratis",
      "Pomoc po wdrożeniu",
    ],
    icon: <Globe className="w-7 h-7" />,
    color: "from-blue-500 to-cyan-500",
  },
  business: {
    id: "business",
    title: "Strona Firmowa",
    fullDescription:
      "Profesjonalna strona firmowa, która pokaże Twój biznes od najlepszej strony. Kilka podstron, czytelny layout i wszystko co potrzebne.",
    price: "od 2499 PLN",
    features: [
      "Do 7 podstron",
      "System zarządzania treścią (CMS)",
      "Blog / aktualności",
      "Mapa Google",
      "Certyfikat SSL",
      "Responsywność na wszystkich urządzeniach",
      "Formularz kontaktowy",
    ],
    benefits: [
      "Realizacja w 7-14 dni",
      "Pomoc z hostingiem i domeną",
      "Wsparcie po uruchomieniu",
      "Łatwa edycja treści",
    ],
    icon: <Code className="w-7 h-7" />,
    color: "from-violet-500 to-purple-500",
  },
  shop: {
    id: "shop",
    title: "Sklep Internetowy",
    fullDescription:
      "Sklep online gotowy do sprzedaży. Zintegruję płatności, dostawy i wszystko co potrzebne żebyś mógł zacząć sprzedawać od razu.",
    price: "od 4999 PLN",
    features: [
      "Nieograniczona liczba produktów",
      "Integracja płatności (Stripe, PayPal, Przelewy24)",
      "Panel administracyjny",
      "Zarządzanie zamówieniami",
      "Kody rabatowe",
      "Automatyczne maile do klientów",
      "Responsywny design",
    ],
    benefits: [
      "Gotowy do sprzedaży",
      "Szkolenie z obsługi",
      "Wsparcie techniczne",
      "Pomoc z konfiguracją płatności",
    ],
    icon: <Zap className="w-7 h-7" />,
    color: "from-amber-500 to-orange-500",
  },
  custom: {
    id: "custom",
    title: "Projekt Custom",
    fullDescription:
      "Masz nietypowy pomysł? Coś specjalnego? Pogadajmy — zrobimy to razem od zera, dokładnie tak jak chcesz.",
    price: "Wycena indywidualna",
    features: [
      "W pełni spersonalizowany design",
      "Dowolne funkcjonalności",
      "Integracje z zewnętrznymi usługami",
      "Aplikacja webowa",
      "API i backend",
      "Skalowalne rozwiązanie",
    ],
    benefits: [
      "Bez kompromisów",
      "Stały kontakt podczas realizacji",
      "Dokumentacja projektu",
      "Wsparcie po wdrożeniu",
    ],
    icon: <Palette className="w-7 h-7" />,
    color: "from-emerald-500 to-teal-500",
  },
};

export function OfferDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const offer = offers[id || ""];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!offer) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-xl font-bold mb-4">Nie znaleziono oferty</h1>
            <Link to="/" className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
              Wróć na stronę główną
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      embeds: [
        {
          title: `📨 Zapytanie — ${offer.title}`,
          color: 0x6366f1,
          fields: [
            { name: "👤 Imię", value: formData.name || "Nie podano", inline: true },
            { name: "📧 Email", value: formData.email || "Nie podano", inline: true },
            { name: "📦 Pakiet", value: offer.title, inline: true },
            { name: "💬 Wiadomość", value: formData.message || "Brak", inline: false },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => navigate("/"), 2500);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 4000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />

      {/* Header */}
      <div className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={`absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br ${offer.color} opacity-10 rounded-full blur-[100px]`}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Wróć
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-5"
          >
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center flex-shrink-0`}
            >
              {offer.icon}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{offer.title}</h1>
              <p className="text-lg text-indigo-400 font-semibold mb-3">{offer.price}</p>
              <p className="text-slate-400 max-w-2xl leading-relaxed">{offer.fullDescription}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left — features & benefits */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold mb-6">Co dostajesz</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {offer.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 p-4 rounded-xl bg-slate-900/30 border border-white/5"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold mb-6">Bonusy</h2>
              <div className="space-y-3">
                {offer.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 rounded-xl bg-slate-900/30 border border-white/5 hover:border-indigo-500/20 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 p-7 rounded-2xl bg-slate-900/30 border border-white/5">
              <h3 className="text-lg font-bold mb-5">Zainteresowany?</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Imię</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
                    placeholder="Twoje imię"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
                    placeholder="twoj@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Wiadomość</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none text-sm"
                    placeholder="Opisz czego potrzebujesz..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : submitStatus === "success" ? (
                    <>
                      <Check className="w-4 h-4" />
                      Wysłano! Przekierowuję...
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      Wyślij zapytanie
                    </>
                  )}
                </button>

                {submitStatus === "error" && (
                  <p className="text-center text-red-400 text-xs">
                    Błąd wysyłania. Napisz na ksite@proton.me
                  </p>
                )}
              </form>

              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs text-slate-500">
                  Wolisz maila?{" "}
                  <a href="mailto:ksite@proton.me" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    ksite@proton.me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
