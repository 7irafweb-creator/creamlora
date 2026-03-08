import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, CreditCard, Truck, ShieldCheck, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-blue-600">
      <div className="container mx-auto px-4">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 border-b border-slate-800 pb-16">
          <div className="flex items-center gap-4">
            <div className="bg-slate-800 p-4 rounded-full text-blue-500">
              <Truck size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Livraison Rapide</h4>
              <p className="text-sm text-slate-400">Partout au Maroc</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-slate-800 p-4 rounded-full text-blue-500">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Garantie & SAV</h4>
              <p className="text-sm text-slate-400">Jusqu'à 2 ans de garantie</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-slate-800 p-4 rounded-full text-blue-500">
              <CreditCard size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Paiement Sécurisé</h4>
              <p className="text-sm text-slate-400">À la livraison ou en ligne</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-slate-800 p-4 rounded-full text-blue-500">
              <Clock size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Support 7j/7</h4>
              <p className="text-sm text-slate-400">De 9h à 20h</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <a href="/" className="text-3xl font-bold text-white tracking-tighter mb-6 block">
              TERA<span className="text-blue-500">.ma</span>
            </a>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Votre expert informatique et High-Tech au Maroc. Achat et vente de PC, composants, périphériques et accessoires gaming.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm">123 Boulevard d'Anfa, Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span className="text-sm">+212 5 22 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span className="text-sm">contact@tera.ma</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Informations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">À propos de nous</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Livraison et retours</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Conditions générales de vente</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400 transition-colors">Garantie</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">
              Inscrivez-vous pour recevoir nos dernières offres et promotions.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} TERA.ma. Tous droits réservés.
          </p>
          <div className="flex gap-2">
            <img src="https://picsum.photos/seed/visa/40/25" alt="Visa" className="rounded bg-white p-1" />
            <img src="https://picsum.photos/seed/mastercard/40/25" alt="Mastercard" className="rounded bg-white p-1" />
            <img src="https://picsum.photos/seed/cmi/40/25" alt="CMI" className="rounded bg-white p-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
