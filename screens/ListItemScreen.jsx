import React, { useState, useRef } from 'react';
import { View, ScrollView, StyleSheet, Text} from 'react-native';
import VendorRegistration from '../components/VendorRegistration.jsx'

import VendorDashboard from '../components/VendorDashboard.jsx'
import VendorProductList from '../components/VendorProductList.jsx'

import Globals from '../globals'

const ListItemScreen = () => {

  return (
    <ScrollView style={styles.container}>
    {
      Globals.vendorRegister ? (
          <View style={{marginTop: '13%'}}>
            <VendorRegistration />
          </View>
      ) : (
        <View>

          <VendorDashboard />

          <View>
          <Text style={{fontSize : 20, marginTop: 10, marginLeft: 5 }}>
            Your Products in the store : 
          </Text>
        </View>

          <VendorProductList />
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