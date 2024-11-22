import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';


type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Lottie Animation */}
      <LottieView
        source={require('../../assets/Animated/welcome.json')} // Đường dẫn tới file JSON
        autoPlay
        loop
        style={styles.animation}
      />

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to Leolingo</Text>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.btnStarted}>
        <Text style={styles.txtStarted}>Get's Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
