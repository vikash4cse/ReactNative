import React, { useState, useEffect } from 'react';
import {
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';

export default function Assignment6() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim().length === 0) return;
    setTodos(prev => [...prev, { id: Date.now().toString(), text: todo }]);
    setTodo('');
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.todoItem}>
      <Text style={styles.todoText}>{item.text}</Text>
      <TouchableOpacity
        onPress={() => deleteTodo(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TextInput
        placeholder="Enter todo item"
        value={todo}
        onChangeText={setTodo}
        style={styles.input}
      />
      <Button
        title="Add Todo"
        onPress={addTodo}
        disabled={todo.trim().length === 0}
      />
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No todos yet</Text>}
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
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 6,
    padding: 12,
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  list: {
    marginTop: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 18,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#ef5350',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 10,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#aaa',
  },
  safeArea: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
