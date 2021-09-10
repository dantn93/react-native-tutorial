import React, { Component } from 'react'
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Login from './login';
import Home from './home';
import Setting from './setting';
import Product from './product';
import Vendor from './vendor';
import Profile from './profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import product from './product';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Product" component={Product} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Vendor" component={Vendor} />
    </Drawer.Navigator>
  );
}
export default RootComponent = function () {
  return (
    // <Login />
    // <Home />
    // <Setting />
    <NavigationContainer>
      {/* Rest of your app code */}

      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}