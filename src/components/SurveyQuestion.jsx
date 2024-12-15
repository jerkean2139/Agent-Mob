import React, { useState } from "react";

const SurveyQuestion = ({ question, onNext, onBack, isLast }) => {
  const [answer, setAnswer] = useState("");

  const handleNextClick = () => {
    if (answer) {
      onNext(answer);
    }
  };

  return (
    <div className="text-center animate-fadeIn">
      <h2 className="text-2xl font-bold text-text mb-4">{question.text}</h2>
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => setAnswer(option)}
            className={`px-4 py-2 rounded-lg text-white bg-primary transition-transform ${
              answer === option ? "scale-105" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={onBack}
          className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
          disabled={!onBack}
        >
          Back
        </button>
        <button
          onClick={handleNextClick}
          className="px-4 py-2 bg-highlight text-text rounded"
          disabled={!answer}
        >
          {isLast ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default SurveyQuestion;
