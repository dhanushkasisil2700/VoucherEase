import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';

import SignUpForm from '../components/SignUpForm.jsx'

const SignupScreen = () => {

  return (
      <ScrollView style={styles.container}>
          <View>
            <SignUpForm />
          </View>
      </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '10%'
  }
})