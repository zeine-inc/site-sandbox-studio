import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Instagram, MessageCircle, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/onepage")({
  component: OnePage,
  head: () => ({ meta: [
    { title: "Sálvia — Cozinha Autoral & Bar" },
    { name: "description", content: "Sabor, lugar e tempo, à mesa. Reserve sua mesa no Sálvia." },
  ]}),
});

const cardapio = {
  Entradas: [
    { n: "Pão de fermentação natural", d: "Manteiga defumada e flor de sal", p: 28 },
    { n: "Burrata Sálvia", d: "Tomate confit, manjericão e azeite cítrico", p: 62 },
    { n: "Carpaccio de beterraba", d: "Queijo de cabra, nozes e mel de laranjeira", p: 48 },
    { n: "Croquetes de bacalhau", d: "Maionese de páprica defumada", p: 54 },
  ],
  Principais: [
    { n: "Risoto de cogumelos selvagens", d: "Parmesão envelhecido e trufa preta", p: 89 },
    { n: "Bife ancho 350g", d: "Purê rústico, manteiga de ervas, jus", p: 124 },
    { n: "Peixe do dia ao forno", d: "Legumes da estação e azeite de salsa", p: 98 },
    { n: "Nhoque de batata-doce", d: "Manteiga de sálvia, parmesão e nozes", p: 76 },
    { n: "Berinjela à parmegiana autoral", d: "Camadas de berinjela grelhada e mussarela de búfala", p: 68 },
  ],
  Sobremesas: [
    { n: "Petit gateau de chocolate 70%", d: "Sorvete de creme da casa", p: 38 },
    { n: "Cheesecake de goiabada", d: "Crumble de castanha-do-pará", p: 34 },
    { n: "Sorvete artesanal", d: "Sabores do dia: pergunte ao garçom", p: 26 },
    { n: "Tarte tatin de maçã", d: "Calda de caramelo salgado", p: 36 },
  ],
  Drinks: [
    { n: "Negroni Sálvia", d: "Gin infusionado com sálvia, vermute e Campari", p: 38 },
    { n: "Old Fashioned defumado", d: "Bourbon, açúcar mascavo e fumaça de carvalho", p: 42 },
    { n: "Caipirinha de manjericão", d: "Cachaça artesanal e limão-siciliano", p: 28 },
    { n: "Spritz de hibisco", d: "Prosecco, hibisco e laranja-baía", p: 34 },
  ],
};

const galeria = [
  "1414235077428-338989a2e8c0","1551218808-94e220e084d2","1559339352-11d035aa65de","1424847651672-bf20a4b0982b",
  "1559925393-8be0ec4767c8","1567620905732-2d1ec7ab7445","1551782450-a2132b4ba21d","1546554137-f86b9593a222",
];

