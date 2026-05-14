import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Brain, Baby, Eye, Bone, Smile, Activity, Stethoscope, ArrowRight, Pill, Microscope, Sparkles } from "lucide-react";

export const Route = createFileRoute("/institucional/especialidades")({
  component: Esp,
  head: () => ({ meta: [{ title: "Especialidades — Clínica Vértice" }, { name: "description", content: "Mais de 20 especialidades médicas com agenda ágil e equipe experiente." }] }),
});

const especs = [
  { icon: Heart, name: "Cardiologia", desc: "Prevenção, diagnóstico e acompanhamento de doenças cardiovasculares com ergometria e Holter no local." },
  { icon: Brain, name: "Neurologia", desc: "Cefaleias, distúrbios do sono, epilepsia, demências e investigação neurológica completa." },
  { icon: Baby, name: "Pediatria", desc: "Acompanhamento do desenvolvimento da criança, vacinas e puericultura humanizada." },
  { icon: Eye, name: "Oftalmologia", desc: "Exames de refração, fundo de olho, mapeamento de retina e cirurgias refrativas." },
  { icon: Bone, name: "Ortopedia", desc: "Coluna, joelho, ombro e medicina esportiva com protocolos de reabilitação personalizados." },
  { icon: Smile, name: "Dermatologia", desc: "Clínica e estética: dermatoscopia, mapeamento corporal, acne, melasma e procedimentos." },
  { icon: Activity, name: "Endocrinologia", desc: "Tireoide, diabetes, obesidade e saúde hormonal em todas as fases da vida." },
  { icon: Stethoscope, name: "Clínica Geral", desc: "Check-ups completos e atendimento de primeira escuta para encaminhamento adequado." },
  { icon: Pill, name: "Ginecologia", desc: "Preventivo, anticoncepção, climatério e acompanhamento gestacional de baixo e alto risco." },
  { icon: Microscope, name: "Análises Clínicas", desc: "Laboratório próprio com coleta sem agendamento e resultados em até 24h." },
  { icon: Sparkles, name: "Nutrição", desc: "Plano alimentar individualizado, bioimpedância e acompanhamento contínuo." },
  { icon: Activity, name: "Psicologia", desc: "Atendimento adulto, infantojuvenil e de casal com profissionais de diversas abordagens." },
];

function Esp() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-w1-primary text-white overflow-hidden">
        <img src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1800&q=80&auto=format" alt="" className="absolute inset-0 size-full object-cover opacity-25" loading="eager" decoding="async" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-w1-primary via-w1-primary/85 to-w1-primary/70" />
        <div className="relative ni-container py-16 lg:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-w1-gold font-semibold">Especialidades</p>
          <h1 className="mt-4 font-display-serif text-balance leading-[1.05]" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
            Cuidado completo, <span className="italic text-w1-gold">especialistas certos</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Toda a estrutura clínica e diagnóstica em um só endereço. Agenda ágil, consultas presenciais e por telemedicina.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-xs text-white/70">
            <span className="bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">+ 20 áreas</span>
            <span className="bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">Laboratório no local</span>
            <span className="bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">Imagem digital</span>
            <span className="bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">Telemedicina</span>
          </div>
        </div>
      </section>

      <div className="ni-container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {especs.map((e, i) => (
            <motion.div key={e.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: (i % 6) * 0.05 }} className="group bg-white border border-w1-primary/10 rounded-2xl p-6 hover:shadow-xl hover:border-w1-gold/40 transition-all hover:-translate-y-1">
              <div className="size-11 rounded-lg bg-w1-primary/10 text-w1-primary grid place-items-center group-hover:bg-w1-primary group-hover:text-white transition"><e.icon className="size-5" /></div>
              <h3 className="mt-4 font-display-serif text-xl text-w1-primary">{e.name}</h3>
              <p className="text-sm text-w1-ink/65 mt-2 leading-relaxed">{e.desc}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-w1-gold group-hover:text-w1-primary transition">Saiba mais <ArrowRight className="size-4" /></a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-w1-primary text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.4), transparent 60%)" }} />
          <div className="relative">
            <h2 className="font-display-serif text-3xl sm:text-4xl">Não encontrou sua especialidade?</h2>
            <p className="mt-3 text-white/75 max-w-xl mx-auto">Atendemos áreas adicionais sob demanda. Fale com a equipe e te encaminhamos para o profissional certo.</p>
            <a href="/institucional/contato" className="mt-6 inline-block bg-w1-gold text-w1-primary px-7 py-3 rounded-full font-semibold text-sm hover:bg-white transition">Falar com a equipe</a>
          </div>
        </div>
      </div>
    </div>
  );
}
