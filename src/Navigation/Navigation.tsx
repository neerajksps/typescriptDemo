import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import UserProfileScreen from '../Screens/UserProfileScreen';

export type RootStackParamList = {
  splash: undefined;
  login: undefined;
  home: undefined;
  userProfile: { item: { image: number, name: string, address: string, age: number } };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="userProfile" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
