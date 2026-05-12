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
  "1559925393-8be0ec4767c8","1567620905732-2d1ec7ab7445","1414235077428-338989a2e8c0","1546554137-f86b9593a222",
];

function OnePage() {
  const [tab, setTab] = useState<keyof typeof cardapio>("Principais");
  const [sent, setSent] = useState(false);
  const sec = "scroll-mt-32";

  return (
    <div className="bg-w4-bg text-stone-900" style={{ fontFamily: "var(--font-manrope)" }}>
      {/* Sticky local nav */}
      <nav className="sticky top-[40px] z-30 bg-w4-bg/95 backdrop-blur border-b border-w4-primary/10">
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
      <section id="top" className="relative h-[88vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80&auto=format" alt="Prato Sálvia" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-w4-primary/30 via-transparent to-w4-primary/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-w4-bg px-6">
          <p className="font-fraunces italic text-w4-copper">est. 2019 · belo horizonte</p>
          <h1 className="font-fraunces font-bold leading-[0.95] mt-4 text-balance" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            Sálvia
          </h1>
          <p className="mt-5 text-xl sm:text-2xl font-fraunces italic max-w-md">Sabor, lugar e tempo, à mesa.</p>
          <a href="#cardapio" className="absolute bottom-10 text-w4-bg/70 animate-bounce"><ChevronDown className="size-6" /></a>
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
        <div className="grid grid-cols-2 gap-3">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&auto=format" alt="" className="aspect-[3/4] object-cover rounded-2xl" />
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format" alt="" className="aspect-[3/4] object-cover rounded-2xl mt-8" />
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
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {galeria.map((id, i) => (
            <div key={i} className={`overflow-hidden rounded-xl ${i % 3 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}>
              <img src={`https://images.unsplash.com/photo-${id}?w=600&q=80&auto=format`} alt="" className="size-full object-cover hover:scale-105 transition duration-700" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Reservas */}
      <section id="reservas" className={`bg-w4-primary text-w4-bg py-20 ${sec}`}>
        <div className="ni-container max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-w4-copper font-semibold text-center">Reservas</p>
          <h2 className="mt-3 font-fraunces text-4xl sm:text-5xl text-center">Guarde sua mesa</h2>
          <p className="mt-3 text-center text-w4-bg/75">Recomendamos reservar com 48h de antecedência. Confirmamos por WhatsApp.</p>
          {sent ? (
            <div className="mt-10 text-center bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl">🌿</div>
              <p className="mt-3 font-fraunces text-2xl">Pedido recebido</p>
              <p className="text-sm text-w4-bg/70 mt-2">Em instantes confirmamos no seu WhatsApp.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-3">
              <input required placeholder="Seu nome" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm placeholder:text-white/50 outline-none focus:border-w4-copper" />
              <div className="grid grid-cols-3 gap-3">
                <input required type="date" className="bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-sm outline-none focus:border-w4-copper" />
                <input required type="time" className="bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-sm outline-none focus:border-w4-copper" />
                <input required type="number" min={1} max={20} placeholder="Pessoas" className="bg-white/10 border border-white/20 rounded-lg px-3 py-3 text-sm placeholder:text-white/50 outline-none focus:border-w4-copper" />
              </div>
              <input required placeholder="WhatsApp" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm placeholder:text-white/50 outline-none focus:border-w4-copper" />
              <textarea rows={2} placeholder="Observação (alergias, ocasião especial...)" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm placeholder:text-white/50 outline-none focus:border-w4-copper" />
              <button className="w-full bg-w4-copper text-w4-primary py-3.5 rounded-lg font-semibold hover:bg-w4-bg transition">Reservar mesa</button>
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
        <div className="aspect-[4/3] rounded-2xl bg-w4-primary/10 grid place-items-center text-w4-primary/40">[ mapa ]</div>
      </section>

      <footer className="bg-w4-primary text-w4-bg/70 py-6 text-center text-xs">
        © {new Date().getFullYear()} Sálvia · feito com cuidado em Belo Horizonte
      </footer>
    </div>
  );
}
