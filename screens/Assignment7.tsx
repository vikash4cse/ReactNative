import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Assignment7 = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton title="+" onPress={increment} />
        <CustomButton title="-" onPress={decrement} />
      </View>
    </View>
  );
};

export default Assignment7;

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Counter
  countText: {
    fontSize: 64,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
