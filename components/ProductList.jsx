import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProductListItem = ({ item }) => (
  <View style={styles.productItem}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>LKR {item.price}</Text>
      <Text style={styles.productVendor}>{item.vendor}</Text>
    </View>
  </View>
);

const ProductList = ({ products }) => { 

  const navigation = useNavigation();

  return (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id}
    numColumns={2}
    renderItem={({ item }) => (
      <TouchableOpacity 
      onPress={() => navigation.navigate('Product')} 
      style={styles.touchable}>
      <View>
      <ProductListItem item={item} />
      </View>
      </TouchableOpacity>
      )}
    contentContainerStyle={styles.productList}
  />
);}

const styles = StyleSheet.create({
  productList: {
    padding: 10,
  },
  productItem: {
    flex: 1,
    maxWidth: '100%', 
    padding: 10,
  },
  productImage: {
    width: '100%', 
    height: 150,
    borderRadius: 10,
  },
  productInfo: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'flex-start', 
    width: '100%', 
    marginTop: 10, 
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    marginTop: 2, 
  },
  productVendor: {
    fontSize: 14,
    color: 'gray',
    marginTop: 2, 
  },
  touchable: {
  flex: 1,
  margin: 5,
  },
});

export default ProductList;
