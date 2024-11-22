import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useUser } from '@clerk/clerk-react';

const HomeScreen: React.FC = () => {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {user?.firstName || 'User'}!</Text>
      {/* <Button title="Sign Out" onPress={() => user?.signOut()} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
