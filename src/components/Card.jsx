import React from "react";

const Card = ({ title, description, link }) => {
  return (
    <div className="p-5 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
      <h2 className="text-xl font-semibold text-primary mb-3">{title}</h2>
      <p className="text-text mb-4">{description}</p>
      <a 
        href={link} 
        className="text-highlight underline hover:text-primary transition-colors"
      >
        Learn More
      </a>
    </div>
  );
};

export default Card;
