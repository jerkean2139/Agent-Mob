import React from "react";

const Welcome = ({ onStart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-10 p-6 text-center">
      <h1 className="text-3xl font-bold text-primary mb-4">Welcome to Agent Mob</h1>
      <p className="text-gray-700 mb-6">
        Agent Mob is here to help you configure the perfect AI assistant. Take a short survey, and we'll guide you every step of the way!
      </p>
      <button
        onClick={onStart}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Start Agent Mob Survey
      </button>
    </div>
  );
};

export default Welcome;
