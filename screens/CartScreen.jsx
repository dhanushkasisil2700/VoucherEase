import React, { useState, useRef } from 'react';
import { View, ScrollView, Text} from 'react-native';
import CartComponent from '../components/CartComponent.jsx'

const CartScreen = () => {

  return (
    <ScrollView style={{ flex: 1, padding: 20, marginTop: 15 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Shopping Cart</Text>
      <CartComponent />
    </ScrollView>
  );
};

export default CartScreen;
