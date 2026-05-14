import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/institucional/sobre")({
  component: Sobre,
  head: () => ({ meta: [{ title: "Sobre — Clínica Vértice" }, { name: "description", content: "Conheça nossa história, valores e a equipe por trás da Clínica Vértice." }] }),
});

const timeline = [
  { ano: "2007", t: "Nasce a Vértice", d: "Dr. Eduardo Reis e Dra. Marina Reis abrem o consultório com 3 especialidades." },
  { ano: "2012", t: "Primeira sede própria", d: "Mudança para o edifício na Av. das Acácias com 18 consultórios." },
  { ano: "2017", t: "Centro de diagnóstico", d: "Inauguração do laboratório de imagem e análises clínicas próprio." },
  { ano: "2021", t: "Telemedicina", d: "Lançamento da plataforma de teleconsulta com 12 especialidades." },
  { ano: "2025", t: "Vértice Família", d: "Programa de cuidado integral com plano de saúde corporativo." },
];

const valores = [
  { t: "Missão", d: "Oferecer cuidado em saúde com excelência técnica e humanidade, em todas as etapas da vida." },
  { t: "Visão", d: "Ser referência em medicina integrada e centrada no paciente em Minas Gerais até 2030." },
  { t: "Valores", d: "Ética, escuta ativa, atualização contínua, transparência e responsabilidade socioambiental." },
];

function Sobre() {
  return (
    <div>
      <section className="ni-container py-12 lg:py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-w1-gold font-semibold">Nossa história</p>
        <h1 className="mt-3 font-display-serif text-w1-primary text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          Construída por médicos. <br className="hidden sm:block" /> Movida por pacientes.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-w1-ink/70">
          Em 2007, o casal de médicos Eduardo e Marina Reis decidiu abrir uma clínica diferente: aquela onde queriam ser atendidos. Nasceu a Vértice — e desde então, seguimos firmes ao redor de uma única ideia: pessoas em primeiro lugar.
        </p>
      </section>

      <section className="ni-container grid lg:grid-cols-3 gap-8 pb-16">
        {valores.map((v, i) => (
          <motion.div key={v.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white border border-w1-primary/10 rounded-2xl p-6">
            <div className="text-w1-gold text-xs uppercase tracking-widest font-semibold">{v.t}</div>
            <p className="mt-3 font-display-serif text-xl text-w1-primary leading-snug">{v.d}</p>
          </motion.div>
        ))}
      </section>

      <section className="bg-white border-y border-w1-primary/10 py-16">
        <div className="ni-container">
          <h2 className="font-display-serif text-3xl text-w1-primary text-center mb-10">Linha do tempo</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-w1-gold/30" />
            {timeline.map((it, i) => (
              <motion.div key={it.ano} initial={{ opacity: 0, x: i % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`relative flex sm:items-center mb-10 ${i % 2 ? "sm:flex-row-reverse" : ""}`}>
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 size-3 rounded-full bg-w1-gold ring-4 ring-w1-bg" />
                <div className="ml-12 sm:w-1/2 sm:px-8">
                  <div className="text-w1-gold font-display-serif text-2xl">{it.ano}</div>
                  <div className="font-semibold text-w1-primary mt-1">{it.t}</div>
                  <p className="text-sm text-w1-ink/65 mt-1">{it.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="ni-container py-16">
        <div className="aspect-[16/7] rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80&auto=format" alt="Equipe Clínica Vértice" className="size-full object-cover" decoding="async" loading="lazy"/>
        </div>
        <p className="mt-6 text-center text-sm text-w1-ink/60 italic">Equipe Vértice em retiro de imersão clínica · Tiradentes/MG, 2025</p>
      </section>
    </div>
  );
}
