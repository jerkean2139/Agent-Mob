// formulas.js

const calculateVolumeScore = (surveyData) => {
    const dailyInteractions = surveyData.interactionVolume;
    const volumePoints = { '0-100': 10, '101-500': 20, '501-1000': 30, '1000+': 40 };
    const afterHoursMultiplier = surveyData.afterHoursSupport ? 1.2 : 1;
    return getPointsForRange(dailyInteractions, volumePoints) * afterHoursMultiplier;
  };
  
  const calculateDepartmentScore = (surveyData) => {
    const departmentPoints = {
      Sales: 15,
      'Customer Support': 20,
      'Technical Support': 25,
      'Product Team': 15,
      'Billing/Finance': 10,
      HR: 10,
      Marketing: 10,
    };
    const baseScore = surveyData.departments.reduce(
      (total, dept) => total + (departmentPoints[dept] || 0),
      0
    );
    const complexityMultiplier = Math.log2(surveyData.departments.length) * 1.2;
    return baseScore * complexityMultiplier;
  };
  
  const calculateTimeScore = (surveyData) => {
    const timeInvestment = {
      repetitiveQuestions: surveyData.weeklyHours.repetitiveQuestions * 2,
      documentation: surveyData.weeklyHours.documentation * 1.5,
      knowledgeSharing: surveyData.weeklyHours.knowledgeSharing * 1.8,
    };
    return Object.values(timeInvestment).reduce((a, b) => a + b, 0);
  };
  
  const calculateDocScore = (surveyData) => {
    const docScore = {
      basePerDoc: 10,
      formatMultiplier: { PDF: 1.5, Word: 1.2, Plain: 1 },
      volumeMultiplier: 1.1,
      updateFrequency: { daily: 1.5, weekly: 1.2, monthly: 1, rarely: 0.8 },
    };
    const baseDocScore =
      docScore.basePerDoc *
      docScore.formatMultiplier[surveyData.primaryFormat] *
      docScore.volumeMultiplier;
    return baseDocScore * docScore.updateFrequency[surveyData.updateFrequency];
  };
  
  const calculateTeamScore = (surveyData) => {
    const sizePoints = { '1-10': 10, '11-50': 20, '51-200': 30, '201+': 40 };
    const salaryPoints = {
      '$10k-30k': 5,
      '$30k-50k': 10,
      '$51k-75k': 15,
      '$76k-100k': 20,
      '$100k+': 25,
    };
    return sizePoints[surveyData.employeeCount] + salaryPoints[surveyData.averageSalary];
  };
  
  const calculateRecommendedAgents = (surveyData) => {
    const volumeScore = calculateVolumeScore(surveyData);
    const departmentScore = calculateDepartmentScore(surveyData);
    const timeScore = calculateTimeScore(surveyData);
    const docScore = calculateDocScore(surveyData);
    const teamScore = calculateTeamScore(surveyData);
  
    const totalScore =
      volumeScore * 0.25 +
      departmentScore * 0.2 +
      timeScore * 0.25 +
      docScore * 0.15 +
      teamScore * 0.15;
  
    const agentRecommendations = [
      { threshold: 0, name: 'Main Router', role: 'Traffic Director' },
      { threshold: 50, name: 'Support Expert', role: 'Documentation & Support' },
      { threshold: 75, name: 'Sales Specialist', role: 'Sales Process & Quotes' },
      { threshold: 100, name: 'Technical Specialist', role: 'Advanced Technical Support' },
      { threshold: 125, name: 'Custom Specialist', role: 'Unique Department Support' },
    ];
  
    return {
      totalScore,
      recommendedAgents: agentRecommendations.filter((agent) => totalScore >= agent.threshold),
    };
  };
  
  export { calculateVolumeScore, calculateDepartmentScore, calculateTimeScore, calculateDocScore, calculateTeamScore, calculateRecommendedAgents };
  