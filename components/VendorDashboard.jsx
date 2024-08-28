import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

const VendorDashboard = () => {
  // State variables for the form
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productImages, setProductImages] = useState([]);

  // Function to handle image selection
  const pickImage = async () => {
    if (productImages.length >= 5) {
      Alert.alert('Limit Reached', 'You can only upload up to 5 images.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProductImages([...productImages, result.uri]);
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (!productName || !productPrice || !productCategory || !productQuantity) {
      Alert.alert('Missing Information', 'Please fill out all fields.');
      return;
    }

    // Add logic to handle product creation here

    Alert.alert('Product Created', 'Your product has been created successfully.');
    setProductName('');
    setProductPrice('');
    setProductCategory('');
    setProductQuantity('');
    setProductImages([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Product</Text>

      {/* Product Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />

      {/* Product Price Input */}
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={productPrice}
        keyboardType="numeric"
        onChangeText={setProductPrice}
      />

      {/* Product Category Dropdown */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={productCategory}
          onValueChange={(itemValue) => setProductCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Product Category" value="" />
          <Picker.Item label="Clothing" value="clothing" />
          <Picker.Item label="Electronics" value="electronics" />
          <Picker.Item label="Home Goods" value="home_goods" />
          <Picker.Item label="Beauty Products" value="beauty_products" />
          <Picker.Item label="Food" value="food" />
        </Picker>
      </View>

      {/* Product Quantity Input */}
      <TextInput
        style={styles.input}
        placeholder="Product Quantity"
        value={productQuantity}
        keyboardType="numeric"
        onChangeText={setProductQuantity}
      />

      {/* Image Uploader */}
      <View style={styles.imageUploaderContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadButtonText}>Upload Image</Text>
        </TouchableOpacity>

        <View style={styles.imagePreviewContainer}>
          {productImages.map((imageUri, index) => (
            <Image key={index} source={{ uri: imageUri }} style={styles.imagePreview} />
          ))}
        </View>
      </View>

      {/* Submit Button */}
      <Button title="Create Product" onPress={handleSubmit} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: '100%',
    paddingTop: '10%',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    fontSize: 16,
  },
  imageUploaderContainer: {
    marginBottom: 16,
  },
  uploadButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  imagePreview: {
    width: 60,
    height: 60,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
});

export default VendorDashboard;
