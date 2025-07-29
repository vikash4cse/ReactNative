import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Assignment1 from './screens/Assignment1';
import Assignment2 from './screens/Assignment2';
import Assignment3 from './screens/Assignment3';
import Assignment4 from './screens/Assignment4';
import Assignment5 from './screens/Assignment5';
import Assignment6 from './screens/Assignment6';
import Assignment7 from './screens/Assignment7';
import Assignment8 from './screens/Assignment8';
import Assignment9 from './screens/Assignment9';
import Assignment10 from './screens/Assignment10';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Assignment 1" component={Assignment1} />
        <Stack.Screen name="Assignment 2" component={Assignment2} />
        <Stack.Screen name="Assignment 3" component={Assignment3} />
        <Stack.Screen name="Assignment 4" component={Assignment4} />
        <Stack.Screen name="Assignment 5" component={Assignment5} />
        <Stack.Screen name="Assignment 6" component={Assignment6} />
        <Stack.Screen name="Assignment 7" component={Assignment7} />
        <Stack.Screen name="Assignment 8" component={Assignment8} />
        <Stack.Screen name="Assignment 9" component={Assignment9} />
        <Stack.Screen name="Assignment 10" component={Assignment10} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
