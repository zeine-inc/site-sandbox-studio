import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, Heart, Share2, Truck, RefreshCw, ShieldCheck, Leaf, Star, ChevronDown, Ruler } from "lucide-react";
import { findProduct, useCart, type Product } from "@/components/ecommerce/store";

export const Route = createFileRoute("/ecommerce/produto/$id")({
  loader: ({ params }) => {
    const p = findProduct(params.id);
    if (!p) throw notFound();
    return p;
  },
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData() as Product;
  const { add } = useCart();
  const [size, setSize] = useState<string>(p.sizes[0]);
  const [color, setColor] = useState<string>(p.colors[0]);
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [open, setOpen] = useState<string | null>("desc");
  const [fav, setFav] = useState(false);
  const combine: Product[] = (p.combine ?? []).map(findProduct).filter((x: Product | undefined): x is Product => Boolean(x));

  const gallery = [p.img, p.img.replace(/w=\d+/, "w=900") + "&sat=-20", p.img + "&blur=0"];
  const reviews = [
    { n: "Júlia M.", r: 5, t: "Caimento espetacular. Veste exatamente como na foto, tecido encorpado e fresco." },
    { n: "Marina L.", r: 5, t: "Já é a terceira peça do ateliê. Qualidade impecável, atendimento idem." },
    { n: "Helena P.", r: 4, t: "Adorei. Só achei que demorou um pouco a entrega, mas valeu a espera." },
  ];

  return (
    <div>
      <div className="ni-container py-6">
        <Link to="/ecommerce" className="inline-flex items-center gap-1 text-xs text-w2-ink/55 hover:text-w2-ink"><ChevronLeft className="size-3" /> voltar à coleção</Link>
      </div>

      <div className="ni-container pb-16 grid lg:grid-cols-[1fr_minmax(0,460px)] gap-10 lg:gap-14 items-start">
        {/* Galeria */}
        <div>
          <div className="grid grid-cols-[80px_1fr] gap-3">
            <div className="hidden sm:flex flex-col gap-2">
              {gallery.map((g, i) => (
                <button key={i} onClick={() => setActiveImg(i)} className={`aspect-[3/4] overflow-hidden bg-w2-ink/5 rounded-sm border-2 transition ${activeImg === i ? "border-w2-ink" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={g} alt="" className="size-full object-cover" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeImg} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="aspect-[3/4] overflow-hidden bg-w2-ink/5 rounded-sm relative group">
                <img src={gallery[activeImg]} alt={p.name} className="size-full object-cover" decoding="async" loading="eager" fetchPriority="high" />
                {p.badge && <span className="absolute top-4 left-4 bg-w2-ink text-white text-[10px] uppercase tracking-widest px-3 py-1.5">{p.badge}</span>}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button onClick={() => setFav(!fav)} aria-label="Favoritar" className="size-10 rounded-full bg-white/90 backdrop-blur grid place-items-center hover:bg-white transition shadow-sm">
                    <Heart className={`size-4 transition ${fav ? "fill-w2-primary text-w2-primary" : "text-w2-ink"}`} />
                  </button>
                  <button aria-label="Compartilhar" className="size-10 rounded-full bg-white/90 backdrop-blur grid place-items-center hover:bg-white transition shadow-sm">
                    <Share2 className="size-4 text-w2-ink" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="sm:hidden mt-3 flex gap-2">
            {gallery.map((_, i) => (
              <button key={i} onClick={() => setActiveImg(i)} className={`h-1 flex-1 transition ${activeImg === i ? "bg-w2-ink" : "bg-w2-ink/20"}`} />
            ))}
          </div>
        </div>

        {/* Detalhes */}
        <div className="lg:sticky lg:top-24">
          <div className="text-[10px] uppercase tracking-[0.3em] text-w2-primary font-semibold">{p.category}</div>
          <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl italic mt-2 leading-[1.05] break-words">{p.name}</h1>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 text-w2-primary" fill="currentColor" />)}</div>
            <span className="text-xs text-w2-ink/55">4.9 · 148 avaliações</span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <div className="text-3xl font-semibold">R$ {p.price}</div>
            <div className="text-xs text-w2-ink/55">ou 6x de R$ {(p.price/6).toFixed(2).replace(".",",")} sem juros</div>
          </div>

          <p className="mt-5 text-sm text-w2-ink/70 leading-relaxed">{p.desc}</p>

          {/* Cor */}
          <div className="mt-7">
            <div className="flex items-baseline justify-between mb-2.5">
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold">Cor</div>
              <div className="text-xs text-w2-ink/65">{color}</div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {p.colors.map((c) => (
                <button key={c} onClick={() => setColor(c)} className={`px-4 py-2 border text-xs uppercase tracking-wider transition ${color === c ? "border-w2-ink bg-w2-ink text-white" : "border-w2-ink/20 hover:border-w2-ink"}`}>{c}</button>
              ))}
            </div>
          </div>

          {/* Tamanho */}
          <div className="mt-5">
            <div className="flex items-baseline justify-between mb-2.5">
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold">Tamanho</div>
              <button className="text-xs text-w2-primary inline-flex items-center gap-1 hover:underline"><Ruler className="size-3" /> tabela de medidas</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.sizes.map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`min-w-12 px-3 py-2.5 border text-xs font-semibold transition ${size === s ? "border-w2-ink bg-w2-ink text-white" : "border-w2-ink/20 hover:border-w2-ink"}`}>{s}</button>
              ))}
            </div>
          </div>

          <button
            onClick={() => { add(p, { size, color }); setAdded(true); setTimeout(() => setAdded(false), 1800); }}
            className="mt-7 w-full bg-w2-ink text-white py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-w2-primary transition flex items-center justify-center gap-2"
          >
            {added ? <motion.span initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="inline-flex items-center gap-2"><Check className="size-4" /> adicionado à sacola</motion.span> : "Adicionar à sacola"}
          </button>

          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {[
              { i: Truck, t: "Frete grátis", s: "acima R$ 399" },
              { i: RefreshCw, t: "Troca 30d", s: "sem custo" },
              { i: ShieldCheck, t: "Pagamento", s: "seguro" },
            ].map((b) => (
              <div key={b.t} className="bg-w2-bg p-3 rounded-sm">
                <b.i className="size-4 text-w2-primary mx-auto" />
                <div className="text-[10px] uppercase tracking-wider font-semibold mt-1.5">{b.t}</div>
                <div className="text-[10px] text-w2-ink/55">{b.s}</div>
              </div>
            ))}
          </div>

          {/* Acordeões */}
          <div className="mt-7 border-t border-w2-ink/10">
            {[
              { id: "desc", t: "Detalhes da peça", c: <p>{p.desc} Costurado à mão em São Paulo, em pequenas tiragens. Etiqueta com data de produção e nome da costureira responsável.</p> },
              { id: "mat", t: "Composição & cuidados", c: <ul className="space-y-1.5"><li className="flex gap-2"><Leaf className="size-3.5 text-w2-primary mt-0.5 shrink-0" /> 100% linho português pré-lavado</li><li>· Lavar à mão em água fria ou ciclo delicado</li><li>· Secar à sombra, na horizontal</li><li>· Passar morno, do avesso</li></ul> },
              { id: "ent", t: "Entrega & devolução", c: <ul className="space-y-1.5"><li>· Frete grátis Brasil acima de R$ 399</li><li>· Envio em até 3 dias úteis (peças prontas)</li><li>· Sob encomenda: 10–15 dias úteis</li><li>· Troca/devolução em até 30 dias</li></ul> },
            ].map((s) => (
              <div key={s.id} className="border-b border-w2-ink/10">
                <button onClick={() => setOpen(open === s.id ? null : s.id)} className="w-full flex justify-between items-center py-4 text-left text-sm font-medium hover:text-w2-primary transition">
                  {s.t}
                  <ChevronDown className={`size-4 transition ${open === s.id ? "rotate-180" : ""}`} />
                </button>
                {open === s.id && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-sm text-w2-ink/70 pb-4 leading-relaxed">{s.c}</motion.div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Avaliações */}
      <section className="bg-w2-bg border-y border-w2-ink/10">
        <div className="ni-container py-16">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-w2-primary font-semibold">Avaliações</p>
              <h2 className="mt-2 font-cormorant text-4xl italic">4.9 / 5</h2>
              <div className="flex mt-2">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 text-w2-primary" fill="currentColor" />)}</div>
              <p className="text-xs text-w2-ink/60 mt-2">Baseado em 148 avaliações verificadas</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {reviews.map((r) => (
                <div key={r.n} className="bg-white border border-w2-ink/10 p-5 rounded-sm">
                  <div className="flex">{[...Array(r.r)].map((_, i) => <Star key={i} className="size-3.5 text-w2-primary" fill="currentColor" />)}</div>
                  <p className="mt-3 text-sm text-w2-ink/75 italic font-cormorant text-base leading-snug">"{r.t}"</p>
                  <div className="mt-3 text-xs"><b>{r.n}</b> · <span className="text-w2-ink/50">cliente verificada</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Combine com */}
      {combine.length > 0 && (
        <section className="ni-container py-16">
          <div className="text-center mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-w2-primary font-semibold">Look completo</p>
            <h2 className="mt-2 font-cormorant text-4xl italic">Combine com</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {combine.map((c) => c && (
              <Link key={c.id} to="/ecommerce/produto/$id" params={{ id: c.id }} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-w2-ink/5">
                  <img src={c.img} alt={c.name} className="size-full object-cover group-hover:scale-105 transition duration-700" decoding="async" loading="lazy" />
                </div>
                <div className="mt-3 text-sm font-medium">{c.name}</div>
                <div className="text-xs text-w2-ink/55">{c.category}</div>
                <div className="text-sm font-semibold mt-1">R$ {c.price}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
