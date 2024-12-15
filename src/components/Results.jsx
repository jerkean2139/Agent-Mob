import React from "react";
import { calculateRecommendedAgents } from "../utils/formulas";

const Results = ({ responses }) => {
  const recommendation = calculateRecommendedAgents(responses);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Survey Results</h2>
      <p>Total Score: {recommendation.totalScore}</p>
      <h3 className="text-lg font-semibold mt-4">Recommended Agents:</h3>
      <ul>
        {recommendation.recommendedAgents.map((agent, index) => (
          <li key={index}>{agent.name} - {agent.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
