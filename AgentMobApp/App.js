import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SurveyFlow from './components/SurveyFlow';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SurveyFlow />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFD5', // Highlight background color
  },
});
