import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, Check, Star, Shield, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/landing")({
  component: Landing,
  head: () => ({ meta: [
    { title: "Mentor Capital — Imersão de 3 Dias para Pequenos Investidores" },
    { name: "description", content: "Aprenda em 3 dias o método que já formou +12.000 investidores. Próxima turma com vagas limitadas." },
  ]}),
});

const modulos = [
  { t: "Mentalidade do investidor", d: "Como pensa quem investe há décadas e por que isso muda tudo." },
  { t: "Renda fixa que rende de verdade", d: "Tesouro, CDB, LCI, LCA — escolhas certas em 2026." },
  { t: "Bolsa sem mistério", d: "Análise fundamentalista descomplicada para começar com segurança." },
  { t: "Fundos imobiliários", d: "Como montar uma carteira que paga aluguel todo mês." },
  { t: "Internacional", d: "Dolarize patrimônio sem complicação tributária." },
  { t: "Carteira blindada", d: "Estratégia de alocação que protege em qualquer cenário." },
];

const depos = [
  { n: "Carlos Tedesco", c: "Engenheiro · SP", t: "Em 6 meses dobrei o que tinha guardado parado na poupança. Vale cada minuto." },
  { n: "Renata Holanda", c: "Dentista · CE", t: "Saí da imersão sabendo exatamente onde alocar minha reserva. Mudou minha relação com dinheiro." },
  { n: "Pedro Maranhão", c: "Empresário · RS", t: "Conteúdo direto, sem enrolação. O Daniel é fora da curva." },
  { n: "Ana Lúcia Veiga", c: "Servidora pública · DF", t: "Aos 52 anos achei que era tarde. Hoje tenho carteira diversificada e durmo tranquila." },
  { n: "Marcelo Pinheiro", c: "Médico · MG", t: "A imersão me poupou anos de erros. Investimento que se pagou em semanas." },
];

const faq = [
  { q: "Para quem é a imersão?", a: "Para quem nunca investiu ou já investe e sente que poderia render mais. Conteúdo do zero ao avançado." },
  { q: "Preciso ter quanto guardado?", a: "Nada. O método funciona desde R$ 100. Mostramos como começar com o que você tem." },
  { q: "É online ou presencial?", a: "Online ao vivo, 3 dias seguidos. Quem não puder, assiste a gravação por 7 dias." },
  { q: "E se eu não gostar?", a: "Garantia incondicional de 7 dias. Pediu reembolso, devolvemos 100%." },
  { q: "Tem certificado?", a: "Sim, certificado de participação ao final dos 3 dias." },
  { q: "Como funciona o pagamento?", a: "Cartão em até 12x ou Pix com 5% de desconto." },
];

function useCountdown() {
  const target = new Date(Date.now() + 1000 * 60 * 60 * 71).getTime();
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(id); }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function Counter() {
  const { d, h, m, s } = useCountdown();
  return (
    <div className="flex gap-2 sm:gap-3 justify-center">
      {[["DIAS",d],["HRS",h],["MIN",m],["SEG",s]].map(([l, v]) => (
        <div key={l as string} className="bg-white/10 backdrop-blur border border-white/20 rounded-lg px-3 py-2 min-w-[60px] text-center">
          <div className="font-space text-2xl sm:text-3xl font-bold text-w3-accent">{String(v).padStart(2,"0")}</div>
          <div className="text-[9px] tracking-widest text-white/70">{l as string}</div>
        </div>
      ))}
    </div>
  );
}

