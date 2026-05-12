import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/institucional/contato")({
  component: Contato,
  head: () => ({ meta: [{ title: "Contato — Clínica Vértice" }, { name: "description", content: "Agende consulta, tire dúvidas ou solicite informações." }] }),
});

function Contato() {
  const [sent, setSent] = useState(false);
  return (
    <div className="ni-container py-12 lg:py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-w1-gold font-semibold">Fale com a Vértice</p>
      <h1 className="mt-3 font-display-serif text-w1-primary text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>Estamos prontos para te receber.</h1>

      <div className="mt-10 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 bg-white border border-w1-primary/10 rounded-2xl p-6 sm:p-8">
          {sent ? (
            <div className="text-center py-12">
              <div className="size-16 rounded-full bg-w1-primary/10 text-w1-primary grid place-items-center mx-auto text-2xl">✓</div>
              <h2 className="mt-4 font-display-serif text-2xl text-w1-primary">Solicitação recebida</h2>
              <p className="text-sm text-w1-ink/65 mt-2">Em breve nossa equipe entra em contato para confirmar sua consulta.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Nome completo" className="border border-w1-primary/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-w1-primary bg-white" />
                <input required placeholder="WhatsApp" className="border border-w1-primary/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-w1-primary bg-white" />
              </div>
              <input required type="email" placeholder="E-mail" className="w-full border border-w1-primary/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-w1-primary bg-white" />
              <select required className="w-full border border-w1-primary/15 rounded-lg px-4 py-3 text-sm outline-none bg-white">
                <option value="">Especialidade desejada</option>
                <option>Cardiologia</option><option>Pediatria</option><option>Ortopedia</option>
                <option>Dermatologia</option><option>Neurologia</option><option>Outra</option>
              </select>
              <textarea rows={4} placeholder="Mensagem (opcional)" className="w-full border border-w1-primary/15 rounded-lg px-4 py-3 text-sm outline-none focus:border-w1-primary bg-white" />
              <button className="w-full bg-w1-primary text-white py-3.5 rounded-lg font-semibold hover:bg-w1-primary/90 transition">Solicitar agendamento</button>
            </form>
          )}
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="bg-w1-primary text-white rounded-2xl p-6">
            <div className="space-y-4 text-sm">
              <div className="flex gap-3"><MapPin className="size-5 text-w1-gold shrink-0" /><span>Av. das Acácias, 1280 — sala 904<br />Funcionários · Belo Horizonte / MG</span></div>
              <div className="flex gap-3"><Phone className="size-5 text-w1-gold shrink-0" /><span>(31) 3000-1200</span></div>
              <div className="flex gap-3"><Mail className="size-5 text-w1-gold shrink-0" /><span>contato@clinicavertice.com.br</span></div>
              <div className="flex gap-3"><Clock className="size-5 text-w1-gold shrink-0" /><span>Seg–Sex 7h às 20h<br />Sáb 8h às 14h</span></div>
            </div>
            <a href="https://wa.me/553130001200" target="_blank" rel="noreferrer" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition">
              <MessageCircle className="size-4" /> Falar no WhatsApp
            </a>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden bg-w1-primary/10 grid place-items-center text-w1-primary/40 text-sm">
            [ mapa ]
          </div>
        </div>
      </div>
    </div>
  );
}
