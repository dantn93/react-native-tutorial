import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from '../redux/store'
import PictureList from '../views/picture-list';
import AnimationScreen from './animation';
import Validation from './validation';

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <Image source={require('../images/home-icon.png')} style={{width: 30, height: 30}} resizeMode="stretch" />}}/>
      <Tab.Screen name="Setting" component={Setting} options={{ tabBarIcon: () => <Image source={require('../images/settingbutton.png')} style={{width: 30, height: 30}} resizeMode="stretch" />}}/>
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => <Image source={require('../images/profile-icon.png')} style={{width: 30, height: 30}} resizeMode="stretch" />}}/>
      <Tab.Screen name="Product" component={Product} options={{ tabBarIcon: () => <Image source={require('../images/product-icon.png')} style={{width: 30, height: 30}} resizeMode="stretch" />}}/>
      
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const HomeDrawer = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Setting" component={Setting} />
//       <Drawer.Screen name="Product" component={Product} />
//       <Drawer.Screen name="Profile" component={Profile} />
//       <Drawer.Screen name="Vendor" component={Vendor} />
//     </Drawer.Navigator>
//   );
// }
export default RootComponent = function () {
  return (
    // <Login />
    // <Home />
    // <Setting />
    <Provider store={store}>
      <NavigationContainer>
        {/* Rest of your app code */}
        <Stack.Navigator initialRouteName="Validation" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeTabs" component={MyTabs} />
          <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
          <Stack.Screen name="Validation" component={Validation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}