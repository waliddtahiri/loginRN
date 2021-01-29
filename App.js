import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Login, Home } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
