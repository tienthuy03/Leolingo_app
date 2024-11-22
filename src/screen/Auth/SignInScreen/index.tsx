import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStackParamList';
import { EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY } from '../../../../clerkConfig';


type Props = NativeStackScreenProps<RootStackParamList, 'BottomTab'>;
const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const signInUrl = `https://clerk.dev/sign-in?publishableKey=${EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}`;
  const successRedirectUrl = 'http://localhost:19006/home';
  return (
    <View style={styles.container}>
      {/* <WebView source={{ uri: signInUrl }}
        onNavigationStateChange={(event) => {

        }} /> */}
      <Button title="Next" onPress={() => navigation.navigate("BottomTab")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100
  },
});

export default SignInScreen;
