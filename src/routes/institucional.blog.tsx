import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/institucional/blog")({
  component: Blog,
  head: () => ({ meta: [{ title: "Blog — Clínica Vértice" }, { name: "description", content: "Conteúdo confiável sobre saúde, prevenção e bem-estar produzido pela equipe Vértice." }] }),
});

const posts = [
  { t: "5 sinais silenciosos de pressão alta que ninguém te conta", r: "Hipertensão é chamada de 'assassina silenciosa' por um motivo. Veja sintomas que muitas vezes passam batido.", a: "Dra. Marina Reis", d: "12 mai 2026", lt: "6 min", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80&auto=format", cat: "Cardiologia" },
  { t: "Quando levar a criança ao pediatra fora da consulta de rotina", r: "Um guia prático para pais entenderem quais sinais merecem atenção imediata.", a: "Dra. Larissa Mendonça", d: "08 mai 2026", lt: "4 min", img: "https://images.unsplash.com/photo-1607582544249-49a1d8d20f10?w=800&q=80&auto=format", cat: "Pediatria" },
  { t: "Dor lombar: postura, sedentarismo ou problema sério?", r: "Como diferenciar uma dor passageira de algo que precisa de investigação por imagem.", a: "Dr. Henrique Carvalho", d: "02 mai 2026", lt: "7 min", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format", cat: "Ortopedia" },
  { t: "Protetor solar todo dia: o que a ciência diz em 2026", r: "Tipos, FPS, reaplicação e os mitos mais comuns sobre uso contínuo.", a: "Dra. Sofia Albuquerque", d: "27 abr 2026", lt: "5 min", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80&auto=format", cat: "Dermatologia" },
  { t: "Enxaqueca não é frescura — e tem tratamento", r: "Por que a dor de cabeça crônica precisa ser investigada e como funcionam os novos protocolos.", a: "Dr. Rafael Tavares", d: "20 abr 2026", lt: "8 min", img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80&auto=format", cat: "Neurologia" },
  { t: "Tireoide: sintomas que podem indicar desequilíbrio hormonal", r: "Cansaço, ganho de peso, queda de cabelo: quando suspeitar e quais exames pedir.", a: "Dra. Beatriz Souto", d: "14 abr 2026", lt: "5 min", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format", cat: "Endocrinologia" },
];

function Blog() {
  return (
    <div className="ni-container py-12 lg:py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-w1-gold font-semibold">Blog Vértice</p>
      <h1 className="mt-3 font-display-serif text-w1-primary text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
        Conteúdo de saúde com assinatura médica.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-w1-ink/70">Tudo que você lê aqui é escrito ou revisado por um especialista da nossa equipe clínica.</p>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <motion.article key={p.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.06 }} className="group bg-white rounded-2xl overflow-hidden border border-w1-primary/10 lift">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.t} className="size-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" decoding="async"/>
            </div>
            <div className="p-5">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-w1-gold">{p.cat}</span>
              <h2 className="font-display-serif text-xl text-w1-primary mt-2 leading-snug">{p.t}</h2>
              <p className="text-sm text-w1-ink/65 mt-2 line-clamp-3">{p.r}</p>
              <div className="mt-4 flex items-center justify-between text-[11px] text-w1-ink/55">
                <span>{p.a} · {p.d}</span>
                <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {p.lt}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
