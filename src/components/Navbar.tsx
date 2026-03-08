import { ShoppingCart, Search, User, Menu, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-rose-900 text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1"><Phone size={14} /> +212 5 22 00 00 00</span>
            <span className="flex items-center gap-1"><Mail size={14} /> contact@beautycare.ma</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Livraison partout au Maroc</span>
            <span>Produits 100% Authentiques</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-3xl font-bold text-rose-500 tracking-tighter">
            BEAUTY<span className="text-slate-900">Care</span>
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:flex">
          <div className="relative w-full flex">
            <input 
              type="text" 
              placeholder="Rechercher un soin, un parfum, une marque..." 
              className="w-full pl-4 pr-12 py-2.5 border border-rose-200 rounded-l-lg focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
            />
            <button className="bg-rose-500 text-white px-6 rounded-r-lg hover:bg-rose-600 transition-colors flex items-center justify-center">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <button className="flex flex-col items-center text-slate-600 hover:text-rose-500 transition-colors">
            <User size={24} />
            <span className="text-xs font-medium mt-1">Compte</span>
          </button>
          <button className="flex flex-col items-center text-slate-600 hover:text-rose-500 transition-colors relative">
            <div className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <span className="text-xs font-medium mt-1">Panier</span>
          </button>
          <button className="md:hidden text-slate-600">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Categories Menu */}
      <div className="border-t border-rose-100 hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center space-x-8 text-sm font-medium text-slate-700 py-3">
            <li className="flex items-center gap-1 hover:text-rose-500 cursor-pointer text-rose-500 font-semibold">
              <Menu size={18} /> Tous les rayons
            </li>
            <li className="hover:text-rose-500 cursor-pointer">Soins du Visage</li>
            <li className="hover:text-rose-500 cursor-pointer">Soins du Corps</li>
            <li className="hover:text-rose-500 cursor-pointer">Maquillage</li>
            <li className="hover:text-rose-500 cursor-pointer">Parfums</li>
            <li className="hover:text-rose-500 cursor-pointer">Hygiène</li>
            <li className="hover:text-rose-500 cursor-pointer">Cheveux</li>
            <li className="hover:text-rose-500 cursor-pointer text-rose-600 font-bold">Promotions</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
