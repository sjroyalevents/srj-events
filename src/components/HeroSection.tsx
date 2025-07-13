import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(/path/to/your/hero-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Eventastic Varanasi: Crafting Unforgettable Moments in the Heart of India
          </h1>
          <p className="mt-4 text-lg md:text-xl">Your premier partner for stunning decorations and seamless events.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;