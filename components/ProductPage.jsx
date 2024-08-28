import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, StyleSheet } from 'react-native';

const ProductPage = () => {
  // Dummy data
  const productImage = "https://www.gstatic.com/webp/gallery/1.webp";
  const productImages = [
    "https://www.gstatic.com/webp/gallery/1.webp",
    "https://www.gstatic.com/webp/gallery/1.webp",
    "https://www.gstatic.com/webp/gallery/1.webp"
  ];
  const productName = "Example Product Name";
  const productPrice = "$99.99";
  const productVendor = "Example Vendor";

  const [quantity, setQuantity] = useState('1');

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${productName} to the cart.`);
    // Add to cart logic goes here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Main Product Image */}
      <Image source={{ uri: productImage }} style={styles.mainImage} />

      {/* Product Image Gallery */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
        {productImages.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.galleryImage} />
        ))}
      </ScrollView>

      {/* Product Information */}
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.productPrice}>{productPrice}</Text>
      <Text style={styles.productVendor}>Sold by: {productVendor}</Text>

      {/* Quantity Selector */}
      <Text style={styles.label}>Select Quantity:</Text>
      <TextInput
        style={styles.quantityInput}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      {/* Add to Cart Button */}
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  mainImage: {
    width: '100%',
    height: 300,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  gallery: {
    marginBottom: 16,
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 8,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: '#888',
    marginBottom: 8,
  },
  productVendor: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    width: 60,
  },
});

export default ProductPage;
