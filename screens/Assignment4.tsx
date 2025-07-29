import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Assignment4() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Start timer on mount
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // stops timer on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>Time on screen: {seconds} seconds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
