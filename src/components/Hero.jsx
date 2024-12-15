import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradientAccent text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Welcome to Zenoflo</h1>
        <p className="text-lg mb-6 animate-pulseSlow">Innovating solutions, empowering businesses.</p>
        <button className="bg-highlight text-primary px-6 py-3 rounded-lg shadow hover:bg-primary hover:text-white transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
