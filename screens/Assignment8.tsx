import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

// 🔁 Regular Child - Always re-renders
const RegularChild = ({ label }) => {
  console.log('🔁 RegularChild rendered');
  return <Text style={styles.child}>Regular: {label}</Text>;
};

const MemoizedChild = React.memo(({ label }) => {
  console.log('✅ MemoizedChild rendered');
  return <Text style={styles.child}>Memoized: {label}</Text>;
});

export default function Assignment8() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React.memo Demo</Text>

      <Text style={styles.counter}>Counter: {count}</Text>
      <Button title="Increment Counter" onPress={() => setCount(count + 1)} />

      <View style={styles.childBox}>
        <RegularChild label={text} />
        <MemoizedChild label={text} />
      </View>

      <Button
        title="Change Text Prop"
        onPress={() => setText(text === 'Hello' ? 'World' : 'Hello')}
        color="#6a0dad"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  counter: {
    fontSize: 20,
    marginVertical: 8,
  },
  childBox: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  child: {
    fontSize: 18,
    marginVertical: 4,
  },
});
