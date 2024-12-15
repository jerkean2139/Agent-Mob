import React from "react";
import Header from "../components/Header";
import SurveyForm from "../components/SurveyForm";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome to Agent Mob!</h2>
        <SurveyForm />
      </main>
    </div>
  );
};

export default Home;
