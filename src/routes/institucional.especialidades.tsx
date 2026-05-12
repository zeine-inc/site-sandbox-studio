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
    <div className="ni-container py-12 lg:py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-w1-gold font-semibold">Especialidades</p>
      <h1 className="mt-3 font-display-serif text-w1-primary text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
        Cuidado completo, especialistas certos.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-w1-ink/70">
        Encontre o profissional ideal sem precisar percorrer cidade afora. Toda a estrutura clínica e diagnóstica em um só endereço.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {especs.map((e, i) => (
          <motion.div key={e.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: (i % 6) * 0.05 }} className="group bg-white border border-w1-primary/10 rounded-2xl p-6 lift">
            <div className="size-11 rounded-lg bg-w1-primary/10 text-w1-primary grid place-items-center"><e.icon className="size-5" /></div>
            <h3 className="mt-4 font-display-serif text-xl text-w1-primary">{e.name}</h3>
            <p className="text-sm text-w1-ink/65 mt-2 leading-relaxed">{e.desc}</p>
            <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-w1-gold group-hover:text-w1-primary transition">Saiba mais <ArrowRight className="size-4" /></a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
