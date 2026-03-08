import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Banner */}
        <div className="md:w-3/4 relative rounded-2xl overflow-hidden bg-slate-900 h-[400px]">
          <img 
            src="https://picsum.photos/seed/techbanner/1200/600" 
            alt="Promotion" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-12">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2">Offre Spéciale</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Jusqu'à -40% sur les <br/>PC Portables Gamer
            </h1>
            <p className="text-slate-300 mb-8 max-w-md">
              Découvrez notre sélection de PC portables gaming haute performance à des prix imbattables.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg w-fit flex items-center gap-2 transition-colors">
              Découvrir <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Side Banners */}
        <div className="md:w-1/4 flex flex-col gap-6">
          <div className="bg-slate-100 rounded-2xl p-6 flex-1 relative overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/macbook/400/300" 
              alt="MacBook" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Apple Occasion</h3>
                <p className="text-sm text-slate-600 mt-1">Garantie 6 mois</p>
              </div>
              <a href="#" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Voir les offres <ChevronRight size={16} />
              </a>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-6 flex-1 relative overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/accessories/400/300" 
              alt="Accessoires" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Accessoires</h3>
                <p className="text-sm text-slate-600 mt-1">Souris, claviers, casques...</p>
              </div>
              <a href="#" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Acheter <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
