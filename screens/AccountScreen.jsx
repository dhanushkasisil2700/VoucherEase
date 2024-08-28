import React, { useState, useRef } from 'react';
import { View, ScrollView} from 'react-native';
import UserAccountScreen from '../components/UserAccountScreen.jsx'

const AccountScreen = () => {

  return (
    <ScrollView>
    <View>
      <UserAccountScreen />
    </View>
    </ScrollView>
  );
};

export default AccountScreen;