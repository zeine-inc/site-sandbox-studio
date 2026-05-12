import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";

export const Route = createFileRoute("/institucional")({
  component: InstLayout,
});

const nav = [
  { to: "/institucional", label: "Início", exact: true },
  { to: "/institucional/sobre", label: "Sobre" },
  { to: "/institucional/especialidades", label: "Especialidades" },
  { to: "/institucional/equipe", label: "Equipe" },
  { to: "/institucional/blog", label: "Blog" },
  { to: "/institucional/contato", label: "Contato" },
] as const;

function InstLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="bg-w1-bg text-w1-ink" style={{ fontFamily: "var(--font-body-sans)" }}>
      {/* Site header (Clínica Vértice) */}
      <header className="bg-w1-bg/95 backdrop-blur sticky top-[40px] sm:top-[40px] z-30 border-b border-w1-primary/10">
        <div className="ni-container flex items-center justify-between h-16">
          <Link to="/institucional" className="flex items-center gap-2">
            <div className="size-9 rounded-full bg-w1-primary text-white grid place-items-center font-display-serif text-lg">V</div>
            <div className="leading-tight">
              <div className="font-display-serif text-lg font-semibold tracking-tight text-w1-primary">Clínica Vértice</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-w1-gold">Saúde Integrada</div>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((n) => {
              const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
              return (
                <Link key={n.to} to={n.to} className={`relative py-1 transition ${active ? "text-w1-primary font-semibold" : "text-w1-ink/70 hover:text-w1-primary"}`}>
                  {n.label}
                  {active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-w1-gold" />}
                </Link>
              );
            })}
          </nav>
          <Link to="/institucional/contato" className="hidden sm:inline-flex bg-w1-primary text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-w1-primary/90 transition">
            Agendar consulta
          </Link>
        </div>
        <div className="md:hidden border-t border-w1-primary/10 overflow-x-auto">
          <div className="flex gap-4 px-5 py-2 text-xs whitespace-nowrap">
            {nav.map((n) => {
              const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
              return <Link key={n.to} to={n.to} className={active ? "text-w1-primary font-semibold" : "text-w1-ink/60"}>{n.label}</Link>;
            })}
          </div>
        </div>
      </header>

      <Outlet />

      {/* Site footer */}
      <footer className="bg-w1-primary text-white/85 mt-20">
        <div className="ni-container py-12 grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-display-serif text-xl text-white">Clínica Vértice</div>
            <p className="text-white/70 mt-2 text-xs leading-relaxed">Saúde integrada com tecnologia, acolhimento e os melhores especialistas da região metropolitana.</p>
          </div>
          <div>
            <div className="text-w1-gold text-xs uppercase tracking-widest mb-3">Atendimento</div>
            <p>Av. das Acácias, 1280 — sala 904<br />Belo Horizonte / MG</p>
            <p className="mt-2">contato@clinicavertice.com.br<br />(31) 3000-1200</p>
          </div>
          <div>
            <div className="text-w1-gold text-xs uppercase tracking-widest mb-3">Horários</div>
            <p>Seg a Sex · 7h às 20h<br />Sáb · 8h às 14h</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-[11px] text-white/50">
          © {new Date().getFullYear()} Clínica Vértice — CNPJ 00.000.000/0001-00 — Diretor técnico Dra. Marina Reis CRM/MG 12345
        </div>
      </footer>
    </div>
  );
}
