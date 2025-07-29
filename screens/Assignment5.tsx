import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';

export default function Assignment5() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = () => {
    setGreeting(`Hello, ${name}!`);
    Keyboard.dismiss(); // close keyboard after submit
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.greettingInput}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {greeting.length > 0 && <Text style={styles.greeting}>{greeting}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greettingInput: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 6,
    padding: 12,
    fontSize: 18,
    marginBottom: 20,
  },
  greeting: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
