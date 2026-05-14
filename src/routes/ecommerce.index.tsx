import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight, Truck, ShieldCheck, RefreshCw, Sparkles, Leaf, Mail } from "lucide-react";
import { PRODUCTS, useCart } from "@/components/ecommerce/store";

export const Route = createFileRoute("/ecommerce/")({
  component: EcomHome,
  head: () => ({ meta: [{ title: "Ateliê Ravena — Moda Autoral Brasileira" }, { name: "description", content: "Coleção autoral feita à mão. Linho, seda e algodão pima em peças atemporais." }] }),
});

const slides = [
  { t: "Coleção Solstício", s: "O verão como ele deveria ser: leve, sensorial, livre.", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800&q=85&auto=format" },
  { t: "Edição Linho Lavado", s: "Tecidos que melhoram a cada uso. Caimento que abraça.", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800&q=85&auto=format" },
  { t: "Acessórios em Latão", s: "Esculturas para vestir, criadas em parceria com Nina Martinelli.", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1800&q=85&auto=format" },
];

const cats = [
  { name: "Vestidos", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&q=85&auto=format" },
  { name: "Blusas", img: "https://images.unsplash.com/photo-1551048632-24e444b48a3e?w=700&q=85&auto=format" },
  { name: "Calças", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700&q=85&auto=format" },
  { name: "Acessórios", img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&q=85&auto=format" },
];

function EcomHome() {
  const [slide, setSlide] = useState(0);
  const next = () => setSlide((s) => (s + 1) % slides.length);
  const prev = () => setSlide((s) => (s - 1 + slides.length) % slides.length);
  const { add, category, setCategory } = useCart();
  const cur = slides[slide];
  const filtered = category === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  return (
    <div>
      {/* Hero rotativo */}
      <section className="relative min-h-[60svh] sm:min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={cur.t}
            initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img src={cur.img} alt={cur.t} className="size-full object-cover" decoding="async" loading="eager" fetchPriority="high"/>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 ni-container h-full flex items-end pb-12 sm:pb-16">
          <div className="max-w-xl text-white">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/80">Drop 03 · Verão 26</p>
            <h1 className="mt-3 font-cormorant text-4xl sm:text-6xl lg:text-7xl leading-[1.05] italic break-words">{cur.t}</h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90">{cur.s}</p>
            <button className="mt-5 sm:mt-6 bg-white text-w2-ink px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-widest hover:bg-w2-primary hover:text-white transition">Explorar coleção</button>
          </div>
        </div>
        <button onClick={prev} aria-label="Anterior" className="hidden sm:grid absolute left-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/20 backdrop-blur place-items-center text-white hover:bg-white/40"><ChevronLeft className="size-5" /></button>
        <button onClick={next} aria-label="Próximo" className="hidden sm:grid absolute right-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/20 backdrop-blur place-items-center text-white hover:bg-white/40"><ChevronRight className="size-5" /></button>
        <div className="absolute bottom-6 right-6 z-10 flex gap-1.5">
          {slides.map((_, i) => <button key={i} onClick={() => setSlide(i)} className={`h-0.5 transition-all ${slide === i ? "w-8 bg-white" : "w-4 bg-white/40"}`} />)}
        </div>
      </section>

      {/* Benefícios bar */}
      <section className="bg-w2-ink text-white border-b border-white/10">
        <div className="ni-container py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px] sm:text-xs">
          {[
            { i: Truck, t: "Frete grátis", s: "Acima de R$ 399" },
            { i: RefreshCw, t: "Troca fácil", s: "Em até 30 dias" },
            { i: ShieldCheck, t: "Compra segura", s: "Pix · cartão até 6x" },
            { i: Sparkles, t: "Feito à mão", s: "Pequenos lotes" },
          ].map((b) => (
            <div key={b.t} className="flex items-center gap-3 justify-center">
              <b.i className="size-4 text-w2-primary" />
              <div className="leading-tight"><div className="font-semibold uppercase tracking-wider">{b.t}</div><div className="text-white/55 text-[10px]">{b.s}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorias */}
      <section className="ni-container py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cats.map((c, i) => (
            <motion.button type="button" onClick={() => setCategory(c.name)} key={c.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group relative aspect-[4/5] overflow-hidden block rounded-sm text-left">
              <img src={c.img} alt={c.name} loading="lazy" className="size-full object-cover group-hover:scale-110 transition duration-1000" decoding="async"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/90 transition" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white font-cormorant text-2xl sm:text-3xl tracking-wider italic block">{c.name}</span>
                <span className="text-white/90 text-[10px] uppercase tracking-[0.3em] mt-1 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">Ver coleção <ChevronRight className="size-3" /></span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="ni-container pb-16 scroll-mt-32">
        <div className="text-center mb-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-w2-primary font-semibold">Em destaque</p>
          <h2 className="mt-2 font-cormorant text-4xl sm:text-5xl italic">{category === "Todos" ? "Peças que ficam." : category}</h2>
          {category !== "Todos" && (
            <button onClick={() => setCategory("Todos")} className="mt-3 text-[11px] uppercase tracking-[0.2em] text-w2-primary underline underline-offset-4">ver tudo</button>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Todos","Vestidos","Blusas","Calças","Acessórios"].map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full transition ${category === c ? "bg-w2-ink text-white" : "bg-w2-ink/5 text-w2-ink/70 hover:bg-w2-ink/10"}`}>{c}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (i % 4) * 0.05 }} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-w2-ink/5">
                <Link to="/ecommerce/produto/$id" params={{ id: p.id }}>
                  <img src={p.img} alt={p.name} className="size-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" decoding="async"/>
                </Link>
                {p.badge && <span className="absolute top-3 left-3 bg-w2-ink text-white text-[10px] uppercase tracking-widest px-2 py-1">{p.badge}</span>}
                <button onClick={() => add(p)} aria-label="Adicionar à sacola" className="absolute bottom-3 right-3 size-10 rounded-full bg-white text-w2-ink grid place-items-center shadow-md opacity-0 group-hover:opacity-100 hover:bg-w2-primary hover:text-white transition active:scale-95">
                  <Plus className="size-4" />
                </button>
              </div>
              <Link to="/ecommerce/produto/$id" params={{ id: p.id }} className="block mt-3">
                <div className="text-sm font-medium">{p.name}</div>
                <div className="text-xs text-w2-ink/55">{p.category}</div>
                <div className="text-sm mt-1 font-semibold">R$ {p.price}</div>
              </Link>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-sm text-w2-ink/55 py-16">Nenhuma peça nesta categoria — em breve.</div>
          )}
        </div>
      </section>

      {/* Banner */}
      <section className="relative min-h-[45svh] sm:min-h-[55vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=1600&q=80&auto=format" alt="" className="absolute inset-0 size-full object-cover" decoding="async" loading="lazy"/>
        <div className="absolute inset-0 bg-w2-primary/40 mix-blend-multiply" />
        <div className="relative z-10 min-h-[45svh] sm:min-h-[55vh] flex items-center justify-center text-center text-white px-6 py-12">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">Pré-venda exclusiva</p>
            <h2 className="font-cormorant italic text-4xl sm:text-6xl mt-2 break-words">Coleção Verão 26</h2>
            <p className="mt-3 text-white/85 text-sm sm:text-base">Reserve as peças antes de todo mundo. Lista de prioridade aberta até dia 30.</p>
            <button className="mt-5 bg-white text-w2-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest">Quero entrar na lista</button>
          </div>
        </div>
      </section>

      {/* UGC */}
      <section className="ni-container py-16">
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-w2-primary font-semibold">#vestindoravena</p>
          <h2 className="mt-2 font-cormorant text-4xl sm:text-5xl italic">Como nossas clientes usam.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {["1488884046321-9b4d40ed3a7d","1485518882345-15568b007406","1469334031218-e382a71b716b","1496747611176-843222e1e57c"].map((id, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={`https://images.unsplash.com/photo-${id}?w=600&q=80&auto=format`} alt="" className="size-full object-cover hover:scale-105 transition duration-700" loading="lazy" decoding="async"/>
            </div>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="bg-w2-bg border-y border-w2-ink/10">
        <div className="ni-container py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="aspect-[4/5] overflow-hidden rounded-sm order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1000&q=85&auto=format" alt="Atelier Ravena" className="size-full object-cover" loading="lazy" decoding="async" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-w2-primary font-semibold">Sobre o ateliê</p>
            <h2 className="mt-2 font-cormorant text-4xl sm:text-5xl italic leading-[1.05]">Costurado em São Paulo,<br/>vestido pelo Brasil.</h2>
            <p className="mt-5 text-w2-ink/75 leading-relaxed">Cada peça do Ateliê Ravena nasce em pequenas tiragens, costurada por mulheres de uma cooperativa em Vila Madalena. Trabalhamos só com tecidos naturais — linho português, seda mulberry e algodão pima peruano — e mantemos cada coleção entre 30 e 80 peças por modelo.</p>
            <p className="mt-3 text-w2-ink/75 leading-relaxed">Nossa fundadora, Ravena Otero, traz quinze anos de Paris e Lisboa para criar peças atemporais — para vestir hoje, amanhã e em dez anos.</p>
            <Link to="/ecommerce" className="mt-7 inline-block text-[11px] uppercase tracking-[0.3em] text-w2-primary border-b border-w2-primary pb-1 hover:text-w2-ink hover:border-w2-ink transition">Conheça o ateliê</Link>
          </motion.div>
        </div>
      </section>

      {/* Materiais */}
      <section className="ni-container py-20">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-w2-primary font-semibold">Matéria-prima</p>
          <h2 className="mt-2 font-cormorant text-4xl sm:text-5xl italic">Tecidos com proveniência.</h2>
          <p className="mt-3 text-w2-ink/65 text-sm sm:text-base">Cada fibra é escolhida pela mão, pela queda e pelo tempo. Sem poliéster, sem atalho.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { n: "Linho português", d: "Tinto sob encomenda na região do Minho. Mais leve a cada lavagem.", img: "1558618666-fcd25c85cd64" },
            { n: "Seda mulberry", d: "Fios longos de Hangzhou, peso 19mm — caimento fluido, brilho discreto.", img: "1606293859500-00b4eddc8c12" },
            { n: "Algodão pima", d: "Cultivado no norte do Peru. Fibra extra-longa, toque sedoso, durável.", img: "1604176354204-9268737828e4" },
          ].map((m, i) => (
            <motion.div key={m.n} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-w2-bg rounded-sm overflow-hidden group">
              <div className="aspect-[5/4] overflow-hidden">
                <img src={`https://images.unsplash.com/photo-${m.img}?w=700&q=80&auto=format`} alt={m.n} className="size-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" decoding="async" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2"><Leaf className="size-4 text-w2-primary" /><h3 className="font-cormorant italic text-2xl">{m.n}</h3></div>
                <p className="mt-2 text-sm text-w2-ink/65 leading-relaxed">{m.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Depoimentos clientes */}
      <section className="bg-w2-ink text-white">
        <div className="ni-container py-20">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-w2-primary font-semibold">Quem veste, conta</p>
            <h2 className="mt-2 font-cormorant text-4xl sm:text-5xl italic">"Roupa que não cansa de usar."</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Júlia M.", c: "São Paulo · SP", t: "Comprei o vestido linho Solstício pro casamento da minha irmã e já usei outras 4 vezes. O caimento é absurdo." },
              { n: "Marina L.", c: "Florianópolis · SC", t: "Atendimento impecável, embalagem que dá vontade de guardar. As peças vivem comigo." },
              { n: "Helena P.", c: "Curitiba · PR", t: "Finalmente uma marca brasileira que entende qualidade. Pago com prazer pelo que dura." },
            ].map((d) => (
              <div key={d.n} className="border border-white/10 rounded-sm p-6 bg-white/5">
                <div className="text-w2-primary text-lg">★★★★★</div>
                <p className="mt-3 text-sm text-white/80 leading-relaxed font-cormorant italic text-base">"{d.t}"</p>
                <div className="mt-4 text-xs"><b>{d.n}</b> · <span className="text-white/55">{d.c}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="ni-container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="size-8 mx-auto text-w2-primary" />
          <h2 className="mt-4 font-cormorant text-4xl sm:text-5xl italic">Primeira a saber.</h2>
          <p className="mt-3 text-sm sm:text-base text-w2-ink/65">Drops, edições limitadas e bastidores do ateliê — direto no seu e-mail. Sem spam, sem rodeio.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-7 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input required type="email" placeholder="seu@email.com" className="flex-1 bg-white border border-w2-ink/15 rounded-sm px-4 py-3 text-sm outline-none focus:border-w2-primary" />
            <button className="bg-w2-ink text-white px-6 py-3 rounded-sm text-[11px] uppercase tracking-widest font-semibold hover:bg-w2-primary transition">Inscrever</button>
          </form>
        </div>
      </section>
