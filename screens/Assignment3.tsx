import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Assignment3() {
  const [visible, setVisible] = useState(false);

  const toggleDetails = () => {
    setVisible(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Button
        title={visible ? 'Hide Details' : 'Show Details'}
        onPress={toggleDetails}
      />
      {visible}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
