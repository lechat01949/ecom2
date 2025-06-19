import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp } from 'lucide-react';

const StockBanner = () => {
  const [stock, setStock] = useState(47);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    const stockTimer = setInterval(() => {
      if (Math.random() < 0.3 && stock > 20) {
        setStock(prev => prev - 1);
      }
    }, 15000);

    return () => {
      clearInterval(timer);
      clearInterval(stockTimer);
    };
  }, [stock]);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 mt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-center">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 animate-pulse" />
            <span className="font-bold">STOCK LIMITÉ : Plus que {stock} disponibles !</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">
              Vente Flash se termine dans : {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <div className="bg-white/20 px-4 py-1 rounded-full">
            <span className="font-bold">-45% Aujourd'hui Seulement !</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockBanner;