import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([
    // Sample Data
  { id: 1, name: 'Item 1', quantity: 1, price: 100 },
  { id: 2, name: 'Item 2', quantity: 2, price: 200 },
  { id: 3, name: 'Item 3', quantity: 3, price: 300 },
  { id: 4, name: 'Item 4', quantity: 1, price: 400 },
  { id: 5, name: 'Item 5', quantity: 2, price: 500 },
  { id: 6, name: 'Item 6', quantity: 3, price: 600 },
  { id: 7, name: 'Item 7', quantity: 1, price: 700 },
  { id: 8, name: 'Item 8', quantity: 2, price: 800 },
  { id: 9, name: 'Item 9', quantity: 3, price: 900 },
  { id: 10, name: 'Item 10', quantity: 1, price: 1000 },
  ]);

  // Function to update item quantity
  const updateItemQuantity = (id, newQuantity) => {
    // Logic to update item quantity
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (id) => {
    // Logic to remove item
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  // Function to clear the cart
  const clearCart = () => {
    // Logic to clear cart
    setCartItems([]);
  };

  // Function to proceed to checkout
  const proceedToCheckout = () => {
    // Logic to proceed to checkout
    console.log('Proceed to checkout');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => updateItemQuantity(item.id, item.quantity - 1)}>
                <Ionicons name="remove-circle-outline" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateItemQuantity(item.id, item.quantity + 1)}>
                <Ionicons name="add-circle-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
              <Ionicons name="trash-bin-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.actions}>
        <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
          <Ionicons name="trash-bin-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Clear Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkoutButton} onPress={proceedToCheckout}>
          <Ionicons name="checkmark-done-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: '3%',
    marginBottom: '10%'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    marginRight: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff3b30',
    padding: 10,
    borderRadius: 5,
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4cd964',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default CartComponent;