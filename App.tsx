import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  FlatList,
  SafeAreaView,
} from 'react-native';

// Assignment 1
const CounterScreen = () => {
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
export default CounterScreen;

/*
// Assignment 2
const GreetingScreen = () => {
  return (
    <View style={styles.container}>
      <GreetingCard name="Vikash" message="Good morning!" />
      <GreetingCard name="Ishan" message="Thanks for the walk through!" />
      <GreetingCard name="Yatesh" message="Very well guided tutorial!" />
    </View>
  );
};
export default GreetingScreen;
*/

/*
// Assignment 3
const ToggleDetailsScreen = () => {
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
};
export default ToggleDetailsScreen;
*/

/*
// Assignment 4
const Timer = () => {
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
};

export default Timer;
*/

/*
// Assignment 5
const InputScreen = () => {
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
};

export default InputScreen;
*/

/*
// Assignment 6
const TodoList = () => {
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
};
export default TodoList;
*/

// Reusable component
const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

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
  // Greeting Card
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
  detailsText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
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
