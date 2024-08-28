import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
import { useState } from 'react';
import {useNavigation} from '@react-navigation/native'

const SignInForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View style={{width: '90%'}}>

        <Text style={styles.header}>
          WELCOME BACK!
        </Text>
        <Text style={styles.subHeading}>
          Login to your account and find the best deals in the towm.
        </Text>
      </View>

      <View style={{width: '90%'}}>
        <View>
          <Text style={styles.inputLabel}>Your email address:</Text>
          <TextInput style={styles.inputField}
          placeholder='Your email'
          keyboardType='email-address'
          value={email}
          onChangeText={(text) => setEmail(text)}/>
        </View>

        <View>
          <Text style={styles.inputLabel}>Your password:</Text>
          <TextInput style={styles.inputField}
          placeholder='Your password'
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}/>
        </View>
      </View>

      <View style={{width: '90%'}}>

        <TouchableOpacity>
          <Text style={{textAlign: 'right', marginBottom: 20, marginTop: -10}}>
            Forgot your password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white'}} onPress={() => navigation.navigate('UserAccount')}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{marginTop : 10, color: 'red', }}>
        Don't have an account? SignUp
        </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default SignInForm;

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 20,
    marginRight: 20, 
  },

  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: 'red'
  },

  subHeading: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
    color: 'gray'
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },

  inputLabel : {
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
    fontSize: 14,
  },

  inputField: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 10,
  },

  button : {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    color: 'white',
  }
})