import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const cards = [
  { id: 1, title: 'Card 1', description: 'This is the first card.' },
  { id: 2, title: 'Card 2', description: 'This is the second card.' },
  { id: 3, title: 'Card 3', description: 'This is the third card.' },
  { id: 4, title: 'Card 4', description: 'This is the fourth card.' },
  { id: 5, title: 'Card 5', description: 'This is the fifth card.' },
  { id: 6, title: 'Card 6', description: 'This is the sixth card.' },
];

const Assignment7 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.grid}>
          {cards.map(card => (
            <View key={card.id} style={styles.card}>
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.description}>{card.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Assignment7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContainer: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    marginBottom: 16,
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
