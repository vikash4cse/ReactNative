import React, { useState } from 'react';
import { Text, Switch, StyleSheet, SafeAreaView } from 'react-native';

export default function Assignment10() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dynamic styles based on dark mode state
  const backgroundColor = isDarkMode ? '#121212' : '#FFFFFF';
  const textColor = isDarkMode ? '#FFFFFF' : '#000000';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>
        {isDarkMode ? 'Dark Mode is On' : 'Light Mode is On'}
      </Text>

      <Switch
        value={isDarkMode}
        onValueChange={value => setIsDarkMode(value)}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
