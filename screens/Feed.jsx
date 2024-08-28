import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Slideshow from '../components/Slideshow.jsx'
import CategoryPicker from '../components/CategoryPicker.jsx'
import FAQ from '../components/FAQ.jsx'


const categories = [
  {
    id: 1,
    image: require('../assets/CategoryImg/offer1.jpg'),
    categoryText: 'Electronics',
  },
  {
    id: 2,
    image: require('../assets/CategoryImg/offer2.jpg'),
    categoryText: 'Fashion',
  },
  {
    id: 3,
    image: require('../assets/CategoryImg/offer3.jpg'),
    categoryText: 'Home & Kitchen',
  },
  {
    id: 4,
    image: require('../assets/CategoryImg/offer4.jpg'),
    categoryText: 'Beauty & Personal Care',
  },
  {
    id: 5,
    image: require('../assets/CategoryImg/offer4.jpg'),
    categoryText: 'Beauty & Personal Care',
  },
  {
    id: 6,
    image: require('../assets/CategoryImg/offer1.jpg'),
    categoryText: 'Electronics',
  },
];

const Feed = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={{width: '100%'}}>
      
        <View style={{width: '100%'}}>
          <Text style={styles.heading}>WELCOME TO VoucherEase</Text>
          <Text style={styles.heading2}>
          If you need more complex animations or transitions,
          </Text>
          <Text style={styles.heading2}>
           you might consider using libraries If you need more complex  animations or transitions,
           </Text>
           <Text style={styles.heading2}>
           you might consider using libraries.</Text>
        </View>

        <View style={{marginTop: 20}}>
          <Slideshow />
        </View>

        <View>
          <Text style={styles.heading1}>Pick Your Category</Text>
        </View>
          <FlatList
             data={categories}
             numColumns={2}
             renderItem={({ item }) => (
               <TouchableOpacity 
               style={{width: '50%'}}
               onPress = {() => navigation.navigate('ProductList')}>
               <CategoryPicker
                 image={item.image}
                 categoryText={item.categoryText}
                 style={styles.gridItem}
               />
               </TouchableOpacity>
             )}
             keyExtractor={(item) => item.id.toString()}
           />

        <View>
        <View>
          <Text style={styles.heading1}>Frequently Asked Questions</Text>
        </View>
          <FAQ />
        </View>

      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    width: '100%'
  },
  heading: {
    fontSize: 22,
    color: 'red',
    fontWeight: 700,
    marginLeft: 10
  },
  gridItem: {
    color: 'red',
    width: '50%'
  },
  subHeading: {
    marginBottom: 20,
    marginLeft: 10
  },
  heading1: {
    fontSize: 22,
    marginTop: 30,
  },
  heading2: {
    marginLeft: 10,
    marginBottom: -3,
  }
})

export default Feed;
