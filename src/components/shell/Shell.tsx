import { useState, useEffect } from "react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { LeadModal } from "./LeadModal";
import logoUrl from "@/assets/nova-infortel-logo.png";

const WORLDS = [
  { id: "institucional", label: "Institucional", path: "/institucional" },
  { id: "ecommerce", label: "E-commerce", path: "/ecommerce" },
  { id: "landing", label: "Landing Page", path: "/landing" },
  { id: "onepage", label: "One Page", path: "/onepage" },
] as const;

function getActiveWorld(pathname: string) {
  return WORLDS.find((w) => pathname.startsWith(w.path));
}

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = getActiveWorld(pathname);
  const isHub = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ni-bg text-ni-ink">
      {/* Demo strip */}
      {active && (
        <div className="bg-ni-ink text-white text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 text-center tracking-wide leading-snug">
          Você está visualizando uma demonstração de <span className="font-semibold">site {active.label.toLowerCase()}</span> construído pela Nova Infortel.
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/85 border-b border-black/5">
        <div className="ni-container flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          <Link to="/" className="flex items-center shrink-0 min-w-0">
            <img src={logoUrl} alt="Nova Infortel — Plataforma de Negócios" className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* World tabs (desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/5 p-1 rounded-full">
            {WORLDS.map((w) => {
              const isActive = active?.id === w.id;
              return (
                <Link
                  key={w.id}
                  to={w.path}
                  className="relative px-4 py-1.5 text-xs font-medium rounded-full text-ni-ink/70 hover:text-ni-ink transition"
                >
                  {isActive && (
                    <motion.span
                      layoutId="world-pill"
                      className="absolute inset-0 bg-white shadow-sm rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{w.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* World select (mobile/tablet) */}
          <select
            value={active?.path ?? ""}
            onChange={(e) => navigate({ to: e.target.value || "/" })}
            className="lg:hidden text-[11px] sm:text-xs bg-black/5 rounded-full px-2.5 sm:px-3 py-1.5 border-none outline-none max-w-[140px] truncate"
          >
            <option value="">— formato —</option>
            {WORLDS.map((w) => <option key={w.id} value={w.path}>{w.label}</option>)}
          </select>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/5566984026800?text=Ol%C3%A1%21%20Quero%20um%20site%20com%20a%20Nova%20Infortel."
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center text-xs font-semibold bg-ni-ink text-white px-4 py-2 rounded-full hover:bg-ni-accent transition"
            >
              Quero um site assim
            </a>
            <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2" aria-label="menu">
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-white p-6 flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">Formatos</span>
                <button onClick={() => setMobileOpen(false)}><X className="size-5" /></button>
              </div>
              {WORLDS.map((w) => (
                <Link key={w.id} to={w.path} className="text-sm py-2 border-b">{w.label}</Link>
              ))}
              <a
                href="https://wa.me/5566984026800?text=Ol%C3%A1%21%20Quero%20um%20site%20com%20a%20Nova%20Infortel."
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-ni-ink text-white py-3 rounded-full text-sm font-semibold text-center"
              >
                Quero um site assim
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main with world transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={isHub ? "hub" : (active?.id ?? "page")}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-ni-ink text-white/80 mt-auto">
        <div className="ni-container py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <div className="size-2 rounded-full bg-ni-warm" />
            <span className="text-white/90">Desenvolvido por <span className="font-semibold text-white">Nova Infortel</span></span>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <a href="https://www.instagram.com/novainfortel/" target="_blank" rel="noreferrer" className="hover:text-ni-warm transition">Instagram</a>
            <span className="text-white/20">·</span>
            <a href="https://br.linkedin.com/in/diskinfortel" target="_blank" rel="noreferrer" className="hover:text-ni-warm transition">LinkedIn</a>
            <span className="text-white/20">·</span>
            <a href="https://wa.me/5566984026800?text=Ol%C3%A1%21%20Quero%20um%20site%20com%20a%20Nova%20Infortel." target="_blank" rel="noreferrer" className="hover:text-ni-warm transition">WhatsApp</a>
          </div>
          <div className="text-[11px] text-white/50">© {new Date().getFullYear()} Nova Infortel</div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/5566984026800?text=Ol%C3%A1%21%20Quero%20um%20site%20com%20a%20Nova%20Infortel."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 size-12 sm:size-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-5 sm:size-6" />
      </a>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} interest={active?.label} />
    </div>
  );
}
