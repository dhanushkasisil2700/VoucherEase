import React from 'react'
import {StyleSheet, View, ScrollView, FlatList } from 'react-native';
import 'react-native-gesture-handler'

import NavigatorS from './navigation/BottomTabs'

// import ContactUs from './components/ContactUs.jsx'
// import FAQ from './components/FAQ.jsx'
// import SignupForm from './components/SignUpForm.jsx'
// import SignInForm from './components/SignInForm.jsx'
// import CategoryPicker from './components/CategoryPicker.jsx'
// import Slideshow from './components/Slideshow.jsx'
// import ProductList from './components/ProductList.jsx'
// import ProductPgae from './components/ProductPage.jsx'
// import UserAccountScreen from './components/UserAccountScreen.jsx'
// import VendorRegistration from './components/VendorRegistration.jsx'
// import VendorDashboard from './components/VendorDashboard.jsx'
// import VendorProductList from './components/VendorProductList.jsx'

const products = [
  { id: '1', name: 'Product 1', image: 'https://placehold.co/600x400', price: 1000, vendor: 'Vendor A' },
  { id: '2', name: 'Product 2', image: 'https://placehold.co/600x400', price: 1500, vendor: 'Vendor B' },
  { id: '3', name: 'Product 3', image: 'https://placehold.co/600x400', price: 800, vendor: 'Vendor C' },
];

export default function App() {
  return (
    // <View style={styles.container}>
    //   <ScrollView>

    //     <FAQ />
    //     <ContactUs />
    //     <SignupForm />
    //     <SignInForm />

    //     <FlatList
    //           data={categories}
    //           numColumns={2}
    //           renderItem={({ item }) => (
    //             <CategoryPicker
    //               image={item.image}
    //               categoryText={item.categoryText}
    //               style={styles.gridItem}
    //             />
    //           )}
    //           keyExtractor={(item) => item.id.toString()}
    //         />

    //         <Slideshow />

    //         <ProductList products={products} />

    //         <ProductPgae />

    //         <UserAccountScreen />

    //         <VendorRegistration />

    //         <VendorDashboard />

    //         <VendorProductList />

    // </ ScrollView>
      <NavigatorS />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 8,
  },
});
