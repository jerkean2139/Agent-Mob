import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ThankYou = ({ onRestart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.message}>We appreciate your time and input.</Text>
      <TouchableOpacity style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Restart Survey</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFD5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A6A4B',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#3A3A3A',
    textAlign: 'center',
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
    fontSize: 16,
  },
});

export default ThankYou;
