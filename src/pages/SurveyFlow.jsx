import React, { useState } from "react";
import axios from "axios";
import "./SurveyFlow.css";

const SurveyFlow = () => {
  const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/IneCJiGfTfc6j6GL2ADV/webhook-trigger/cecf0947-d00b-4731-b357-2dd071f3bd92"; 

  const questions = [
    { id: 1, question: "What is your first name?", inputType: "text" },
    { id: 2, question: "What is your last name?", inputType: "text" },
    { id: 3, question: "What is your email address?", inputType: "email" },
    { id: 4, question: "What is your phone number?", inputType: "tel" },
    { id: 5, question: "What is your company name?", inputType: "text" },
    {
      id: 6,
      question: "How many interactions do you handle daily?",
      inputType: "select",
      options: ["0-100", "101-500", "501-1000", "1000+"],
    },
    {
      id: 7,
      question: "Do you require after-hours support?",
      inputType: "select",
      options: ["Yes", "No"],
    },
    {
      id: 8,
      question: "Which departments will use this system?",
      inputType: "multiSelect",
      options: [
        "Sales",
        "Customer Support",
        "Technical Support",
        "Product Team",
        "Billing/Finance",
        "HR/Internal",
        "Marketing",
      ],
    },
    {
      id: 9,
      question: "What are your weekly time investments for repetitive tasks?",
      inputType: "number",
    },
    {
      id: 10,
      question: "What is your team size?",
      inputType: "select",
      options: ["1-10", "11-50", "51-200", "201+"],
    },
    {
      id: 11,
      question: "What is the average salary range of your team?",
      inputType: "select",
      options: ["$10k-30k", "$30k-50k", "$51k-75k", "$76k-100k", "$100k+"],
    },
    {
      id: 12,
      question: "What format are your documents primarily in?",
      inputType: "select",
      options: ["PDF", "Word", "Excel", "Other"],
    },
    {
      id: 13,
      question: "How frequently are your documents updated?",
      inputType: "select",
      options: ["Daily", "Weekly", "Monthly", "Rarely"],
    },
    {
      id: 14,
      question: "How many documents do you manage monthly?",
      inputType: "number",
    },
    {
      id: 15,
      question: "What are your primary languages for customer communication?",
      inputType: "multiSelect",
      options: [
        "English",
        "Spanish",
        "French",
        "German",
        "Chinese",
        "Japanese",
        "Other",
      ],
      conditionalFields: {
        other: {
          type: "text",
          label: "Please specify other languages",
        },
      },
    },
    {
      id: 16,
      question: "What existing tools need to integrate with the system?",
      inputType: "multiSelect",
      options: [
        "CRM",
        "Help Desk",
        "Knowledge Base",
        "Chat Platform",
        "Email Platform",
        "Custom Internal Tools",
      ],
      conditionalFields: {
        custom: {
          type: "text",
          label: "Please specify custom tools",
        },
      },
    },
    {
      id: 17,
      question: "Do you have any specific compliance requirements?",
      inputType: "multiSelect",
      options: ["HIPAA", "GDPR", "SOC2", "PCI", "ISO 27001", "Other"],
      conditionalFields: {
        other: {
          type: "text",
          label: "Please specify other compliance requirements",
        },
      },
    },
    {
      id: 18,
      question: "What are your data security requirements?",
      inputType: "multiSelect",
      options: [
        "Data encryption",
        "Access controls",
        "Audit logs",
        "Regular backups",
        "Geographic data restrictions",
      ],
    },
    {
      id: 19,
      question: "What are your support hours requirements?",
      inputType: "text",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleAnswerChange = (value) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitSurvey();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitSurvey = async () => {
    try {
      await axios.post(WEBHOOK_URL, answers);
      window.location.href = "/thank-you"; // Redirect to Thank You Page
    } catch (error) {
      console.error("Error submitting survey:", error);
      alert("There was an issue submitting the survey. Please try again.");
    }
  };

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="survey-container">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="survey-question">
        <p>{currentQuestion.question}</p>
        <div className="input-container">
          {currentQuestion.inputType === "text" && (
            <input
              type="text"
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
            />
          )}
          {currentQuestion.inputType === "email" && (
            <input
              type="email"
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
            />
          )}
          {currentQuestion.inputType === "tel" && (
            <input
              type="tel"
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
            />
          )}
          {currentQuestion.inputType === "number" && (
            <input
              type="number"
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
            />
          )}
          {currentQuestion.inputType === "select" && (
            <select
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
            >
              <option value="">Select an option</option>
              {currentQuestion.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {currentQuestion.inputType === "multiSelect" && (
            <div>
              {currentQuestion.options.map((option, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={option}
                    checked={
                      answers[currentQuestion.id]?.includes(option) || false
                    }
                    onChange={(e) => {
                      const selectedOptions = answers[currentQuestion.id] || [];
                      if (e.target.checked) {
                        setAnswers({
                          ...answers,
                          [currentQuestion.id]: [...selectedOptions, option],
                        });
                      } else {
                        setAnswers({
                          ...answers,
                          [currentQuestion.id]: selectedOptions.filter(
                            (o) => o !== option
                          ),
                        });
                      }
                    }}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="survey-buttons">
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext}>
          {currentQuestionIndex === totalQuestions - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default SurveyFlow;
