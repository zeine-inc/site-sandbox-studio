import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronLeft } from "lucide-react";
import { findProduct, useCart, type Product } from "@/components/ecommerce/store";

export const Route = createFileRoute("/ecommerce/produto/$id")({
  loader: ({ params }) => {
    const p = findProduct(params.id);
    if (!p) throw notFound();
    return p;
  },
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData() as Product;
  const { add } = useCart();
  const [size, setSize] = useState<string>(p.sizes[0]);
  const [color, setColor] = useState<string>(p.colors[0]);
  const [added, setAdded] = useState(false);
  const combine: Product[] = (p.combine ?? []).map(findProduct).filter((x: Product | undefined): x is Product => Boolean(x));

  return (
    <div className="ni-container py-10">
      <Link to="/ecommerce" className="inline-flex items-center gap-1 text-xs text-w2-ink/55 mb-6 hover:text-w2-ink"><ChevronLeft className="size-3" /> voltar à coleção</Link>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="aspect-[3/4] overflow-hidden bg-w2-ink/5">
          <img src={p.img} alt={p.name} className="size-full object-cover" decoding="async" loading="lazy"/>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-w2-primary">{p.category}</div>
          <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl italic mt-1 break-words">{p.name}</h1>
          <div className="mt-4 text-2xl font-semibold">R$ {p.price}</div>
          <p className="mt-5 text-sm text-w2-ink/70 leading-relaxed">{p.desc}</p>

          <div className="mt-6">
            <div className="text-xs uppercase tracking-widest mb-2">Cor: {color}</div>
            <div className="flex gap-2">
              {p.colors.map((c) => (
                <button key={c} onClick={() => setColor(c)} className={`px-3 py-1.5 border text-xs ${color === c ? "border-w2-ink bg-w2-ink text-white" : "border-w2-ink/20"}`}>{c}</button>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <div className="text-xs uppercase tracking-widest mb-2">Tamanho: {size}</div>
            <div className="flex flex-wrap gap-2">
              {p.sizes.map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`min-w-12 px-3 py-2 border text-xs font-semibold ${size === s ? "border-w2-ink bg-w2-ink text-white" : "border-w2-ink/20"}`}>{s}</button>
              ))}
            </div>
          </div>

          <details className="mt-6 border-t pt-4 text-sm">
            <summary className="cursor-pointer font-medium">Tabela de medidas</summary>
            <div className="text-xs text-w2-ink/65 mt-2">PP veste 36 · P veste 38 · M veste 40 · G veste 42 · GG veste 44</div>
          </details>

          <button
            onClick={() => { add(p, { size, color }); setAdded(true); setTimeout(() => setAdded(false), 1500); }}
            className="mt-6 w-full bg-w2-ink text-white py-4 uppercase tracking-widest text-xs font-semibold hover:bg-w2-primary transition flex items-center justify-center gap-2"
          >
            {added ? <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-flex items-center gap-2"><Check className="size-4" /> adicionado</motion.span> : "Adicionar à sacola"}
          </button>
          <p className="mt-3 text-[11px] text-w2-ink/55 text-center">Frete grátis acima de R$ 599 · 30 dias para troca</p>
        </div>
      </div>

      {combine.length > 0 && (
        <section className="mt-20">
          <h2 className="font-cormorant text-3xl italic mb-6">Combine com</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {combine.map((c) => c && (
              <Link key={c.id} to="/ecommerce/produto/$id" params={{ id: c.id }} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-w2-ink/5">
                  <img src={c.img} alt={c.name} className="size-full object-cover group-hover:scale-105 transition duration-700" decoding="async" loading="lazy"/>
                </div>
                <div className="text-sm mt-2">{c.name}</div>
                <div className="text-xs font-semibold">R$ {c.price}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
