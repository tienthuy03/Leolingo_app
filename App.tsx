import React, { useState } from 'react';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import AuthNavigator from './src/navigation/AuthNavigation';
import MainNavigator from './src/navigation/MainNavigation';
import AppLoading from 'expo-app-loading';
import { EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY } from './clerkConfig';

// Định nghĩa font cần sử dụng
const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Light': require('./src/assets/fonts/Roboto-Light.ttf'),
  });
};

const App: React.FC = () => {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <SignedIn>
              <MainNavigator />
            </SignedIn>
            <SignedOut>
              <AuthNavigator />
            </SignedOut>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
};

export default App;
