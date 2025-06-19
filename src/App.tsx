import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import WhyChoose from './components/WhyChoose';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import StockBanner from './components/StockBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StockBanner />
      <Hero />
      <ProductSection />
      <WhyChoose />
      <Reviews />
      <FAQ />
      <Checkout />
      <Footer />
    </div>
  );
}

export default App;