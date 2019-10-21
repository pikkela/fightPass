import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import navigation
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 //TODO create training screen and styles screen

//import screens
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateScreen from './screens/CreateScreen';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';
import CalendarScreen from './screens/CalendarScreen';
import SignInScreen from './screens/SignInScreen';

const AppNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Create: {screen: CreateScreen},
    Edit: {screen: EditScreen},
    Calendar: {screen: CalendarScreen},
    SignIn: {screen: SignInScreen}
  }
)

const App = createAppContainer(AppNavigator);
export default App;
