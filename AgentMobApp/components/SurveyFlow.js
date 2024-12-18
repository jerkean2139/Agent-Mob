import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ThankYou from './ThankYou'; // Import the ThankYou component

const SurveyFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
  });

  const questions = [
    { id: 1, label: 'First Name', name: 'firstName' },
    { id: 2, label: 'Last Name', name: 'lastName' },
    { id: 3, label: 'Email', name: 'email' },
    { id: 4, label: 'Phone', name: 'phone' },
    { id: 5, label: 'Company Name', name: 'companyName' },
    { id: 6, label: 'What is your team size?', name: 'teamSize', options: ['1-5', '6-10', '11-15', '16-20', '20+'] },
    { id: 7, label: 'What percentage of your team works remotely?', name: 'remoteWork', options: ['0-25%', '26-50%', '51-75%', '76-100%'] },
  ];

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowThankYou(true);
      console.log('Survey Data:', formData); // Log collected data for testing
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setShowThankYou(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
    });
  };

  if (showThankYou) {
    return <ThankYou onRestart={handleRestart} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Step {currentStep + 1} of {questions.length}</Text>
      <Text style={styles.question}>{questions[currentStep].label}</Text>

      {questions[currentStep].options ? (
        questions[currentStep].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleChange(questions[currentStep].name, option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <TextInput
          style={styles.input}
          placeholder={`Enter your ${questions[currentStep].label.toLowerCase()}`}
          value={formData[questions[currentStep].name]}
          onChangeText={(value) => handleChange(questions[currentStep].name, value)}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentStep < questions.length - 1 ? 'Next' : 'Finish'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFD5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6A6A4B',
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    color: '#3A3A3A',
  },
  input: {
    borderWidth: 1,
    borderColor: '#6A6A4B',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A6A4B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  optionButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#6A6A4B',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  optionText: {
    color: '#3A3A3A',
    fontSize: 16,
  },
});

export default SurveyFlow;
