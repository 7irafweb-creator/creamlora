import { ShoppingCart, Star } from 'lucide-react';
import React from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  badge?: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-square p-4 bg-white flex items-center justify-center">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded z-10">
            -{discount}%
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow border-t border-slate-100">
        <span className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-medium">{product.category}</span>
        <h3 className="text-sm font-semibold text-slate-800 mb-2 line-clamp-2 flex-grow hover:text-rose-600 cursor-pointer">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-xs text-slate-500">({product.reviews})</span>
        </div>

        {/* Price & Action */}
        <div className="flex items-end justify-between mt-auto">
          <div>
            {product.oldPrice && (
              <p className="text-xs text-slate-400 line-through mb-0.5">{product.oldPrice.toLocaleString('fr-MA')} Dhs</p>
            )}
            <p className="text-lg font-bold text-red-600">{product.price.toLocaleString('fr-MA')} Dhs</p>
          </div>
          <button className="bg-slate-100 hover:bg-rose-500 text-slate-700 hover:text-white p-2.5 rounded-lg transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
