import ProductCard, { Product } from './ProductCard';
import { ChevronRight } from 'lucide-react';

interface ProductGridProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

export default function ProductGrid({ title, products, viewAllLink = '#' }: ProductGridProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
        <a href={viewAllLink} className="text-rose-500 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
          Voir tout <ChevronRight size={16} />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
