import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import Globals from '../globals'

const VendorRegistration = () => {
  // State variables
  const [firstName, setFirstName] = useState('');
  const [shopName, setShopName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [shopLogo, setShopLogo] = useState(null);

  // Function to handle image selection
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setShopLogo(result.uri);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    Alert.alert('Registration Submitted', 'Your vendor registration has been submitted successfully.');
    // Logic to process and store the registration data would go here
    Globals.vendorRegister(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vendor Registration</Text>

      {/* First Name Input */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      {/* Shop Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Shop Name"
        value={shopName}
        onChangeText={setShopName}
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
        </Picker>
      </View>

      {/* Shop Logo Image Upload */}
      <TouchableOpacity style={styles.logoUploader} onPress={pickImage}>
        {shopLogo ? (
          <Image source={{ uri: shopLogo }} style={styles.logo} />
        ) : (
          <Text style={styles.uploadText}>Upload Shop Logo</Text>
        )}
      </TouchableOpacity>

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
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
  logoUploader: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    height: 150,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  uploadText: {
    fontSize: 16,
    color: '#888',
  },
});

export default VendorRegistration;
