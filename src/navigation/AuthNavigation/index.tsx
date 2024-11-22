import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screen/Auth/SignInScreen';
import WelcomeScreen from '../../screen/WelcomeScreen';
import { RootStackParamList } from '../RootStackParamList';
import MainNavigator from '../MainNavigation';


const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='BottomTab'
        component={MainNavigator}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
