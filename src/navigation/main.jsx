import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import principal from '../screens/main';
import Profile from '../screens/profile';
import Chat from '../screens/chat';
import LoadingScreen from '../screens/loadView';
import LoginScreen from '../screens/loginView';
const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="principal" component={principal}  options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile}  options={{headerShown: false}}/>
        <Stack.Screen name="Chat" component={Chat}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
