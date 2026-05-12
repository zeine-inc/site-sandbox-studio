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
      <section className="relative">
        <div className="ni-container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-[0.25em] text-w1-gold font-semibold">Saúde com propósito</p>
            <h1 className="mt-4 font-display-serif font-semibold text-w1-primary leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}>
              Cuidar de você é o ofício da nossa equipe.
            </h1>
            <p className="mt-5 text-lg text-w1-ink/75 max-w-lg">
              Há 18 anos a Clínica Vértice integra mais de 20 especialidades médicas em um só lugar — com diagnóstico ágil, tecnologia avançada e acolhimento que faz diferença.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/institucional/contato" className="bg-w1-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-w1-primary/90 transition">Agendar consulta</Link>
              <Link to="/institucional/especialidades" className="border border-w1-primary/30 text-w1-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-white transition">Ver especialidades</Link>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <div><div className="font-display-serif text-3xl text-w1-primary">120k+</div><div className="text-xs text-w1-ink/60">Pacientes atendidos</div></div>
              <div><div className="font-display-serif text-3xl text-w1-primary">20+</div><div className="text-xs text-w1-ink/60">Especialidades</div></div>
              <div><div className="font-display-serif text-3xl text-w1-primary">18</div><div className="text-xs text-w1-ink/60">Anos de história</div></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&auto=format" alt="Médica em consulta" className="size-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-[220px] hidden sm:block">
              <div className="text-xs text-w1-gold font-semibold uppercase tracking-wider">Avaliação</div>
              <div className="font-display-serif text-2xl text-w1-primary mt-1">4.9 / 5.0</div>
              <div className="text-[11px] text-w1-ink/60">3.420 avaliações no Google</div>
            </div>
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
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-w1-gold font-semibold">Especialidades</p>
            <h2 className="font-display-serif text-3xl sm:text-4xl text-w1-primary">Mais de 20 áreas em um só lugar</h2>
          </div>
          <Link to="/institucional/especialidades" className="hidden sm:inline-flex items-center gap-1 text-sm text-w1-primary font-semibold">Ver todas <ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {especialidades.map((e) => (
            <div key={e.name} className="bg-white border border-w1-primary/10 rounded-xl p-5 text-center lift">
              <e.icon className="size-6 text-w1-gold mx-auto" />
              <div className="mt-3 text-sm font-semibold text-w1-primary">{e.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimento */}
      <section className="bg-w1-primary text-white">
        <div className="ni-container py-16 text-center max-w-3xl mx-auto">
          <Quote className="size-10 text-w1-gold mx-auto" />
          <p className="mt-6 font-display-serif text-2xl sm:text-3xl leading-snug italic text-balance">
            "Vim para um exame e saí com um plano de cuidado completo. Pela primeira vez senti que a equipe realmente me ouviu. A Vértice mudou minha relação com a saúde."
          </p>
          <div className="mt-6 text-sm">
            <div className="font-semibold">Joana Albuquerque</div>
            <div className="text-white/60 text-xs">Paciente há 4 anos</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ni-container py-20 text-center">
        <h2 className="font-display-serif text-3xl sm:text-5xl text-w1-primary">Sua saúde merece atenção integral.</h2>
        <p className="mt-4 text-w1-ink/65 max-w-xl mx-auto">Agende sua primeira consulta e conheça a diferença de uma clínica que pensa em você por inteiro.</p>
        <Link to="/institucional/contato" className="mt-7 inline-flex bg-w1-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-w1-primary/90 transition">Agendar agora</Link>
      </section>
    </div>
  );
}
