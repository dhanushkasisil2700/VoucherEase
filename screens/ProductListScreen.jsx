import React, { useState, useRef } from 'react';
import { View, Text, ScrollView} from 'react-native';

import ProductList from '../components/ProductList.jsx'

const sampleProducts = [
  {
    id: '1',
    name: 'Ceylon Tea',
    price: '500',
    vendor: 'Ceylon Tea Shop',
    image: 'https://www.gstatic.com/webp/gallery/1.webp',
  },
  {
    id: '2',
    name: 'Organic Spices',
    price: '750',
    vendor: 'Spice Heaven',
    image: 'https://www.gstatic.com/webp/gallery/1.webp',
  },
  {
    id: '3',
    name: 'Handmade Soap',
    price: '250',
    vendor: 'Pure Soap Co.',
    image: 'https://www.gstatic.com/webp/gallery/1.webp',
  },
  {
    id: '4',
    name: 'Coconut Oil',
    price: '1200',
    vendor: 'Coco Products',
    image: 'https://www.gstatic.com/webp/gallery/1.webp',
  },
  {
    id: '5',
    name: 'Gemstone Necklace',
    price: '3200',
    vendor: 'Lanka Gems',
    image: 'https://www.gstatic.com/webp/gallery/1.webp',
  },
  {
    id: '6',
    name: 'Silk Saree',
    price: '4500',
    vendor: 'Silk World',
    image: 'https://www.gstatic.com/webp/gallery/1.webp',
  },
];


const ProductListScreen = () => {

  return (
    <ScrollView>
    <View>
      <ProductList products={sampleProducts}/>
    </View>
    </ScrollView>
  );
};

export default ProductListScreen;
