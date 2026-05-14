import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Brain, Baby, Activity, Eye, Bone, Smile, Quote, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/institucional/")({
  component: InstHome,
  head: () => ({
    meta: [
      { title: "Clínica Vértice — Saúde Integrada em BH" },
      { name: "description", content: "Atendimento humano, equipe especializada e tecnologia de ponta. Conheça a Clínica Vértice em Belo Horizonte." },
    ],
  }),
});

const pillars = [
  { icon: Activity, title: "Tecnologia", desc: "Equipamentos de última geração para diagnóstico preciso." },
  { icon: HeartPulse, title: "Acolhimento", desc: "Cada paciente é recebido com escuta e atenção individual." },
  { icon: Stethoscope, title: "Equipe", desc: "Especialistas com formação reconhecida e atualização contínua." },
  { icon: Brain, title: "Resultados", desc: "Protocolos baseados em evidência para o melhor desfecho clínico." },
];

const especialidades = [
  { icon: HeartPulse, name: "Cardiologia" }, { icon: Brain, name: "Neurologia" },
  { icon: Baby, name: "Pediatria" }, { icon: Eye, name: "Oftalmologia" },
  { icon: Bone, name: "Ortopedia" }, { icon: Smile, name: "Dermatologia" },
  { icon: Stethoscope, name: "Clínica Geral" }, { icon: Activity, name: "Endocrinologia" },
];

function InstHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-w1-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-w1-primary/10 blur-3xl pointer-events-none" />
        <div className="relative ni-container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-w1-gold font-semibold bg-w1-gold/10 px-3 py-1.5 rounded-full">
              <span className="size-1.5 rounded-full bg-w1-gold animate-pulse" /> Saúde com propósito
            </motion.p>
            <h1 className="mt-5 font-display-serif font-semibold text-w1-primary leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}>
              Cuidar de você é o <span className="italic text-w1-gold">ofício</span> da nossa equipe.
            </h1>
            <p className="mt-5 text-lg text-w1-ink/75 max-w-lg">
              Há 18 anos a Clínica Vértice integra mais de 20 especialidades médicas em um só lugar — com diagnóstico ágil, tecnologia avançada e acolhimento que faz diferença.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/institucional/contato" className="group bg-w1-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-w1-primary/90 hover:shadow-xl hover:shadow-w1-primary/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">Agendar consulta <ArrowRight className="size-4 group-hover:translate-x-1 transition" /></Link>
              <Link to="/institucional/especialidades" className="border border-w1-primary/30 text-w1-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:border-w1-primary transition">Ver especialidades</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 sm:gap-8 text-sm">
              <div><div className="font-display-serif text-2xl sm:text-3xl text-w1-primary">120k+</div><div className="text-xs text-w1-ink/60">Pacientes atendidos</div></div>
              <div className="border-l border-w1-primary/15 pl-6"><div className="font-display-serif text-2xl sm:text-3xl text-w1-primary">20+</div><div className="text-xs text-w1-ink/60">Especialidades</div></div>
              <div className="border-l border-w1-primary/15 pl-6"><div className="font-display-serif text-2xl sm:text-3xl text-w1-primary">18</div><div className="text-xs text-w1-ink/60">Anos de história</div></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-w1-primary/10">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80&auto=format" alt="Médica em consulta" className="size-full object-cover" />
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 max-w-[240px] hidden sm:block ring-1 ring-w1-primary/5">
              <div className="flex items-center gap-2">
                <div className="flex">{[...Array(5)].map((_, i) => <span key={i} className="text-w1-gold text-sm">★</span>)}</div>
                <div className="text-xs text-w1-gold font-semibold uppercase tracking-wider">Google</div>
              </div>
              <div className="font-display-serif text-2xl text-w1-primary mt-1">4.9 / 5.0</div>
              <div className="text-[11px] text-w1-ink/60">3.420 avaliações verificadas</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="absolute -top-4 -right-4 bg-w1-primary text-white rounded-2xl shadow-xl px-4 py-3 hidden sm:block">
              <div className="text-[10px] uppercase tracking-widest text-w1-gold">Hoje</div>
              <div className="text-sm font-semibold mt-0.5">+ 47 consultas</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-white border-y border-w1-primary/10">
        <div className="ni-container py-16">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-w1-gold font-semibold">Quatro pilares</p>
            <h2 className="mt-2 font-display-serif text-3xl sm:text-4xl text-w1-primary">A medicina como ela deveria ser</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-center">
                <div className="size-14 rounded-full bg-w1-primary/10 text-w1-primary grid place-items-center mx-auto"><p.icon className="size-6" /></div>
                <h3 className="mt-4 font-display-serif text-xl text-w1-primary">{p.title}</h3>
                <p className="text-sm text-w1-ink/65 mt-1">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades grid */}
      <section className="ni-container py-16">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-w1-gold font-semibold">Especialidades</p>
            <h2 className="font-display-serif text-3xl sm:text-4xl text-w1-primary">Mais de 20 áreas em um só lugar</h2>
          </div>
          <Link to="/institucional/especialidades" className="hidden sm:inline-flex items-center gap-1 text-sm text-w1-primary font-semibold hover:gap-2 transition-all">Ver todas <ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {especialidades.map((e, i) => (
            <motion.div key={e.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} whileHover={{ y: -4 }} className="bg-white border border-w1-primary/10 rounded-2xl p-5 text-center hover:shadow-xl hover:border-w1-gold/40 transition-all group cursor-pointer">
              <div className="size-12 rounded-full bg-w1-gold/10 grid place-items-center mx-auto group-hover:bg-w1-gold/20 transition">
                <e.icon className="size-5 text-w1-gold" />
              </div>
              <div className="mt-3 text-sm font-semibold text-w1-primary">{e.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Convênios */}
      <section className="bg-white border-y border-w1-primary/10">
        <div className="ni-container py-10">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-w1-ink/50 font-semibold">Atendemos os principais convênios</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-w1-primary/70">
            {["Unimed","Bradesco Saúde","Amil","SulAmérica","Hapvida","Notre Dame","Porto Seguro","Allianz"].map((c) => (
              <span key={c} className="font-display-serif text-lg sm:text-xl tracking-tight hover:text-w1-primary transition">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria da clínica */}
      <section className="ni-container pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "1631217868264-e5b90bb7e133",
            "1576091160550-2173dba999ef",
            "1666214280391-8ff5bd3c0bf0",
            "1579684385127-1ef15d508118",
          ].map((id, i) => (
            <motion.div key={id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
              <img src={`https://images.unsplash.com/photo-${id}?w=900&q=80&auto=format`} alt="Ambiente da clínica" loading="lazy" className="size-full object-cover hover:scale-110 transition duration-1000" decoding="async"/>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Depoimento */}
      <section className="relative bg-w1-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
        <div className="relative ni-container py-20 text-center max-w-3xl mx-auto">
          <Quote className="size-12 text-w1-gold mx-auto" />
          <p className="mt-6 font-display-serif text-2xl sm:text-3xl leading-snug italic text-balance">
            "Vim para um exame e saí com um plano de cuidado completo. Pela primeira vez senti que a equipe realmente me ouviu. A Vértice mudou minha relação com a saúde."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="size-12 rounded-full bg-w1-gold/20 grid place-items-center text-w1-gold font-semibold">JA</div>
            <div className="text-sm text-left">
              <div className="font-semibold">Joana Albuquerque</div>
              <div className="text-white/60 text-xs">Paciente há 4 anos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ni-container py-20 text-center">
        <h2 className="font-display-serif text-3xl sm:text-5xl text-w1-primary">Sua saúde merece atenção integral.</h2>
        <p className="mt-4 text-w1-ink/65 max-w-xl mx-auto">Agende sua primeira consulta e conheça a diferença de uma clínica que pensa em você por inteiro.</p>
        <Link to="/institucional/contato" className="mt-7 inline-flex items-center gap-2 bg-w1-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-w1-primary/90 hover:shadow-2xl hover:shadow-w1-primary/30 hover:-translate-y-0.5 transition-all">Agendar agora <ArrowRight className="size-4" /></Link>
      </section>
    </div>
  );
}
