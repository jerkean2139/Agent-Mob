import React, { useState } from "react";

const SurveyFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <div>Survey Question 1</div>;
      case 2:
        return <div>Survey Question 2</div>;
      // Add more cases for additional steps
      default:
        return <div>Thank you for completing the survey!</div>;
    }
  };

  return (
    <div className="survey-flow">
      <h2>Survey</h2>
      {renderStep()}
      {currentStep <= 2 && (
        <button onClick={handleNext} className="next-btn">
          Next
        </button>
      )}
    </div>
  );
};

export default SurveyFlow;
