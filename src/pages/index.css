import React, { useState } from "react";
import SurveyForm from "../components/SurveyForm";
import Results from "../components/Results";

const SurveyPage = () => {
  const [responses, setResponses] = useState(null);

  return (
    <div className="container mx-auto py-8">
      {!responses ? (
        <SurveyForm setResponses={setResponses} />
      ) : (
        <Results responses={responses} />
      )}
    </div>
  );
};

export default SurveyPage;
