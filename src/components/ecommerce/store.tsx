import { createContext, useContext, useState, type ReactNode } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  badge?: "Novo" | "Bestseller" | "Edição limitada";
  img: string;
  desc: string;
  sizes: string[];
  colors: string[];
  combine?: string[];
}

export const PRODUCTS: Product[] = [
  { id: "p1", name: "Vestido Mirante Linho", price: 489, category: "Vestidos", badge: "Bestseller", img: "https://images.unsplash.com/photo-1612722432474-b971cdcea546?w=800&q=80&auto=format", desc: "Vestido midi em linho lavado com caimento fluido e amarração na cintura. Peça atemporal, feita à mão em São Paulo.", sizes: ["PP", "P", "M", "G"], colors: ["Areia", "Terracota", "Preto"], combine: ["p4","p7","p9"] },
  { id: "p2", name: "Vestido Sereno Tricô", price: 649, category: "Vestidos", badge: "Novo", img: "https://images.unsplash.com/photo-1623609163859-ca93c959b98a?w=800&q=80&auto=format", desc: "Tricô artesanal de algodão pima. Manga longa, comprimento midi.", sizes: ["P", "M", "G"], colors: ["Off-white"] },
  { id: "p3", name: "Vestido Areia Crepe", price: 539, category: "Vestidos", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80&auto=format", desc: "Crepe leve de viscose. Modelagem evasê com bolsos discretos.", sizes: ["PP", "P", "M", "G", "GG"], colors: ["Verde-musgo", "Preto"] },
  { id: "p4", name: "Blusa Verão Pongê", price: 289, category: "Blusas", badge: "Bestseller", img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80&auto=format", desc: "Blusa de pongê de seda com mangas bufantes. Caimento elegante para o dia ou para a noite.", sizes: ["P", "M", "G"], colors: ["Off-white", "Cobre"] },
  { id: "p5", name: "Camisa Manhã Algodão", price: 319, category: "Blusas", img: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80&auto=format", desc: "Camisa oversized de algodão egípcio. Toque sedoso, ideal para o dia a dia.", sizes: ["PP", "P", "M", "G"], colors: ["Branco", "Areia"] },
  { id: "p6", name: "Top Brisa Linho", price: 219, category: "Blusas", badge: "Novo", img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80&auto=format", desc: "Top cropped em linho lavado. Decote V e amarração nas costas.", sizes: ["P", "M", "G"], colors: ["Areia", "Preto"] },
  { id: "p7", name: "Calça Pantalona Atelier", price: 569, category: "Calças", badge: "Bestseller", img: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80&auto=format", desc: "Pantalona de alfaiataria em sarja de viscose. Cintura alta, bolsos faca, comprimento longo.", sizes: ["36","38","40","42","44"], colors: ["Preto", "Areia"] },
  { id: "p8", name: "Calça Reta Tencel", price: 489, category: "Calças", img: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80&auto=format", desc: "Modelagem reta em tencel ecológico. Conforto e fluidez.", sizes: ["36","38","40","42"], colors: ["Verde-musgo", "Marrom"] },
  { id: "p9", name: "Bolsa Castanho Couro", price: 729, category: "Acessórios", badge: "Edição limitada", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80&auto=format", desc: "Bolsa estruturada em couro vegetal vegetal italiano. Alça larga ajustável e fecho magnético.", sizes: ["Único"], colors: ["Castanho"] },
  { id: "p10", name: "Cinto Trama Couro", price: 189, category: "Acessórios", img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80&auto=format", desc: "Cinto trançado à mão. Ajuste em 5 furos.", sizes: ["P","M","G"], colors: ["Castanho"] },
  { id: "p11", name: "Brincos Maré Latão", price: 169, category: "Acessórios", img: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=80&auto=format", desc: "Brincos esculturais em latão banhado a ouro fosco.", sizes: ["Único"], colors: ["Dourado fosco"] },
  { id: "p12", name: "Lenço Solstício Seda", price: 259, category: "Acessórios", badge: "Novo", img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80&auto=format", desc: "Lenço quadrado em seda pura com estampa exclusiva da artista Nina Martinelli.", sizes: ["Único"], colors: ["Terracota", "Verde"] },
];

interface CartItem { product: Product; qty: number; size?: string; color?: string; }
interface CartCtx {
  items: CartItem[];
  add: (p: Product, opts?: { size?: string; color?: string }) => void;
  remove: (id: string) => void;
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const add = (p: Product, opts?: { size?: string; color?: string }) => {
    setItems((cur) => {
      const ix = cur.findIndex((i) => i.product.id === p.id && i.size === opts?.size && i.color === opts?.color);
      if (ix >= 0) {
        const copy = [...cur]; copy[ix] = { ...copy[ix], qty: copy[ix].qty + 1 }; return copy;
      }
      return [...cur, { product: p, qty: 1, size: opts?.size, color: opts?.color }];
    });
    setOpen(true);
  };
  const remove = (id: string) => setItems((c) => c.filter((i) => i.product.id !== id));
  const count = items.reduce((a, b) => a + b.qty, 0);
  const total = items.reduce((a, b) => a + b.qty * b.product.price, 0);
  return <Ctx.Provider value={{ items, add, remove, count, total, open, setOpen }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("CartProvider missing");
  return c;
}

export function findProduct(id: string) { return PRODUCTS.find((p) => p.id === id); }