function OnePage() {
  const [tab, setTab] = useState<keyof typeof cardapio>("Principais");
  const [sent, setSent] = useState(false);
  const sec = "scroll-mt-32";

  return (
    <div className="bg-w4-bg text-stone-900" style={{ fontFamily: "var(--font-manrope)" }}>
      {/* Sticky local nav */}
      <nav className="sticky top-14 sm:top-16 z-30 bg-w4-bg/95 backdrop-blur border-b border-w4-primary/10">
        <div className="ni-container flex items-center justify-between h-14">
          <a href="#top" className="font-fraunces italic text-2xl text-w4-primary">sálvia</a>
          <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest text-w4-primary/70">
            <a href="#sobre" className="hover:text-w4-primary">Sobre</a>
            <a href="#cardapio" className="hover:text-w4-primary">Cardápio</a>
            <a href="#galeria" className="hover:text-w4-primary">Galeria</a>
            <a href="#reservas" className="hover:text-w4-primary">Reservas</a>
            <a href="#local" className="hover:text-w4-primary">Visitar</a>
          </div>
          <a href="#reservas" className="bg-w4-primary text-white px-4 py-2 rounded-full text-xs font-semibold">Reservar mesa</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative min-h-[80svh] sm:min-h-[92vh] overflow-hidden bg-stone-950">
        <motion.img
          initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=85&auto=format" alt="Prato Sálvia" className="absolute inset-0 size-full object-cover" loading="eager" fetchPriority="high" decoding="async"
        />
        {/* Camadas de contraste fortes para legibilidade */}
        <div className="absolute inset-0 bg-stone-950/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/30 to-stone-950/95" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgba(12,10,9,0.55) 80%)" }} />
        <div className="relative z-10 min-h-[80svh] sm:min-h-[92vh] flex flex-col items-center justify-center text-center text-w4-bg px-6">
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="h-px w-16 bg-w4-copper origin-center mb-6" />
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="font-fraunces italic text-w4-copper tracking-[0.25em] text-xs sm:text-sm uppercase" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>est. 2019 · belo horizonte</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="font-fraunces font-bold leading-[0.9] mt-5 text-balance text-white drop-shadow-2xl" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", textShadow: "0 4px 30px rgba(0,0,0,0.7)" }}>
            Sálvia
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-6 text-xl sm:text-2xl font-fraunces italic max-w-md text-white/95" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}>Sabor, lugar e tempo, à mesa.</motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-9 flex flex-wrap gap-3 justify-center">
            <a href="#reservas" className="bg-w4-copper text-stone-950 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-white transition shadow-2xl">Reservar mesa</a>
            <a href="#cardapio" className="border border-white/40 backdrop-blur-sm bg-white/10 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/20 transition">Ver cardápio</a>
          </motion.div>
          <div className="mt-10 flex items-center gap-6 text-white/70 text-[10px] uppercase tracking-[0.3em]">
            <span>★★★★★ 4.9 Google</span><span className="hidden sm:inline">·</span><span className="hidden sm:inline">Top 10 BH · Veja</span>
          </div>
          <a href="#cardapio" className="absolute bottom-8 text-white/80 animate-bounce"><ChevronDown className="size-6" /></a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className={`ni-container py-20 ${sec} grid lg:grid-cols-2 gap-10 items-center`}>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-w4-copper font-semibold">A casa</p>
          <h2 className="mt-3 font-fraunces text-4xl sm:text-5xl text-w4-primary leading-tight">Uma cozinha que conversa com a estação.</h2>
          <p className="mt-5 text-stone-700 leading-relaxed">
            O Sálvia nasceu da vontade de cozinhar com o que a terra dá hoje. Trabalhamos com pequenos produtores da região, fermentações lentas e fogo de chão. O cardápio muda conforme a colheita — e por isso, cada visita é diferente.
          </p>
          <p className="mt-3 text-stone-700 leading-relaxed">
            Aqui se come devagar, se conversa, se brinda. A casa é pequena de propósito. E a chef Camila Vieira está sempre por perto.
          </p>
        </div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=85&auto=format" alt="Cozinha" loading="lazy" className="aspect-[3/4] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition duration-700" decoding="async"/>
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=85&auto=format" alt="Prato" loading="lazy" className="aspect-[3/4] object-cover rounded-2xl mt-8 shadow-xl hover:scale-[1.02] transition duration-700" decoding="async"/>
        </motion.div>
      </section>

      {/* Pratos em destaque */}
      <section className="bg-stone-950 text-w4-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 50%, rgba(176,114,72,0.4), transparent 60%)" }} />
        <div className="relative ni-container">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-w4-copper font-semibold">Assinatura da casa</p>
            <h2 className="mt-3 font-fraunces text-4xl sm:text-5xl">Pratos que contam histórias</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { img: "1546069901-ba9599a7e63c", n: "Risoto de cogumelos selvagens", d: "Parmesão envelhecido 24 meses, trufa preta fresca da estação." },
              { img: "1504674900247-0877df9cc836", n: "Bife ancho 350g", d: "Carne maturada 21 dias, manteiga de ervas do quintal, jus reduzido." },
              { img: "1565299624946-b28f40a0ae38", n: "Nhoque de batata-doce", d: "Massa fresca diária, manteiga de sálvia, parmesão e nozes-pecã." },
            ].map((p, i) => (
              <motion.div key={p.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <img src={`https://images.unsplash.com/photo-${p.img}?w=700&q=85&auto=format`} alt={p.n} loading="lazy" decoding="async" className="size-full object-cover group-hover:scale-110 transition duration-1000" />
                </div>
                <h3 className="mt-5 font-fraunces text-2xl">{p.n}</h3>
                <p className="mt-2 text-sm text-w4-bg/70 leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-14 max-w-2xl mx-auto text-center border-t border-white/10 pt-10">
            <p className="font-fraunces italic text-2xl sm:text-3xl leading-snug">"A gente cozinha pra quem vem com tempo. Aqui, comida é encontro."</p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-w4-copper">— Camila Vieira · chef e proprietária</p>
          </div>
        </div>
      </section>

      {/* Cardápio */}
      <section id="cardapio" className={`bg-white py-20 ${sec} border-y border-w4-primary/10`}>
        <div className="ni-container">
          <p className="text-xs uppercase tracking-[0.3em] text-w4-copper font-semibold text-center">Cardápio</p>
          <h2 className="mt-3 font-fraunces text-4xl sm:text-5xl text-w4-primary text-center">À mesa</h2>

          <div className="mt-8 flex justify-center gap-1 flex-wrap">
            {(Object.keys(cardapio) as Array<keyof typeof cardapio>).map((k) => (
              <button key={k} onClick={() => setTab(k)} className={`px-5 py-2 rounded-full text-sm transition ${tab === k ? "bg-w4-primary text-white" : "text-w4-primary hover:bg-w4-primary/10"}`}>{k}</button>
            ))}
          </div>

          <div className="mt-10 max-w-3xl mx-auto divide-y divide-w4-primary/10">
            {cardapio[tab].map((it) => (
              <motion.div key={it.n} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="py-5 flex justify-between gap-6">
                <div>
                  <h3 className="font-fraunces text-xl text-w4-primary">{it.n}</h3>
                  <p className="text-sm text-stone-600 mt-1">{it.d}</p>
                </div>
                <div className="font-fraunces text-xl text-w4-copper shrink-0">R$ {it.p}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className={`ni-container py-20 ${sec}`}>
        <p className="text-xs uppercase tracking-[0.3em] text-w4-copper font-semibold text-center">Galeria</p>
        <h2 className="mt-3 font-fraunces text-4xl sm:text-5xl text-w4-primary text-center">A casa por dentro</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {galeria.map((id, i) => (
            <div key={i} className={`overflow-hidden rounded-xl ${i % 3 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
              <img src={`https://images.unsplash.com/photo-${id}?w=600&q=80&auto=format`} alt="" className="size-full object-cover hover:scale-105 transition duration-700" loading="lazy" decoding="async"/>
            </div>
          ))}
        </div>
      </section>

      {/* Reservas */}
      <section id="reservas" className={`relative bg-w4-primary text-w4-bg py-20 ${sec} overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 30%, rgba(176,114,72,0.5), transparent 55%), radial-gradient(circle at 80% 80%, rgba(176,114,72,0.3), transparent 60%)" }} />
        <div className="relative ni-container max-w-xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-w4-copper font-semibold">
              <span className="h-px w-8 bg-w4-copper" /> Reservas <span className="h-px w-8 bg-w4-copper" />
            </div>
            <h2 className="mt-4 font-fraunces text-4xl sm:text-5xl">Guarde sua mesa</h2>
            <p className="mt-3 text-w4-bg/75">Recomendamos reservar com 48h de antecedência. Confirmamos por WhatsApp em até 30 min.</p>
          </div>
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-10 text-center bg-white/5 backdrop-blur rounded-2xl p-10 border border-w4-copper/30">
              <div className="text-5xl">🌿</div>
              <p className="mt-4 font-fraunces text-3xl">Pedido recebido</p>
              <p className="text-sm text-w4-bg/70 mt-3">Em instantes confirmamos no seu WhatsApp.</p>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.25em] text-w4-copper font-semibold">Nome completo</label>
                <input required placeholder="Como devemos te chamar" className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2.5 text-base placeholder:text-white/35 outline-none focus:border-w4-copper transition" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.25em] text-w4-copper font-semibold">Data</label>
                  <input required type="date" className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2.5 text-sm outline-none focus:border-w4-copper transition [color-scheme:dark]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.25em] text-w4-copper font-semibold">Horário</label>
                  <input required type="time" className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2.5 text-sm outline-none focus:border-w4-copper transition [color-scheme:dark]" />
                </div>
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <label className="text-[10px] uppercase tracking-[0.25em] text-w4-copper font-semibold">Pessoas</label>
                  <input required type="number" min={1} max={20} placeholder="2" className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2.5 text-sm placeholder:text-white/35 outline-none focus:border-w4-copper transition" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.25em] text-w4-copper font-semibold">WhatsApp</label>
                <input required placeholder="(31) 99000-0000" className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2.5 text-base placeholder:text-white/35 outline-none focus:border-w4-copper transition" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.25em] text-w4-copper font-semibold">Observação <span className="text-white/40 normal-case tracking-normal">(opcional)</span></label>
                <textarea rows={2} placeholder="Alergias, ocasião especial, restrições..." className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-2.5 text-sm placeholder:text-white/35 outline-none focus:border-w4-copper transition resize-none" />
              </div>

              <button className="w-full mt-4 bg-w4-copper text-w4-primary py-4 rounded-full font-bold tracking-wide hover:bg-w4-bg transition shadow-xl group inline-flex items-center justify-center gap-2">
                Reservar mesa
                <span className="group-hover:translate-x-1 transition">→</span>
              </button>
              <p className="text-[11px] text-w4-bg/50 text-center">Ao enviar, você concorda em receber a confirmação por WhatsApp.</p>
            </form>
          )}
        </div>
      </section>


      {/* Local & horário */}
      <section id="local" className={`ni-container py-20 ${sec} grid lg:grid-cols-2 gap-10`}>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-w4-copper font-semibold">Visitar</p>
          <h2 className="mt-3 font-fraunces text-4xl text-w4-primary">Onde nos encontrar</h2>
          <div className="mt-6 space-y-4 text-stone-700">
            <div className="flex gap-3"><MapPin className="size-5 text-w4-copper shrink-0 mt-0.5" /><span>Rua das Pitangueiras, 142<br />Santa Tereza · Belo Horizonte / MG</span></div>
            <div className="flex gap-3"><Clock className="size-5 text-w4-copper shrink-0 mt-0.5" />
              <div className="text-sm">
                <div>Ter a Qui · 18h às 23h</div>
                <div>Sex e Sáb · 12h às 15h e 18h às 00h</div>
                <div>Dom · 12h às 16h</div>
                <div>Seg · fechado</div>
              </div>
            </div>
            <div className="flex gap-3"><MessageCircle className="size-5 text-w4-copper shrink-0 mt-0.5" /><span>(31) 99000-1142</span></div>
            <div className="flex gap-3"><Instagram className="size-5 text-w4-copper shrink-0 mt-0.5" /><span>@salvia.cozinha</span></div>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-w4-primary/10 shadow-xl">
          <iframe
            title="Localização do Sálvia — Santa Tereza, Belo Horizonte"
            src="https://www.google.com/maps?q=Rua+Mármore+Santa+Tereza+Belo+Horizonte&output=embed"
            className="size-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <footer className="bg-w4-primary text-w4-bg/70 py-6 text-center text-xs">
        © {new Date().getFullYear()} Sálvia · feito com cuidado em Belo Horizonte
      </footer>
    </div>
  );
}
