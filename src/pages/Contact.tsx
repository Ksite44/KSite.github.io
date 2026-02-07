import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Send, Check, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1468703353096900618/zuuWCp_PP-2X_UhFAASjPX909cotrYMnb9_WRExqVnflDR-_a5Aol4Z4trMrIiYh2AA0";

const packages = [
  "Landing Page",
  "Strona Firmowa",
  "Sklep Internetowy",
  "Projekt Custom",
  "Inne / Pytanie",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    package: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      embeds: [
        {
          title: "📨 Nowa wiadomość z formularza",
          color: 0x6366f1,
          fields: [
            { name: "👤 Imię", value: formData.name || "Nie podano", inline: true },
            { name: "📧 Email", value: formData.email || "Nie podano", inline: true },
            { name: "📦 Pakiet", value: formData.package || "Nie wybrano", inline: true },
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
        setFormData({ name: "", email: "", package: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 4000);
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
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent" />
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
            className="text-4xl sm:text-5xl font-black mb-4 tracking-tight"
          >
            Napisz do <span className="text-indigo-400">mnie</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-slate-400 max-w-lg"
          >
            Masz pytanie? Potrzebujesz strony? Wyślij wiadomość — odpowiem najszybciej jak mogę.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Email</h3>
              <a
                href="mailto:ksite@proton.me"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                ksite@proton.me
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Czas odpowiedzi</h3>
              <p className="text-sm text-slate-500">Zazwyczaj do 24h</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5">
              <h3 className="font-semibold text-sm mb-3">FAQ</h3>
              <div className="space-y-3">
                {[
                  { q: "Ile kosztuje strona?", a: "Zależy od projektu. Najtaniej od 999 PLN za landing page." },
                  { q: "Jak długo to trwa?", a: "Od kilku dni do 2 tygodni, w zależności od rozmiaru." },
                  { q: "Co muszę przygotować?", a: "Teksty, zdjęcia i pomysł. Resztą się zajmę." },
                ].map((item) => (
                  <div key={item.q}>
                    <p className="text-xs font-medium text-slate-300">{item.q}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-slate-900/30 border border-white/5">
              <h2 className="text-xl font-bold mb-6">Wyślij wiadomość</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
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
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Pakiet / Pytanie</label>
                  <select
                    value={formData.package}
                    onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/5 text-white focus:outline-none focus:border-indigo-500/50 transition-colors text-sm appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>
                      Wybierz...
                    </option>
                    {packages.map((p) => (
                      <option key={p} value={p} className="bg-slate-900">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Wiadomość</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none text-sm"
                    placeholder="Opisz czego potrzebujesz..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] text-sm"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : submitStatus === "success" ? (
                    <>
                      <Check className="w-4 h-4" />
                      Wysłano!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Wyślij
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-emerald-400 text-xs"
                  >
                    Dzięki! Odpiszę najszybciej jak mogę 🙌
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-400 text-xs"
                  >
                    Coś poszło nie tak. Spróbuj ponownie lub napisz na ksite@proton.me
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
