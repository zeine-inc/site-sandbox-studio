import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/institucional/equipe")({
  component: Equipe,
  head: () => ({ meta: [{ title: "Equipe — Clínica Vértice" }, { name: "description", content: "Conheça os médicos e profissionais da Clínica Vértice." }] }),
});

const team = [
  { nome: "Dra. Marina Reis", esp: "Cardiologia", crm: "CRM/MG 12345", bio: "Mestre em Cardiologia pela UFMG. Atua há 22 anos com foco em prevenção cardiovascular feminina.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80&auto=format" },
  { nome: "Dr. Eduardo Reis", esp: "Clínica Geral", crm: "CRM/MG 12346", bio: "Cofundador da Vértice. Especialista em medicina interna e geriatria preventiva.", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80&auto=format" },
  { nome: "Dra. Larissa Mendonça", esp: "Pediatria", crm: "CRM/MG 32198", bio: "Doutora em Pediatria. Especialização em desenvolvimento infantil pela Harvard Medical School.", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80&auto=format" },
  { nome: "Dr. Henrique Carvalho", esp: "Ortopedia", crm: "CRM/MG 41250", bio: "Médico do esporte. Atende atletas profissionais e amadores em recuperação de lesões.", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80&auto=format" },
  { nome: "Dra. Sofia Albuquerque", esp: "Dermatologia", crm: "CRM/MG 50871", bio: "Especialista em dermatoscopia digital e mapeamento corporal de lesões pigmentadas.", img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=500&q=80&auto=format" },
  { nome: "Dr. Rafael Tavares", esp: "Neurologia", crm: "CRM/MG 27814", bio: "Mestre em Neurologia. Coordenador do programa de cefaleias crônicas da Vértice.", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&q=80&auto=format" },
  { nome: "Dra. Beatriz Souto", esp: "Endocrinologia", crm: "CRM/MG 38420", bio: "Foco em obesidade, tireoide e saúde hormonal feminina ao longo das fases da vida.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80&auto=format" },
  { nome: "Dr. Pedro Vianna", esp: "Oftalmologia", crm: "CRM/MG 19204", bio: "Cirurgião refrativo. Mais de 8.000 procedimentos a laser realizados.", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=80&auto=format" },
];

function Equipe() {
  return (
    <div className="ni-container py-12 lg:py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-w1-gold font-semibold">Nosso corpo clínico</p>
      <h1 className="mt-3 font-display-serif text-w1-primary text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
        Profissionais que cuidam como gostariam de ser cuidados.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-w1-ink/70">
        Equipe selecionada por critérios técnicos e humanos. Atualização clínica permanente e protocolos baseados em evidência.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m, i) => (
          <motion.div key={m.nome} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.06 }} className="group">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-w1-primary/5">
              <img src={m.img} alt={m.nome} className="size-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
            </div>
            <h3 className="mt-4 font-display-serif text-lg text-w1-primary">{m.nome}</h3>
            <div className="text-w1-gold text-xs uppercase tracking-widest mt-0.5">{m.esp} · {m.crm}</div>
            <p className="text-sm text-w1-ink/65 mt-2 leading-relaxed">{m.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