function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [depo, setDepo] = useState(0);
  return (
    <div className="bg-w3-primary text-w3-ink" style={{ fontFamily: "var(--font-body-sans)" }}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-w3-primary via-[#0d2454] to-w3-primary" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-w3-accent/10 blur-3xl" />
        <div className="relative ni-container py-16 sm:py-24 text-center">
          <span className="inline-block bg-w3-accent text-w3-primary font-space text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded">Turma 47 · Vagas limitadas</span>
          <h1 className="mt-6 font-space font-bold text-balance leading-[1] tracking-tight" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}>
            Em <span className="text-w3-accent">3 dias</span>, você vai entender de investimentos<br className="hidden sm:block" /> mais do que 95% dos brasileiros.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Imersão online, ao vivo, com Daniel Mentor. O método que já formou +12.000 investidores brasileiros — agora com vagas abertas.
          </p>
          <a href="#oferta" className="mt-8 inline-block bg-w3-accent text-w3-primary px-10 py-4 rounded-full font-space font-bold uppercase tracking-wider hover:scale-105 transition">Quero garantir minha vaga</a>
          <div className="mt-8">
            <p className="text-xs text-white/60 mb-3">Próxima turma começa em:</p>
            <Counter />
          </div>
        </div>
      </section>

      {/* Vídeo */}
      <section className="ni-container py-16">
        <div className="aspect-video max-w-3xl mx-auto bg-black/40 rounded-2xl border border-white/10 grid place-items-center group cursor-pointer hover:border-w3-accent transition">
          <div className="size-20 rounded-full bg-w3-accent text-w3-primary grid place-items-center group-hover:scale-110 transition"><Play className="size-8 ml-1" fill="currentColor" /></div>
        </div>
        <p className="text-center text-sm text-white/60 mt-4">Assista 2 minutos do Daniel explicando o método</p>
      </section>

      {/* Para quem é */}
      <section className="ni-container py-16">
        <h2 className="font-space text-3xl sm:text-4xl font-bold text-center">Esta imersão é para você se...</h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          {[
            { t: "Tem dinheiro parado", d: "Na poupança ou conta corrente perdendo para a inflação todo mês." },
            { t: "Já investe, mas no escuro", d: "Compra o que indicam sem entender o que está fazendo." },
            { t: "Quer começar e não sabe", d: "Tem medo, acha complicado, não sabe por onde começar." },
          ].map((x) => (
            <div key={x.t} className="border border-white/10 rounded-xl p-6 bg-white/5">
              <Check className="size-6 text-w3-accent" />
              <h3 className="font-space font-bold text-xl mt-3">{x.t}</h3>
              <p className="text-sm text-white/70 mt-2">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Módulos */}
      <section className="bg-black/30 border-y border-white/10 py-16">
        <div className="ni-container">
          <h2 className="font-space text-3xl sm:text-4xl font-bold text-center">O que você vai aprender</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modulos.map((m, i) => (
              <motion.div key={m.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="border border-white/10 rounded-xl p-5">
                <div className="font-space text-w3-accent font-bold">Módulo {String(i+1).padStart(2,"0")}</div>
                <h3 className="font-bold text-lg mt-1">{m.t}</h3>
                <p className="text-sm text-white/70 mt-1">{m.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="ni-container py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="aspect-square max-w-sm rounded-2xl overflow-hidden border-4 border-w3-accent">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format" alt="Daniel Mentor" className="size-full object-cover" />
        </div>
        <div>
          <p className="text-w3-accent text-xs uppercase tracking-widest font-bold">O mentor</p>
          <h2 className="font-space text-3xl sm:text-4xl font-bold mt-2">Daniel Mentor</h2>
          <p className="mt-4 text-white/80 leading-relaxed">17 anos de mercado financeiro. Ex-gestor de fundos no BTG, hoje dedicado a desmistificar investimentos para o brasileiro comum.</p>
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
            <div className="min-w-0"><div className="font-space text-xl sm:text-3xl text-w3-accent font-bold">12k+</div><div className="text-[10px] sm:text-xs text-white/60">Alunos formados</div></div>
            <div className="min-w-0"><div className="font-space text-xl sm:text-3xl text-w3-accent font-bold">R$ 4Bi</div><div className="text-[10px] sm:text-xs text-white/60">Sob influência</div></div>
            <div className="min-w-0"><div className="font-space text-xl sm:text-3xl text-w3-accent font-bold">17</div><div className="text-[10px] sm:text-xs text-white/60">Anos de mercado</div></div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-black/30 border-y border-white/10 py-16">
        <div className="ni-container max-w-3xl text-center">
          <h2 className="font-space text-3xl sm:text-4xl font-bold">Quem viveu, recomenda</h2>
          <div className="mt-10">
            <div className="flex justify-center gap-1 mb-4">{[...Array(5)].map((_,i) => <Star key={i} className="size-5 text-w3-accent" fill="currentColor" />)}</div>
            <p className="text-xl sm:text-2xl font-space italic leading-snug">"{depos[depo].t}"</p>
            <div className="mt-4 text-sm"><b>{depos[depo].n}</b> · <span className="text-white/60">{depos[depo].c}</span></div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {depos.map((_, i) => <button key={i} onClick={() => setDepo(i)} className={`size-2 rounded-full transition ${depo === i ? "bg-w3-accent w-8" : "bg-white/30"}`} />)}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="ni-container py-16 text-center">
        <h2 className="font-space text-3xl font-bold">Comprando hoje você ganha 3 bônus exclusivos</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {[["Planilha Patrimônio","R$ 297"],["Lives mensais por 1 ano","R$ 997"],["Comunidade VIP","R$ 497"]].map(([t,v]) => (
            <div key={t} className="border border-w3-accent/30 rounded-xl p-6 bg-w3-accent/5">
              <div className="text-xs text-w3-accent uppercase tracking-widest">Bônus</div>
              <h3 className="font-space font-bold text-xl mt-1">{t}</h3>
              <div className="mt-3 text-white/60 line-through">{v}</div>
              <div className="font-space text-w3-accent font-bold text-lg">GRÁTIS</div>
            </div>
          ))}
        </div>
      </section>

      {/* Garantia */}
      <section className="ni-container pb-16 max-w-2xl">
        <div className="border border-white/10 rounded-xl p-6 flex items-center gap-5 bg-white/5">
          <Shield className="size-12 text-w3-accent shrink-0" />
          <div>
            <h3 className="font-space font-bold">Garantia incondicional de 7 dias</h3>
            <p className="text-sm text-white/70 mt-1">Não gostou? Devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.</p>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="ni-container py-16">
        <div className="max-w-lg mx-auto bg-gradient-to-b from-w3-accent to-amber-400 text-w3-primary rounded-3xl p-8 text-center shadow-2xl">
          <div className="text-xs uppercase tracking-widest font-bold">Oferta de lançamento</div>
          <div className="mt-3 text-sm line-through opacity-60">de R$ 1.997 por</div>
          <div className="font-space font-bold text-5xl sm:text-6xl mt-1 break-words">R$ 497</div>
          <div className="text-sm font-semibold mt-1">ou 12x de R$ 49,70</div>
          <button className="mt-6 w-full bg-w3-primary text-white py-4 rounded-full font-space font-bold uppercase tracking-wider hover:scale-[1.02] transition">Garantir minha vaga agora</button>
          <div className="mt-4 text-xs">🔒 Compra 100% segura · Acesso imediato</div>
        </div>
        <div className="mt-8"><Counter /></div>
      </section>

      {/* FAQ */}
      <section className="bg-black/30 border-t border-white/10 py-16">
        <div className="ni-container max-w-2xl">
          <h2 className="font-space text-3xl font-bold text-center">Perguntas frequentes</h2>
          <div className="mt-8 space-y-2">
            {faq.map((f, i) => (
              <div key={f.q} className="border border-white/10 rounded-lg overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-white/5">
                  <span>{f.q}</span>
                  <ChevronDown className={`size-4 transition ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="p-4 pt-0 text-sm text-white/70">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-[11px] text-white/40">
        Mentor Capital · CNPJ 00.000.000/0001-00 · <a href="#" className="underline">Política de privacidade</a> · <a href="#" className="underline">Termos</a>
      </footer>
    </div>
  );
}
