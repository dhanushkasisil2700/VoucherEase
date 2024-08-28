import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SignInForm } from './SignInForm.jsx';
import { SignUpForm } from './SignUpForm.jsx';

const NavigationHub = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleSignInPress = () => {
    setShowSignIn(true);
  };

  const handleSignUpPress = () => {
    setShowSignIn(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our app!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={handleSignInPress} />
        <Button title="Sign Up" onPress={handleSignUpPress} />
      </View>
      {showSignIn ? <SignInForm /> : <SignUpForm />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default NavigationHub;