import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import Globals from '../globals'

import SignInForm from '../components/SignInForm.jsx'
import SignUpForm from '../components/SignUpForm.jsx'

const ListItemScreen = () => {

  return (
      <ScrollView style={styles.container}>
      {
        !Globals.userLogin ? (
          <View>
            <SignInForm />
          </View>
        ) : (
          <View>
            <SignUpForm />
          </View>
        )
      }
      </ScrollView>
  );
};

export default ListItemScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '10%'
  }
})