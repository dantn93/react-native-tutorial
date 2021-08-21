import React, { Component } from 'react'
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Login from './login';
import Home from './home';
import Setting from './setting';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default RootComponent = function() {
  return(
    // <Login />
    // <Home />
    // <Setting />
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}