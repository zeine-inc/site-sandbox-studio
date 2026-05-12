import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Headphones } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Hub,
  head: () => ({
    meta: [
      { title: "Nova Infortel — Experimente os 4 formatos de site" },
      { name: "description", content: "Não compre site no escuro. Navegue, toque e sinta cada formato — Institucional, E-commerce, Landing e One Page — antes de contratar." },
    ],
  }),
});

const cards = [
  {
    id: "institucional",
    path: "/institucional",
    title: "Site Institucional",
    desc: "Para clínicas, escritórios, construtoras e empresas B2B que precisam transmitir autoridade e conquistar a confiança do cliente.",
    img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=80&auto=format",
    accent: "from-emerald-700 to-emerald-900",
    tag: "5 a 6 páginas · CMS",
  },
  {
    id: "ecommerce",
    path: "/ecommerce",
    title: "E-commerce / Loja Virtual",
    desc: "Para boutiques, marcas autorais e varejo que querem vender online com cara de marca premium e checkout simples.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80&auto=format",
    accent: "from-orange-600 to-rose-700",
    tag: "Catálogo · Carrinho · Pagamentos",
  },
  {
    id: "landing",
    path: "/landing",
    title: "Landing Page de Conversão",
    desc: "Para cursos, infoprodutos, eventos e ofertas pontuais. Estrutura matadora pensada do primeiro pixel à última CTA.",
    img: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=900&q=80&auto=format",
    accent: "from-indigo-900 to-blue-700",
    tag: "Single page · Alta conversão",
  },
  {
    id: "onepage",
    path: "/onepage",
    title: "One Page",
    desc: "Para restaurantes, autônomos, portfólios e pequenos negócios locais. Tudo o que importa em uma página linda e enxuta.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format",
    accent: "from-stone-700 to-amber-800",
    tag: "Página única · Mobile-first",
  },
];

const benefits = [
  { icon: Sparkles, title: "Design sob medida", desc: "Nada de template genérico. Cada projeto é desenhado para o seu negócio." },
  { icon: Zap, title: "Performance e SEO", desc: "Sites rápidos, indexados e prontos pra escalar no Google." },
  { icon: ShieldCheck, title: "Integrações reais", desc: "WhatsApp, CRM, pagamentos, automação de marketing — tudo conversando." },
  { icon: Headphones, title: "Suporte contínuo", desc: "Você não fica sozinho. Acompanhamos, atualizamos e evoluímos com você." },
];

function Hub() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-20 size-[500px] rounded-full bg-ni-accent/15 blur-3xl" />
          <div className="absolute top-20 -right-20 size-[400px] rounded-full bg-emerald-200/50 blur-3xl" />
        </div>
        <div className="ni-container pt-16 sm:pt-24 pb-12 sm:pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-medium bg-white border rounded-full px-3 py-1 text-ni-muted"
          >
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Showcase interativo · feito pela Nova Infortel
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display-serif font-bold text-balance leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}
          >
            Qual site é o ideal<br className="hidden sm:block" /> para o seu negócio?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-base sm:text-lg text-ni-muted max-w-2xl mx-auto text-balance"
          >
            Experimente os <strong className="text-ni-ink">4 formatos</strong> que a Nova Infortel constrói sob medida.
            Não compre site no escuro — navegue, toque, sinta cada formato e escolha o que faz sentido pra você.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <a href="#formatos" className="inline-flex items-center gap-2 bg-ni-ink text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-ni-accent transition">
              Explorar formatos <ArrowRight className="size-4" />
            </a>
            <a href="#contato" className="inline-flex items-center gap-2 bg-white border px-6 py-3 rounded-full text-sm font-semibold hover:border-ni-ink transition">
              Falar com um especialista
            </a>
          </motion.div>
        </div>
      </section>

      {/* Cards dos 4 mundos */}
      <section id="formatos" className="ni-container pb-16">
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link to={c.path} className="group block rounded-2xl overflow-hidden bg-white border lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={c.img} alt={c.title} className="size-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${c.accent} opacity-30 mix-blend-multiply`} />
                  <span className="absolute top-3 left-3 text-[10px] font-semibold bg-white/95 px-2 py-1 rounded-full">{c.tag}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-display-serif font-semibold tracking-tight">{c.title}</h3>
                  <p className="text-sm text-ni-muted mt-2">{c.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ni-accent">
                    Explorar este formato <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Por que Nova Infortel */}
      <section className="bg-white border-y">
        <div className="ni-container py-16">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-ni-accent uppercase">Por que Nova Infortel</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display-serif font-semibold tracking-tight text-balance">
              Sites que vendem, atendem e crescem com seu negócio.
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border p-5"
              >
                <div className="size-10 rounded-lg bg-ni-accent/10 text-ni-accent grid place-items-center">
                  <b.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="text-sm text-ni-muted mt-1">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="contato" className="ni-container py-20 text-center">
        <h2 className="text-3xl sm:text-5xl font-display-serif font-semibold tracking-tight text-balance">
          Pronto pra começar?
        </h2>
        <p className="mt-4 text-ni-muted max-w-xl mx-auto">
          Conte sobre o seu negócio. Em até 1 hora útil um especialista da Nova Infortel responde com uma proposta inicial.
        </p>
        <div className="mt-7 flex justify-center gap-3 flex-wrap">
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" className="bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-emerald-700 transition">
            Falar no WhatsApp
          </a>
          <a href="mailto:contato@novainfortel.com.br" className="bg-white border px-6 py-3 rounded-full text-sm font-semibold hover:border-ni-ink transition">
            Enviar e-mail
          </a>
        </div>
      </section>
    </div>
  );
}
