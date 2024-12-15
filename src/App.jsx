import React, { useState } from "react";
import Welcome from "./pages/Welcome";
import SurveyFlow from "./pages/SurveyFlow";

const App = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  const handleStartSurvey = () => {
    setShowSurvey(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {!showSurvey ? (
        <Welcome onStart={handleStartSurvey} />
      ) : (
        <SurveyFlow />
      )}
    </div>
  );
};

export default App;
