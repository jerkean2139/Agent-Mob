import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradientPrimary text-white py-4 px-6 shadow-lg animate-fadeIn">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold">Zenoflo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
