import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  interest?: string;
}

export function LeadModal({ open, onClose, interest }: Props) {
  const [sent, setSent] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/60 grid place-items-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-md p-6 sm:p-8 relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-ni-muted hover:text-ni-ink"><X className="size-5" /></button>
            {!sent ? (
              <>
                <h3 className="text-2xl font-display-serif font-semibold tracking-tight">Quero um site assim</h3>
                <p className="text-sm text-ni-muted mt-1">Conte rapidinho sobre seu negócio. Respondemos em até 1 hora útil.</p>
                <form
                  className="mt-5 space-y-3"
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                >
                  <input required placeholder="Seu nome" className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-ni-accent" />
                  <input required placeholder="Empresa" className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-ni-accent" />
                  <input required placeholder="Segmento (ex: clínica, loja, restaurante)" className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-ni-accent" />
                  <input required placeholder="WhatsApp" className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-ni-accent" />
                  <select defaultValue={interest ?? ""} className="w-full border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-ni-accent bg-white">
                    <option value="">Formato de interesse</option>
                    <option>Institucional</option>
                    <option>E-commerce</option>
                    <option>Landing Page</option>
                    <option>One Page</option>
                    <option>Ainda não sei</option>
                  </select>
                  <button className="w-full bg-ni-ink text-white py-3 rounded-lg font-semibold text-sm hover:bg-ni-accent transition">
                    Enviar pedido
                  </button>
                  <a
                    href="https://wa.me/5566984026800?text=Ol%C3%A1%21%20Quero%20um%20site%20com%20a%20Nova%20Infortel."
                    target="_blank" rel="noreferrer"
                    className="block text-center text-xs text-ni-muted hover:text-ni-ink"
                  >
                    ou prefiro falar direto no WhatsApp
                  </a>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="size-14 rounded-full bg-green-100 text-green-600 grid place-items-center mx-auto text-2xl">✓</div>
                <h3 className="text-xl font-semibold mt-4">Recebemos seu pedido!</h3>
                <p className="text-sm text-ni-muted mt-1">Em breve um especialista da Nova Infortel entra em contato.</p>
                <button onClick={() => { setSent(false); onClose(); }} className="mt-5 text-sm font-semibold text-ni-accent">Fechar</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
