import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const UserAccountScreen = () => {
  // Dummy data for the user's purchase history
  const purchaseHistory = [
    { id: '1', productName: 'Product A', quantity: 2, price: '19.99' },
    { id: '2', productName: 'Product B', quantity: 1, price: '9.99' },
    { id: '3', productName: 'Product C', quantity: 3, price: '29.99' },
  ];

  const renderPurchaseItem = ({ item }) => (
    <View style={styles.purchaseItem}>
      <Text style={styles.purchaseText}>{item.productName}</Text>
      <Text style={styles.purchaseText}>Quantity: {item.quantity}</Text>
      <Text style={styles.purchaseText}>Price: LKR {item.price}</Text>
      {/* Show QR Button for each item */}
      <Button title="Show QR" onPress={() => { /* No functionality required */ }} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Greeting Message */}
      <Text style={styles.greeting}>Hello, User!</Text>

      {/* Purchase History */}
      <Text style={styles.sectionTitle}>Your Purchase History</Text>
      <FlatList
        data={purchaseHistory}
        renderItem={renderPurchaseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.purchaseList}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#666',
  },
  purchaseList: {
    marginBottom: 16,
  },
  purchaseItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  purchaseText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});

export default UserAccountScreen;
