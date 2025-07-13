import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(/path/to/your/hero-image.jpg)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, var(--primary) 60%, var(--accent) 100%)', opacity: 0.85 }}></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: 'var(--secondary)' }}>
            Eventastic Varanasi: Crafting Unforgettable Moments in the Heart of India
          </h1>
          <p className="mt-4 text-lg md:text-xl" style={{ color: 'var(--accent)' }}>Your premier partner for stunning decorations and seamless events.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;