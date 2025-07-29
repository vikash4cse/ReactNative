import React from 'react';
import { View, Button, Alert, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const buttons = Array.from({ length: 10 }, (_, i) => i + 1);
  const handlePress = index => {
    const screenName = `Assignment ${index}`;
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {buttons.map((btn, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Button
            title={`Assignment ${btn}`}
            onPress={() => handlePress(btn)}
            color="#6200EE"
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});
