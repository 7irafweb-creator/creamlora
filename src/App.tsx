/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { products } from './data/products';

export default function App() {
  const bestOffers = products.filter(p => p.badge === 'Promo' || p.badge === 'Meilleure Vente').slice(0, 5);
  const newArrivals = products.filter(p => p.badge === 'Nouveau' || !p.badge).slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="bg-white py-8 my-8">
          <ProductGrid 
            title="Nos meilleures offres" 
            products={bestOffers} 
            viewAllLink="/offres"
          />
        </div>

        <div className="py-8">
          <ProductGrid 
            title="Nouveaux Arrivages" 
            products={newArrivals} 
            viewAllLink="/nouveautes"
          />
        </div>
        
        {/* Features Banner */}
        <section className="container mx-auto px-4 py-16 mb-8">
          <div className="bg-rose-500 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Besoin d'une routine personnalisée ?</h2>
              <p className="text-rose-100 text-lg mb-0">
                Nos experts beauté vous accompagnent pour créer la routine de soins parfaite, adaptée à votre type de peau et à vos besoins.
              </p>
            </div>
            <button className="bg-white text-rose-500 hover:bg-slate-100 font-bold py-4 px-8 rounded-xl whitespace-nowrap transition-colors shadow-lg">
              Diagnostic Gratuit
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
