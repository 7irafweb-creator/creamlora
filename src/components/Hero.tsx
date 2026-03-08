import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Banner */}
        <div className="md:w-3/4 relative rounded-2xl overflow-hidden bg-rose-900 h-[400px]">
          <img 
            src="https://picsum.photos/seed/skincare/1200/600" 
            alt="Promotion Beauté" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-12">
            <span className="text-rose-200 font-bold tracking-wider uppercase text-sm mb-2">Offre Spéciale Printemps</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Jusqu'à -40% sur les <br/>Soins du Visage
            </h1>
            <p className="text-rose-100 mb-8 max-w-md">
              Découvrez notre sélection de crèmes hydratantes, sérums et masques pour une peau éclatante.
            </p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-8 rounded-lg w-fit flex items-center gap-2 transition-colors">
              Découvrir <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Side Banners */}
        <div className="md:w-1/4 flex flex-col gap-6">
          <div className="bg-rose-50 rounded-2xl p-6 flex-1 relative overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/perfume/400/300" 
              alt="Parfums" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Parfums de Luxe</h3>
                <p className="text-sm text-slate-600 mt-1">Nouvelles fragrances</p>
              </div>
              <a href="#" className="text-rose-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Voir les offres <ChevronRight size={16} />
              </a>
            </div>
          </div>
          
          <div className="bg-pink-50 rounded-2xl p-6 flex-1 relative overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/makeup/400/300" 
              alt="Maquillage" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Maquillage</h3>
                <p className="text-sm text-slate-600 mt-1">Teint, yeux, lèvres...</p>
              </div>
              <a href="#" className="text-rose-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Acheter <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
