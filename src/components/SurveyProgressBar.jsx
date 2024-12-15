import React from "react";

const SurveyProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div className="w-full bg-gray-300 rounded-full h-4 mb-6">
      <div
        className="bg-primary h-4 rounded-full transition-all"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default SurveyProgressBar;
