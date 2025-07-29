import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Assignment2() {
  return (
    <View style={styles.container}>
      <GreetingCard name="Vikash" message="Good morning!" />
      <GreetingCard name="Ishan" message="Thanks for the walk through!" />
      <GreetingCard name="Yatesh" message="Very well guided tutorial!" />
    </View>
  );
}

const GreetingCard = ({ name, message }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Hello, {name}!</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignSelf: 'flex-start',
    marginLeft: 20,
    width: '90%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
    color: '#444',
  },
});
