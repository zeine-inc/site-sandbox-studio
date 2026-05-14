import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, X } from "lucide-react";
import { CartProvider, useCart } from "@/components/ecommerce/store";

export const Route = createFileRoute("/ecommerce")({
  component: EcomLayout,
});

const cats = ["Vestidos", "Blusas", "Calças", "Acessórios", "Coleções", "Sale"];

function EcomLayout() {
  return (
    <CartProvider>
      <div className="bg-w2-bg text-w2-ink" style={{ fontFamily: "var(--font-dmsans)" }}>
        <Header />
        <Outlet />
        <SiteFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

function Header() {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-14 sm:top-16 z-30 bg-w2-bg/95 backdrop-blur border-b border-w2-ink/10">
      <div className="ni-container">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/ecommerce" className="font-cormorant text-2xl tracking-[0.2em] text-w2-ink">
            RAVENA
          </Link>
          <nav className="hidden lg:flex gap-7 text-xs uppercase tracking-[0.18em]">
            {cats.map((c) => <a key={c} href="#" className="hover:text-w2-primary transition">{c}</a>)}
          </nav>
          <div className="flex items-center gap-3 text-w2-ink">
            <button className="p-1 hover:text-w2-primary"><Search className="size-5" /></button>
            <button className="p-1 hover:text-w2-primary hidden sm:block"><User className="size-5" /></button>
            <button onClick={() => setOpen(true)} className="p-1 relative hover:text-w2-primary">
              <ShoppingBag className="size-5" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 size-4 rounded-full bg-w2-primary text-white text-[10px] font-bold grid place-items-center"
                  >{count}</motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
        <div className="lg:hidden border-t border-w2-ink/10 overflow-x-auto">
          <div className="flex gap-5 px-1 py-2 text-[11px] uppercase tracking-[0.18em] whitespace-nowrap text-w2-ink/70">
            {cats.map((c) => <a key={c} href="#">{c}</a>)}
          </div>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-w2-ink text-w2-bg/80 mt-20">
      <div className="ni-container py-12 grid sm:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-cormorant text-2xl tracking-[0.2em] text-white">RAVENA</div>
          <p className="text-xs text-white/60 mt-2 leading-relaxed">Moda autoral brasileira com tecidos nobres e produção responsável.</p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-w2-primary mb-3">Atendimento</div>
          <ul className="space-y-1.5 text-xs text-white/70">
            <li>Trocas e devoluções</li><li>Guia de medidas</li><li>Frete e prazos</li><li>FAQ</li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-w2-primary mb-3">Empresa</div>
          <ul className="space-y-1.5 text-xs text-white/70">
            <li>Manifesto</li><li>Tecidos & origem</li><li>Lojas físicas</li><li>Imprensa</li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-w2-primary mb-3">Receba primeiro</div>
          <p className="text-xs text-white/70">Novidades, drops e bastidores na sua caixa.</p>
          <form className="mt-3 flex" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Seu e-mail" className="flex-1 bg-white/10 px-3 py-2 text-xs rounded-l-md border border-white/10 outline-none" />
            <button className="bg-w2-primary px-4 text-xs font-semibold rounded-r-md text-white">OK</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[11px] text-white/50">
        © {new Date().getFullYear()} Ateliê Ravena · CNPJ 00.000.000/0001-00
      </div>
    </footer>
  );
}

function CartDrawer() {
  const { open, setOpen, items, remove, total } = useCart();
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)}>
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-w2-bg flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-w2-ink/10">
              <h3 className="font-cormorant text-2xl">Sua sacola</h3>
              <button onClick={() => setOpen(false)}><X className="size-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 && (
                <div className="text-center text-sm text-w2-ink/55 py-20">Sua sacola está vazia.<br/>Que tal explorar a coleção?</div>
              )}
              {items.map((it) => (
                <div key={it.product.id + (it.size||"") + (it.color||"")} className="flex gap-3">
                  <img src={it.product.img} alt="" className="size-20 object-cover rounded" decoding="async" loading="lazy"/>
                  <div className="flex-1 text-sm">
                    <div className="font-medium">{it.product.name}</div>
                    <div className="text-xs text-w2-ink/55">{it.size && `Tamanho ${it.size}`} {it.color && `· ${it.color}`}</div>
                    <div className="mt-1 flex items-center justify-between">
                      <span>Qtd. {it.qty}</span>
                      <span className="font-semibold">R$ {(it.product.price * it.qty).toFixed(0)}</span>
                    </div>
                    <button onClick={() => remove(it.product.id)} className="text-[11px] text-w2-primary mt-1">remover</button>
                  </div>
                </div>
              ))}
            </div>
            {items.length > 0 && (
              <div className="p-5 border-t border-w2-ink/10 space-y-3">
                <div className="flex justify-between text-sm"><span>Subtotal</span><span className="font-semibold">R$ {total.toFixed(0)}</span></div>
                <button className="w-full bg-w2-ink text-white py-3.5 rounded font-semibold uppercase tracking-widest text-xs hover:bg-w2-primary transition">Finalizar compra</button>
                <button onClick={() => setOpen(false)} className="w-full text-xs text-w2-ink/60 underline">continuar comprando</button>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
